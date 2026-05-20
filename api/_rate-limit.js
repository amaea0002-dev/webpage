/**
 * Distributed rate limiter for amaea-website's Vercel functions.
 *
 * Mirror of amaea-app/src/lib/rate-limit/upstash.ts — same algorithm
 * (fixed-window via Upstash Redis REST), same fail-open behaviour, no
 * SDK dependency so this site stays npm-free.
 *
 * Env vars (Upstash Vercel Marketplace integration adds them):
 *   UPSTASH_REDIS_REST_URL
 *   UPSTASH_REDIS_REST_TOKEN
 *
 * Audit reference: SECURITY-AUDIT-2026-05-19 CRITICAL-WEB-3.
 */

const UPSTASH_URL   = process.env.UPSTASH_REDIS_REST_URL
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN

/**
 * @param {string} key       Caller-supplied namespaced key, e.g. 'waitlist:1.2.3.4'
 * @param {number} max       Allowed requests per window
 * @param {number} windowMs  Window length in ms
 * @returns {Promise<{ ok: boolean, configured: boolean }>}
 */
async function rateLimit(key, max, windowMs) {
  if (!UPSTASH_URL || !UPSTASH_TOKEN) {
    return { ok: true, configured: false }
  }

  const bucket    = Math.floor(Date.now() / windowMs)
  const bucketKey = `${key}:${bucket}`
  const ttlSec    = Math.ceil(windowMs / 1000) + 1

  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 800)

    const res = await fetch(`${UPSTASH_URL}/pipeline`, {
      method:  'POST',
      headers: {
        Authorization:  `Bearer ${UPSTASH_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify([
        ['INCR',   bucketKey],
        ['EXPIRE', bucketKey, String(ttlSec), 'NX'],
      ]),
      signal: controller.signal,
    })
    clearTimeout(timer)

    if (!res.ok) {
      console.warn(`[rate-limit] Upstash HTTP ${res.status}; failing open.`)
      return { ok: true, configured: true }
    }

    const body = await res.json()
    const count = body[0] && typeof body[0].result === 'number' ? body[0].result : 0
    return { ok: count <= max, configured: true }
  } catch (err) {
    console.warn('[rate-limit] Upstash request failed; failing open:', err.message)
    return { ok: true, configured: true }
  }
}

module.exports = { rateLimit }
