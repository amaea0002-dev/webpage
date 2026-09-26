'use client'

import type { SubmitState } from './useEnquirySubmit'

/**
 * What happened after submitting, announced to screen readers.
 *
 * `role="status"` (polite) rather than an alert: the visitor has just acted,
 * so the news can wait for a pause in speech. It stays in the page rather
 * than replacing the form, so a failed submission keeps what was typed.
 */
export function FormStatus({ state, message, sent }: { state: SubmitState; message: string; sent: string }) {
  const text = state === 'sending' ? 'Sending…' : state === 'sent' ? sent : state === 'error' ? message : ''
  return (
    <div role="status" aria-live="polite" tabIndex={-1} data-error-summary={state === 'error' ? '' : undefined} className={text ? 'form-status' : undefined} data-state={text ? state : undefined}>
      {text}
    </div>
  )
}

/** The message under a field the visitor needs to fix. */
export function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null
  return <span className="field-error" id={id}>{error}</span>
}

/** Wires a field to its error message for assistive tech. */
export function errorProps(name: string, fieldErrors: Record<string, string>) {
  return fieldErrors[name]
    ? { 'aria-invalid': true as const, 'aria-describedby': `${name}-error` }
    : {}
}
