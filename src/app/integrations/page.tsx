import Link from 'next/link'
import { FinalCTA } from '../consumer-duty/page'

export const metadata = {
  title: 'Integrations · Amaea',
  description: 'Intelliflo and SharePoint integration code, with production availability and roadmap dates awaiting confirmation.',
}

// Sources: ../amaea-app/src/lib/integrations/providers.ts, intelliflo-sync.ts and sharepoint-ingest.ts.
// TODO: verify production approval, availability, sync scope and cadence for each integration.
const LIVE = [
  { name: 'Intelliflo Office', mark: 'IO', body: 'Read-only integration code for clients, plans and service cases. The configured OAuth endpoints are for testing; production approval and availability need confirmation.' },
  { name: 'SharePoint', mark: 'SP', body: 'Document ingestion code uses Microsoft Graph and selected-site permissions. Production availability and the supported setup need confirmation.' },
]

// TODO: approve the roadmap scope and dates; none of these entries establishes a delivery commitment.
const ROAD = [
  { tier: 'Back office', name: 'Iress Xplan', body: 'Suitability reports, fact finds, ongoing service records. Two-way sync planned.', q: 'To confirm' },
  { tier: 'Back office', name: 'Salesforce FSC', body: 'Financial Services Cloud. Client and opportunity sync, custom field mapping.', q: 'To confirm' },
  { tier: 'Documents', name: 'Google Drive', body: 'Watch a Drive folder for new uploads. Same extraction pipeline as SharePoint.', q: 'To confirm' },
  { tier: 'Documents', name: 'OneDrive', body: 'Watch a OneDrive folder via Microsoft Graph webhook. Multi-tenant aware.', q: 'To confirm' },
  { tier: 'Compliance', name: 'Connect via Zapier', body: 'Proposed connection for workflow notifications. Events, direction and availability are unconfirmed.', q: 'To confirm' },
  { tier: 'Data', name: 'Open API', body: 'REST + GraphQL. Read access to clients, flags, reviews, documents and events.', q: 'To confirm' },
]

export default function IntegrationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section">
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 20 }}>The data perimeter</div>
          <h1 className="hero-display" style={{ maxWidth: '20ch' }}>
            Integrations, <em>where they earn the bandwidth.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '42rem', marginTop: 28 }}>
            The app includes Intelliflo and SharePoint integration code.
            Production availability and the proposed roadmap need confirmation before your firm relies on them.
          </p>
        </div>
      </section>

      {/* Live today, cards */}
      <section className="section" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 24 }}>Integration development</div>
          <div className="value-grid">
            {LIVE.map(l => (
              <div key={l.name} className="value-card">
                <div className="int-mark">{l.mark}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                  <h2 className="h-sub" style={{ margin: 0 }}>{l.name}</h2>
                  <span className="foot">Availability to confirm</span>
                </div>
                <p className="body">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap, cards with quarter badges */}
      <section className="section" style={{ borderTop: '1px solid var(--rule)', background: 'var(--surface)' }}>
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 16 }}>Roadmap</div>
          <h2 className="h-page" style={{ marginBottom: 14, maxWidth: '18ch' }}>
            Proposed <em>integrations.</em>
          </h2>
          <p className="body-large" style={{ marginBottom: 40, maxWidth: '40rem' }}>
            These are proposals for discussion. Scope, order and dates require confirmation.
          </p>
          <div className="value-grid">
            {ROAD.map(r => (
              <div key={r.name} className="value-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 10 }}>
                  <div className="eyebrow">{r.tier}</div>
                  <span className="q-badge">{r.q}</span>
                </div>
                <h3 className="h-sub" style={{ marginBottom: 6 }}>{r.name}</h3>
                <p className="body">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request an integration */}
      <section className="section" style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="container-text" style={{ textAlign: 'center' }}>
          <h2 className="h-section" style={{ marginBottom: 18 }}>Need something not listed?</h2>
          <p className="body-large" style={{ marginBottom: 26, maxWidth: '34rem', marginInline: 'auto' }}>
            Tell us which integration matters to your firm and what you need it to do.
          </p>
          <Link href="/contact" className="btn btn-ghost btn-lg">Request an integration</Link>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}
