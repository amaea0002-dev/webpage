'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './story.css'

const FILES = ['Fact find 2019.pdf', 'Annual review 2022.pdf', 'Correspondence.pdf', 'Suitability report signed.pdf']

function FileIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M6 3h8l4 4v14H6zM14 3v5h4M9 12h6M9 16h4" /></svg>
}

function Files({ found = false }: { found?: boolean }) {
  return <div className={`story-files${found ? ' found' : ''}`}>
    <div className="story-files-bar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10" cy="10" r="6" /><path d="m14.5 14.5 5 5" /></svg><span>Andrew Smith</span><span className="story-file-tag">CLIENT FILE</span></div>
    <div className="story-file-rows">{FILES.map((file, i) => <div key={file} className={`story-file-item${found && i === 3 ? ' selected' : ''}`}><FileIcon /><span>{file}</span><span className="file-end" aria-hidden="true">{found && i === 3 ? '↗' : 'PDF'}</span></div>)}</div>
    <div className="story-file-foot">{found ? 'Document located. Check the details.' : 'Looking through the client record…'}</div>
  </div>
}

function Caption({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="story-scene-caption"><span>{number} / {children}</span><span>SYNTHETIC EXAMPLE</span></div>
}

export default function RefinedStory() {
  const root = useRef<HTMLElement>(null)
  const [reading, setReading] = useState(false)

  useEffect(() => {
    const wrap = root.current
    if (!wrap || reading) return
    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference) and (min-height: 600px)', () => {
      wrap.classList.add('is-animated')
      const scenes = Array.from(wrap.querySelectorAll<HTMLElement>('.clean-scene'))
      const stage = wrap.querySelector<HTMLElement>('.clean-story-stage')!
      const progress = wrap.querySelector<HTMLElement>('.clean-progress span')!
      const activate = (index: number) => scenes.forEach((scene, i) => { scene.inert = i !== index })
      const ctx = gsap.context(() => {
        gsap.set(scenes, { autoAlpha: 0 })
        gsap.set(scenes[0], { autoAlpha: 1, clipPath: 'circle(0% at 50% 50%)' })
        gsap.set(scenes[5], { autoAlpha: 1, clipPath: 'circle(0% at 50% 50%)' })
        activate(0)
        const timeline = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            trigger: wrap, start: 'top top', end: '+=420%', pin: stage,
            scrub: .32, anticipatePin: 1, invalidateOnRefresh: true,
          },
          onUpdate: () => {
            const t = timeline.time()
            activate(t < 1.25 ? 0 : t < 2.35 ? 1 : t < 3.5 ? 2 : t < 4.8 ? 3 : t < 5.65 ? 4 : 5)
          },
        })
        // A circle opens the story. The title lands quickly, then holds still.
        timeline.to(scenes[0], { clipPath: 'circle(150% at 50% 50%)', duration: .7 }, 0)
          .from('.clean-open .story-headline', { opacity: 0, y: 14, duration: .4 }, .25)
          .to(scenes[0], { autoAlpha: 0, duration: .25 }, 1.1)
          .to(scenes[1], { autoAlpha: 1, duration: .25 }, 1.2)
          .from('.clean-search .story-files', { y: 14, duration: .45 }, 1.2)
          // Search and found use the exact same geometry; only the emphasis changes.
          .to(scenes[1], { autoAlpha: 0, duration: .22 }, 2.25)
          .to(scenes[2], { autoAlpha: 1, duration: .22 }, 2.25)
          .from('.clean-found .selected', { backgroundColor: 'rgba(255,255,255,0)', duration: .35 }, 2.3)
          .to(scenes[2], { autoAlpha: 0, y: -8, duration: .25 }, 3.35)
          .to(scenes[3], { autoAlpha: 1, duration: .25 }, 3.45)
          .from('.record-pair', { y: 14, duration: .4 }, 3.45)
          .from('.record-difference', { opacity: .3, duration: .4 }, 3.85)
          .to(scenes[3], { autoAlpha: 0, duration: .2 }, 4.7)
          .to(scenes[4], { autoAlpha: 1, duration: .2 }, 4.75)
          .from('.clean-reveal .story-headline', { y: 10, duration: .35 }, 4.75)
          .to(scenes[5], { clipPath: 'circle(150% at 50% 50%)', duration: .65 }, 5.4)
          .from('.clean-resolve .clean-scene-content', { opacity: 0, y: 12, duration: .4 }, 5.65)
          .to({}, { duration: .85 }, 6.05)
        gsap.to(progress, { scaleX: 1, ease: 'none', scrollTrigger: { trigger: wrap, start: 'top top', end: '+=420%', scrub: true } })
      }, wrap)
      return () => {
        ctx.revert()
        scenes.forEach(scene => { scene.inert = false })
        wrap.classList.remove('is-animated')
      }
    })
    return () => media.revert()
  }, [reading])

  return <section className="clean-story" ref={root} aria-label="The Andrew Smith story, synthetic example">
    <div className="clean-story-stage">
      <article className="clean-scene clean-open">
        <Caption number="01">THE REQUEST</Caption>
        <div className="clean-scene-content"><p className="story-overline">A FAMILIAR MOMENT</p><h2 className="story-headline">The FCA is requesting<br />documentation.<br /><span>On Friday.</span></h2><div className="story-small-rule" /></div>
      </article>
      <article className="clean-scene clean-search">
        <Caption number="02">THE SEARCH</Caption>
        <div className="clean-scene-content"><h2 className="story-title">It’s in here somewhere…</h2><Files /></div>
      </article>
      <article className="clean-scene clean-found">
        <Caption number="03">THE DOCUMENT</Caption>
        <div className="clean-scene-content"><h2 className="story-title">Found. The signed<br />suitability report.</h2><Files found /></div>
      </article>
      <article className="clean-scene clean-compare">
        <Caption number="04">THE DETAIL</Caption>
        <div className="clean-scene-content"><h2 className="story-title">Same name.<br /><span>Different spouse.</span></h2><div className="record-pair">{[['Suitability report', 'Kate'], ['Client record · CRM', 'Emma']].map(([source, spouse]) => <div className="story-record" key={source}><div className="record-source"><FileIcon /><span>{source}</span></div><p className="record-person">Andrew Smith</p><div className="record-divider" /><div className="record-difference"><span>Spouse</span><strong>{spouse}</strong></div></div>)}</div><p className="story-understatement">It’s the wrong Andrew Smith.</p></div>
      </article>
      <article className="clean-scene clean-reveal">
        <Caption number="05">THE REALISATION</Caption>
        <div className="clean-scene-content"><div className="names-motif" aria-hidden="true"><span>AS</span><span>AS</span></div><h2 className="story-headline">There are two<br /><span>Andrew Smiths.</span></h2></div>
      </article>
      <article className="clean-scene clean-resolve">
        <Caption number="06">THE WAY FORWARD</Caption>
        <div className="clean-scene-content"><p className="resolve-question">Have you ever felt that pain?</p><h2 className="story-headline">Amaea was built<br />to solve exactly that<br /><span>and more.</span></h2><Link href="/waitlist" className="btn btn-primary btn-lg">Book a demo</Link></div>
      </article>
      <div className="clean-story-toolbar"><div className="clean-progress" aria-hidden="true"><span /></div><button type="button" onClick={() => setReading(!reading)} aria-pressed={reading}>{reading ? 'Enable animation' : 'Read without animation'}</button><a href="#original-platform">Skip story <span aria-hidden="true">↓</span></a></div>
    </div>
  </section>
}
