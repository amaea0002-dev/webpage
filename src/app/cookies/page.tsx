import LegalPage from '@/components/LegalPage'

export const metadata = { title: 'Cookies · Amaea', alternates: { canonical: '/cookies' } }

// Short because the truth is short: one local-storage key for the theme, no
// cookies, no analytics. Verified against the source — the only storage call
// on this site is the theme toggle in SiteHeader and the matching script in
// layout.tsx. If anything is ever added, this page changes first.
export default function CookiesPage() {
  return (
    <LegalPage title="Cookie notice." eyebrow="Legal · PECR / UK GDPR" lastUpdated="14 September 2026">
      <h2 className="h-section" style={{ marginBottom: 16 }}>1. This site sets no cookies</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        No cookies, no analytics, no tracking pixels, and nothing from an advertising network.
        That is why there is no consent banner: there is nothing to consent to.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>2. One thing is stored</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        If you switch between the light and dark theme, your choice is saved in your browser&apos;s
        local storage under <code>amaea-theme</code>, so the site looks the same next time. It
        never leaves your device and it tells us nothing — we cannot see it.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>3. Clearing it</h2>
      <p className="body-large">
        Clear site data for this site in your browser settings and the theme preference goes with
        it. Nothing else of ours is stored to clear.
      </p>
    </LegalPage>
  )
}
