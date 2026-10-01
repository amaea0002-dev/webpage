import Link from 'next/link'

export const metadata = {
  title: 'Security · Amaea',
  description: 'How Amaea handles firm data, with implementation details and work awaiting verification.',
}

// Sources: ../amaea-app/next.config.ts, src/lib/security/rls.test.ts,
// .github/workflows/test.yml, src/lib/integrations/encryption.ts.
const STORES = [
  { label: 'Primary store', body: 'Supabase Postgres stores the platform records. Data storage and processing locations are being verified.' },
  { label: 'Document store', body: 'Source documents are handled through Supabase Storage. Storage policies are part of the isolation review.' },
  { label: 'Vector store', body: 'Firm document embeddings carry a firm identifier. Database row-level security for firm embeddings is covered by the CI integration suite.' },
  { label: 'AI providers', body: 'The app integrates Anthropic for AI processing and Voyage for embeddings. Provider retention and contractual settings are being verified.' },
]

const SPECS = [
  { t: 'Integration credentials', d: 'Integration tokens are encrypted using AES-256-GCM before storage.' },
  { t: 'Transport configuration', d: 'The app config sets HSTS to max-age=31536000 (one year), with includeSubDomains and the preload directive. This marketing repo has no HSTS header configured.' },
  { t: 'Authentication', d: 'The app uses Supabase Auth. Deployment-specific session and MFA settings are being verified.' },
  { t: 'App headers', d: 'The app config defines CSP, X-Frame-Options DENY, Referrer-Policy strict-origin-when-cross-origin and a Permissions-Policy. Deployed response headers still need verification.' },
  { t: 'Penetration testing', d: 'A first third-party penetration test is planned for Q4 2026. No completed test is claimed here.' },
  { t: 'Isolation checks', d: 'CI includes cross-firm row-level security tests and a check for anonymous access to exposed database views. These checks exercise defined cases; they are not a guarantee against all data leakage.' },
  { t: 'Operational policies', d: 'Backup and recovery, incident response, export and deletion commitments are awaiting confirmation.' },
  { t: 'Sub-processors', d: 'The provider list, processing purposes, locations and contractual terms are awaiting verification. See the privacy notice.' },
]

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Security &amp; compliance</div>
          <h1 className="hero-display" style={{ maxWidth: '17ch' }}>
            How Amaea handles <em>your firm’s data.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '40rem', marginTop: 28 }}>
            Our security work includes database row-level security and automated isolation checks.
            This page distinguishes implementation details from plans and policies awaiting verification.
          </p>
          {/* TODO: verify certification and penetration-test plans, dates and status before publication. */}
          <p className="body" style={{ marginTop: 28 }}>
            SOC 2 Type I is planned for Q4 2026. ISO 27001 is planned for 2027.
            These are plans, not certifications held by Amaea.
          </p>
        </div>
      </section>

      {/* Where data lives, cards */}
      <section className="section" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 24 }}>Where your data lives</div>
          {/* TODO: verify the final data-location wording against deployment settings and provider contracts; use the same wording in privacy. */}
          {/* TODO: verify provider retention, training and logging terms, including whether zero data retention is contractually enabled. */}
          <div className="value-grid">
            {STORES.map(s => (
              <div key={s.label} className="value-card">
                <h2 className="h-sub" style={{ marginBottom: 8 }}>{s.label}</h2>
                <p className="body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Isolation story */}
      <section className="section" style={{ borderTop: '1px solid var(--rule)', background: 'var(--surface)' }}>
        <div className="container-prose">
          <div className="eyebrow" style={{ marginBottom: 16 }}>The isolation story</div>
          <h2 className="h-page" style={{ marginBottom: 24 }}>Multi-tenant by <em>construction.</em></h2>
          <p className="body-large" style={{ marginBottom: 20 }}>
            Firm-scoped records use database row-level security to restrict access by firm.
            The app’s integration suite tests cross-firm reads and writes, including firm embeddings,
            against a local Supabase instance in CI.
          </p>
          <p className="body-large" style={{ marginBottom: 28 }}>
            Isolation depends on the policies, queries and deployment being configured correctly.
            The tests cover specific scenarios; isolation requires ongoing testing and review.
          </p>
          <div className="callout-card">
            <p>
              The repository includes a check for anonymous access to exposed database relations and
              a migration setting <code>security_invoker = true</code> on views.
            </p>
          </div>
          {/* TODO: approve any incident disclosure from a dated incident record; response times and customer impact are unverified. */}
        </div>
      </section>

      {/* Specifications, card grid */}
      <section className="section" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 24 }}>Specifications</div>
          {/* TODO: verify deployed headers, MFA/session settings, backups, incident response, export and deletion policies before making operational commitments. */}
          <div className="spec-grid">
            {SPECS.map(s => (
              <div key={s.t} className="value-card">
                <div className="spec-k">{s.t}</div>
                <p className="body" style={{ marginTop: 6 }}>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust centre CTA */}
      <section className="section" style={{ background: 'var(--plum-deep)', color: 'var(--cream)' }}>
        <div className="container-text" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 16, color: 'rgba(254,252,250,0.6)' }}>Trust centre</div>
          <p className="h-section" style={{ color: 'var(--cream)', marginBottom: 18 }}>
            Ask about our security work.
          </p>
          <p style={{ color: 'rgba(254,252,250,0.8)', maxWidth: '32rem', margin: '0 auto 28px', lineHeight: 1.55 }}>
            Contact us to discuss the evidence your firm needs for its review.
            The trust pack and publication schedule are awaiting confirmation.
          </p>
          {/* TODO: confirm which trust documents can be supplied and the publication schedule. */}
          <Link href="/contact" className="btn btn-lg" style={{ background: 'var(--cream)', color: 'var(--plum-deep)' }}>
            Discuss security
          </Link>
        </div>
      </section>
    </>
  )
}
