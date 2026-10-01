import Link from 'next/link'

export const metadata = {
  title: 'Consumer Duty · Amaea',
  description: 'Consumer Duty assessment records and draft reporting for qualified staff to review.',
}

// TODO: verify outcome metrics, report formats and regulatory references against the app and approved sources before publication.
// Current scope: extraction/schemas.ts ConsumerDutyOutcomeSchema and reports/generate.
const OUTCOMES = [
  { n: '01', title: 'Products and services', body: 'Record whether the source assessment covers products and services, for staff to check against the evidence.' },
  { n: '02', title: 'Price and value', body: 'Extract the source assessment’s fair-value confirmation and any recorded concerns for human review.' },
  { n: '03', title: 'Consumer understanding', body: 'Record whether consumer understanding is covered in the source assessment.' },
  { n: '04', title: 'Consumer support', body: 'Record whether consumer support is covered, alongside actions described in the source assessment.' },
]

const GET = [
  { t: 'Assessment record', d: 'Extract assessment date, adviser and client references from an uploaded assessment.' },
  { t: 'Outcome areas', d: 'Record the outcome areas named in the source document.' },
  { t: 'Recorded concerns', d: 'Extract concerns identified in the assessment for staff to review.' },
  { t: 'Recorded actions', d: 'Extract actions taken or planned, as described in the source document.' },
  { t: 'Next assessment date', d: 'Capture the next assessment date where the document provides one.' },
  { t: 'Draft reporting', d: 'Draft analysis uses recorded firm data for qualified staff to check. Reporting availability requires confirmation.' },
]

export default function ConsumerDutyPage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Consumer Duty</div>
          <h1 className="hero-display" style={{ maxWidth: '15ch' }}>
            Consumer Duty, <em>evidenced.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '42rem', marginTop: 28 }}>
            Bring recorded Consumer Duty assessments together for review. Findings and report drafts require a qualified person to review and sign off;
            they do not establish that the firm has met its obligations.
          </p>
          <div className="cert-row">
            <span className="cert">PS22/9</span>
            <span className="cert">In force · 31 Jul 2023</span>
          </div>
        </div>
      </section>

      {/* Four outcomes, cards */}
      <section className="section" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 24 }}>The four outcomes</div>
          <div className="value-grid">
            {OUTCOMES.map(o => (
              <div key={o.n} className="value-card">
                <div className="outcome-n">{o.n}</div>
                <h2 className="h-sub" style={{ marginBottom: 8 }}>{o.title}</h2>
                <p className="body">{o.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board report */}
      <section className="section" style={{ borderTop: '1px solid var(--rule)', background: 'var(--surface)' }}>
        <div className="container-prose">
          <div className="eyebrow" style={{ marginBottom: 16 }}>The board report</div>
          <h2 className="h-page" style={{ marginBottom: 24 }}>The annual board pack, <em>almost.</em></h2>
          <p className="body-large" style={{ marginBottom: 20 }}>
            Section 9.7 of PS22/9 requires the board to receive an annual assessment of consumer
            outcomes, and to act on it. The pack is meant to be evidence, not theatre.
          </p>
          <p className="body-large" style={{ marginBottom: 28 }}>
            The reporting workflow can prepare draft analysis from recorded firm data.
            Staff check the evidence and decide what belongs in the board report.
            Availability of this workflow requires confirmation.
          </p>
          <p className="body-large" style={{ marginTop: 28 }}>
            The compliance team checks the source evidence, records gaps and decides what should
            be included in the board report. The draft supports that judgement.
          </p>
        </div>
      </section>

      {/* What you actually get, spec cards */}
      <section className="section" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 16 }}>What you actually get</div>
          <h2 className="h-page" style={{ marginBottom: 40, maxWidth: '18ch' }}>
            Assessment records, <em>ready for review.</em>
          </h2>
          <div className="spec-grid">
            {GET.map(s => (
              <div key={s.t} className="value-card">
                <div className="spec-k">{s.t}</div>
                <p className="body" style={{ marginTop: 6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CrossLinks current="consumer-duty" />
      <FinalCTA />
    </>
  )
}

export function CrossLinks({ current }: { current: string }) {
  const ALL = [
    { slug: 'consumer-duty', title: 'Consumer Duty', cobs: 'PS22/9' },
    { slug: 'annual-reviews', title: 'Annual reviews', cobs: 'COBS 9.5' },
    { slug: 'rmar-filing', title: 'RMAR filing', cobs: 'SUP 16.12' },
    { slug: 'vulnerable-clients', title: 'Vulnerable clients', cobs: 'FG21/1' },
  ].filter(x => x.slug !== current)
  return (
    <section className="section">
      <div className="container-wide">
        <div className="eyebrow" style={{ marginBottom: 14 }}>Continue reading</div>
        <h2 className="h-section" style={{ marginBottom: 32 }}>Adjacent domains.</h2>
        <div className="value-grid">
          {ALL.map(a => (
            <Link key={a.slug} href={`/${a.slug}`} className="value-card home-feat" style={{ textDecoration: 'none' }}>
              <div className="eyebrow" style={{ color: 'var(--accent)', marginBottom: 6 }}>{a.cobs}</div>
              <h3 className="h-sub" style={{ marginBottom: 14 }}>{a.title}</h3>
              <div style={{ fontSize: 12, color: 'var(--ink4)', letterSpacing: '0.04em' }}>Read →</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  return (
    <section className="section" style={{ background: 'var(--plum-deep)', color: 'var(--cream)' }}>
      <div className="container-text" style={{ textAlign: 'center' }}>
        <h2 className="h-page" style={{ color: 'var(--cream)', marginBottom: 20 }}>
          See a worked example.
        </h2>
        <p style={{ marginBottom: 30, color: 'rgba(254,252,250,0.82)', maxWidth: '30rem', marginInline: 'auto', lineHeight: 1.55 }}>
          A walkthrough using synthetic client records, example findings and an RMAR draft for review.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/waitlist" className="btn btn-lg" style={{ background: 'var(--cream)', color: 'var(--plum-deep)' }}>Book a demo</Link>
          <Link href="/contact" className="btn btn-ghost btn-lg" style={{ color: 'var(--cream)', borderColor: 'rgba(254,252,250,0.3)' }}>Talk to us first</Link>
        </div>
      </div>
    </section>
  )
}
