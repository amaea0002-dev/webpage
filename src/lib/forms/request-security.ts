import { isIP } from 'node:net'

/** Browser submissions must identify their origin. Legacy native forms may
 * use a same-origin Referer, but an explicit invalid Origin never falls back. */
export function isSameSiteSubmission(request: Request, native: boolean): boolean {
  if (request.headers.get('sec-fetch-site') === 'cross-site') return false
  const expected = new URL(request.url).origin
  const origin = request.headers.get('origin')
  if (origin !== null) return origin === expected
  if (!native) return false
  try {
    return new URL(request.headers.get('referer') ?? '').origin === expected
  } catch { return false }
}

/** Vercel overwrites X-Forwarded-For at its edge. Direct/self-hosted servers
 * have no authenticated client-IP signal in a Web Request: use one bounded
 * fallback bucket rather than letting caller-controlled headers reset it.
 * Do not set VERCEL=1 on a self-hosted server. */
export function rateLimitIdentity(request: Request, env: Record<string, string | undefined>): string {
  if (env.VERCEL !== '1') return 'unverified-client'
  const ip = request.headers.get('x-forwarded-for')?.trim() ?? ''
  return isIP(ip) ? ip : 'unverified-client'
}
