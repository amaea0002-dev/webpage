import Link from 'next/link'
import { Fragment } from 'react'

export const metadata = {
  title: 'Pricing — Amaea',
  description: 'Proposed Amaea plans. Pricing and feature entitlements await confirmation.',
}

// TODO(Milan): verify and approve plan prices, capacities, billing terms, retention and feature entitlements; the cited build spec is not in this repo.
// Counts are deliberately omitted; ../amaea-app/src/lib/extraction/schemas.ts is the taxonomy source.
const TIERS = [
  {
    name: 'Essentials', tag: 'Solo + small firms', price: '£699', cad: 'per month · billed monthly',
    blurb: 'If your audit trail still lives in a SharePoint folder and one person’s memory. Core sweep, audit log, Intelliflo read.',
    cta: 'Book a demo', href: '/waitlist', popular: false,
    feats: [
      ['Up to 100 active clients', true],
      ['Client journey · the core IFA document types', true],
      ['Annual review sweep · COBS 9.5 nightly cron', true],
      ['Append-only audit trail · 7-year retention', true],
      ['Intelliflo read · AES-256-GCM tokens', true],
      ['5 standard PDF reports', true],
      ['AI compliance assistant', false],
      ['Consumer Duty (PS22/9) monitoring', false],
      ['RMAR auto-population', false],
    ] as [string, boolean][],
  },
  {
    name: 'Professional', tag: 'Growing practices', price: '£1,599', cad: 'per month · billed monthly',
    blurb: 'When “we’ll catch it in the annual review” stops being good enough. The full kit for the typical IFA.',
    cta: 'Book a demo', href: '/waitlist', popular: true,
    feats: [
      ['Up to 350 active clients', true],
      ['Everything in Essentials, plus:', true],
      ['AI assistant · retrieval of FCA material', true],
      ['Consumer Duty (PS22/9) · per-outcome record', true],
      ['Vulnerability re-assessment · FG21/1 12-month threshold', true],
      ['RMAR auto-pop · sections B/D/E/G/H, GABRIEL CSV', true],
      ['Consumer Duty board pack from live data', true],
      ['SharePoint integration · availability to confirm', true],
      ['Unlimited reports', true],
    ] as [string, boolean][],
  },
  {
    name: 'Scale', tag: 'Established firms', price: '£2,199', cad: 'per month · billed monthly',
    blurb: 'When the compliance team is more than one person and the board wants the numbers.',
    cta: 'Book a demo', href: '/waitlist', popular: false,
    feats: [
      ['Up to 1,000 active clients', true],
      ['Everything in Professional, plus:', true],
      ['Integration availability subject to confirmation', true],
      ['Board-level packs · live data, gaps flagged', true],
      ['FCA visit preparation pack · evidence per rule', true],
      ['Custom report builder', true],
      ['Dedicated onboarding & training', true],
    ] as [string, boolean][],
  },
  {
    name: 'Enterprise', tag: 'Networks + groups', price: 'Custom', cad: 'tailored to your network',
    blurb: 'Network principals, AR groups, multi-site DA firms. Member-firm walls intact, principal-level audit visibility.',
    cta: 'Contact sales', href: '/contact', popular: false,
    feats: [
      ['Unlimited clients', true],
      ['Everything in Scale, plus:', true],
      ['Multi-site & network support', true],
      ['Open API & custom integrations', true],
      ['FCA visit preparation & mock audit', true],
      ['Custom board packs & regulator reports', true],
      ['On-site team training', true],
      ['Custom contract & volume pricing', true],
    ] as [string, boolean][],
  },
]

