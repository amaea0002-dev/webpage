import Link from '@/components/SiteLink'
import Image from 'next/image'
import { isPublishedRoute } from '@/lib/site-mode'

const COLS = [
  {
    label: 'Compliance capabilities',
    items: [
      { href: '/consumer-duty',      label: 'Consumer Duty' },
      { href: '/annual-reviews',     label: 'Annual reviews' },
      { href: '/rmar-filing',        label: 'RMAR filing' },
      { href: '/vulnerable-clients', label: 'Vulnerable clients' },
    ],
  },
  {
    label: 'Platform & integrations',
    items: [
      { href: '/features',     label: 'Features' },
      { href: '/integrations', label: 'Integrations' },
      { href: '/pricing',      label: 'Pricing' },
      { href: '/glossary',     label: 'FCA glossary' },
    ],
  },
  {
    label: 'Privacy & information',
    items: [
      { href: '/security', label: 'Security & encryption' },
      { href: '/privacy',  label: 'Privacy' },
      { href: '/cookies',  label: 'Cookies' },
      { href: '/terms',    label: 'Terms' },
    ],
  },
  {
    label: 'Company',
    items: [
      { href: '/about',    label: 'About' },
      { href: '/founders', label: 'Founders programme' },
      { href: '/contact',  label: 'Contact' },
      { href: '/waitlist', label: 'Register your firm' },
      { href: 'mailto:hello@amaea.co.uk', label: 'hello@amaea.co.uk' },
    ],
  },
]
  // Only link pages that are public in this mode (lib/site-mode); a column
  // with nothing left in it disappears entirely.
  .map(col => ({ ...col, items: col.items.filter(item => item.href.startsWith('mailto:') || isPublishedRoute(item.href)) }))
  .filter(col => col.items.length > 0)

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-grid">
          <div>
            <div className="footer-mark" style={{ marginBottom: 14 }}>
              <Image unoptimized src="/amaea-a-white.png" alt="" width={40} height={40} />
              <span className="footer-wordmark">amaea</span>
            </div>
            <p style={{ color: 'rgba(254,252,250,0.72)', fontSize: 14, maxWidth: 300, lineHeight: 1.55 }}>
              Your Peace of Mind. Every Client, Every Review, Every Document.
              Kept against the FCA rule that applies.
            </p>
          </div>

          {COLS.map(col => (
            <div key={col.label}>
              <div className="footer-col-label">{col.label}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {col.items.map(i => (
                  <Link key={i.href + i.label} href={i.href} style={{ fontSize: 14 }}>{i.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(254,252,250,0.14)',
            paddingTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 8,
            fontSize: 12,
            color: 'rgba(254,252,250,0.5)',
            letterSpacing: '0.02em',
          }}
        >
          <div>© 2026 Amaea. {/* TODO(Milan): verify legal entity and registration wording against the privacy notice. */}</div>
          <div>Findings and drafts require review and sign-off by qualified compliance staff.</div>
        </div>
      </div>
    </footer>
  )
}
