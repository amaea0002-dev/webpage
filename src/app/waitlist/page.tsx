import ReferenceInteractions from "@/components/reference/ReferenceInteractions";
import { pageMetadata } from '@/lib/metadata'
import { WaitlistForm } from '@/components/forms/WaitlistForm'

export const metadata = pageMetadata('Founders programme · Amaea', 'Register your UK financial planning firm’s interest in Amaea’s founders programme. Help shape the next release, with no commitment at registration.', '/waitlist')

export default function WaitlistPage() {
  return (
    <>
      <section className="section">
        <div className="container-wide">
          <div className="article-meta" style={{ marginBottom: 28 }}>
            <span style={{ color: 'var(--plum)' }}>Founders programme</span>
            <span className="sep">·</span>
            <span>Ten to twenty firms</span>
            <span className="sep">·</span>
            <span>Register interest now</span>
          </div>
          <h1 className="hero-display" style={{ maxWidth: '20ch', marginBottom: 32 }}>
            Help shape <em>a calmer way to work.</em>
          </h1>
          {/* TODO(Milan): name the conference and month once the date is fixed, so this says
              when applications open instead of "soon". */}
          <p className="lede" style={{ maxWidth: '40rem' }}>
            Register your interest in the founders programme. We’re looking for ten to twenty UK firms
            to help shape what comes next. We’ll contact you when applications open; no opening date
            has been announced, and registering commits you to nothing.
          </p>
        </div>
      </section>

      <section className="section application-section">
        <div className="container-wide application-layout">
          {/* Form */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>Register your interest</div>
            <h2 className="h-section" style={{ marginBottom: 32 }}>Start with your firm and email.</h2>
            <WaitlistForm />
          </div>

          {/* Side panel */}
          <aside>
            <div className="programme-facts" aria-label="Programme at a glance">
              <Stat n="10–20" label="Firms in the first cohort" />
              <Stat n="3–15" label="Advisers per firm" />
              <Stat n="UK" label="FCA-regulated firms" />
              <Stat n="No commitment" label="At registration" />
            </div>
            <div className="tile">
              <div className="eyebrow" style={{ color: 'var(--plum)', marginBottom: 14 }}>What founders get</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
                {/* TODO(Milan): once the commercial terms for the cohort are set, say them here —
                    what participating costs, for how long, and what happens at the end. */}
                <Bullet h="Who we're looking for" b="Three to fifteen advisers, UK FCA-regulated, in good standing, with an active client book." />
                <Bullet h="What we ask" b="Your perspective on the compliance work that takes time, and what would make it easier." />
                <Bullet h="What you get" b="A direct line to the two people building it, and real influence over what gets built first." />
                <Bullet h="What is still to come" b="Commercial terms for the cohort. We will put them in writing before asking anyone to commit." />
              </ul>
            </div>
            <div className="foot" style={{ marginTop: 24, color: 'var(--ink4)' }}>
              Registering commits you to nothing. We will reply by email.
            </div>
          </aside>
        </div>
      </section>

      <section className="bleed-plum section">
        <div className="container-text" style={{ textAlign: 'center' }}>
          <p className="quote-mega quote-mega-mark" style={{ color: 'var(--band-foreground)' }}>
            We&apos;re looking for firms who want to be part of building the tool, not just
            using it.
          </p>
          <div className="foot" style={{ marginTop: 24, color: 'rgba(254, 252, 250,0.5)', letterSpacing: '0.06em' }}>
            Hasna &amp; Milan · Co-founders
          </div>
        </div>
      </section>
      <ReferenceInteractions />
    </>
  )
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="stat-num">{n}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}
function Bullet({ h, b }: { h: string; b: string }) {
  return (
    <li>
      <div style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
        <span style={{ color: 'var(--plum)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.125rem' }}>·</span>
        <div>
          <div style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: 2 }}>{h}</div>
          <div className="body" style={{ fontSize: 14, color: 'var(--ink3)' }}>{b}</div>
        </div>
      </div>
    </li>
  )
}
