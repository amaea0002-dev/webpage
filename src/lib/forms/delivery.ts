import type { EnquiryKind } from './validate.ts'

type Environment = Record<string, string | undefined>

// Keep the existing amaea.co.uk project's mail settings working. The R2
// names take precedence if explicitly configured; no secret is stored here.
export function deliverySettings(kind: EnquiryKind, env: Environment = process.env) {
  const prefix = { application: 'WAITLIST', contact: 'DEMO', newsletter: 'NEWSLETTER' }[kind]
  const label = { application: 'Waitlist', contact: 'Demo Requests', newsletter: 'Newsletter' }[kind]
  return {
    apiKey: env.RESEND_API_KEY,
    from: env.ENQUIRY_FROM || env[`${prefix}_FROM_EMAIL`] || `Amaea ${label} <hello@amaea.co.uk>`,
    inbox: env.ENQUIRY_INBOX || env[`${prefix}_TO_EMAIL`] || 'founders@amaea.co.uk',
  }
}
