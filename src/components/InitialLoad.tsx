'use client'

import { useSyncExternalStore } from 'react'
import LoadingMark from './LoadingMark'

function subscribe(onChange: () => void) {
  window.addEventListener('load', onChange)
  return () => window.removeEventListener('load', onChange)
}

export default function InitialLoad() {
  const loaded = useSyncExternalStore(subscribe, () => document.readyState === 'complete', () => false)
  return (
    <div className="initial-loader" data-loaded={loaded} aria-hidden="true">
      <LoadingMark />
      <span><strong>amaea</strong><span>Your Peace of Mind.</span></span>
    </div>
  )
}
