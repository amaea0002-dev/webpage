import Link from 'next/link'
import LegalPage from '@/components/LegalPage'
import WebsiteOperator from '@/components/WebsiteOperator'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata('Terms of service · Amaea', 'Terms for using the Amaea website, requesting a demo and enquiring about the platform.', '/terms')

export default function TermsPage() {
  return (
    <LegalPage title="Terms of service." eyebrow="Website and service information" lastUpdated="3 October 2026">
      <p className="body-large">These terms explain how you may use amaea.co.uk, its public product walkthroughs and its enquiry forms. Paid access to the Amaea platform is governed by the separate written agreement made with your firm.</p>

      <h2>1. Who operates the website</h2>
      <WebsiteOperator />
      <p>References to “Amaea”, “we”, “us” and “our” in these website terms refer to the operator identified above. References to “you” mean the person visiting the website or making an enquiry.</p>

      <h2>2. Using this website</h2>
      <p>You may browse the website, share links, and use the published information to evaluate Amaea for your firm. Please use the website lawfully and provide accurate information when you contact us. If you enquire on behalf of a firm, you should have authority to make that enquiry.</p>
      <p>You must not introduce malware, attempt unauthorised access, interfere with the website or other visitors, or use forms to send spam, unlawful content or information you are not entitled to disclose.</p>

      <h2>3. Demos, enquiries and subscriptions</h2>
      <p>Booking a demo or registering interest does not create a paid subscription, commit your firm to buying Amaea, or guarantee acceptance into a programme. We will discuss availability, suitability and the arrangements your firm needs before asking you to commit.</p>
      <p>Subscriptions are managed through an agreed contract and invoice. Your firm’s written agreement sets out the service scope, fees, billing period, client allowance, support, renewal, cancellation, liability and any service-level commitments. Website prices and descriptions should be read alongside that agreement.</p>
      <p>A customer data processing agreement and the applicable data handling arrangements must be agreed before client personal information is processed for your firm. These website terms do not replace that agreement or change an existing signed customer contract.</p>

      <h2>4. Compliance information and AI outputs</h2>
      <p>Amaea supports compliance work by qualified financial planning and compliance professionals. Website information, demonstrations, AI answers, findings and draft reports are not legal advice, regulated financial advice or a guarantee of regulatory compliance.</p>
      <p>Your firm remains responsible for deciding which obligations apply, checking the underlying client records and source evidence, and reviewing and signing off advice, findings and reports. Verify AI outputs and regulatory references before relying on them.</p>

      <h2>5. Product walkthroughs and integrations</h2>
      <p>Public walkthroughs use example client records to explain the product. They do not access your firm’s live client records or connect your accounts. Connection availability, provider permissions and the scope of each integration are confirmed during onboarding.</p>
      <p>The public document selector demonstrates the import workflow. Selecting a file there does not upload it to Amaea. Do not use public enquiries or demonstrations to submit real client records, passwords or other sensitive information.</p>

      <h2>6. Content and intellectual property</h2>
      <p>The website design, branding, text and other materials belong to Amaea or their respective owners and licensors. You may view, link to and print reasonable extracts for your firm’s internal evaluation, keeping relevant acknowledgements. Other copying, resale or reuse of Amaea branding requires permission unless permitted by law or an applicable licence.</p>
      <p>Information your firm supplies remains subject to your rights and the rights of the people it relates to. Ownership, permitted processing and confidentiality of customer data are addressed in the customer agreement and data processing agreement.</p>

      <h2>7. Privacy and browser storage</h2>
      <p>Our <Link href="/privacy">privacy notice</Link> explains how website enquiries and technical information are handled. Our <Link href="/cookies">cookie notice</Link> explains the theme preference stored in your browser and how to remove it. Our <Link href="/security">security page</Link> describes the website safeguards and how to report a concern.</p>

      <h2>8. Availability, accuracy and external services</h2>
      <p>We take reasonable care with website information and may update it as the product develops. The website may be temporarily unavailable for maintenance or other operational reasons. Any contractual uptime or support commitment for the platform is set out in your firm’s service agreement.</p>
      <p>Links to a booking provider, app, regulatory source or other external service take you to a separate service. Its own terms and privacy information apply. An external link does not mean we control all of that service’s content or availability.</p>

      <h2>9. Responsibility and liability</h2>
      <p>Please evaluate the product and confirm the requirements important to your firm before entering a service agreement. Website information is intended to support that evaluation. Customer service liability is governed by the applicable written agreement.</p>
      <p>Nothing in these website terms excludes or limits liability for fraud, fraudulent misrepresentation, death or personal injury caused by negligence, or any other liability or legal right that cannot lawfully be excluded or limited.</p>

      <h2>10. Changes to these terms</h2>
      <p>We may update these website terms to reflect changes to the website or the law. The date at the top identifies the current version. Updates to these website terms do not automatically amend a signed customer contract; the change process in that contract applies.</p>

      <h2>11. Governing law</h2>
      <p>These website terms are governed by the law of England and Wales. Disputes about them are subject to the courts of England and Wales, without affecting any mandatory rights you have under applicable law.</p>

      <h2>12. Contact</h2>
      <p>For questions about these terms or a proposed service agreement, email <a href="mailto:hello@amaea.co.uk">hello@amaea.co.uk</a>. For personal information requests, email <a href="mailto:privacy@amaea.co.uk">privacy@amaea.co.uk</a>. Security concerns can be sent to <a href="mailto:security@amaea.co.uk">security@amaea.co.uk</a>.</p>
    </LegalPage>
  )
}
