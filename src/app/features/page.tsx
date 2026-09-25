import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Features — Amaea',
  description: 'What Amaea does, in the order you would meet it: from a single client’s journey to the engine underneath.',
}

// Sources: ../amaea-app/src/lib/extraction/schemas.ts and app client status labels.
// TODO(Milan): verify each workflow and integration availability before replacing the illustrative media with synthetic product recordings.
const CHAPTERS = [
  {
    title: 'See every client’s journey',
    body: 'Start with each piece of work you do for your client. Amaea shows each client’s whole compliance story in one place: imported documents, recorded reviews and open flags with regulatory context for a qualified person to assess. You spot the gap yourself, long before anyone comes asking.',
    media: 'Clients — the full book, filterable; example status labels “Action needed” and “No open flags”. These are workflow indicators, not compliance determinations.',
  },
  {
    title: 'All your clients, at a glance',
    body: 'Now zoom out. Open Amaea and see where the firm stands the moment you log in — a live health score, what’s overdue, what’s missing, who’s vulnerable, and the one thing that needs you today. Live dashboards, including annual reviews and missing documents, turn hundreds of clients into a single clear picture. Qualified staff review the findings and decide what action is needed.',
    media: 'Dashboard — health score and today’s critical focus, with Reviews and Documents beneath.',
  },
  {
    title: 'Know exactly what to fix first',
    body: 'Amaea doesn’t just flag problems, it ranks them. Every issue across the firm, sorted Critical, High, Medium, each one naming the client and linking to regulatory context for a qualified person to assess. You walk in on Monday knowing precisely where to start, instead of staring at a wall of red.',
    media: 'Insights — triaged Critical / High / Medium alerts, with the live flags rail beside the assistant.',
  },
  {
    title: 'Ask Amaea AI anything',
    body: 'A compliance assistant that knows your whole firm. Ask it who to prioritise this week, what your Consumer Duty position is, which records need review — in plain English, with a draft answer and supporting context for your review.',
    media: 'AI Assistant — ask-anything box, suggested questions, live compliance context.',
    note: 'Amaea produces findings and drafts, not compliance determinations or regulated advice. Qualified staff review and sign off before acting.',
  },
  {
    title: 'Review regulatory updates',
    body: 'The rules never sit still, and it’s hard to keep track of it all while doing the day job. Dear CEO letters, policy statements, thematic reviews, new deadlines. Amaea Horizon brings regulatory material into the review workflow. Qualified staff check its relevance and decide what action the firm needs to take; coverage is not guaranteed.',
    media: 'Governance — the regulatory calendar with regulatory material for staff to review.',
  },
  {
    title: 'Your reports, drafted in one click',
    body: 'Consumer Duty, RMAR, Vulnerability Reports, board packs and more — drafted from your own data and your own notes, ready for you to edit. Qualified staff check, edit and sign off the draft. Availability of these reporting workflows requires confirmation.',
    media: 'Reports — the report cards, each showing how complete it already is.',
  },
  {
    title: 'It runs on what you already use',
    body: 'Here’s how it all works. The app includes Intelliflo and SharePoint integration code; production availability requires confirmation. You can also import the core IFA document types for extraction and human review, including checks of dates, signatures and client matching.',
    media: 'Integrations and Import Docs — Intelliflo + SharePoint availability to confirm; document extraction for review.',
  },
]

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 20 }}>The platform</div>
          <h1 className="hero-display" style={{ maxWidth: '20ch' }}>
            What Amaea does, in the order you’d <em>meet it.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '42rem', marginTop: 28 }}>
            Seven chapters, in a deliberate order — from a single client’s journey to the engine
            underneath. Each one answers the question the last raises, and each names the screen
            that proves it.
          </p>
        </div>
      </section>

      {/* Zig-zag chapters */}
      <section style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="container-wide">
          {CHAPTERS.map((c, i) => (
            <article key={c.title} className={`chapter${i % 2 === 1 ? ' reverse' : ''}`}>
              <div className="chapter-text">
                <div className="chapter-num">Chapter {String(i + 1).padStart(2, '0')}</div>
                <h2 className="h-section" style={{ marginBottom: 14 }}>{c.title}</h2>
                <p className="body-large">{c.body}</p>
                {c.note && <p className="chapter-note">{c.note}</p>}
              </div>
              {i === 1 ? (
                <figure className="feature-screenshot">
                  <Image src="/images/product-dashboard.png" width={3000} height={1580} sizes="(max-width: 900px) 100vw, 50vw" alt="Amaea’s existing dashboard prototype, using synthetic demo data." />
                  <figcaption>Existing prototype · synthetic demo data</figcaption>
                </figure>
              ) : (
                <aside className="chapter-context">
                  <div className="eyebrow">In the workflow</div>
                  <p>{c.media}</p>
                </aside>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section" style={{ background: 'var(--plum-deep)', color: 'var(--cream)' }}>
        <div className="container-text" style={{ textAlign: 'center' }}>
          <p className="h-section" style={{ color: 'var(--cream)', marginBottom: 26 }}>
            Want to see how Amaea can be{' '}
            <span className="script" style={{ fontSize: '1.4em' }}>your peace of mind</span> while
            saving time along the way?
          </p>
          <Link href="/waitlist" className="btn btn-lg" style={{ background: 'var(--cream)', color: 'var(--plum-deep)' }}>
            Register your interest
          </Link>
        </div>
      </section>
    </>
  )
}
