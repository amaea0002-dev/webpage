import Link from 'next/link'
import Image from 'next/image'

export default function HomeHero() {
  return (
    <section className="brand-hero">
      <div className="container-wide brand-hero-layout">
        <div className="brand-hero-copy">
          <div className="eyebrow">For UK financial planning firms</div>
          <h1>Your <span className="script">Peace of Mind.</span></h1>
          <p className="brand-promise">Every Client, Every Review, Every Document.</p>
          <p className="brand-explanation">Kept against the FCA rule that applies.</p>
          <p className="brand-description">
            A clearer view of your compliance work, with the records and context your team needs to
            review, decide and act.
          </p>
          <div className="brand-hero-actions">
            <Link href="/waitlist" className="btn btn-primary btn-lg">Register your interest</Link>
            <Link href="/#our-story" className="hero-story-link">Our story <span aria-hidden="true">↗</span></Link>
          </div>
          <p className="hero-programme-note">Founders programme · Register ahead of applications opening</p>
        </div>
        <figure className="product-preview">
          <div className="product-preview-heading"><span>Amaea</span><span>Product preview</span></div>
          <a href="/images/product-dashboard.png" target="_blank" rel="noreferrer" aria-label="Open the synthetic demo dashboard image at full size">
            <Image src="/images/product-dashboard.png" width={3000} height={1580} sizes="(max-width: 860px) 100vw, 55vw" alt="Amaea dashboard with a client overview, missing documents and reviews needing attention, using synthetic demo data." loading="eager" fetchPriority="high" />
          </a>
          <figcaption>
            <strong>Your firm, at a glance.</strong>
            <span>Existing prototype · synthetic demo data. Select the image to see it in full.</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
