import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { SHARE_IMAGE, SHARE_IMAGE_ALT } from '@/lib/metadata'

export const alt = SHARE_IMAGE_ALT
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const image = await readFile(join(process.cwd(), 'public', SHARE_IMAGE))

export default function OpenGraphImage() {
  // Keep the former URL working for already cached link-preview metadata.
  return new Response(new Uint8Array(image), {
    headers: { 'Content-Type': contentType },
  })
}
