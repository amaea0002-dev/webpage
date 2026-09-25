/**
 * The public forms post here: the waitlist application, the contact form and
 * the newsletter signup.
 *
 * Delivery is email, via Resend's REST API (no SDK — one fetch). The email IS
 * the record: this site has no database, so if the send fails the visitor is
 * told it failed. A form that says "thank you" while dropping the message is
 * worse than one that isn't wired up at all.
 *
 * Configuration:
 *   RESEND_API_KEY   server-side key
 *   ENQUIRY_FROM     optional override of the existing website's sender
 *   ENQUIRY_INBOX    optional override of the existing website's inbox
 * Legacy WAITLIST/DEMO/NEWSLETTER mail settings and defaults are supported.
 * The sender domain must be verified in Resend. Without a key, return 503.
 *
 * Abuse: a honeypot and the existing project's Upstash rate limiter, with a
 * bounded per-instance fallback when the shared service is unavailable.
 */

import { NextResponse } from 'next/server'
import { deliverySettings } from '@/lib/forms/delivery'
import { sharedRateLimited } from '@/lib/forms/rate-limit'
import { validateEnquiry, looksAutomated, isEnquiryKind, type EnquiryKind, type EnquiryFields } from '@/lib/forms/validate'

export const dynamic = 'force-dynamic'
export const maxDuration = 15

const MAX_BODY_BYTES     = 32 * 1024
const RATE_LIMIT_WINDOW  = 10 * 60_000
const RATE_LIMIT_MAX     = 5

const recent = new Map<string, number[]>()

function rateLimited(ip: string, now = Date.now()): boolean {
  const hits = (recent.get(ip) ?? []).filter(t => now - t < RATE_LIMIT_WINDOW)
  hits.push(now)
  recent.set(ip, hits)
  if (recent.size > 5_000) recent.clear()   // bounded: this is a speed bump, not a store
  return hits.length > RATE_LIMIT_MAX
}

const SUBJECTS: Record<EnquiryKind, string> = {
  application: 'Founders programme interest',
  contact:     'Contact form',
  newsletter:  'Newsletter signup',
}

// Plain text, and every value escaped into it — the values are untrusted.
function emailBody(kind: EnquiryKind, fields: EnquiryFields, meta: { receivedAt: string; userAgent: string }): string {
  const lines = Object.entries(fields).map(([name, value]) => `${name}: ${value}`)
  return [
    `${SUBJECTS[kind]} — amaea.co.uk`,
    '',
    ...lines,
    '',
    `received: ${meta.receivedAt}`,
    `user agent: ${meta.userAgent}`,
  ].join('\n')
}

export async function POST(request: Request) {
  if (request.headers.get('content-type')?.includes('application/json') !== true) {
    return NextResponse.json({ error: 'Send JSON.' }, { status: 415 })
  }
  const length = Number(request.headers.get('content-length') ?? 0)
  if (length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: 'That message is too long to send.' }, { status: 413 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json() as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: 'We could not read that submission.' }, { status: 400 })
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'We could not read that submission.' }, { status: 400 })
  }

  const kind = body.kind
  if (!isEnquiryKind(kind)) {
    return NextResponse.json({ error: 'Unknown form.' }, { status: 400 })
  }

  // Answer a bot exactly as we answer a person: no feedback to tune against.
  if (looksAutomated(body)) {
    return NextResponse.json({ ok: true })
  }

  const ip = (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'unknown'
  const prefix = { application: 'waitlist', contact: 'demo', newsletter: 'newsletter' }[kind]
  const sharedLimit = await sharedRateLimited(`${prefix}:${ip}`, RATE_LIMIT_MAX, RATE_LIMIT_WINDOW)
  if (sharedLimit ?? rateLimited(ip)) {
    return NextResponse.json(
      { error: 'That is a few messages in a short time. Please try again in a few minutes, or email hello@amaea.co.uk.' },
      { status: 429 },
    )
  }

  const result = validateEnquiry(kind, body)
  if (!result.ok) {
    return NextResponse.json({ error: 'Please check the highlighted fields.', fields: result.errors }, { status: 400 })
  }

  const { apiKey, from, inbox } = deliverySettings(kind)
  if (!apiKey || !from || !inbox) {
    console.error('[enquiries] email delivery is not configured')
    return NextResponse.json(
      { error: 'The form is not accepting messages yet. Please email hello@amaea.co.uk instead.' },
      { status: 503 },
    )
  }

  const text = emailBody(kind, result.fields, {
    receivedAt: new Date().toISOString(),
    userAgent:  (request.headers.get('user-agent') ?? 'unknown').slice(0, 200),
  })

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method:  'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      signal:  AbortSignal.timeout(10_000),
      body: JSON.stringify({
        from,
        to:       inbox.split(',').map(a => a.trim()).filter(Boolean),
        subject:  `${SUBJECTS[kind]}: ${result.fields.firm ?? result.fields.email}`,
        text,
        reply_to: result.fields.email,
      }),
    })

    if (!res.ok) {
      // Never the provider's response text — it can quote the submission.
      console.error(`[enquiries] delivery failed: ${res.status}`)
      return NextResponse.json(
        { error: 'We could not send that just now. Please try again, or email hello@amaea.co.uk.' },
        { status: 502 },
      )
    }
  } catch (err) {
    console.error(`[enquiries] delivery error: ${err instanceof Error ? err.name : 'unknown'}`)
    return NextResponse.json(
      { error: 'We could not send that just now. Please try again, or email hello@amaea.co.uk.' },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
