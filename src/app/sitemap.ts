import type { MetadataRoute } from 'next'
import { RELEASE_ROUTES } from '@/lib/site-mode'

export default function sitemap(): MetadataRoute.Sitemap {
  return RELEASE_ROUTES.map(path => ({ url: `https://amaea.co.uk${path === '/' ? '' : path}` }))
}
