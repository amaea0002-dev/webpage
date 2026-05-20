// Newsletter signup handler — POST /api/newsletter
//
// Vercel serverless function (Node runtime). Captures a blog/newsletter
// signup from amaea.co.uk/blog and forwards it to founders@amaea.co.uk
// via the Resend HTTP API. Replaces the prior formsubmit.co integration.
//
// Defences against form spam:
//   - Honeypot field "company_url" — hidden in HTML, bots fill it, real users don't
//   - Best-effort per-IP rate limit (5 submissions per 10 min on a warm instance)
//
// Env required:
//   RESEND_API_KEY        — Resend account API key (re_...).
// Env optional:
//   NEWSLETTER_TO_EMAIL   — override the recipient (default founders@amaea.co.uk).
//   NEWSLETTER_FROM_EMAIL — override the verified sender
//                           (default Amaea Newsletter <hello@amaea.co.uk>).

const TO_DEFAULT   = 'founders@amaea.co.uk'
const FROM_DEFAULT = 'Amaea Newsletter <hello@amaea.co.uk>'

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
  const r = await rateLimit(`newsletter:${ip}`, RATE_MAX, RATE_WINDOW_MS)
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

  // Honeypot — silent 200 to avoid telling the bot it was detected.
  if (String(body.company_url ?? '').trim()) {
    return res.status(200).json({ ok: true })
  }

  const email = String(body.email ?? '').trim()

  if (!email) {
    return res.status(400).json({ ok: false, error: 'Please enter your email.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'That doesn’t look like a valid email address.' })
  }

  const subject = `Newsletter signup — ${email}`
  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;">
      <h2 style="font-size:18px;color:#17131E;margin:0 0 4px;">New newsletter signup</h2>
      <p style="font-size:13px;color:#9088A3;margin:0 0 20px;">Submitted via amaea.co.uk/blog</p>
      <table style="border-collapse:collapse;">
        <tr><td style="padding:6px 12px 6px 0;color:#9088A3;font-size:13px;">Email</td><td style="padding:6px 0;color:#17131E;font-size:14px;">${escapeHtml(email)}</td></tr>
      </table>
    </div>
  `.trim()
  const text = `New newsletter signup\n\nEmail: ${email}`

  const toList = (process.env.NEWSLETTER_TO_EMAIL ?? TO_DEFAULT)
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)

  const resendBody = {
    from:     process.env.NEWSLETTER_FROM_EMAIL ?? FROM_DEFAULT,
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
      console.error('Resend newsletter send failed', resendRes.status, detail)
      return res.status(502).json({ ok: false, error: 'Send failed' })
    }
  } catch (err) {
    console.error('Resend newsletter send error', err)
    return res.status(502).json({ ok: false, error: 'Send failed' })
  }

  return res.status(200).json({ ok: true })
}
