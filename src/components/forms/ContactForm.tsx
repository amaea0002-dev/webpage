'use client'

import { useEnquirySubmit, honeypotProps } from './useEnquirySubmit'
import { FormStatus, FieldError, errorProps } from './FormStatus'
import { CONTACT_SUBJECTS } from '@/lib/forms/validate'

export function ContactForm() {
  const { state, message, fieldErrors, submit } = useEnquirySubmit('contact')
  const sending = state === 'sending'

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 18 }} onSubmit={submit} noValidate>
      <div className="field-pair">
        <div className="field">
          <label htmlFor="contact-name">Your name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required {...errorProps('name', fieldErrors)} />
          <FieldError id="name-error" error={fieldErrors.name} />
        </div>
        <div className="field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required {...errorProps('email', fieldErrors)} />
          <FieldError id="email-error" error={fieldErrors.email} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="contact-firm">Firm <span style={{ textTransform: 'none', letterSpacing: 0 }}>(optional)</span></label>
        <input id="contact-firm" name="firm" type="text" autoComplete="organization" {...errorProps('firm', fieldErrors)} />
        <FieldError id="firm-error" error={fieldErrors.firm} />
      </div>

      <div className="field">
        <label htmlFor="contact-subject">Subject</label>
        <select id="contact-subject" name="subject" defaultValue={CONTACT_SUBJECTS[0]} {...errorProps('subject', fieldErrors)}>
          {CONTACT_SUBJECTS.map(subject => <option key={subject}>{subject}</option>)}
        </select>
        <FieldError id="subject-error" error={fieldErrors.subject} />
      </div>

      <div className="field">
        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" required {...errorProps('message', fieldErrors)}
                  placeholder="As much detail as you like. We read everything." />
        <FieldError id="message-error" error={fieldErrors.message} />
      </div>

      <input {...honeypotProps} />

      <button className="btn btn-primary btn-lg" style={{ alignSelf: 'flex-start' }} type="submit" disabled={sending || state === 'sent'}>
        {sending ? 'Sending…' : 'Send message →'}
      </button>

      <FormStatus
        state={state}
        message={message}
        sent="Thank you. Your message has reached us, and we will reply by email."
      />

      <div className="foot">
        We use what you send here to reply to you. See the <a href="/privacy">privacy notice</a> for how we handle it.
      </div>
    </form>
  )
}
