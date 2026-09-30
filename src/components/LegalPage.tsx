import ReferenceInteractions from "@/components/reference/ReferenceInteractions";
// Shared shell for the three legal pages. Same chrome + structure; only the
// body differs. Keeps each legal route tiny.

import type { ReactNode } from 'react'

export default function LegalPage({ title, eyebrow, lastUpdated, children }: {
  title:    string
  eyebrow:  string
  lastUpdated: string
  children: ReactNode
}) {
  return (
    <>
      <section className="section">
        <div className="container-wide">
          <div className="article-meta" style={{ marginBottom: 28 }}>
            <span style={{ color: 'var(--plum)' }}>{eyebrow}</span>
            <span className="sep">·</span>
            <span>Last updated {lastUpdated}</span>
          </div>
          <h1 className="hero-display" style={{ maxWidth: '24ch', marginBottom: 32 }}>{title}</h1>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--rule)', paddingBottom: 96 }}>
        <div className="container-prose legal-prose" style={{ paddingTop: 48 }}>
          {children}
        </div>
      </section>
      <ReferenceInteractions />
    </>
  )
}
