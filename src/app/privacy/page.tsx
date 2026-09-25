import LegalPage from '@/components/LegalPage'

export const metadata = { title: 'Privacy · Amaea', alternates: { canonical: '/privacy' } }

// Written for what this site does today: it shows pages and takes founders
// programme applications. It says nothing about the platform, because the
// platform has no customers yet — when it does, this notice is replaced by one
// covering it, written from the verified provider facts
// (docs/publication-decisions.md §3).
export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy notice." eyebrow="Legal · UK GDPR / Data Protection Act 2018" lastUpdated="14 September 2026">
      <p className="body-large" style={{ marginBottom: 28 }}>
        This notice covers this website. Amaea is not yet trading and has no customers, so there
        is nothing here about client data held in the platform. When that changes, this notice is
        replaced by one that covers it, and anyone who has contacted us will be told.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>1. Who is responsible</h2>
      <p className="body-large" style={{ marginBottom: 14 }}>
        {/* TODO(Milan): add both founders' full legal names and a postal address for correspondence —
            a controller has to be identifiable, and neither can be taken from the code. */}
        Amaea is a business being built by its two founders, Milan and Hasna, who are jointly
        responsible for the personal data described here. Amaea is not yet incorporated; when it is,
        the company becomes responsible and this notice is updated to say so.
      </p>
      <p className="body-large" style={{ marginBottom: 28 }}>
        Email <a className="font-mono email-link" href="mailto:privacy@amaea.co.uk">privacy@amaea.co.uk</a> about
        anything on this page.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>2. What this site collects</h2>
      <p className="body-large" style={{ marginBottom: 14 }}>
        Only what you type into the application form, and only when you send it:
      </p>
      <ul style={{ marginBottom: 28, paddingLeft: 24 }}>
        <li className="body-large" style={{ marginBottom: 8 }}>Your firm&apos;s name, and your role if you give it</li>
        <li className="body-large" style={{ marginBottom: 8 }}>Your email address</li>
        <li className="body-large" style={{ marginBottom: 8 }}>The size bands you select, and anything you write about your current setup</li>
      </ul>
      <p className="body-large" style={{ marginBottom: 28 }}>
        There is no analytics on this site, no tracking, and no advertising. We do not build a
        profile of you, and nothing you do here is shared with anyone for their own purposes.
        Reading these pages leaves nothing behind except the theme preference described in the{' '}
        <a href="/cookies">cookie notice</a>.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>3. Why, and on what basis</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        We use what you send to reply to you and to discuss whether the founders programme suits
        your firm. That is our legitimate interest in answering an enquiry you chose to make. If you
        would rather we did not keep it, say so and we will delete it.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>4. Who else sees it</h2>
      <p className="body-large" style={{ marginBottom: 14 }}>
        Two providers are involved in this website, and neither uses your data for anything of
        their own:
      </p>
      <ul style={{ marginBottom: 28, paddingLeft: 24 }}>
        <li className="body-large" style={{ marginBottom: 8 }}>
          <strong>Vercel</strong> — hosts this website and serves these pages.
        </li>
        <li className="body-large" style={{ marginBottom: 8 }}>
          <strong>Resend</strong> — delivers your submission to us by email.
        </li>
      </ul>
      <p className="body-large" style={{ marginBottom: 28 }}>
        {/* TODO(Milan): add the processing locations and the signed DPA position for both
            providers once confirmed from the accounts (publication-decisions §3), then say it
            plainly here. Do not describe locations until they are verified. */}
        Your message then sits in our email, which we read. We do not sell it, and we do not send
        it anywhere else.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>5. How long we keep it</h2>
      <p className="body-large" style={{ marginBottom: 28 }}>
        Until the founders programme closes and any conversation with you has ended, or until you
        ask us to delete it — whichever comes first. If we have not spoken within twelve months,
        we delete it.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>6. Your rights</h2>
      <p className="body-large" style={{ marginBottom: 14 }}>
        You can ask for a copy of what we hold about you, ask us to correct it, or ask us to delete
        it. Email <a className="font-mono email-link" href="mailto:privacy@amaea.co.uk">privacy@amaea.co.uk</a> and
        we will act within one month, which is the period the law allows.
      </p>
      <p className="body-large" style={{ marginBottom: 28 }}>
        If you are not satisfied with how we handle it, you can complain to the Information
        Commissioner&apos;s Office at <a href="https://ico.org.uk/make-a-complaint/" rel="noopener noreferrer">ico.org.uk</a>.
        We would rather you told us first, so we can put it right.
      </p>

      <h2 className="h-section" style={{ marginBottom: 16 }}>7. Security problems</h2>
      <p className="body-large">
        If you find a security problem with this site, email{' '}
        <a className="font-mono email-link" href="mailto:security@amaea.co.uk">security@amaea.co.uk</a>. Tell us what
        you found and how to reproduce it, and please give us a chance to fix it before publishing.
      </p>
    </LegalPage>
  )
}
