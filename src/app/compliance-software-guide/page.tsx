import Link from 'next/link'

export const metadata = { title: 'Compliance software guide · Amaea' }

const TOC = [
  { n: '01', t: 'What FCA compliance software is for' },
  { n: '02', t: 'Why spreadsheets are not compliance software' },
  { n: '03', t: 'The five things to look for' },
  { n: '04', t: 'How Amaea compares' },
  { n: '05', t: 'How to evaluate a vendor' },
  { n: '06', t: 'Migration playbook' },
]

export default function GuidePage() {
  return (
    <>
      <section className="section">
        <div className="container-wide">
          <div className="article-meta" style={{ marginBottom: 28 }}>
            <span style={{ color: 'var(--plum)' }}>Guide · long-form</span>
            <span className="sep">·</span>
            <span>22 min read</span>
            <span className="sep">·</span>
            <span>Published May 2026</span>
          </div>
          <h1 className="hero-display" style={{ maxWidth: '24ch', marginBottom: 32 }}>
            A guide to FCA <em>compliance software</em>.
          </h1>
          <p className="lede" style={{ maxWidth: '44rem' }}>
            For UK IFA firms thinking about replacing the spreadsheet-and-Outlook compliance
            stack. Vendor-neutral on questions of <em>category</em>; opinionated on questions of{' '}
            <em>execution</em>. We&apos;d obviously like you to choose Amaea, and we&apos;ll
            tell you when we&apos;re not the right fit.
          </p>
        </div>
      </section>

      <section className="section" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="container-wide guide-layout">
          <aside className="guide-contents">
            <div className="eyebrow" style={{ marginBottom: 14 }}>Contents</div>
            <nav className="page-index">
              {TOC.map(item => (
                <a key={item.n} href={`#s${item.n}`}>
                  <span className="idx-n">{item.n}</span>
                  <span>{item.t}</span>
                </a>
              ))}
            </nav>
          </aside>

          <article style={{ maxWidth: '40rem' }}>
            <Chapter n="01" t="What FCA compliance software is for">
              <p className="lede drop-cap">
                Compliance software exists to turn evidence from something that lives in
                people&apos;s heads, spreadsheets, and email threads into something that lives
                in a queryable system of record. The output is not a UI, it&apos;s an audit
                trail that survives staff churn, FCA visits, and Subject Access Requests.
              </p>
              <p className="body-large">
                For an FCA-regulated IFA firm, that audit trail is the single most important
                operational asset. The firm needs to check that records support its decisions
                and that qualified staff can review gaps in the evidence.
              </p>
            </Chapter>

            <Chapter n="02" t="Why spreadsheets are not compliance software">
              <p className="body-large">
                A spreadsheet is a database with very few constraints. It will let you record a
                review date, but not enforce a cadence; will let you note a vulnerability, but
                not require re-assessment; will let you list client documents, but not flag the
                ones missing. The discipline lives in the human, not in the tool. Every firm
                that runs compliance through a spreadsheet runs it through that one specific
                compliance officer&apos;s discipline.
              </p>
              <p className="body-large">
                That works until it doesn&apos;t. Staff turnover, holiday cover, capacity
                shocks, and FCA visits all expose the same gap: the discipline is not
                documented in the system; it&apos;s memorised in the person.
              </p>
            </Chapter>

            <Chapter n="03" t="The five things to look for">
              <ol className="num-list">
                <li><h3 className="h-section" style={{ marginBottom: 8 }}>Citation per flag.</h3><p className="body-large">Every flag should carry its FCA reference. If you can&apos;t answer &ldquo;which regulatory reference needs review?&rdquo;, the flag is decoration.</p></li>
                <li><h3 className="h-section" style={{ marginBottom: 8 }}>Audit trail by default.</h3><p className="body-large">Every read and write recorded as a compliance event. Not opt-in. Not configurable down to silence.</p></li>
                <li><h3 className="h-section" style={{ marginBottom: 8 }}>Multi-tenant data isolation.</h3><p className="body-large">Row-level security, not application-layer filtering. Ask for the isolation design and evidence of cross-firm access tests.</p></li>
                <li><h3 className="h-section" style={{ marginBottom: 8 }}>Source-of-truth respect.</h3><p className="body-large">The suitability letter is the truth; the platform is the index. Never the other way around.</p></li>
                <li><h3 className="h-section" style={{ marginBottom: 8 }}>Honest roadmap.</h3><p className="body-large">Dated quarters on a public roadmap; what&apos;s not listed is not in flight.</p></li>
              </ol>
            </Chapter>

            <Chapter n="04" t="How Amaea compares">
              <p className="body-large">
                Amaea combines extraction for the core IFA document types, retrieval of regulatory
                context and firm-scoped access controls. Findings and drafts require review and sign-off
                by qualified staff. Evaluate these capabilities using synthetic examples.
              </p>
              {/* TODO: verify product coverage, plan limits, integration availability and migration support before publishing this guide. */}
            </Chapter>

            <Chapter n="05" t="How to evaluate a vendor">
              <p className="body-large">
                A 30-minute demo of one specific compliance task. Use a synthetic client file and ask the vendor to walk you through generating the
                annual review draft on it. The fluency of that walkthrough is the fluency of the
                product.
              </p>
            </Chapter>

            <Chapter n="06" t="Migration playbook">
              <p className="body-large">
                Six weeks is realistic. Weeks 1–2: data audit + spreadsheet export. Weeks 3–4:
                document import + extraction QA. Weeks 5–6: parallel run + cutover. Amaea&apos;s
                founders programme includes hands-on migration support; outside the cohort it&apos;s
                a paid Scale-tier add-on.
              </p>
            </Chapter>
          </article>
        </div>
      </section>

      <section className="bleed-plum section-loose">
        <div className="container-text" style={{ textAlign: 'center' }}>
          <h2 className="font-serif" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.08, letterSpacing: '-0.022em', marginBottom: 24, color: 'var(--band-foreground)' }}>
            Want this as a PDF?
          </h2>
          <p className="lede" style={{ marginBottom: 32, color: 'rgba(254, 252, 250,0.85)' }}>
            We&apos;ll email it to you. Single-PDF version, with footnotes, ready to circulate
            at your next compliance meeting.
          </p>
          <Link href="/contact" className="btn btn-inv btn-lg">Request the PDF →</Link>
        </div>
      </section>
    </>
  )
}

function Chapter({ n, t, children }: { n: string; t: string; children: React.ReactNode }) {
  return (
    <div id={`s${n}`} style={{ paddingTop: 48, marginBottom: 64, borderTop: '1px solid var(--rule)' }}>
      <div className="eyebrow" style={{ marginBottom: 14, color: 'var(--plum)' }}>§{n}</div>
      <h2 className="h-page" style={{ marginBottom: 32 }}>{t}</h2>
      {children}
    </div>
  )
}
