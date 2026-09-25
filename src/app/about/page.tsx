import Link from 'next/link'
import { CompanyStory, MissionSection, ValuesSection } from '@/components/CompanySections'

export const metadata = {
  title: 'About — Amaea',
  description: 'Meet Hasna, CEO and Co-founder of Amaea, and the mission and values behind Your Peace of Mind.',
}

export default function AboutPage() {
  return (
    <>
      <section className="section page-intro">
        <div className="container-wide">
          <div className="eyebrow">About Amaea</div>
          <h1 className="hero-display">Your Peace of Mind.</h1>
          <p className="lede">Compliance technology built around the people who do the work.</p>
        </div>
      </section>
      <MissionSection />
      <CompanyStory />
      <ValuesSection />
      <section className="section company-closing">
        <div className="container-text">
          <h2 className="h-section">Help shape the next chapter.</h2>
          <p>Tell us about your firm and the compliance work you want to make simpler.</p>
          <Link href="/waitlist" className="btn btn-lg">Register your interest</Link>
        </div>
      </section>
    </>
  )
}
