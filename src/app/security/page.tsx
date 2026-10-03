import Link from 'next/link'
import LegalPage from '@/components/LegalPage'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata('Security and data handling · Amaea', 'Website safeguards, platform access controls, hosting and how to report a security concern to Amaea.', '/security')

export default function SecurityPage() {
  return (
    <LegalPage title="Security and data handling." eyebrow="Trust and security" lastUpdated="3 October 2026">
      <p className="body-large">Protecting information is part of how Amaea is built and operated. This page explains the safeguards on amaea.co.uk and the platform controls relevant to a firm’s review.</p>

      <h2>1. The website and your client information</h2>
      <p>The public website provides product information, walkthroughs and enquiries. It does not provide access to your firm’s client records. The document selector in a walkthrough keeps the selected file on your device and does not upload it. Please do not include real client details, account passwords or documents in public enquiries.</p>
      <p>Client information in the app is handled under the arrangements agreed with your firm. Our <Link href="/privacy">website privacy notice</Link> covers information provided through this website and our enquiry correspondence.</p>

      <h2>2. Secure connections and browser protections</h2>
      <p>The website uses HTTPS. Its responses include a transport-security policy that directs compatible browsers to use secure connections, and browser security headers that restrict how the page can be embedded, how content is loaded and how browser features are used.</p>
      <p>These safeguards help reduce common web risks. They work alongside application checks and ongoing maintenance; they are not a guarantee that every security risk has been eliminated.</p>

      <h2>3. Enquiry safeguards</h2>
      <p>Enquiry submissions are checked for valid fields and size, cross-site submissions and repeated requests. Automated spam indicators and rate limits help protect the form from abuse. Enquiries are delivered to the Amaea team’s inbox through the email provider.</p>
      <p>Application delivery logs record a reference, delivery identifier and status rather than the submitted message, email address or firm name. Our hosting provider separately handles technical network and security information. More detail is in the <Link href="/privacy">privacy notice</Link>.</p>

      <h2>4. Platform access and firm separation</h2>
      <p>The app includes authenticated access, firm-scoped access checks and database row-level security to restrict records to the relevant firm. Automated integration checks exercise cross-firm reads and writes, including document embeddings. These checks support ongoing security review and do not replace independent assurance.</p>
      <p>Integration credentials are encrypted before storage using AES-256-GCM. Access to customer data, user permissions and the applicable processing arrangements should be reviewed with your firm during onboarding.</p>

      <h2 id="hosting">5. Hosting, providers and data locations</h2>
      <p>The website uses Vercel for hosting, Resend for enquiry-email delivery and Google Workspace for team correspondence. The app uses Supabase for database, authentication and document storage, Anthropic for AI processing, and Voyage for embeddings.</p>
      <p>Provider processing may take place outside the UK. For example, Resend states that email content and delivery records are stored in the United States. The website does not claim that all information remains in the UK or EU. Our <Link href="/privacy">privacy notice</Link> links to the relevant website-provider processing information.</p>
      <p>Ask us about the hosting regions, sub-processors, international-transfer safeguards and AI-processing arrangements applicable to your firm’s proposed service. These should be considered before client information is supplied.</p>

      <h2>6. Due diligence and assurance</h2>
      <p>Discuss the evidence your firm needs, including access controls, data handling, backup and recovery arrangements, incident response, export and deletion. Service levels and customer commitments belong in the written service agreement and data processing agreement.</p>
      <p>This website does not publish an independent security certification or penetration-test attestation for Amaea. Automated checks and a provider’s certifications should not be treated as a certification held by Amaea.</p>

      <h2>7. Reporting a security concern</h2>
      <p>Email <a href="mailto:security@amaea.co.uk">security@amaea.co.uk</a> or <a href="mailto:hello@amaea.co.uk">hello@amaea.co.uk</a>. Include the affected URL, a description and steps to reproduce the issue if it is safe to do so. Avoid real client information, passwords or unnecessary personal details.</p>
      <p>If a report involves sensitive evidence, contact us first to arrange an appropriate way to share it. Please do not access another person’s records or disrupt the service while investigating.</p>
    </LegalPage>
  )
}
