'use client'

import Link from '@/components/SiteLink'
import Image from 'next/image'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { isFullSite, isPublishedRoute } from '@/lib/site-mode'

// Recruitment navigation stays on the public homepage; the full release links its pages.
const NAV = isFullSite() ? [
  { href: '/about', label: 'About' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
].filter(item => isPublishedRoute(item.href)) : [
  { href: '/#original-platform', label: 'The platform' },
  { href: '/#our-story', label: 'Meet Hasna' },
  { href: '/#our-values', label: 'Our values' },
]

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
    </svg>
  )
}
function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}
function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg data-open={open} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path className="burger-top" d="M4 12h16" />
      <path className="burger-middle" d="M4 12h16" />
      <path className="burger-bottom" d="M4 12h16" />
    </svg>
  )
}

function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  return () => observer.disconnect()
}

function readTheme(): 'light' | 'dark' {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export default function SiteHeader() {
  // Initial theme is applied pre-paint by the inline script in layout.tsx.
  const theme = useSyncExternalStore(subscribeToTheme, readTheme, () => 'light')
  const [menuOpen, setMenuOpen] = useState(false)

  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!menuOpen) return
    const dismiss = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuButton.current?.focus()
    }
    document.addEventListener('keydown', dismiss)
    return () => document.removeEventListener('keydown', dismiss)
  }, [menuOpen])

  function toggle() {
    const next = theme === 'light' ? 'dark' : 'light'
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem('amaea-theme', next)
    } catch {}
  }

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="site-mark" aria-label="Amaea — home" onClick={() => setMenuOpen(false)}>
          <Image unoptimized src="/amaea-a-plum.png" alt="" className="logo-light" width={38} height={38} />
          <Image unoptimized src="/amaea-a-white.png" alt="" className="logo-dark" width={38} height={38} />
          <span className="site-wordmark">amaea</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          {NAV.map(n => (
            <Link key={n.href} href={n.href}>{n.label}</Link>
          ))}
        </nav>

        <div className="site-cta">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-pressed={theme === 'dark'}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href="https://app.amaea.co.uk/login" className="btn btn-ghost hide-mobile">Sign in</a>
          <Link href="/waitlist" className="btn btn-primary">Register interest</Link>
          <button
            type="button"
            className="nav-burger"
            ref={menuButton}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <BurgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="nav-menu" aria-label="Mobile">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)}>{n.label}</Link>
          ))}
          <a href="https://app.amaea.co.uk/login" onClick={() => setMenuOpen(false)}>Sign in</a>
        </nav>
      )}
    </header>
  )
}
