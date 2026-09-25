import { test } from 'node:test'
import assert from 'node:assert/strict'
import { deliverySettings } from './delivery.ts'

test('the existing project mail settings survive the R2 migration', () => {
  for (const [kind, prefix] of [['application', 'WAITLIST'], ['contact', 'DEMO'], ['newsletter', 'NEWSLETTER']] as const) {
    const actual = deliverySettings(kind, {
      RESEND_API_KEY: 'test-key',
      [`${prefix}_FROM_EMAIL`]: 'sender@example.test',
      [`${prefix}_TO_EMAIL`]: 'one@example.test,two@example.test',
    })
    assert.deepEqual(actual, { apiKey: 'test-key', from: 'sender@example.test', inbox: 'one@example.test,two@example.test' })
  }
})

test('explicit R2 settings override legacy addresses', () => {
  const actual = deliverySettings('application', {
    ENQUIRY_FROM: 'new-sender@example.test', ENQUIRY_INBOX: 'new-inbox@example.test',
    WAITLIST_FROM_EMAIL: 'old-sender@example.test', WAITLIST_TO_EMAIL: 'old-inbox@example.test',
  })
  assert.equal(actual.from, 'new-sender@example.test')
  assert.equal(actual.inbox, 'new-inbox@example.test')
  assert.equal(actual.apiKey, undefined)
})

test('key-only configuration retains the original sender and inbox defaults', () => {
  assert.deepEqual(deliverySettings('application', { RESEND_API_KEY: 'test-key' }), {
    apiKey: 'test-key', from: 'Amaea Waitlist <hello@amaea.co.uk>', inbox: 'founders@amaea.co.uk',
  })
})
