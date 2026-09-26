// Run with: pnpm test  (node --test, no test framework needed)
import { test } from 'node:test'
import assert from 'node:assert/strict'
import { validateEnquiry, looksAutomated, LIMITS } from './validate.ts'

test('a complete application passes and comes back trimmed', () => {
  const result = validateEnquiry('application', {
    firm: '  Example IFA  ', fcaReference: '123456', advisers: '6–10', clients: '100–249',
    role: 'Compliance Officer', email: ' person@example.co.uk ', setup: 'Intelliflo and spreadsheets',
  })
  assert.equal(result.ok, true)
  if (!result.ok) return
  assert.equal(result.fields.firm, 'Example IFA')
  assert.equal(result.fields.email, 'person@example.co.uk')
})

test('required fields are named in plain language', () => {
  const result = validateEnquiry('application', { fcaReference: '123456' })
  assert.equal(result.ok, false)
  if (result.ok) return
  assert.equal(result.errors.firm, 'Firm name is required.')
  assert.equal(result.errors.email, 'Email is required.')
  assert.ok(!('fcaReference' in result.errors), 'FCA reference is optional')
})

test('a bad email is rejected, a real one is not', () => {
  for (const email of ['not-an-email', 'a@b', 'two words@example.com', 'a@b.c d']) {
    const r = validateEnquiry('newsletter', { email })
    assert.equal(r.ok, false, `${email} should be rejected`)
  }
  for (const email of ['a@b.co', "o'brien@example.co.uk", 'first.last+tag@sub.example.com']) {
    const r = validateEnquiry('newsletter', { email })
    assert.equal(r.ok, true, `${email} should be accepted`)
  }
})

test('over-long values are refused rather than truncated', () => {
  const long = validateEnquiry('contact', {
    name: 'A'.repeat(LIMITS.short + 1), email: 'a@b.co', subject: 'Press', message: 'hello',
  })
  assert.equal(long.ok, false)
  if (long.ok) return
  assert.match(long.errors.name, /too long/)

  const big = validateEnquiry('contact', {
    name: 'A', email: 'a@b.co', subject: 'Press', message: 'x'.repeat(LIMITS.message + 1),
  })
  assert.equal(big.ok, false)
})

test('a value outside the offered options is refused', () => {
  const r = validateEnquiry('application', {
    firm: 'F', advisers: 'one thousand', clients: '100–249', email: 'a@b.co',
  })
  assert.equal(r.ok, false)
  if (r.ok) return
  assert.match(r.errors.advisers, /Choose one of/)
})

test('newlines are stripped from single-line fields but kept in the message', () => {
  const r = validateEnquiry('contact', {
    name: 'Real Name\nBcc: someone@example.com', email: 'a@b.co', subject: 'Press',
    message: 'line one\nline two',
  })
  assert.equal(r.ok, true)
  if (!r.ok) return
  assert.equal(r.fields.name, 'Real Name Bcc: someone@example.com')
  assert.equal(r.fields.message, 'line one\nline two')
})

test('unknown fields are dropped, not passed through', () => {
  const r = validateEnquiry('newsletter', { email: 'a@b.co', isAdmin: 'true', extra: 'x' })
  assert.equal(r.ok, true)
  if (!r.ok) return
  assert.deepEqual(Object.keys(r.fields), ['email'])
})

test('the honeypot catches a bot and nothing else', () => {
  assert.equal(looksAutomated({ company: 'Acme' }), true)
  assert.equal(looksAutomated({ company: '  ' }), false)
  assert.equal(looksAutomated({}), false)
  // A submission is never judged by how fast it arrived: a suspected bot is
  // answered with a plain success, so a false positive would silently drop a
  // real message.
  assert.equal(looksAutomated({ startedAt: Date.now() }), false)
})
