import Link from '@/components/SiteLink'
import Image from 'next/image'

export default function HomeHero() {
  return (
    <section className="brand-hero">
      <div className="container-wide brand-hero-layout">
        <div className="brand-hero-copy">
          <div className="eyebrow">For UK financial planning firms</div>
          <h1>Your <span className="script">Peace of Mind.</span></h1>
          <p className="brand-promise">Every Client, Every Review, Every Document.</p>
          <p className="brand-explanation">Linked to source evidence, ready for your team to review.</p>
          <p className="brand-description">
            Compliance software for UK financial planning firms. Bring client records, review work and
            supporting evidence into one place, with your team in control of every decision.
          </p>
          <div className="brand-hero-actions">
            <Link href="/waitlist" className="btn btn-primary btn-lg">Register your interest</Link>
            <Link href="/#why-amaea" className="hero-story-link">Why Amaea <span aria-hidden="true">↗</span></Link>
          </div>
          <p className="hero-programme-note">Founders programme · Register ahead of applications opening</p>
        </div>
        <figure className="product-preview">
          <div className="product-preview-heading"><span>Amaea</span><span>Product preview</span></div>
          <a className="product-preview-window" href="/product/dashboard-20261006.jpg" target="_blank" rel="noreferrer" aria-label="Open the fictional demo dashboard screenshot at full size">
            <Image src="/product/dashboard-20261006.jpg" width={1440} height={1000} sizes="(max-width: 860px) 100vw, 55vw" alt="The current Amaea dashboard with recorded findings, overdue reviews and evidence gaps, using fictional records." loading="eager" fetchPriority="high" />
          </a>
          <figcaption>
            <strong>Your firm, at a glance.</strong>
            <span>Working app · fictional records. Open the full dashboard screenshot.</span>
          </figcaption>
          <ul className="preview-highlights" aria-label="In the workspace"><li>Client overview</li><li>Reviews needing attention</li><li>Missing documents</li></ul>
        </figure>
      </div>
    </section>
  )
}
