import assert from 'node:assert/strict'
const base = new URL(process.argv[2] ?? 'https://amaea.co.uk')
if (!['https:', 'http:'].includes(base.protocol)) throw new Error('Use an HTTP(S) website URL')
const local = ['localhost', '127.0.0.1'].includes(base.hostname)
if (process.argv.includes('--wait')) {
  let ready = false
  for (let attempt = 0; attempt < 30; attempt++) {
    try { if ((await fetch(base, { signal: AbortSignal.timeout(2_000) })).ok) { ready = true; break } } catch {}
    await new Promise(resolve => setTimeout(resolve, 1_000))
  }
  assert.ok(ready, 'Website did not start within 30 seconds')
}
const results = []
for (const path of ['/', '/waitlist', '/privacy', '/cookies']) {
  const response = await fetch(new URL(path, base), { signal: AbortSignal.timeout(15_000) })
  assert.equal(response.status, 200, `${path} must be available`)
  assert.ok(response.headers.get('content-security-policy'), `${path} must have a CSP`)
  const html = await response.text()
  assert.match(html, /rel="canonical"/, `${path} canonical missing`)
  assert.match(html, /property="og:image"/, `${path} social image missing`)
  if (path === '/waitlist') {
    assert.match(html, /method="post"/, 'Registration must use POST without JavaScript')
    assert.match(html, /action="\/api\/enquiries"/, 'Native registration endpoint missing')
  }
  results.push({ path, status: response.status })
}
const image = await fetch(new URL('/opengraph-image', base))
assert.equal(image.status, 200)
assert.match(image.headers.get('content-type') ?? '', /image\/png/)
const health = await fetch(new URL('/api/health', base))
assert.equal(health.status, local ? 503 : 200, 'Registration configuration readiness')
const unpublished = await fetch(new URL('/pricing', base))
assert.equal(unpublished.status, 404, 'Unreleased pages must remain unpublished')
console.log(JSON.stringify({ base: base.origin, results, socialImage: 'ok', registrationConfigured: health.ok, unpublishedRoutes: 'ok' }, null, 2))