const CMP: { group: string; rows: string[][] }[] = [
  { group: 'Capacity', rows: [['Active clients', '100', '350', '1,000', 'Unlimited']] },
  { group: 'Core compliance', rows: [
    ['Client journey tracking (3 stages)', '✓', '✓', '✓', '✓'],
    ['Compliance health dashboard', '✓', '✓', '✓', '✓'],
    ['Smart alerts & deadline reminders', '✓', '✓', '✓', '✓'],
    ['Document checklist per milestone', '✓', '✓', '✓', '✓'],
  ] },
  { group: 'Consumer Duty', rows: [
    ['Consumer Duty health score', '—', '✓', '✓', '✓'],
    ['Vulnerable client tracking', '—', '✓', '✓', '✓'],
    ['Annual Consumer Duty assessment report', '—', '✓', '✓', '✓'],
  ] },
  { group: 'AI & reporting', rows: [
    ['AI compliance assistant', '—', '✓', '✓', '✓'],
    ['RMAR pre-population', '—', '✓', '✓', '✓'],
    ['Reports', '5 standard', 'Unlimited', 'Unlimited + builder', 'Custom board packs'],
    ['Board-level compliance packs', '—', '—', '✓', '✓'],
  ] },
  { group: 'Integrations', rows: [
    ['Intelliflo', '✓', '✓', '✓', '✓'],
    ['SharePoint', '—', '✓', '✓', '✓'],
    ['Open API & custom integrations', '—', '—', '—', '✓'],
  ] },
  { group: 'Support', rows: [['Onboarding & training', 'Self-serve', '✓', '✓', '✓']] },
]

function Cell({ v }: { v: string }) {
  if (v === '✓') return <span className="yes">✓</span>
  if (v === '—') return <span className="no">—</span>
  return <>{v}</>
}

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="section">
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Pricing</div>
          <h1 className="hero-display" style={{ maxWidth: '16ch' }}>
            What it <em>costs.</em>
          </h1>
          <p className="lede" style={{ maxWidth: '42rem', marginTop: 28 }}>
            Three tiers plus one bespoke, priced per active client. No setup fee. Every tier ships
            the full audit trail and 7-year retention; the differences are which workflows are
            switched on.
          </p>
          <p className="body" style={{ marginTop: 16 }}>Draft commercial terms — prices, billing and included features require confirmation before purchase.</p>
        </div>
      </section>

      {/* Tier cards */}
      <section style={{ borderTop: '1px solid var(--rule)' }}>
        <div className="container-wide" style={{ paddingTop: 40, paddingBottom: 72 }}>
          <div className="price-grid">
            {TIERS.map(t => (
              <div key={t.name} className={`price-card${t.popular ? ' popular' : ''}`}>
                <div className="price-tag">{t.tag}</div>
                <div className="price-name">{t.name}</div>
                <div className="price-amount">{t.price}</div>
                <div className="price-cad">{t.cad}</div>
                <p className="price-blurb">{t.blurb}</p>
                <ul className="price-feats">
                  {t.feats.map(([label, on]) => (
                    <li key={label} className={on ? '' : 'off'}>
                      <span className="mk">{on ? '✓' : '✕'}</span>{label}
                    </li>
                  ))}
                </ul>
                <Link href={t.href} className={t.popular ? 'btn btn-primary' : 'btn btn-ghost'}>{t.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For perspective */}
      <section className="section" style={{ background: 'var(--surface)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
        <div className="container-prose">
          <div className="eyebrow" style={{ marginBottom: 16 }}>For perspective</div>
          <div className="perspective">
            <p className="body-large" style={{ marginBottom: 12 }}>
              Professional is <strong>£1,599 / month</strong>, or about <strong>£19k a year</strong>.
            </p>
            <p className="body" style={{ margin: 0 }}>
              Discuss your firm’s workflow and review requirements before choosing a plan.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section">
        <div className="container-wide">
          <div className="eyebrow" style={{ marginBottom: 20 }}>Compare plans</div>
          <div className="cmp-wrap" role="region" aria-label="Compare plans" tabIndex={0}>
            <table className="cmp">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th className="c">Essentials</th>
                  <th className="c">Professional</th>
                  <th className="c">Scale</th>
                  <th className="c">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="prices">
                  <td></td>
                  <td className="c">£699/mo</td>
                  <td className="c">£1,599/mo</td>
                  <td className="c">£2,199/mo</td>
                  <td className="c">Custom</td>
                </tr>
                {CMP.map(section => (
                  <Fragment key={section.group}>
                    <tr className="grp">
                      <td colSpan={5}>{section.group}</td>
                    </tr>
                    {section.rows.map(r => (
                      <tr key={r[0]}>
                        <td>{r[0]}</td>
                        <td className="c"><Cell v={r[1]} /></td>
                        <td className="c"><Cell v={r[2]} /></td>
                        <td className="c"><Cell v={r[3]} /></td>
                        <td className="c"><Cell v={r[4]} /></td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
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
            Book your demo now
          </Link>
        </div>
      </section>
    </>
  )
}
