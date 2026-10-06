import { test } from 'node:test'
import assert from 'node:assert/strict'
import { isSameSiteSubmission, rateLimitIdentity } from './request-security.ts'
const url = 'https://amaea.co.uk/api/enquiries'
const request = (headers: Record<string, string>) => new Request(url, { method: 'POST', headers })

test('JSON requires an exact Origin; Referer cannot replace it', () => {
  assert.equal(isSameSiteSubmission(request({ origin: 'https://amaea.co.uk' }), false), true)
  for (const headers of [{}, { referer: 'https://amaea.co.uk/waitlist' }, { origin: 'null' }, { origin: 'https://evil.example.test' }, { origin: 'https://amaea.co.uk.evil.example.test' }, { origin: 'https://amaea.co.uk', 'sec-fetch-site': 'cross-site' }] as Record<string, string>[])
    assert.equal(isSameSiteSubmission(request(headers), false), false)
})
test('native forms retain same-site Referer support without accepting a null/foreign Origin', () => {
  assert.equal(isSameSiteSubmission(request({ referer: 'https://amaea.co.uk/waitlist' }), true), true)
  for (const headers of [{}, { referer: 'invalid' }, { referer: 'https://evil.example.test' }, { origin: 'null', referer: 'https://amaea.co.uk/waitlist' }, { origin: 'https://evil.example.test', referer: 'https://amaea.co.uk/waitlist' }] as Record<string, string>[])
    assert.equal(isSameSiteSubmission(request(headers), true), false)
})
test('rotated client headers cannot create new buckets outside the trusted Vercel runtime', () => {
  for (const ip of ['192.0.2.1', '192.0.2.2', '2001:db8::1'])
    assert.equal(rateLimitIdentity(request({ 'x-forwarded-for': ip, 'x-real-ip': ip, 'x-vercel-forwarded-for': ip }), {}), 'unverified-client')
})
test('trusted edge addresses retain per-client limits; missing, malformed and multi-value headers share a bounded fallback', () => {
  assert.equal(rateLimitIdentity(request({ 'x-forwarded-for': '192.0.2.1' }), { VERCEL: '1' }), '192.0.2.1')
  assert.equal(rateLimitIdentity(request({ 'x-forwarded-for': '2001:db8::1' }), { VERCEL: '1' }), '2001:db8::1')
  for (const ip of ['', 'unknown', '192.0.2.1, 192.0.2.2'])
    assert.equal(rateLimitIdentity(request({ 'x-forwarded-for': ip }), { VERCEL: '1' }), 'unverified-client')
})
