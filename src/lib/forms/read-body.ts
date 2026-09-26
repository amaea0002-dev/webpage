export const MAX_BODY_BYTES = 32 * 1024
export class BodyTooLarge extends Error {}

/** Bound actual bytes, including requests with no Content-Length header. */
export async function readLimitedBody(request: Request): Promise<string> {
  if (Number(request.headers.get('content-length')) > MAX_BODY_BYTES) throw new BodyTooLarge()
  if (!request.body) return ''
  const reader = request.body.getReader()
  const chunks: Uint8Array[] = []
  let size = 0
  try {
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      size += value.byteLength
      if (size > MAX_BODY_BYTES) {
        await reader.cancel()
        throw new BodyTooLarge()
      }
      chunks.push(value)
    }
  } finally { reader.releaseLock() }
  const body = new Uint8Array(size)
  let offset = 0
  for (const chunk of chunks) { body.set(chunk, offset); offset += chunk.byteLength }
  return new TextDecoder('utf-8', { fatal: true }).decode(body)
}
