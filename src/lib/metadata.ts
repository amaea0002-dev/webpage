import type { Metadata } from 'next'

export const SITE_URL = 'https://amaea.co.uk'
export const SITE_TITLE = 'Amaea — FCA compliance software · Your Peace of Mind.'
export const SITE_DESCRIPTION = 'Compliance software for UK financial planning firms. Bring client records, reviews and supporting evidence together. Register interest in Amaea’s founders programme.'

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title, description, alternates: { canonical: path },
    openGraph: { type: 'website', locale: 'en_GB', siteName: 'Amaea', title, description, url: path, images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Amaea. Your Peace of Mind. Compliance software for UK financial planning firms.' }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image'] },
  }
}
