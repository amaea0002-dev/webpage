import { fieldsFor, type EnquiryFields } from './validate.ts'

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]!)
}

/** Complete POST fallback: never put enquiry details into a redirect URL. */
export function nativeResponse(status: number, message: string, fields: EnquiryFields = {}, errors: Record<string, string> = {}, reference?: string): Response {
  const success = status >= 200 && status < 300
  const firstError = Object.keys(errors)[0]
  const controls = fieldsFor('application').map(spec => {
    const id = `application-${spec.name}`
    const value = escapeHtml(fields[spec.name] ?? '')
    const attrs = `id="${id}" name="${spec.name}" ${spec.required ? 'required' : ''} ${spec.name === firstError ? 'autofocus' : ''} ${errors[spec.name] ? `aria-invalid="true" aria-describedby="${id}-error"` : ''}`
    const control = spec.oneOf
      ? `<select ${attrs}><option value="">Prefer not to say</option>${spec.oneOf.map(option => `<option${fields[spec.name] === option ? ' selected' : ''}>${escapeHtml(option)}</option>`).join('')}</select>`
      : spec.name === 'setup'
        ? `<textarea ${attrs} maxlength="${spec.max}">${value}</textarea>`
        : `<input ${attrs} type="${spec.email ? 'email' : 'text'}" maxlength="${spec.max}" value="${value}" autocomplete="${spec.email ? 'email' : spec.name === 'firm' ? 'organization' : 'off'}">`
    return `<div class="field"><label for="${id}">${escapeHtml(spec.label)}${spec.required ? ' (required)' : ' (optional)'}</label>${control}${errors[spec.name] ? `<p class="error" id="${id}-error">${escapeHtml(errors[spec.name])}</p>` : ''}</div>`
  }).join('')
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${success ? 'Interest received' : 'Check your registration'} · Amaea</title><link rel="icon" href="/icon.png"><style>
  :root{color-scheme:light dark;--bg:#EDEAED;--surface:#fff;--ink:#241c22;--plum:#371936;--border:#776b79;--error:#8f2d2d}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.6 system-ui,sans-serif}main{max-width:680px;margin:auto;padding:48px 24px}a{color:var(--plum);text-underline-offset:4px}h1{font-size:2.2rem;line-height:1.15}.field{display:grid;gap:6px;margin:22px 0}input,textarea,select,button{font:inherit;padding:12px;border:1px solid var(--border);border-radius:8px;max-width:100%;width:100%;background:var(--surface);color:var(--ink)}textarea{min-height:130px}button{width:auto;background:var(--plum);color:var(--bg);cursor:pointer}.error{color:var(--error);margin:0}*:focus-visible{outline:3px solid var(--plum);outline-offset:4px}.notice{padding:16px;border:1px solid var(--border);border-radius:8px}.trap{position:absolute;left:-9999px;width:1px;height:1px;overflow:hidden}
  @media(prefers-color-scheme:dark){:root{--bg:#26122a;--surface:#371936;--ink:#fbf4f9;--plum:#e9d6e7;--border:#a18da3;--error:#ffb4b4}}
  </style></head><body><main><a href="/">Amaea · Your Peace of Mind.</a><h1>${success ? 'Your interest is registered.' : 'Let’s check your registration.'}</h1><p class="notice" role="status">${escapeHtml(message)}</p>${success ? `<p>We’ll use your details to follow up about the founders programme. Registering commits you to nothing.</p>${reference ? `<p>Reference: <strong>${escapeHtml(reference)}</strong></p>` : ''}<p><a href="/">Back to Amaea</a></p>` : `<form method="post" action="/api/enquiries"><input type="hidden" name="kind" value="application">${controls}<div class="trap" aria-hidden="true"><input name="company" tabindex="-1" autocomplete="off"></div><button type="submit">Register your interest</button></form>`}<p>Need a hand? <a href="mailto:hello@amaea.co.uk">hello@amaea.co.uk</a></p><p><a href="/privacy">Privacy notice</a></p></main></body></html>`
  return new Response(html, { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex', ...(status === 429 ? { 'Retry-After': '600' } : {}) } })
}
