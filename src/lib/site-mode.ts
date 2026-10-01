// Public routes in the updated website. Unreviewed legacy marketing pages remain gated.

export const RELEASE_ROUTES = ['/', '/about', '/features', '/pricing', '/contact', '/waitlist', '/privacy', '/cookies'] as const

export function isFullSite(mode = process.env.NEXT_PUBLIC_SITE_MODE): boolean {
  return mode === 'full'
}

/** Is this path public in the current mode? Paths are compared without a trailing slash. */
export function isPublishedRoute(pathname: string, mode = process.env.NEXT_PUBLIC_SITE_MODE): boolean {
  if (isFullSite(mode)) return true
  const path = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return (RELEASE_ROUTES as readonly string[]).includes(path)
}
