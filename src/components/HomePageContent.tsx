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
      <section className="section product-walkthrough" aria-labelledby="walkthrough-title">
        <div className="container-wide">
          <div className="eyebrow">An example of the workflow we’re building</div>
          <h2 id="walkthrough-title" className="h-page">From an open question<br />to a recorded decision.</h2>
          <p className="body-large walkthrough-intro">One client review, with the evidence and context together. Your team checks the findings and decides what happens next.</p>
          <ol className="walkthrough-steps">
            <li><span aria-hidden="true">01</span><h3>Start with the client</h3><p>Open the right client record and see the review that needs attention.</p></li>
            <li><span aria-hidden="true">02</span><h3>Check the evidence</h3><p>Bring the supporting document alongside the question, with its source visible.</p></li>
            <li><span aria-hidden="true">03</span><h3>Read the rule in context</h3><p>A qualified person assesses the relevant regulatory context and how it applies.</p></li>
            <li><span aria-hidden="true">04</span><h3>Record the decision</h3><p>Keep the reviewer’s judgement, follow-up and sign-off with the review.</p></li>
          </ol>
          <p className="foot walkthrough-note">Illustrative workflow, not a compliance determination. The dashboard above is an existing prototype; we’re shaping the next release with participating firms.</p>
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
