// Waitlist signup handler — POST /api/waitlist
//
// Vercel serverless function (Node runtime). Captures a signup from
// amaea.co.uk/waitlist and forwards it as an email to founders@amaea.co.uk
// via the Resend HTTP API. Mirrors the demo.js pattern.
//
// Env required:
//   RESEND_API_KEY      — Resend account API key (re_...).
// Env optional:
//   WAITLIST_TO_EMAIL   — override the recipient (default founders@amaea.co.uk).
//                         Comma-separated for multiple recipients.
//   WAITLIST_FROM_EMAIL — override the verified sender
//                         (default Amaea Waitlist <hello@amaea.co.uk>).

const TO_DEFAULT   = 'founders@amaea.co.uk'
const FROM_DEFAULT = 'Amaea Waitlist <hello@amaea.co.uk>'

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

  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  if (!body || typeof body !== 'object') body = {}

  const name        = String(body.name        ?? '').trim()
  const email       = String(body.email       ?? '').trim()
  const firm        = String(body.firm        ?? '').trim()
  const advisers    = String(body.advisers    ?? '').trim()

  if (!name || !email || !firm) {
    return res.status(400).json({ ok: false, error: 'Please fill in your name, email, and firm.' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'That doesn’t look like a valid email address.' })
  }

  const subject = `Waitlist signup — ${name} (${firm})`

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;">
      <h2 style="font-size:18px;color:#17131E;margin:0 0 4px;">New waitlist signup</h2>
      <p style="font-size:13px;color:#9088A3;margin:0 0 20px;">Submitted via amaea.co.uk/waitlist</p>
      <table style="border-collapse:collapse;">
        ${row('Name', name)}
        ${row('Email', email)}
        ${row('Firm', firm)}
        ${row('Adviser count', advisers)}
      </table>
    </div>
  `.trim()

  const text = [
    `New waitlist signup`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Firm: ${firm}`,
    advisers ? `Adviser count: ${advisers}` : null,
  ].filter(Boolean).join('\n')

  const toList = (process.env.WAITLIST_TO_EMAIL ?? TO_DEFAULT)
    .split(',')
    .map(s => s.trim())
    .filter(Boolean)

  const resendBody = {
    from:     process.env.WAITLIST_FROM_EMAIL ?? FROM_DEFAULT,
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
      console.error('Resend waitlist send failed', resendRes.status, detail)
      return res.status(502).json({ ok: false, error: 'Send failed' })
    }
  } catch (err) {
    console.error('Resend waitlist send error', err)
    return res.status(502).json({ ok: false, error: 'Send failed' })
  }

  return res.status(200).json({ ok: true })
}
