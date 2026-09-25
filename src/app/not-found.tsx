import Link from 'next/link'

export const metadata = { title: 'Not found · Amaea' }

// Also what an unreleased route renders: the proxy rewrites those here with a
// 404, so this page must not hint at what is hidden — to a visitor there is no
// difference between a page that never existed and one that is not published yet.
export default function NotFound() {
  return (
    <section className="section">
      <div className="container-text" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>404</div>
        <h1 className="h-page" style={{ marginBottom: 24 }}>
          There&apos;s nothing at <em>this address.</em>
        </h1>
        <p className="body-large" style={{ marginBottom: 32 }}>
          The link may be old, or mistyped. Everything we have published is one step away.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn-primary btn-lg">Back to the home page</Link>
          <Link href="/waitlist" className="btn btn-ghost btn-lg">Founders programme</Link>
        </div>
      </div>
    </section>
  )
}
