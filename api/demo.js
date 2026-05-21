// Demo-request handler — POST /api/demo
//
// Vercel serverless function (Node runtime). Forwards a contact-form
// submission as an email to founders@amaea.co.uk via the Resend HTTP API.
// No package install required — uses native fetch.
//
// Defences against form spam:
//   - Honeypot field "company_url" — hidden in HTML, bots fill it, real users don't
//   - Best-effort per-IP rate limit (5 submissions per 10 min on a warm instance)
//   - Cloudflare Bot Fight Mode is the primary edge defence (configured in CF)
//
// Env required:
//   RESEND_API_KEY  — Resend account API key (re_...).
// Env optional:
//   DEMO_TO_EMAIL   — override the recipient (default founders@amaea.co.uk).
//                     Comma-separated for multiple recipients.
//   DEMO_FROM_EMAIL — override the verified sender (default Amaea Demo Requests <hello@amaea.co.uk>).

const TO_DEFAULT   = 'founders@amaea.co.uk'
const FROM_DEFAULT = 'Amaea Demo Requests <hello@amaea.co.uk>'

const { rateLimit } = require('./_rate-limit')

const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX       = 5

// In-memory fallback for when Upstash env vars aren't configured.
const ipHits = new Map()

function clientIp(req) {
  const fwd = req.headers['x-forwarded-for']
  if (typeof fwd === 'string' && fwd.length) return fwd.split(',')[0].trim()
  return req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown'
}

async function rateLimited(ip) {
  const r = await rateLimit(`demo:${ip}`, RATE_MAX, RATE_WINDOW_MS)
  if (r.configured) return !r.ok
  const now = Date.now()
  const hits = (ipHits.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS)
  if (hits.length >= RATE_MAX) {
    ipHits.set(ip, hits)
    return true
  }
  hits.push(now)
  ipHits.set(ip, hits)
  return false
}

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function row(label, value) {
  const v = (value ?? '').toString().trim()
  if (!v) return ''
  return `<tr><td style="padding:6px 12px 6px 0;color:#9088A3;font-size:13px;vertical-align:top;">${escapeHtml(label)}</td><td style="padding:6px 0;color:#17131E;font-size:14px;">${escapeHtml(v)}</td></tr>`
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY missing')
    return res.status(500).json({ ok: false, error: 'Server misconfigured' })
  }

  const ip = clientIp(req)
  if (await rateLimited(ip)) {
    return res.status(429).json({ ok: false, error: 'Too many submissions. Please try again later.' })
  }

  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  if (!body || typeof body !== 'object') body = {}

  // Honeypot — real users leave this empty. Silent 200 to avoid signalling.
  if (String(body.company_url ?? '').trim()) {
    return res.status(200).json({ ok: true })
  }

  // Form was simplified from first_name+last_name to a single `name`
  // field 2026-05-21. Fall back to the legacy fields so any in-flight
  // requests from a stale client still parse.
  const legacyFirst = String(body.first_name ?? '').trim()
  const legacyLast  = String(body.last_name  ?? '').trim()
  const name        = String(body.name       ?? '').trim() ||
                      `${legacyFirst} ${legacyLast}`.trim()
  const email       = String(body.email        ?? '').trim()
  const firm        = String(body.firm         ?? '').trim()
  const role        = String(body.role         ?? '').trim()
  const clientCount = String(body.client_count ?? '').trim()
  const message     = String(body.message      ?? '').trim()

  if (!name || !email || !firm) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email address' })
  }

  const fullName = name
  const subject  = `Demo request — ${fullName} (${firm})`

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;">
      <h2 style="font-size:18px;color:#17131E;margin:0 0 4px;">New demo request</h2>
      <p style="font-size:13px;color:#9088A3;margin:0 0 20px;">Submitted via amaea.co.uk/contact</p>
      <table style="border-collapse:collapse;">
        ${row('Name', fullName)}
        ${row('Email', email)}
        ${row('Firm', firm)}
        ${row('Role', role)}
        ${row('Client count', clientCount)}
        ${row('Message', message)}
      </table>
    </div>
  `.trim()

  const text = [
    `New demo request`,
    ``,
    `Name: ${fullName}`,
    `Email: ${email}`,
    `Firm: ${firm}`,
    role        ? `Role: ${role}`                 : null,
    clientCount ? `Client count: ${clientCount}`  : null,
    message     ? `\nMessage:\n${message}`        : null,
  ].filter(Boolean).join('\n')

  const toList = (process.env.DEMO_TO_EMAIL ?? TO_DEFAULT)
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)

  const resendBody = {
    from:     process.env.DEMO_FROM_EMAIL ?? FROM_DEFAULT,
    to:       toList,
    reply_to: email,
    subject,
    html,
    text,
  }

  try {
    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type':  'application/json',
      },
      body: JSON.stringify(resendBody),
    })

    if (!resendRes.ok) {
      const detail = await resendRes.text().catch(() => '')
      console.error('Resend send failed', resendRes.status, detail)
      return res.status(502).json({ ok: false, error: 'Email send failed' })
    }
  } catch (err) {
    console.error('Resend send error', err)
    return res.status(502).json({ ok: false, error: 'Email send failed' })
  }

  return res.status(200).json({ ok: true })
}
