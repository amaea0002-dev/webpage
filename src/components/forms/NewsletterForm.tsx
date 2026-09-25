'use client'

import { useEnquirySubmit, honeypotProps } from './useEnquirySubmit'
import { FormStatus, FieldError, errorProps } from './FormStatus'

export function NewsletterForm() {
  const { state, message, fieldErrors, submit } = useEnquirySubmit('newsletter')
  const sending = state === 'sending'

  return (
    <>
      <form
        style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap', maxWidth: '32rem', marginInline: 'auto' }}
        onSubmit={submit}
        noValidate
      >
        <label htmlFor="newsletter-email" className="sr-only">Work email</label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@firm.co.uk"
          {...errorProps('email', fieldErrors)}
          style={{ flex: 1, minWidth: 220, padding: '12px 16px', background: 'rgba(254, 252, 250,0.06)', border: '1px solid rgba(254, 252, 250,0.18)', color: 'var(--band-foreground)', borderRadius: 4, fontSize: 15 }}
        />
        <input {...honeypotProps} />
        <button className="btn btn-inv" type="submit" disabled={sending || state === 'sent'}>
          {sending ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>

      <div style={{ maxWidth: '32rem', marginInline: 'auto', marginTop: 14 }}>
        <FieldError id="email-error" error={fieldErrors.email} />
        <FormStatus
          state={state}
          message={message}
          sent="Thank you — you are on the list. Every issue has an unsubscribe link."
        />
      </div>
    </>
  )
}
