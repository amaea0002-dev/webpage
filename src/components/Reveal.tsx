'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/** Visible by default, with a once-only enhancement when it enters the viewport. */
export default function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = ref.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!element || preference.matches || !('IntersectionObserver' in window)) return
    let animation: Animation | undefined
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return
      observer.disconnect()
      animation = element.animate([
        { opacity: 0, transform: 'translateY(18px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 560, delay, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'backwards' })
    }, { threshold: 0.08 })
    const cancel = () => { observer.disconnect(); animation?.cancel() }
    observer.observe(element)
    preference.addEventListener('change', cancel)
    element.addEventListener('focusin', cancel)
    return () => {
      cancel()
      preference.removeEventListener('change', cancel)
      element.removeEventListener('focusin', cancel)
    }
  }, [delay])
  return <div ref={ref} className={className} data-reveal="">{children}</div>
}
