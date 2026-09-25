import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/api/', '/preview-original'] },
    sitemap: 'https://amaea.co.uk/sitemap.xml',
  }
}
