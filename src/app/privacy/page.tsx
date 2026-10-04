import { pageMetadata } from '@/lib/metadata'
import LegalPage from '@/components/LegalPage'
import WebsiteOperator from '@/components/WebsiteOperator'

export const metadata = pageMetadata('Privacy notice · Amaea', 'How Amaea handles website enquiries, technical request information and your data protection rights.', '/privacy')

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy notice." eyebrow="Website privacy" lastUpdated="4 October 2026">
      <p className="body-large">This notice explains how we use personal information when you visit amaea.co.uk, register interest in the founders programme or contact us about a demo, the product or a security concern. It does not cover client information in the Amaea app. Please do not put client names, documents or sensitive information in the registration form.</p>
      <h2 className="h-section">1. Who is responsible</h2>
      <WebsiteOperator />
      <p className="body-large">For questions about how Amaea handles the website enquiries described here, contact <a href="mailto:privacy@amaea.co.uk">privacy@amaea.co.uk</a>.</p>
      <h2 className="h-section">2. Information we use</h2>
      <ul>
        <li>Your firm’s name and email address when you register interest.</li>
        <li>Any optional information you provide: your role, firm’s FCA reference, adviser and client size bands, and a description of your current work or tools.</li>
        <li>Technical request information used to serve and protect the site, such as IP address, browser information, requested page, time and response status. Our hosting provider processes request and security logs.</li>
        <li>Your name, contact details and the contents of correspondence if you email the team directly.</li>
        <li>A short-lived identifier derived from your network address to limit repeated form submissions. It is used to apply a ten-minute rate-limit window and kept temporarily in server memory until expired entries are cleaned up or the process ends.</li>
        <li>A registration reference, delivery identifier and delivery/failure events so we can investigate problems. We do not put your message or contact details into our application logs.</li>
      </ul>
      <p className="body-large">The site does not use advertising pixels or visitor analytics. Your browser stores a light/dark theme preference only if you turn on “Remember my theme” in <a href="/cookies#cookie-settings">Cookie settings</a>. It is off by default.</p>
      <h2 className="h-section">3. Why we use it</h2>
      <p className="body-large">We use your enquiry to reply, discuss whether the founders programme suits your firm, and follow up about applications. Our lawful basis is our legitimate interest in responding to a request you chose to make. We use technical information for our legitimate interests in operating a reliable website, preventing abuse and diagnosing delivery problems.</p>
      <p className="body-large">Registering interest does not subscribe you to an unrelated marketing newsletter or commit you to buying anything. We do not make decisions with legal or similarly significant effects about you through this website.</p>
      <p className="body-large">Fields marked as required are needed to send and respond to your registration. Optional fields may be left blank. Without an email address we cannot reply to you through that form.</p>
      <h2 className="h-section">4. Providers and international processing</h2>
      <ul>
        <li><strong>Vercel</strong> hosts the website, runs the form handler and provides network and abuse protection.</li>
        <li><strong>Resend</strong> sends your registration to our founders inbox and keeps email delivery records.</li>
        <li><strong>Google Workspace</strong> receives email for amaea.co.uk. Your enquiry and any follow-up correspondence are handled in our email service.</li>
      </ul>
      <p className="body-large">These services may process information outside the UK. Resend states that it stores email content and delivery records in the United States. Its data processing terms include Standard Contractual Clauses and the UK Addendum. Vercel and Google describe their international processing and transfer safeguards in their data processing terms.</p>
      <p className="body-large">You can read <a href="https://vercel.com/legal/dpa" rel="noreferrer">Vercel’s data processing terms</a>, <a href="https://resend.com/security/gdpr" rel="noreferrer">Resend’s processing and retention information</a>, and <a href="https://workspace.google.com/terms/dpa_terms.html" rel="noreferrer">Google Workspace’s data processing terms</a>. Contact us for information about the safeguards relevant to your enquiry. We do not sell your information.</p>
      <p className="body-large">If you follow a link to an external booking service, it also receives the information you provide there under its own privacy information. A booking service is not automatically embedded when you visit this website.</p>
      <h2 className="h-section">5. Retention</h2>
      <p className="body-large">We keep enquiry correspondence until the founders programme has closed and our conversation has ended, or delete it sooner if you ask and there is no legal reason to retain it. If we have not been in contact for twelve months, we delete the enquiry. This timetable applies to our inbox records; providers also have technical log and backup retention periods under their service terms.</p>
      <p className="body-large">Resend publishes a 30-day email/log retention period for its standard plans. Website security and delivery logs are kept for the limited period available in our hosting plan and are used for operations, not advertising. If you opt in to remembering your theme, the saved preference stays in your browser until you switch remembering off or clear the site data.</p>
      <h2 className="h-section">6. Your rights</h2>
      <p className="body-large">You can ask to access or correct your information, request its deletion, restrict its use where the right applies, or object to processing based on legitimate interests. You can tell us at any time that you no longer want founders-programme follow-up. Other rights, including portability, depend on the lawful basis and circumstances.</p>
      <p className="body-large">Email <a href="mailto:privacy@amaea.co.uk">privacy@amaea.co.uk</a>. We normally respond within one month. If we need information to confirm your identity or an extension permitted by law, we will explain why.</p>
      <p className="body-large">You can complain directly to the <a href="https://ico.org.uk/make-a-complaint/" rel="noreferrer">Information Commissioner’s Office</a>. You do not have to contact us first.</p>
      <h3>Your right to object</h3>
      <p className="body-large">You can object to our use of your information where we rely on legitimate interests. You can also ask us to stop founders-programme or demo follow-up at any time by replying to our email or contacting privacy@amaea.co.uk. We will consider other objections in line with the applicable law.</p>
      <h2 className="h-section">7. Contact and security concerns</h2>
      <p className="body-large">For website security concerns, contact <a href="mailto:security@amaea.co.uk">security@amaea.co.uk</a> or <a href="mailto:hello@amaea.co.uk">hello@amaea.co.uk</a>. Please describe the issue without sending real client information.</p>
    </LegalPage>
  )
}
