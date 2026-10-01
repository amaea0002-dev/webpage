import Link from 'next/link'

export const metadata = { title: 'Founders programme · Amaea' }

// TODO: verify application status and replace the expired 30 June 2026 deadline only with an approved date.
// TODO: approve cohort size, programme duration, commercial terms, response times and launch milestones.
const STAGES = [
  { when: 'To confirm', what: 'Applications', detail: 'Application dates and availability are awaiting confirmation.' },
  { when: 'To confirm', what: 'Selection', detail: 'Cohort size and selection criteria are awaiting confirmation.' },
  { when: 'To confirm', what: 'Onboarding', detail: 'Timing, support and scope will need to be agreed with each participating firm.' },
  { when: 'To confirm', what: 'Product access', detail: 'Access and launch milestones are awaiting confirmation.' },
]

export default function FoundersPage() {
  return (
    <>
      <section className="section">
        <div className="container-wide">
          <div className="article-meta" style={{ marginBottom: 28 }}>
            <span style={{ color: 'var(--plum)' }}>Founders programme</span>
            <span className="sep">·</span>
            <span>Programme details under review</span>
          </div>
          <h1 className="hero-display" style={{ maxWidth: '22ch', marginBottom: 32 }}>
            Help shape <em>Amaea.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '42rem' }}>
            We want to learn how UK IFA firms manage their compliance work.
            Cohort size, programme terms and application dates are awaiting confirmation.
          </p>
        </div>
      </section>

      <section className="bleed-dark section-tight">
        <div className="container-wide">
          <div className="stat-grid" style={{ gap: 48 }}>
            <StatBg n="Scope" label="Cohort size" sub="To confirm" />
            <StatBg n="Terms" label="Commercial arrangements" sub="To confirm" />
            <StatBg n="Support" label="Onboarding arrangements" sub="To confirm" />
            <StatBg n="Dates" label="Application timetable" sub="To confirm" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-prose">
          <div className="eyebrow" style={{ marginBottom: 14 }}>§01 · The thesis</div>
          <h2 className="h-page" style={{ marginBottom: 28 }}>Why a cohort, not a beta.</h2>
          <p className="lede drop-cap" style={{ marginBottom: 24 }}>
            A founders programme is an opportunity to learn how the product fits a firm’s
            working day and where it needs further work.
          </p>
          <p className="body-large">
            Programme scope, support and commercial terms need to be agreed before firms can
            decide whether to participate. Product findings and drafts remain subject to qualified
            human review and sign-off.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="container-prose">
          <div className="eyebrow" style={{ marginBottom: 14 }}>§02 · The timeline</div>
          <h2 className="h-page" style={{ marginBottom: 40 }}>What happens, when.</h2>
          <ol className="timeline">
            {STAGES.map((s, i) => (
              <li key={i}>
                <div className="timeline-when">{s.when}</div>
                <div className="timeline-what">{s.what}</div>
                <div className="body" style={{ fontSize: 15 }}>{s.detail}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container-prose">
          <div className="eyebrow" style={{ marginBottom: 14 }}>§03 · Who we&apos;re looking for</div>
          <h2 className="h-page" style={{ marginBottom: 32 }}>The shape of a founders firm.</h2>
          {/* TODO: approve the proposed eligibility criteria before recruiting firms. */}
          <dl className="spec-list">
            <Spec t="Size" d="Three to fifteen advisers. Big enough to have a real compliance problem; small enough to move on the platform without a six-month procurement cycle." />
            <Spec t="Regulator stance" d="Good standing with FCA, FOS. No active enforcement. We want to be the platform you grow into compliance with, not the platform that saves you from it." />
            <Spec t="Honesty bar" d="Willing to be honest about your current compliance setup, including the parts you&apos;re not proud of. We can&apos;t fix what we can&apos;t see." />
            <Spec t="Operating cadence" d="Active client book; weekly compliance review cadence; uses a back-office system (Intelliflo, Iress, similar) as the source of truth for client data." />
            <Spec t="Geography" d="UK-FCA-regulated. England, Scotland, Wales, Northern Ireland. We don&apos;t cover Isle of Man or Channel Islands in cohort I." />
          </dl>
        </div>
      </section>

      <section className="bleed-plum section-loose">
        <div className="container-text" style={{ textAlign: 'center' }}>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.08, letterSpacing: '-0.022em', marginBottom: 24, color: 'var(--band-foreground)' }}>
            Programme details to confirm.
          </h2>
          <p className="lede" style={{ marginBottom: 32, color: 'rgba(254, 252, 250,0.85)', maxWidth: '30rem', marginInline: 'auto' }}>
            Application status and dates are awaiting confirmation.
          </p>
          <Link href="/waitlist" className="btn btn-inv btn-lg">Apply →</Link>
        </div>
      </section>
    </>
  )
}

function Spec({ t, d }: { t: string; d: string }) {
  return <div className="spec-row"><dt>{t}</dt><dd>{d}</dd></div>
}
function StatBg({ n, label, sub }: { n: string; label: string; sub: string }) {
  return (
    <div>
      <div className="stat-num" style={{ color: 'var(--band-foreground)' }}>{n}</div>
      <div className="stat-label" style={{ color: 'rgba(254, 252, 250,0.55)' }}>{label}</div>
      <div className="stat-source" style={{ color: 'rgba(254, 252, 250,0.72)' }}>{sub}</div>
    </div>
  )
}
