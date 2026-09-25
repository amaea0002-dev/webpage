// Which pages are public.
//
// The full twenty-route site carries claims that are not yet substantiated —
// integrations, automation, security posture, prices — and a privacy notice
// that cannot be finished until the company exists and the provider facts are
// confirmed (docs/publication-decisions.md). Until then only the recruitment
// release is public: the proposition, the application, and the notices that
// describe what this site itself does.
//
// The rest of the site stays in the repo, corrected and audited, and goes
// public by setting NEXT_PUBLIC_SITE_MODE=full — one variable, no code change.
//
// The default is the recruitment release, deliberately: an accidental deploy
// publishes less than intended, never more.

export const RELEASE_ROUTES = ['/', '/waitlist', '/privacy', '/cookies'] as const

export function isFullSite(mode = process.env.NEXT_PUBLIC_SITE_MODE): boolean {
  return mode === 'full'
}

/** Is this path public in the current mode? Paths are compared without a trailing slash. */
export function isPublishedRoute(pathname: string, mode = process.env.NEXT_PUBLIC_SITE_MODE): boolean {
  if (isFullSite(mode)) return true
  const path = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return (RELEASE_ROUTES as readonly string[]).includes(path)
}
