// Preserve the existing website's shared Upstash limit when configured.
// null tells the caller to use its bounded, in-memory fallback.
export async function sharedRateLimited(
  key: string,
  max: number,
  windowMs: number,
  env: Record<string, string | undefined> = process.env,
  send: typeof fetch = fetch,
): Promise<boolean | null> {
  const url = env.UPSTASH_REDIS_REST_URL
  const token = env.UPSTASH_REDIS_REST_TOKEN
  if (!url || !token) return null

  const bucketKey = `${key}:${Math.floor(Date.now() / windowMs)}`
  try {
    const response = await send(`${url}/pipeline`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      signal: AbortSignal.timeout(800),
      body: JSON.stringify([
        ['INCR', bucketKey],
        ['EXPIRE', bucketKey, String(Math.ceil(windowMs / 1000) + 1), 'NX'],
      ]),
    })
    if (!response.ok) return null
    const result = await response.json()
    const count = result?.[0]?.result
    if (typeof count !== 'number' || result?.[1]?.error) return null
    return count > max
  } catch {
    return null
  }
}
