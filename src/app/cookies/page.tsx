import Link from 'next/link'
import LegalPage from '@/components/LegalPage'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata('Cookie notice · Amaea', 'Cookies, browser storage, theme preferences and how to remove Amaea website data from your browser.', '/cookies')

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie notice." eyebrow="Cookies and browser storage" lastUpdated="3 October 2026">
      <p className="body-large">This notice covers amaea.co.uk. Cookies and similar technologies can store information on your device or read information already stored there. Browser local storage is one of these technologies.</p>

      <h2>1. What this website uses</h2>
      <p>We do not use advertising cookies, visitor analytics or tracking pixels on this website. Its browser-storage feature is a saved light or dark theme preference. Technical request information used to deliver and protect the website is explained in the <Link href="/privacy">privacy notice</Link>.</p>

      <h2>2. Your theme preference</h2>
      <p>When you choose a light or dark theme, the website saves that choice under <code>amaea-theme</code> in your browser’s local storage. It contains the theme name, not your contact details. This website reads it to apply your chosen appearance on later visits; it is not sent to us as an analytics event.</p>
      <p>Local storage does not expire automatically. The preference remains until you replace it with a different choice or remove the saved data. It is used only for the appearance you select.</p>

      <h2>3. Removing the saved preference</h2>
      <p>You can remove the saved theme below. This returns the website to the default light theme. Choosing a theme again saves a new preference.</p>
      <button type="button" className="button" id="clear-saved-theme">Remove saved theme</button>
      <p id="theme-storage-status" role="status" aria-live="polite"></p>
      <p>You can also delete Amaea’s site data in your browser settings or use your browser’s storage controls. If browser storage is blocked, you can still browse the website; the theme may not be remembered between visits.</p>

      <h2>4. Other services</h2>
      <p>The public app sign-in and any external booking service are separate services. If you follow a link to one, its own privacy information and browser-storage arrangements apply. A booking service is not embedded automatically into this website.</p>

      <h2>5. Changes and questions</h2>
      <p>If additional storage or tracking is introduced, this notice and the relevant controls will need to reflect it. Contact <a href="mailto:privacy@amaea.co.uk">privacy@amaea.co.uk</a> or <a href="mailto:hello@amaea.co.uk">hello@amaea.co.uk</a> with questions about the website’s use of browser storage.</p>
    </LegalPage>
  )
}
