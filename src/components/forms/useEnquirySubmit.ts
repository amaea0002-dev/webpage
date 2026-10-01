'use client'

import { useCallback, useState } from 'react'
import { validateEnquiry, type EnquiryKind } from '@/lib/forms/validate'

export type SubmitState = 'idle' | 'sending' | 'sent' | 'error'

/**
 * Submitting a public form: the same validation the server runs, so a mistake
 * is caught without a round trip, then one POST to /api/enquiries.
 *
 * What the caller gets: the current state, per-field errors, and a message to
 * show when something goes wrong. Nothing is cleared on failure, a person who
 * typed a paragraph keeps it.
 */
export function useEnquirySubmit(kind: EnquiryKind) {
  const [state, setState]   = useState<SubmitState>('idle')
  const [message, setMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const [reference, setReference] = useState('')

  const clearFieldError = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    const name = (event.target as HTMLInputElement).name
    setFieldErrors(current => {
      if (!current[name]) return current
      const next = { ...current }
      delete next[name]
      return next
    })
  }, [])

  const focusError = (form: HTMLFormElement, errors: Record<string, string>) => {
    requestAnimationFrame(() => {
      const field = form.elements.namedItem(Object.keys(errors)[0]) as HTMLElement | null
      const details = field?.closest('details')
      if (details) details.open = true
      if (field) { field.focus(); field.scrollIntoView({ block: 'center', behavior: 'instant' }) }
      else form.querySelector<HTMLElement>('[data-error-summary]')?.focus()
    })
  }

  const submit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    const values = Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, typeof v === 'string' ? v : '']),
    )

    const local = validateEnquiry(kind, values)
    if (!local.ok) {
      setState('error')
      setFieldErrors(local.errors)
      setMessage('Please check the highlighted fields.')
      focusError(form, local.errors)
      return
    }

    setState('sending')
    setFieldErrors({})
    setMessage('')

    try {
      const res = await fetch('/api/enquiries', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ ...values, kind }),
        signal: AbortSignal.timeout(20_000),
      })
      const body = await res.json().catch(() => ({})) as { ok?: boolean; error?: string; fields?: Record<string, string>; reference?: string }

      if (!res.ok) {
        setState('error')
        setFieldErrors(body.fields ?? {})
        setMessage(body.error ?? (res.status === 429 ? 'You have sent several messages recently. Please try again in ten minutes, or email hello@amaea.co.uk.' : 'We could not send that just now. Please try again, or email hello@amaea.co.uk.'))
        focusError(form, body.fields ?? {})
        return
      }

      if (!body.ok) throw new Error('Unconfirmed submission')
      setReference(body.reference ?? '')
      setState('sent')
    } catch {
      setState('error')
      setMessage('We could not reach the server. Check your connection and try again, or email hello@amaea.co.uk.')
      focusError(form, {})
    }
  }, [kind])

  return { state, message, fieldErrors, reference, submit, clearFieldError }
}

/** The hidden field a bot fills in and a person never sees. */
export const honeypotProps = {
  name:         'company',
  tabIndex:     -1,
  autoComplete: 'off',
  'aria-hidden': true as const,
  style:        { position: 'absolute' as const, left: '-9999px', width: 1, height: 1, opacity: 0 },
}
