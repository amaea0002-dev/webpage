import Link from 'next/link'
import { NewsletterForm } from '@/components/forms/NewsletterForm'

export const metadata = { title: 'Notes · Amaea' }

// TODO(Milan): supply approved, sourced articles and real destination routes before publication.
const NOTES = [
  { d: 'Draft topic', tag: 'Engineering', t: 'Testing firm data isolation', body: 'An explanation of row-level security and the access checks in CI.' },
  { d: 'Draft topic', tag: 'Product', t: 'The core IFA document types', body: 'How document extraction supports a qualified person’s review.' },
]

export default function BlogPage() {
  return (
    <>
      <section className="section">
        <div className="container-wide">
          <div className="article-meta" style={{ marginBottom: 28 }}>
            <span style={{ color: 'var(--plum)' }}>Notes</span>
            <span className="sep">·</span>
            <span>Long-form writing</span>
            <span className="sep">·</span>
            <span>Draft topics</span>
          </div>
          <h1 className="hero-display" style={{ maxWidth: '20ch', marginBottom: 32 }}>
            Notes from the <em>compliance edge.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '42rem' }}>
            Long-form writing on FCA compliance, the platform&apos;s engineering, and the
            UK IFA landscape. Published when there&apos;s something worth saying, not on a content calendar.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="container-prose">
          <div className="spec-list">
            {NOTES.map((n, i) => (
              <Link key={i} href="#" className="spec-row" style={{ display: 'grid', gridTemplateColumns: '8rem 1fr', gap: 24, cursor: 'pointer', transition: 'background 120ms ease' }}>
                <div className="spec-dt">
                  <div>{n.d}</div>
                  <div style={{ marginTop: 6, color: 'var(--plum)' }}>{n.tag}</div>
                </div>
                <div className="spec-dd">
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', letterSpacing: '-0.012em', marginBottom: 6, color: 'var(--ink)' }} dangerouslySetInnerHTML={{ __html: n.t }} />
                  <p className="body" style={{ fontSize: 14, color: 'var(--ink3)' }} dangerouslySetInnerHTML={{ __html: n.body }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bleed-dark section">
        <div className="container-text" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ color: 'rgba(254, 252, 250,0.5)', marginBottom: 14 }}>Subscribe</div>
          <h2 className="font-serif" style={{ fontSize: 'clamp(1.875rem, 4vw, 2.75rem)', color: 'var(--band-foreground)', letterSpacing: '-0.018em', marginBottom: 24 }}>
            Monthly compliance brief. <em style={{ color: 'rgba(254, 252, 250,0.7)' }}>No noise.</em>
          </h2>
          <NewsletterForm />
        </div>
      </section>
    </>
  )
}
