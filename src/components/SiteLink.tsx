'use client'

import Link, { useLinkStatus } from 'next/link'
import type { ComponentProps } from 'react'

function PendingHint() {
  const { pending } = useLinkStatus()
  return <span className="link-loading-hint" data-pending={pending} aria-hidden="true" />
}

export default function SiteLink({ children, className = '', ...props }: ComponentProps<typeof Link>) {
  return <Link {...props} className={`site-link ${className}`}>{children}<PendingHint /></Link>
}
