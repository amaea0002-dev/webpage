import { pageMetadata } from '@/lib/metadata'
import LegalPage from '@/components/LegalPage'

export const metadata = pageMetadata('Cookie notice · Amaea', 'The browser storage used by Amaea’s website, including your light or dark theme preference.', '/cookies')

// Short because the truth is short: one local-storage key for the theme, no
// cookies, no analytics. Verified against the source, the only storage call
// on this site is the theme toggle in SiteHeader and the matching script in
// layout.tsx. If anything is ever added, this page changes first.
export default function CookiesPage() {
  return (
    <LegalPage title="Cookie notice." eyebrow="Legal · PECR / UK GDPR" lastUpdated="25 September 2026">
      <h2 className="h-section" style={{ marginBottom: 16 }}>1. No advertising or analytics cookies</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        We do not use advertising cookies, visitor analytics or tracking pixels. The preference
        stored by this website is described below. Technical information used to serve and protect
        the website is explained in our privacy notice.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>2. One thing is stored</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        If you switch between the light and dark theme, your choice is saved in your browser&apos;s
        local storage under <code>amaea-theme</code>, so the site looks the same next time. It
        is read by this website in your browser and is not sent to us as an analytics event.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>3. Clearing it</h2>
      <p className="body-large">
        Clear site data for this site in your browser settings and the theme preference goes with
        it. Your browser controls how site data is stored and cleared.
      </p>
    </LegalPage>
  )
}
