import { CrossLinks, FinalCTA } from '../consumer-duty/page'

export const metadata = { title: 'Annual reviews · Amaea' }

export default function AnnualReviewsPage() {
  return (
    <>
      <section className="section">
        <div className="container-wide">
          <div className="article-meta" style={{ marginBottom: 28 }}>
            <span style={{ color: 'var(--plum)' }}>Domain · §02</span>
            <span className="sep">·</span>
            <span>COBS 9.5</span>
            <span className="sep">·</span>
            <span>12-month cadence</span>
          </div>
          <h1 className="hero-display" style={{ maxWidth: '20ch', marginBottom: 32 }}>
            Annual reviews, <em>records for review.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '42rem' }}>
            Amaea helps firms track review due dates and assess overdue work.
            Findings and draft material require a qualified person to review and sign off;
            an overdue indicator is not a compliance determination.
          </p>
        </div>
      </section>

      <section className="bleed-dark" style={{ padding: '64px 0' }}>
        <div className="container-wide">
          <div className="stat-grid" style={{ gap: 48 }}>
            <StatBg n="Review" label="Due dates and open flags" source="For qualified staff to assess" />
            <StatBg n="Sign off" label="Human review required" source="No automated compliance determination" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-text">
          <h2 className="h-page" style={{ marginBottom: 28 }}>What the spreadsheet cannot do.</h2>
          <p className="lede drop-cap" style={{ marginBottom: 24 }}>
            Every IFA firm has a tab somewhere with client names and review dates. The tab is
            never wrong on paper. It is wrong in practice, because a date in a column is not
            a workflow, it is a hope.
          </p>
          <p className="body-large" style={{ marginBottom: 24 }}>
            Amaea displays review records and open flags for staff to assess.
            Staff can record reasons for delay, check the supporting evidence and decide what to do next.
            A status of <em>Action needed</em> asks for review; it does not establish a breach.
          </p>
          {/* Sterling is a synthetic demo firm; no pilot quote or performance figures are customer evidence. */}
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 14 }}>§03 · The review engine</div>
          <h2 className="h-section" style={{ marginBottom: 32 }}>What runs inside.</h2>
          <dl className="spec-list" style={{ maxWidth: '60rem' }}>
            {/* TODO: verify review cadence, notification timings, drafting, export and vulnerable-client workflows before publishing detailed promises. */}
            <Spec t="Due dates" d="Review records include due dates and status information for staff to review." />
            <Spec t="Open flags" d="Recorded flags support human assessment. Automated review sweeps are currently switched off." />
            <Spec t="Reason for delay" d="Adviser notes can be recorded and considered alongside the review evidence." />
            <Spec t="Human sign-off" d="Qualified staff review findings and drafts before deciding on any action." />
          </dl>
        </div>
      </section>

      <CrossLinks current="annual-reviews" />
      <FinalCTA />
    </>
  )
}

function Spec({ t, d }: { t: string; d: string }) {
  return <div className="spec-row"><dt>{t}</dt><dd>{d}</dd></div>
}
function StatBg({ n, label, source }: { n: string; label: string; source: string }) {
  return (
    <div>
      <div className="stat-num" style={{ color: 'var(--band-foreground)' }}>{n}</div>
      <div className="stat-label" style={{ color: 'rgba(254, 252, 250,0.55)' }}>{label}</div>
      <div className="stat-source" style={{ color: 'rgba(254, 252, 250,0.72)' }}>{source}</div>
    </div>
  )
}
