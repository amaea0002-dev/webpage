import { ContactForm } from '@/components/forms/ContactForm'

export const metadata = { title: 'Contact · Amaea' }

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 14 }}>Get in touch</div>
          <h1 className="hero-display" style={{ maxWidth: '22ch', marginBottom: 32 }}>
            Best by <em>email.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '40rem' }}>
            We&apos;re a small team. We answer everything ourselves; we don&apos;t farm out
            customer email to a tier-one rep who can&apos;t answer your question.
          </p>
        </div>
      </section>

      <section className="section-tight" style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="container-wide">
          <div className="contact-channels">
            {/* TODO(Milan): verify contact inboxes and ownership before publication. */}
            <Channel label="General" addr="hello@amaea.co.uk"   note="For everything that doesn&apos;t fit a category below." />
            <Channel label="Sales"   addr="hasna@amaea.co.uk"   note="Founders-programme applications, demo bookings, pricing questions. Hasna replies directly." />
            <Channel label="Product" addr="milan@amaea.co.uk"   note="Integration requests, technical depth, security questions. Milan replies directly." />
            <Channel label="Press"   addr="press@amaea.co.uk"   note="Quotes, comments, contribution to compliance journalism." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-wide contact-layout">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Or send a message</div>
            <h2 className="h-section" style={{ marginBottom: 32 }}>The form, if you prefer it.</h2>
            <ContactForm />
          </div>
          <aside style={{ paddingTop: 8 }}>
            <div className="marginal" style={{ marginBottom: 24 }}>
              {/* TODO(Milan): verify company location, ownership, funding and customer claims before publishing them. */}
              Contact the team to discuss your firm’s needs.
            </div>
            <div className="marginal" style={{ marginBottom: 24 }}>
              Office hours: Monday–Friday, 09:00–18:00 BST. We answer email outside hours but
              not always within hours.
            </div>
            <div className="marginal">
              For security disclosures, please email <a className="font-mono email-link" href="mailto:security@amaea.co.uk">security@amaea.co.uk</a>.
              {/* TODO(Milan): confirm the security disclosure process, inbox and response commitments. */}
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

function Channel({ label, addr, note }: { label: string; addr: string; note: string }) {
  return (
    <div style={{ padding: '28px 24px', borderRight: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div className="eyebrow" style={{ marginBottom: 12, color: 'var(--plum)' }}>{label}</div>
      <a className="email-link" href={`mailto:${addr}`} style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.95rem', marginBottom: 10 }}>{addr}</a>
      <div className="body" style={{ fontSize: 13, color: 'var(--ink3)', lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: note }} />
    </div>
  )
}
