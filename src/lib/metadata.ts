import type { Metadata } from 'next'

export const SITE_URL = 'https://amaea.co.uk'
export const SITE_TITLE = 'Amaea | FCA compliance software · Your Peace of Mind.'
export const SITE_DESCRIPTION = 'Every client, every review, every document. Kept against the FCA rule that applies. Compliance software for UK financial planning firms.'
export const SHARE_IMAGE = '/images/amaea-share-handwritten-2026-10-03.png'
export const SHARE_IMAGE_ALT = 'The handwritten Amaea wordmark with your peace of mind on a pale background.'

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const shareTitle = path === '/' ? 'Amaea | Your peace of mind' : title
  return {
    title, description, alternates: { canonical: path },
    openGraph: { type: 'website', locale: 'en_GB', siteName: 'Amaea', title: shareTitle, description, url: path, images: [{ url: SHARE_IMAGE, width: 1200, height: 630, alt: SHARE_IMAGE_ALT }] },
    twitter: { card: 'summary_large_image', title: shareTitle, description, images: [SHARE_IMAGE] },
  }
}
