// Demo-request handler — POST /api/demo
//
// Vercel serverless function (Node runtime). Forwards a contact-form
// submission as an email to founders@amaea.co.uk via the Resend HTTP API.
// No package install required — uses native fetch.
//
// Env required:
//   RESEND_API_KEY  — Resend account API key (re_...).
// Env optional:
//   DEMO_TO_EMAIL   — override the recipient (default founders@amaea.co.uk).
//                     Comma-separated for multiple recipients.
//   DEMO_FROM_EMAIL — override the verified sender (default Amaea Demo Requests <hello@amaea.co.uk>).

const TO_DEFAULT   = 'founders@amaea.co.uk'
const FROM_DEFAULT = 'Amaea Demo Requests <hello@amaea.co.uk>'

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

  // Vercel parses application/json bodies automatically; multipart/form-data and
  // urlencoded need manual parsing. The contact form sends FormData (multipart),
  // but the frontend can also send JSON — accept both.
  let body = req.body
  if (typeof body === 'string') {
    try { body = JSON.parse(body) } catch { body = {} }
  }
  if (!body || typeof body !== 'object') body = {}

  const firstName   = String(body.first_name   ?? '').trim()
  const lastName    = String(body.last_name    ?? '').trim()
  const email       = String(body.email        ?? '').trim()
  const firm        = String(body.firm         ?? '').trim()
  const role        = String(body.role         ?? '').trim()
  const clientCount = String(body.client_count ?? '').trim()
  const message     = String(body.message      ?? '').trim()

  if (!firstName || !lastName || !email || !firm) {
    return res.status(400).json({ ok: false, error: 'Missing required fields' })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ ok: false, error: 'Invalid email address' })
  }

  const fullName = `${firstName} ${lastName}`.trim()
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
