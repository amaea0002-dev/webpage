// Keeps the unreleased pages off the public site (see lib/site-mode).
//
// A page that is merely unlinked is still public to anyone with the URL, and
// these pages carry claims that are not yet substantiated. So an unreleased
// route answers 404 — the same as a page that does not exist, which is what
// it is as far as the public is concerned.
//
// Next 16 renamed the middleware convention to `proxy`.

import { NextResponse, type NextRequest } from 'next/server'
import { isPublishedRoute } from '@/lib/site-mode'

export default function proxy(request: NextRequest) {
  if (isPublishedRoute(request.nextUrl.pathname)) return NextResponse.next()

  // Rewrite to a path that does not exist, so Next renders the site's own
  // not-found page with a 404 rather than a bare body.
  return NextResponse.rewrite(new URL('/_unreleased', request.url), { status: 404 })
}

export const config = {
  // Pages only: the enquiry route, assets and metadata files are untouched.
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|svg|webp|ico|woff2?)$).*)'],
}
