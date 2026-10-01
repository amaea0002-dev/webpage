export const metadata = { title: 'FCA glossary · Amaea' }

// TODO: verify every regulatory definition and citation with a qualified reviewer before publication.
const TERMS = [
  { t: 'COBS 9.5',     d: 'FCA handbook reference covering ongoing suitability obligations for clients in ongoing service arrangements. Applicability and review requirements need verification.' },
  { t: 'COBS 19',      d: 'Pension transfers and pension conversions. Sets out the requirements for advice on transferring out of defined benefit schemes.' },
  { t: 'COBS 19.1',    d: 'Pension transfer and conversion rules; the specific obligations need verification.' },
  { t: 'Consumer Duty',d: 'PS22/9, FCA&apos;s 2022 policy statement raising the consumer outcomes bar. In force since 31 July 2023.' },
  { t: 'DISP 1.6',     d: 'Dispute resolution rules. Complaint handling and response requirements; applicable periods need verification.' },
  { t: 'FCA',          d: 'Financial Conduct Authority. The UK&apos;s independent financial services regulator.' },
  { t: 'FG21/1',       d: 'Finalised Guidance on fair treatment of vulnerable customers, issued 2021.' },
  { t: 'FOS',          d: 'Financial Ombudsman Service. Provides resolution of disputes between consumers and FCA-regulated firms.' },
  { t: 'PII',          d: 'Professional Indemnity Insurance. Required for FCA-regulated firms; details captured in RMAR Section E.' },
  { t: 'PS22/9',       d: 'Policy Statement 22/9, the Consumer Duty policy statement. Defines the four outcomes and 9.7 board reporting obligation.' },
  { t: 'RMAR',         d: 'Retail Mediation Activities Return. Half-yearly regulatory return for FCA-regulated retail mediation firms. SUP 16.12.' },
  { t: 'RLS',          d: 'Row-level security. Postgres data-layer mechanism enforcing per-row access control. Amaea uses it for multi-tenant isolation.' },
  { t: 'SUP 10A',      d: 'Approved Persons Regime, covers Senior Managers and Certified Persons.' },
  { t: 'SUP 16.12',    d: 'Reporting requirements for retail mediation firms. Source for RMAR submission cadence + content.' },
  { t: 'SYSC 9',       d: 'Senior Management Arrangements, Systems and Controls. Covers record-keeping obligations.' },
  { t: 'SYSC 9.1',     d: 'Record-keeping requirements; applicable retention periods need verification.' },
  { t: 'TVAS',         d: 'Transfer Value Analysis Service. Quantitative analysis comparing the transfer value of a DB pension against the cost of replacing the benefits.' },
]

export default function GlossaryPage() {
  return (
    <>
      <section className="section">
        <div className="container-wide">
          <div className="article-meta" style={{ marginBottom: 28 }}>
            <span style={{ color: 'var(--plum)' }}>Glossary</span>
            <span className="sep">·</span>
            <span>{TERMS.length} terms</span>
            <span className="sep">·</span>
            <span>Definitions awaiting review</span>
          </div>
          <h1 className="hero-display" style={{ maxWidth: '24ch', marginBottom: 32 }}>
            FCA glossary, <em>plain English where we can.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '42rem' }}>
            Common FCA references and acronyms. We use this as our internal glossary too; if a
            term is unclear, we update the definition.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="container-prose">
          <dl className="spec-list">
            {TERMS.map(t => (
              <div key={t.t} className="spec-row" style={{ gridTemplateColumns: '10rem 1fr' }}>
                <dt>{t.t}</dt>
                <dd dangerouslySetInnerHTML={{ __html: t.d }} />
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
