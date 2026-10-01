import { CrossLinks, FinalCTA } from '../consumer-duty/page'

export const metadata = { title: 'RMAR filing · Amaea' }

// TODO: verify the RMAR section mapping, cadence and export formats against the app and current filing requirements before publication.
const SECTIONS = [
  { ref: 'B', name: 'Profit and loss account', desc: 'Review and edit recorded financial figures.' },
  { ref: 'D', name: 'Regulatory capital', desc: 'Review and edit recorded capital figures.' },
  { ref: 'E', name: 'Professional Indemnity Insurance', desc: 'Review information extracted from an uploaded insurance schedule.' },
  { ref: 'G', name: 'Adviser data', desc: 'Review adviser roster and training records.' },
  { ref: 'H', name: 'Conduct of business', desc: 'Review the recorded complaint and conduct information for the selected period.' },
]

export default function RmarPage() {
  return (
    <>
      <section className="section">
        <div className="container-wide">
          <div className="article-meta" style={{ marginBottom: 28 }}>
            <span style={{ color: 'var(--plum)' }}>Domain · §03</span>
            <span className="sep">·</span>
            <span>SUP 16.12</span>
            <span className="sep">·</span>
            <span>Half-yearly cadence</span>
          </div>
          <h1 className="hero-display" style={{ maxWidth: '20ch', marginBottom: 32 }}>
            RMAR draft, <em>section by section.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '42rem' }}>
            The Retail Mediation Activities Return is a half-yearly obligation under SUP 16.12,
            keyed off your firm&apos;s accounting reference date. The draft brings recorded data
            together for review, with print and section CSV exports. Availability requires confirmation. The compliance
            officer reviews, corrects and signs off the draft before submission.
          </p>
        </div>
      </section>

      <section className="bleed-dark" style={{ padding: '64px 0' }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ color: 'rgba(254, 252, 250,0.5)', marginBottom: 32 }}>By the section</div>
          <div className="rmar-sections">
            {SECTIONS.map((s) => (
              <div key={s.ref} className="rmar-section">
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontStyle: 'italic', color: '#CBA6C9', lineHeight: 1 }}>{s.ref}</span>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--band-foreground)', letterSpacing: '-0.008em' }}>{s.name}</span>
                </div>
                <div className="body" style={{ color: 'rgba(254, 252, 250,0.7)', fontSize: 14 }} dangerouslySetInnerHTML={{ __html: s.desc }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-text">
          <h2 className="h-page" style={{ marginBottom: 28 }}>Prepare the draft for review.</h2>
          <p className="lede drop-cap" style={{ marginBottom: 22 }}>
            Bring the relevant records together to prepare an RMAR draft.
            Qualified staff check the figures, resolve missing information and sign off the output.
          </p>
          <p className="body-large" style={{ marginBottom: 22 }}>
            The draft view brings financial entries, insurance details, adviser records and
            complaint information together. Staff review the data for the selected period,
            check missing information and make corrections.
          </p>
          <p className="body-large">
            Financial figures can be reviewed and edited in the financial-sections form.
            Insurance information can be populated from an uploaded policy schedule.
            Staff check the source evidence before relying on either.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 14 }}>§02 · Submission workflow</div>
          <h2 className="h-section" style={{ marginBottom: 32 }}>From draft to review and export.</h2>
          <ol className="num-list" style={{ maxWidth: '46rem' }}>
            <li>
              <h3 className="h-section" style={{ marginBottom: 8 }}>Open the draft.</h3>
              <p className="body-large">Select the reporting period and refresh the draft to review recorded information. Check dates and coverage against your firm’s requirements.</p>
            </li>
            <li>
              <h3 className="h-section" style={{ marginBottom: 8 }}>Fill the financial sections.</h3>
              <p className="body-large">Review and edit the recorded financial figures. Check the underlying source records and complete missing information.</p>
            </li>
            <li>
              <h3 className="h-section" style={{ marginBottom: 8 }}>Review and export.</h3>
              <p className="body-large">Qualified staff review the draft. Use the print view or section CSV exports as working material for your firm’s review and sign-off process.</p>
            </li>
          </ol>
        </div>
      </section>

      <CrossLinks current="rmar-filing" />
      <FinalCTA />
    </>
  )
}
