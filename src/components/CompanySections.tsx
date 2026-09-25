const VALUES = [
  {
    title: 'Simplicity',
    points: [
      ['Guardians of Your Time', 'We simplify compliance workflows so you can focus on building client relationships.'],
      ['Jargon-Free Practice', 'We make regulatory information clearer, with dashboard alerts that help your team decide what to do next.'],
    ],
  },
  {
    title: 'Integrity',
    points: [
      ['Protecting Your Independence', 'Your reputation is your business. We build around clear records and supporting evidence to help safeguard it.'],
      ['Fiduciary Standard', 'We aim to handle platform data with the care and ethical standards you bring to your clients.'],
    ],
  },
  {
    title: 'Built for Planners',
    points: [
      ['Smarter Back-Offices', 'We design tools specifically for financial compliance, reducing manual bottlenecks in your daily routine.'],
      ['Empowering Advice', 'Our technology supports the compliance work around your advice, while your team retains the judgement and sign-off.'],
    ],
  },
  {
    title: 'Respect',
    points: [
      ['Honouring Your Autonomy', 'We respect your practice’s independence and treat its data and business insights with care.'],
      ['Peer-to-Peer Partnership', 'We view our clients as professional equals, collaborating transparently to solve industry hurdles.'],
    ],
  },
  {
    title: 'Continuous Innovation',
    points: [
      ['Your Regulatory Radar', 'We keep improving how regulatory information reaches your team, so qualified staff can assess what matters to your firm.'],
      ['Enterprise Power', 'We continuously develop our platform to bring capable, practical compliance technology to financial planners.'],
    ],
  },
]

export function MissionSection() {
  return (
    <section className="company-mission" aria-labelledby="mission-title">
      <div className="container-wide mission-layout">
        <h2 id="mission-title" className="eyebrow">Our mission</h2>
        <p>
          To give firms peace of mind with compliance so that they can spend time on what matters most,
          their clients, growing their firm and delivering exceptional advice.
        </p>
      </div>
    </section>
  )
}

export function CompanyStory() {
  return (
    <section id="our-story" className="section company-story" aria-labelledby="story-title">
      <div className="container-wide company-story-layout">
        <figure className="founder-figure">
          {/* Portrait intentionally left empty at the founder's request. */}
          <div className="founder-portrait-placeholder" role="img" aria-label="Reserved space for Hasna’s portrait" />
          <figcaption>This is Hasna, the crisp-loving, needle-hating CEO and Co-founder of Amaea.</figcaption>
        </figure>
        <div className="company-story-copy">
          <div className="eyebrow">Our story</div>
          <h2 id="story-title" className="h-page">Built by someone who <em>lived the problem.</em></h2>
          <p>
            We have all been there, the FCA wants documentation, the review log has a gap, and the next
            two hours vanish into four systems and three files that all carry the same name.
          </p>
          <p>
            Hasna lived that for years, not as a story she heard from clients, but as her own week, over
            and over. Compliance had quietly become the thing standing between good firms and the work
            they were there to do.
          </p>
          <p>
            So she built the solution she hoped was out there for her. Amaea keeps every client, every
            review, every document against the rule that applies, helping your team bring the evidence
            together and make informed decisions.
          </p>
          <p className="story-signature">Your peace of mind, and your time back.</p>
        </div>
      </div>
    </section>
  )
}

export function ValuesSection() {
  return (
    <section id="our-values" className="section company-values" aria-labelledby="values-title">
      <div className="container-wide">
        <div className="values-intro">
          <div className="eyebrow">Our values</div>
          <h2 id="values-title" className="h-page">Built around <em>your practice.</em></h2>
          <p className="body-large">The principles that guide what we build and how we work with you.</p>
        </div>
        <div className="company-value-list">
          {VALUES.map((value, index) => (
            <article className="company-value" key={value.title}>
              <div className="value-heading">
                <span className="value-number" aria-hidden="true">0{index + 1}</span>
                <h3 className="h-sub">{value.title}</h3>
              </div>
              <dl className="value-points">
                {value.points.map(([title, body]) => (
                  <div key={title}>
                    <dt>{title}</dt>
                    <dd>{body}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
