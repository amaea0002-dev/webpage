import type { ReactNode } from 'react'
import Link from 'next/link'
import HomeHero from '@/components/HomeHero'
import HomeStory from '@/components/HomeStory'
import { CompanyStory, MissionSection, ValuesSection } from '@/components/CompanySections'
import { isFullSite } from '@/lib/site-mode'

const WORKFLOWS = [
  { title: 'Every Client', body: 'Keep the person at the centre, with their documents, review history and open questions together.' },
  { title: 'Every Review', body: 'See what needs attention and keep a clear record of the decisions your team makes.' },
  { title: 'Every Document', body: 'Bring the supporting evidence into view, alongside the regulatory context for a qualified person to assess.' },
]

export default function HomePageContent({ story }: { story?: ReactNode }) {
  return (
    <>
      <HomeHero />
      {story ?? <HomeStory />}
      <section id="original-platform" className="platform-summary" aria-labelledby="platform-title">
        <div className="container-wide">
          <div className="platform-summary-intro">
            <h2 id="platform-title" className="eyebrow">The platform we’re building</h2>
            {isFullSite() && <Link href="/features" className="text-link">Explore the platform <span aria-hidden="true">↗</span></Link>}
          </div>
          <div className="workflow-grid">
            {WORKFLOWS.map((workflow, index) => (
              <article key={workflow.title}>
                <span className="value-number" aria-hidden="true">0{index + 1}</span>
                <h3 className="h-sub">{workflow.title}</h3>
                <p className="body">{workflow.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <MissionSection />
      <CompanyStory />
      <ValuesSection />
      <section className="section company-closing">
        <div className="container-text">
          <h2 className="h-page">More time for <em>what matters.</em></h2>
          <p>Help us build a clearer way to manage compliance. Register your firm’s interest in the founders programme.</p>
          <Link href="/waitlist" className="btn btn-lg">Register your interest</Link>
        </div>
      </section>
    </>
  )
}
