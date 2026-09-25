'use client'

import { useEnquirySubmit, honeypotProps } from './useEnquirySubmit'
import { FormStatus, FieldError, errorProps } from './FormStatus'
import { ADVISER_BANDS, CLIENT_BANDS } from '@/lib/forms/validate'

export function WaitlistForm() {
  const { state, message, fieldErrors, submit } = useEnquirySubmit('application')
  const sending = state === 'sending'

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 20 }} onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor="application-firm">Firm name</label>
        <input id="application-firm" name="firm" type="text" autoComplete="organization" required
               placeholder="Example IFA firm" {...errorProps('firm', fieldErrors)} />
        <FieldError id="firm-error" error={fieldErrors.firm} />
      </div>

      <div className="field-pair">
        <div className="field">
          <label htmlFor="application-fca-reference">FCA reference <span style={{ textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
          {/* Optional, and it now says why it is asked for — collecting a firm's register number
              at first contact without a reason invites the obvious question. */}
          <input id="application-fca-reference" name="fcaReference" type="text" autoComplete="off"
                 placeholder="Your firm’s FCA reference" {...errorProps('fcaReference', fieldErrors)}
                 aria-describedby={fieldErrors.fcaReference ? 'fcaReference-error fcaReference-help' : 'fcaReference-help'} />
          <div id="fcaReference-help" className="foot" style={{ marginTop: 6 }}>
            Only so we can find your firm on the FCA register. Leave it blank if you would rather not.
          </div>
          <FieldError id="fcaReference-error" error={fieldErrors.fcaReference} />
        </div>
        <div className="field">
          <label htmlFor="application-advisers">Advisers · headcount</label>
          <select id="application-advisers" name="advisers" defaultValue={ADVISER_BANDS[0]} {...errorProps('advisers', fieldErrors)}>
            {ADVISER_BANDS.map(band => <option key={band}>{band}</option>)}
          </select>
          <FieldError id="advisers-error" error={fieldErrors.advisers} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="application-clients">Active clients · headcount</label>
        <select id="application-clients" name="clients" defaultValue={CLIENT_BANDS[0]} {...errorProps('clients', fieldErrors)}>
          {CLIENT_BANDS.map(band => <option key={band}>{band}</option>)}
        </select>
        <FieldError id="clients-error" error={fieldErrors.clients} />
      </div>

      <div className="field">
        <label htmlFor="application-role">Your role <span style={{ textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
        <input id="application-role" name="role" type="text" autoComplete="organization-title"
               placeholder="CEO / Compliance Officer / Practice Manager" {...errorProps('role', fieldErrors)} />
        <FieldError id="role-error" error={fieldErrors.role} />
      </div>

      <div className="field">
        <label htmlFor="application-email">Email</label>
        <input id="application-email" name="email" type="email" autoComplete="email" required
               placeholder="you@example.com" {...errorProps('email', fieldErrors)} />
        <FieldError id="email-error" error={fieldErrors.email} />
      </div>

      <div className="field">
        <label htmlFor="application-setup">What&apos;s your current compliance setup? <span style={{ textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
        <textarea id="application-setup" name="setup" {...errorProps('setup', fieldErrors)}
                  placeholder="Intelliflo + spreadsheets, manual RMAR, etc. The more honest, the better." />
        <FieldError id="setup-error" error={fieldErrors.setup} />
      </div>

      {/* Hidden from people; only a bot fills it in. */}
      <input {...honeypotProps} />

      <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
        <button type="submit" className="btn btn-primary btn-lg" disabled={sending || state === 'sent'}>
          {sending ? 'Sending…' : 'Register your interest →'}
        </button>
      </div>

      <FormStatus
        state={state}
        message={message}
        sent="Thank you — your interest is registered, and we will reply by email."
      />

      <div className="foot">
        {/* TODO(Milan): confirm response times and what an applicant is agreeing to, then say it here. */}
        We use what you send here to reply about the founders programme. See the{' '}
        <a href="/privacy">privacy notice</a> for how we handle it.
      </div>
    </form>
  )
}
