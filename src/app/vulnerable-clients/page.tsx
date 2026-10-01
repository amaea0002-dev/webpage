import { CrossLinks, FinalCTA } from '../consumer-duty/page'

export const metadata = { title: 'Vulnerable clients · Amaea' }

export default function VulnerablePage() {
  return (
    <>
      <section className="section">
        <div className="container-wide">
          <div className="article-meta" style={{ marginBottom: 28 }}>
            <span style={{ color: 'var(--plum)' }}>Domain · §04</span>
            <span className="sep">·</span>
            <span>FG21/1</span>
            <span className="sep">·</span>
            <span>Vulnerability guidance</span>
          </div>
          <h1 className="hero-display" style={{ maxWidth: '20ch', marginBottom: 32 }}>
            Vulnerable customers, <em>records for review.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '42rem' }}>
            Amaea supports the review of vulnerability records across health, life events,
            capability and resilience. Qualified staff assess the evidence and decide what support
            the client needs.
          </p>
        </div>
      </section>

      <section className="bleed-dark" style={{ padding: '64px 0' }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ color: 'rgba(254, 252, 250,0.5)', marginBottom: 32 }}>The four FCA vulnerability drivers</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            <Driver d="Health" body="Physical or mental health conditions affecting the ability to engage with financial products. Bereavement, addiction, terminal diagnosis." />
            <Driver d="Life events" body="Divorce, redundancy, bereavement, becoming a carer. Recent identification flagged for re-assessment." />
            <Driver d="Capability" body="Low financial literacy, limited digital access, English as a second language. Cognitive impairment." />
            <Driver d="Resilience" body="Low savings, irregular income, large outgoings relative to income. High debt-to-income ratio." />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-text">
          {/* TODO: verify identification prompts, reassessment timings and adviser-training nudges against implemented workflows before publication. */}
          <h2 className="h-page" style={{ marginBottom: 28 }}>Evidence for a human review.</h2>
          <p className="body-large" style={{ marginBottom: 22 }}>
            An uploaded vulnerability assessment can provide the assessment date, adviser,
            client reference, driver, functional impact and service adaptations.
            Staff check the extraction against the source document.
          </p>
          <p className="body-large">
            The assessment can also record consent for sensitive data and the next review date.
            Qualified staff decide when further assessment is needed. Automated reassessment
            sweeps are currently switched off.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 14 }}>§03 · How Amaea operationalises FG21/1</div>
          <dl className="spec-list" style={{ maxWidth: '60rem' }}>
            <Spec t="Source assessment" d="Import an assessment record for extraction and human review." />
            <Spec t="Recorded driver" d="Extract the vulnerability driver described in the source assessment." />
            <Spec t="Functional impact" d="Extract recorded functional impact and service adaptations for staff to check." />
            <Spec t="Next review date" d="Capture the date recorded in the assessment. Automated reassessment sweeps are currently switched off." />
            <Spec t="Sensitive data consent" d="Extract whether the source records consent for sensitive data; staff review the underlying evidence." />
          </dl>
        </div>
      </section>

      <CrossLinks current="vulnerable-clients" />
      <FinalCTA />
    </>
  )
}

function Spec({ t, d }: { t: string; d: string }) {
  return <div className="spec-row"><dt>{t}</dt><dd>{d}</dd></div>
}
function Driver({ d, body }: { d: string; body: string }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--band-foreground)', marginBottom: 8 }}>{d}</div>
      <p className="body" style={{ color: 'rgba(254, 252, 250,0.7)' }}>{body}</p>
    </div>
  )
}
