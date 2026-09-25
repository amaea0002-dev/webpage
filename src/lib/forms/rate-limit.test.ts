import { test } from 'node:test'
import assert from 'node:assert/strict'
import { sharedRateLimited } from './rate-limit.ts'

const env = { UPSTASH_REDIS_REST_URL: 'https://redis.example.test', UPSTASH_REDIS_REST_TOKEN: 'test-token' }

test('the shared limit permits five requests and rejects the sixth', async () => {
  for (const [count, expected] of [[5, false], [6, true]] as const) {
    const send: typeof fetch = async (_url, init) => {
      const pipeline = JSON.parse(String(init?.body))
      assert.equal(pipeline[0][0], 'INCR')
      assert.match(pipeline[0][1], /^waitlist:127\.0\.0\.1:/)
      assert.equal(pipeline[1][2], '601')
      assert.equal(pipeline[1][3], 'NX')
      return Response.json([{ result: count }, { result: 1 }])
    }
    assert.equal(await sharedRateLimited('waitlist:127.0.0.1', 5, 600_000, env, send), expected)
  }
})

test('missing configuration does not contact a provider', async () => {
  const send: typeof fetch = async () => { throw new Error('must not call') }
  assert.equal(await sharedRateLimited('key', 5, 600_000, {}, send), null)
})

test('provider outages and malformed replies use the local fallback', async () => {
  const replies = [new Response(null, { status: 503 }), Response.json([{ error: 'failure' }]), Response.json([{ result: 1 }, { error: 'expiry failure' }])]
  for (const reply of replies) {
    assert.equal(await sharedRateLimited('key', 5, 600_000, env, async () => reply), null)
  }
  assert.equal(await sharedRateLimited('key', 5, 600_000, env, async () => { throw new Error('timeout') }), null)
})
