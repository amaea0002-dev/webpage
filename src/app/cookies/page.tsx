import Link from 'next/link'
import LegalPage from '@/components/LegalPage'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata('Cookie notice · Amaea', 'Cookies, browser storage, theme preferences and how to remove Amaea website data from your browser.', '/cookies')

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie notice." eyebrow="Cookies and browser storage" lastUpdated="6 October 2026">
      <p className="body-large">This notice covers amaea.co.uk. Cookies and similar technologies can store information on your device or read information already stored there. Browser local storage is one of these technologies.</p>

      <h2>1. What this website uses</h2>
      <p>Amaea does not add advertising cookies, visitor analytics or tracking pixels. The optional embedded Calendly service has its own cookie controls, described below. Our optional browser-storage feature remembers your light or dark theme. It is off by default. Technical request information used to deliver and protect the website is explained in the <Link href="/privacy">privacy notice</Link>.</p>

      <h2>2. Your theme preference</h2>
      <p>You can switch between light and dark mode without saving a preference. To remember that choice on later visits, turn on “Remember my theme” below. This gives permission to save and read your theme choice on this browser.</p>
      <p>When you opt in, we store <code>amaea-theme-preference</code> in local storage. It contains only the theme name, not your contact details. It is used only for your chosen appearance and is not sent to us as an analytics event. It does not expire automatically; it remains until you switch remembering off or clear the site data.</p>
      <section className="cookie-settings-card" id="cookie-settings" aria-labelledby="cookie-settings-heading" tabIndex={-1}>
        <span className="eyebrow">Your choice</span>
        <h2 id="cookie-settings-heading">Cookie settings</h2>
        <p id="remember-theme-description">Optional appearance storage. Off by default. Turn it on to save your theme for future visits; turn it off to remove that saved preference. Your current appearance will stay the same.</p>
        <label className="cookie-theme-choice">
          <span>Remember my theme</span>
          <input type="checkbox" role="switch" id="remember-theme" aria-describedby="remember-theme-description" disabled />
        </label>
        <noscript><p>JavaScript is needed to change this setting. Without it, this website does not save a new theme preference. You can remove existing site data in your browser settings.</p></noscript>
        <p id="theme-storage-status" role="status" aria-live="polite"></p>
      </section>

      <h2>3. Removing the saved preference</h2>
      <p>Switch “Remember my theme” off above, or use the button below. This removes the saved preference without changing your current appearance. Theme switching will not save anything again unless you turn remembering back on.</p>
      <button type="button" className="button" id="clear-saved-theme">Remove saved theme</button>
      <p>You can also delete Amaea’s site data in your browser settings or use your browser’s storage controls. If browser storage is blocked, you can still browse the website; the theme may not be remembered between visits.</p>

      <h2>4. Other services</h2>
      <p>The public app sign-in is a separate service with its own privacy and storage arrangements. On the demo page, Calendly stays unloaded until you choose “Load booking calendar”. Loading it connects your browser to Calendly, which processes technical information and uses its own cookies. We do not hide Calendly’s cookie banner. Use Calendly’s Cookie settings to decline optional cookies or manage your choices; if those controls are unavailable in the embed, open the separate booking link. You can also open the booking page separately.</p>

      <p>Select “Hide calendar” to remove the embedded calendar. This does not delete cookies Calendly has already set. Manage these using Calendly’s Cookie settings or your browser controls. We do not save the choice to load the calendar for later visits.</p>
      <p>The optional plan guide uses answers only in memory on the current page. It does not store them in cookies or local storage and does not send them to Amaea or Calendly. <a href="https://calendly.com/privacy" rel="noreferrer">Read Calendly’s privacy notice</a>.</p>

      <h2>5. Changes and questions</h2>
      <p>If additional storage or tracking is introduced, this notice and the relevant controls will be updated. Technologies requiring consent will remain off until you agree to their use. Contact <a href="mailto:privacy@amaea.co.uk">privacy@amaea.co.uk</a> or <a href="mailto:hello@amaea.co.uk">hello@amaea.co.uk</a> with questions about the website’s use of browser storage.</p>
    </LegalPage>
  )
}
