import { createHash } from 'node:crypto'
import { deliverySettings } from './delivery.ts'
import { sharedRateLimited } from './rate-limit.ts'
import { BodyTooLarge, readLimitedBody } from './read-body.ts'
import { nativeResponse } from './native-response.ts'
import { fieldsFor, isEnquiryKind, looksAutomated, validateEnquiry, type EnquiryFields } from './validate.ts'

const WINDOW = 10 * 60_000
const recent = new Map<string, number[]>()
function localRateLimited(key: string, now: number): boolean {
  for (const [entry, hits] of recent) if (hits.every(time => now - time >= WINDOW)) recent.delete(entry)
  if (!recent.has(key) && recent.size >= 5_000) return true
  const hits = (recent.get(key) ?? []).filter(time => now - time < WINDOW)
  if (hits.length >= 5) return true
  recent.set(key, [...hits, now])
  return false
}
type Dependencies = {
  env?: Record<string, string | undefined>
  send?: typeof fetch
  now?: () => number
  limited?: (key: string) => Promise<boolean>
  log?: (event: Record<string, string | number>) => void
}

export async function handleEnquiry(request: Request, dependencies: Dependencies = {}): Promise<Response> {
  const env = dependencies.env ?? process.env
  const send = dependencies.send ?? fetch
  const now = dependencies.now ?? Date.now
  const log = dependencies.log ?? (event => console.info(JSON.stringify(event)))
  const type = request.headers.get('content-type')?.split(';')[0].trim().toLowerCase()
  const native = type === 'application/x-www-form-urlencoded'
  let values: EnquiryFields = {}
  const reply = (status: number, error: string, fields: Record<string, string> = {}, reference?: string) => {
    if (native) return nativeResponse(status, error, values, fields, reference)
    return Response.json(status < 300 ? { ok: true, reference } : { error, ...(Object.keys(fields).length ? { fields } : {}) }, {
      status, headers: { 'Cache-Control': 'no-store', ...(status === 429 ? { 'Retry-After': '600' } : {}) },
    })
  }
  if (!native && type !== 'application/json') return reply(415, 'This form could not be read. Please return to the registration page.')
  const origin = request.headers.get('origin')
  if ((origin && origin !== new URL(request.url).origin) || request.headers.get('sec-fetch-site') === 'cross-site') return reply(403, 'Please send the form from this website.')
  let body: Record<string, unknown>
  try {
    const text = await readLimitedBody(request)
    const parsed: unknown = native ? Object.fromEntries(new URLSearchParams(text)) : JSON.parse(text)
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return reply(400, 'We could not read that submission.')
    body = parsed as Record<string, unknown>
  } catch (error) {
    return error instanceof BodyTooLarge
      ? reply(413, 'That message is too long. Please keep your setup description under 4,000 characters.')
      : reply(400, 'We could not read that submission. Please try again.')
  }
  const kind = body.kind
  if (!isEnquiryKind(kind) || (kind !== 'application' && env.NEXT_PUBLIC_SITE_MODE !== 'full')) return reply(400, 'That form is not available.')
  values = Object.fromEntries(fieldsFor(kind).filter(field => typeof body[field.name] === 'string').map(field => [field.name, String(body[field.name])]))
  if (looksAutomated(body)) return reply(200, 'Thank you. Your interest is registered.')
  const result = validateEnquiry(kind, body)
  if (!result.ok) return reply(400, 'Please check the highlighted fields. Your details have been kept below.', result.errors)
  const ip = (request.headers.get('x-forwarded-for') ?? 'unknown').split(',')[0].trim()
  const key = `website-enquiries:${createHash('sha256').update(ip).digest('hex')}`
  const isLimited = dependencies.limited ? await dependencies.limited(key) : (await sharedRateLimited(key, 5, WINDOW, env, send)) ?? localRateLimited(key, now())
  if (isLimited) return reply(429, 'You have sent several messages recently. Please try again in ten minutes, or email hello@amaea.co.uk.')
  const { apiKey, from, inbox } = deliverySettings(kind, env)
  if (!apiKey || !from || !inbox) {
    log({ event: 'enquiry.unavailable', reason: 'configuration' })
    return reply(503, 'The form is temporarily unavailable. Your details have been kept. Please try again later or email hello@amaea.co.uk.')
  }
  // Identical retries use the same key throughout Resend’s 24-hour retention window, including midnight.
  const fingerprint = createHash('sha256').update(JSON.stringify([kind, result.fields])).digest('hex')
  const reference = `AM-${fingerprint.slice(0, 12).toUpperCase()}`
  const label = { application: 'Founders programme interest', contact: 'Contact form', newsletter: 'Newsletter signup' }[kind]
  try {
    const response = await send('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json', 'Idempotency-Key': `website/${fingerprint}` },
      signal: AbortSignal.timeout(10_000),
      body: JSON.stringify({ from, to: inbox.split(',').map(address => address.trim()).filter(Boolean), subject: `${label}: ${result.fields.firm ?? result.fields.email}`,
        text: [`${label}, amaea.co.uk`, `Reference: ${reference}`, '', ...Object.entries(result.fields).map(([name, value]) => `${name}: ${value}`)].join('\n'), reply_to: result.fields.email }),
    })
    if (!response.ok) {
      log({ event: 'enquiry.delivery_failed', status: response.status, reference })
      return reply(502, 'We could not send your registration. Your details have been kept. Please retry or email hello@amaea.co.uk.')
    }
    const delivery = await response.json() as { id?: unknown }
    if (typeof delivery.id !== 'string' || !delivery.id) throw new Error('MissingDeliveryId')
    // Never log the message, email, firm, IP, user agent or provider error body.
    log({ event: 'enquiry.accepted', reference, providerId: delivery.id })
    return reply(200, 'Thank you. Your interest is registered.', {}, reference)
  } catch {
    log({ event: 'enquiry.delivery_uncertain', reference })
    return reply(502, 'We could not confirm delivery. Your details have been kept. Retrying is safe, or you can email hello@amaea.co.uk.')
  }
}
