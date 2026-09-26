import { test } from 'node:test'
import assert from 'node:assert/strict'
import { handleEnquiry } from './handle-enquiry.ts'
import { readLimitedBody, MAX_BODY_BYTES, BodyTooLarge } from './read-body.ts'

const env = { RESEND_API_KEY: 'test-key', ENQUIRY_FROM: 'test@example.test', ENQUIRY_INBOX: 'inbox@example.test' }
const data = { kind: 'application', firm: 'Example & Partners', email: 'test@example.test' }
const base = { env, limited: async () => false, log: () => {}, now: () => Date.UTC(2026, 8, 25) }
function request(body: unknown = data, native = false) {
  return new Request('https://amaea.co.uk/api/enquiries', { method: 'POST', headers: { 'content-type': native ? 'application/x-www-form-urlencoded' : 'application/json', origin: 'https://amaea.co.uk' }, body: native ? new URLSearchParams(body as Record<string, string>) : JSON.stringify(body) })
}

test('registration accepts only firm and email, with no inferred size bands', async () => {
  const response = await handleEnquiry(request(), { ...base, send: async (_url, init) => {
    const payload = JSON.parse(String(init?.body))
    assert.equal(payload.reply_to, data.email)
    assert.doesNotMatch(payload.text, /advisers:|clients:|user agent:|x-forwarded/)
    return Response.json({ id: 'provider-id' })
  } })
  assert.equal(response.status, 200)
  assert.match((await response.json()).reference, /^AM-[A-F0-9]{12}$/)
})

test('retrying the same enquiry reuses provider idempotency; changes get a new key', async () => {
  const keys: string[] = []
  const payloads: string[] = []
  const send: typeof fetch = async (_url, init) => {
    keys.push(new Headers(init?.headers).get('idempotency-key')!)
    payloads.push(String(init?.body))
    return Response.json({ id: 'provider-id' })
  }
  await handleEnquiry(request(), { ...base, send })
  await handleEnquiry(request(), { ...base, send, now: () => Date.UTC(2026, 8, 26) })
  await handleEnquiry(request({ ...data, setup: 'Different message' }), { ...base, send })
  assert.equal(keys[0], keys[1])
  assert.equal(payloads[0], payloads[1])
  assert.notEqual(keys[1], keys[2])
})

test('native POST returns accessible HTML, preserves and escapes input on failure', async () => {
  const response = await handleEnquiry(request({ ...data, firm: '<script>alert(1)</script>', email: 'wrong', setup: '</textarea><script>x</script>' }, true), { ...base, send: async () => { throw new Error('must not send') } })
  assert.equal(response.status, 400)
  assert.equal(response.headers.get('cache-control'), 'no-store')
  assert.match(response.headers.get('content-type')!, /text\/html/)
  const html = await response.text()
  assert.match(html, /method="post" action="\/api\/enquiries"/)
  assert.match(html, /&lt;script&gt;alert\(1\)&lt;\/script&gt;/)
  assert.match(html, /&lt;\/textarea&gt;/)
  assert.doesNotMatch(html, /<script>/)
  assert.match(html, /name="email"[^>]*autofocus/)
})

test('native success shows a reference with no personal data in a redirect URL', async () => {
  const response = await handleEnquiry(request(data, true), { ...base, send: async () => Response.json({ id: 'id' }) })
  assert.equal(response.status, 200)
  assert.equal(response.headers.get('location'), null)
  const html = await response.text()
  assert.match(html, /Your interest is registered/)
  assert.match(html, /AM-[A-F0-9]{12}/)
  assert.doesNotMatch(html, /test@example.test/)
})

test('provider rejection, timeout and malformed success never become confirmation', async () => {
  const responses: Array<typeof fetch> = [async () => new Response('private provider detail', { status: 403 }), async () => { throw new Error('timeout') }, async () => Response.json({})]
  for (const send of responses) {
    const response = await handleEnquiry(request(), { ...base, send })
    assert.equal(response.status, 502)
    const body = await response.text()
    assert.doesNotMatch(body, /private provider detail|"ok":true/)
  }
})

test('inactive forms, honeypots, rate limits and cross-site requests never send mail', async () => {
  const send: typeof fetch = async () => { throw new Error('unexpected provider call') }
  const unavailable = await handleEnquiry(request({ kind: 'newsletter', email: data.email }), { ...base, send })
  assert.equal(unavailable.status, 400)
  const trapped = await handleEnquiry(request({ ...data, company: 'spam' }), { ...base, send })
  assert.equal(trapped.status, 200)
  const limited = await handleEnquiry(request(), { ...base, send, limited: async () => true })
  assert.equal(limited.status, 429)
  assert.equal(limited.headers.get('retry-after'), '600')
  const crossSite = request()
  crossSite.headers.set('origin', 'https://another.example')
  assert.equal((await handleEnquiry(crossSite, { ...base, send })).status, 403)
})

test('missing mail configuration fails visibly and logs no contact details', async () => {
  const events: unknown[] = []
  const response = await handleEnquiry(request(), { ...base, env: {}, log: event => events.push(event) })
  assert.equal(response.status, 503)
  assert.doesNotMatch(JSON.stringify(events), /test@example|Example & Partners/)
})

test('actual byte limit rejects a chunked oversized body even with a false header', async () => {
  for (const headers of [{}, { 'content-length': '1' }]) {
    const body = new ReadableStream<Uint8Array>({ start(controller) { controller.enqueue(new Uint8Array(MAX_BODY_BYTES)); controller.enqueue(new Uint8Array(1)); controller.close() } })
    const req = new Request('https://example.test', { method: 'POST', headers, body, duplex: 'half' } as RequestInit)
    await assert.rejects(readLimitedBody(req), BodyTooLarge)
  }
  const response = await handleEnquiry(new Request('https://amaea.co.uk/api/enquiries', { method: 'POST', headers: { 'content-type': 'application/json' }, body: 'x'.repeat(MAX_BODY_BYTES + 1) }), base)
  assert.equal(response.status, 413)
})
