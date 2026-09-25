'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// All narrative text lives in real DOM (crawlable). The scrubbed timeline is
// layered on only when motion is welcome; otherwise scenes stack and flow.
export default function HomeStory() {
  const wrapRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const stage = stageRef.current
    if (!wrap || !stage) return
    gsap.registerPlugin(ScrollTrigger)
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      wrap.classList.add('is-enhanced')
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(stage)
      gsap.set(q('.scene'), { autoAlpha: 0 })
      gsap.set('.scene-open', { autoAlpha: 1, clipPath: 'circle(0% at 50% 50%)' })
      gsap.set('.scene-resolve', { autoAlpha: 1, clipPath: 'circle(0% at 50% 50%)' })
      gsap.set(['.scene-resolve .line-2', '.scene-resolve .resolve-cta'], { autoAlpha: 0, y: 16 })

      const tl = gsap.timeline({
        defaults: { ease: 'power2.inOut' },
        scrollTrigger: {
          trigger: wrap,
          start: 'top top',
          end: '+=680%',
          scrub: 0.6,
          pin: stage,
          anticipatePin: 1,
        },
      })

      // 1 — black expands from a point; the deadline lands
      tl.to('.scene-open', { clipPath: 'circle(150% at 50% 50%)', duration: 1.1 })
        .from('.scene-open .scene-line', { autoAlpha: 0, y: 18, duration: 0.6 }, '-=0.35')
        .to({}, { duration: 0.6 })

      // 2 — the search
      tl.to('.scene-open', { autoAlpha: 0, duration: 0.4 })
        .to('.scene-search', { autoAlpha: 1, duration: 0.4 }, '<')
        .from('.scene-search .glass', { scale: 0.6, autoAlpha: 0, duration: 0.6, ease: 'back.out(1.4)' }, '<')
        .from('.scene-search .scene-line', { autoAlpha: 0, y: 12, duration: 0.5 }, '-=0.2')
        .to({}, { duration: 0.5 })

      // 3 — found
      tl.to('.scene-search', { autoAlpha: 0, duration: 0.4 })
        .to('.scene-found', { autoAlpha: 1, duration: 0.4 }, '<')
        .from('.scene-found .file-row', { autoAlpha: 0, x: -12, stagger: 0.08, duration: 0.4 }, '<')
        .from('.scene-found .scene-line', { autoAlpha: 0, y: 12, duration: 0.5 })
        .to({}, { duration: 0.5 })

      // 4 — the contradiction
      tl.to('.scene-found', { autoAlpha: 0, duration: 0.4 })
        .to('.scene-contra', { autoAlpha: 1, duration: 0.4 }, '<')
        .from('.scene-contra .twin-card', { autoAlpha: 0, y: 18, stagger: 0.14, duration: 0.5 }, '<')
        .from('.scene-contra .scene-line', { autoAlpha: 0, y: 12, duration: 0.5 })
        .to({}, { duration: 0.5 })

      // 5 — cut to black, abruptly
      tl.to('.scene-contra', { autoAlpha: 0, duration: 0.12 })
        .to('.scene-reveal', { autoAlpha: 1, duration: 0.12 }, '<')
        .from('.scene-reveal .scene-line', { autoAlpha: 0, scale: 0.94, duration: 0.35 })
        .to({}, { duration: 0.7 })

      // 6 — light grows back from centre; the turn
      tl.to('.scene-resolve', { clipPath: 'circle(150% at 50% 50%)', duration: 0.9 })
        .from('.scene-resolve .line-1', { autoAlpha: 0, y: 16, duration: 0.5 }, '<0.3')
        .to('.scene-resolve .line-1', { autoAlpha: 0, y: -12, duration: 0.4 }, '+=0.5')
        .to('.scene-resolve .line-2', { autoAlpha: 1, y: 0, duration: 0.5 }, '<0.1')
        .to('.scene-resolve .resolve-cta', { autoAlpha: 1, y: 0, duration: 0.4 })
        .to({}, { duration: 0.6 })
    }, wrap)

      return () => {
        ctx.revert()
        wrap.classList.remove('is-enhanced')
      }
    })
    // Pinning changes the height above the homepage anchors. A direct link
    // or navigation from another page may have scrolled before that height
    // existed, so align the requested section after the pin is measured.
    const hash = window.location.hash
    const section = ['#original-platform', '#our-story', '#our-values'].includes(hash)
      ? document.getElementById(hash.slice(1))
      : null
    const frame = section ? requestAnimationFrame(() => {
      ScrollTrigger.refresh()
      if (window.location.hash === hash) section.scrollIntoView({ behavior: 'instant', block: 'start' })
    }) : null

    return () => {
      if (frame !== null) cancelAnimationFrame(frame)
      media.revert()
    }
  }, [])

  return (
    <section className="story-wrap" ref={wrapRef} aria-label="Why Amaea exists — synthetic example">
      {/* Synthetic names and documents for illustration only; this is not a customer account. */}
      <div className="story-stage" ref={stageRef}>
        {/* 1 */}
        <div className="scene scene-open dark">
          <p className="scene-line">The FCA is requesting documentation. On Friday.</p>
        </div>

        {/* 2 */}
        <div className="scene scene-search dark">
          <div className="scene-inner">
            <svg className="glass" width="108" height="108" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <circle cx="21" cy="21" r="13" />
              <line x1="30.5" y1="30.5" x2="41" y2="41" />
            </svg>
            <p className="scene-line sm">It’s in here somewhere…</p>
          </div>
        </div>

        {/* 3 */}
        <div className="scene scene-found dark">
          <div className="scene-inner">
            <div className="file-list">
              <div className="file-row"><span className="dot" />Fact find — 2019.pdf</div>
              <div className="file-row"><span className="dot" />Annual review — 2022.pdf</div>
              <div className="file-row"><span className="dot" />Correspondence.pdf</div>
              <div className="file-row found"><span className="dot" />Suitability report — signed.pdf</div>
            </div>
            <p className="scene-line sm">Found — the missing signed suitability report.</p>
          </div>
        </div>

        {/* 4 */}
        <div className="scene scene-contra dark">
          <div className="scene-inner">
            <div className="twin">
              <div className="twin-card">
                <div className="src">Suitability report</div>
                <div className="nm">Andrew Smith</div>
                <div className="sp">Spouse<b>Kate</b></div>
              </div>
              <div className="twin-card">
                <div className="src">Client record · CRM</div>
                <div className="nm">Andrew Smith</div>
                <div className="sp">Spouse<b>Emma</b></div>
              </div>
            </div>
            <p className="scene-line sm">Same name, different spouse — it’s the wrong Andrew Smith.</p>
          </div>
        </div>

        {/* 5 */}
        <div className="scene scene-reveal dark">
          <p className="scene-line">There are two Andrew Smiths.</p>
        </div>

        {/* 6 */}
        <div className="scene scene-resolve light">
          <div className="scene-inner">
            <p className="scene-line line-1">Have you ever felt that pain?</p>
            <p className="scene-line line-2" style={{ color: 'var(--plum)' }}>
              Amaea was built to solve exactly that — and more.
            </p>
            <div className="resolve-cta">
              <Link href="/waitlist" className="btn btn-primary btn-lg">Join the founders programme</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
