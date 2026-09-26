'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useEnquirySubmit, honeypotProps } from './useEnquirySubmit'
import { FormStatus, FieldError, errorProps } from './FormStatus'
import { ADVISER_BANDS, CLIENT_BANDS, LIMITS } from '@/lib/forms/validate'

export function WaitlistForm() {
  const { state, message, fieldErrors, reference, submit, clearFieldError } = useEnquirySubmit('application')
  const confirmation = useRef<HTMLDivElement>(null)
  useEffect(() => { if (state === 'sent') confirmation.current?.focus() }, [state])

  if (state === 'sent') return (
    <div className="registration-confirmation" ref={confirmation} tabIndex={-1} role="status">
      <span className="eyebrow">Thank you</span>
      <h3 className="h-section">Your interest is registered.</h3>
      <p>We’ll use your details to follow up about the founders programme and let you know when applications open.</p>
      <p>Registering commits you to nothing.</p>
      {reference && <p className="registration-reference">Your reference: <strong>{reference}</strong></p>}
      <Link href="/" className="text-link">Back to Amaea</Link>
      <p className="foot">Something to add? <a href="mailto:hello@amaea.co.uk">Email hello@amaea.co.uk</a>.</p>
    </div>
  )

  return (
    <form className="registration-form" method="post" action="/api/enquiries" onSubmit={submit} onInput={clearFieldError} noValidate aria-busy={state === 'sending'}>
      <input type="hidden" name="kind" value="application" />
      <p className="foot">Just your firm and email to get started. Everything else is optional.</p>
      <FormStatus state={state} message={message} sent="Your interest is registered." />
      <div className="field">
        <label htmlFor="application-firm">Firm name <span>(required)</span></label>
        <input id="application-firm" name="firm" type="text" autoComplete="organization" required maxLength={LIMITS.short} placeholder="Your firm’s name" {...errorProps('firm', fieldErrors)} />
        <FieldError id="firm-error" error={fieldErrors.firm} />
      </div>
      <div className="field">
        <label htmlFor="application-email">Work email <span>(required)</span></label>
        <input id="application-email" name="email" type="email" autoComplete="email" required maxLength={LIMITS.email} placeholder="you@yourfirm.co.uk" {...errorProps('email', fieldErrors)} />
        <FieldError id="email-error" error={fieldErrors.email} />
      </div>
      <details className="registration-optional">
        <summary>Tell us a little more <span>(optional)</span></summary>
        <div className="registration-optional-fields">
          <div className="field">
            <label htmlFor="application-advisers">Advisers</label>
            <select id="application-advisers" name="advisers" defaultValue="" {...errorProps('advisers', fieldErrors)}>
              <option value="">Prefer not to say</option>
              {ADVISER_BANDS.map(band => <option key={band}>{band}</option>)}
            </select>
            <FieldError id="advisers-error" error={fieldErrors.advisers} />
          </div>
          <div className="field">
            <label htmlFor="application-clients">Active clients</label>
            <select id="application-clients" name="clients" defaultValue="" {...errorProps('clients', fieldErrors)}>
              <option value="">Prefer not to say</option>
              {CLIENT_BANDS.map(band => <option key={band}>{band}</option>)}
            </select>
            <FieldError id="clients-error" error={fieldErrors.clients} />
          </div>
          <div className="field">
            <label htmlFor="application-role">Your role</label>
            <input id="application-role" name="role" autoComplete="organization-title" maxLength={LIMITS.short} placeholder="Adviser, compliance officer, practice manager…" {...errorProps('role', fieldErrors)} />
            <FieldError id="role-error" error={fieldErrors.role} />
          </div>
          <div className="field">
            <label htmlFor="application-fca-reference">Firm’s FCA reference</label>
            <input id="application-fca-reference" name="fcaReference" maxLength={LIMITS.short} placeholder="Your firm’s FCA reference" {...errorProps('fcaReference', fieldErrors)} aria-describedby={fieldErrors.fcaReference ? 'fcaReference-error fcaReference-help' : 'fcaReference-help'} />
            <p id="fcaReference-help" className="foot">Only to help us find your firm on the FCA register.</p>
            <FieldError id="fcaReference-error" error={fieldErrors.fcaReference} />
          </div>
          <div className="field">
            <label htmlFor="application-setup">What would you like to make easier?</label>
            <textarea id="application-setup" name="setup" maxLength={LIMITS.message} placeholder="Tell us about your current tools or the work that takes the most time." {...errorProps('setup', fieldErrors)} aria-describedby={fieldErrors.setup ? 'setup-error setup-help' : 'setup-help'} />
            <p id="setup-help" className="foot">Please don’t include client names, documents or sensitive information.</p>
            <FieldError id="setup-error" error={fieldErrors.setup} />
          </div>
        </div>
      </details>
      <input {...honeypotProps} />
      <button type="submit" className="btn btn-primary btn-lg" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Register your interest →'}</button>
      <p className="foot">We’ll use your details to reply about the founders programme. Registering commits you to nothing. Read our <Link href="/privacy">privacy notice</Link>.</p>
      <p className="foot">Prefer email? <a href="mailto:hello@amaea.co.uk">hello@amaea.co.uk</a></p>
    </form>
  )
}
