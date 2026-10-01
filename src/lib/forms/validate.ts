// Validation for the public forms (waitlist application, contact, newsletter).
//
// Pure functions, no dependencies: the same rules run in the browser for
// immediate feedback and again in the route handler, which is the one that
// counts. Anything a visitor types is untrusted.

export type EnquiryKind = 'application' | 'contact' | 'newsletter'

export type EnquiryFields = Record<string, string>

export type ValidationResult =
  | { ok: true;  kind: EnquiryKind; fields: EnquiryFields }
  | { ok: false; errors: Record<string, string> }

// Field limits. Generous for humans, bounded so a submission can't be used to
// post a payload at us.
export const LIMITS = {
  email:   254,   // RFC 5321
  short:   200,   // names, firm, role, subject
  message: 4000,
} as const

// Deliberately simple: something@something.something, no spaces. Anything
// stricter rejects real addresses; the real test is whether a reply arrives.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

type FieldSpec = {
  name:      string
  label:     string
  required?: boolean
  max:       number
  email?:    boolean
  oneOf?:    readonly string[]
}

export const ADVISER_BANDS = ['1–2', '3–5', '6–10', '11–15', '16–25', '26+'] as const
export const CLIENT_BANDS  = ['Under 100', '100–249', '250–499', '500–999', '1,000+'] as const
export const CONTACT_SUBJECTS = ['Demo request', 'Founders programme', 'Integration', 'Press', 'Something else'] as const

const SPECS: Record<EnquiryKind, FieldSpec[]> = {
  application: [
    { name: 'firm',         label: 'Firm name',        required: true, max: LIMITS.short },
    { name: 'fcaReference', label: 'FCA reference',                    max: LIMITS.short },
    { name: 'advisers',     label: 'Advisers',                         max: LIMITS.short, oneOf: ADVISER_BANDS },
    { name: 'clients',      label: 'Active clients',                   max: LIMITS.short, oneOf: CLIENT_BANDS },
    { name: 'role',         label: 'Your role',                        max: LIMITS.short },
    { name: 'email',        label: 'Email',            required: true, max: LIMITS.email, email: true },
    { name: 'setup',        label: 'Current setup',                    max: LIMITS.message },
  ],
  contact: [
    { name: 'name',    label: 'Your name', required: true, max: LIMITS.short },
    { name: 'email',   label: 'Email',     required: true, max: LIMITS.email, email: true },
    { name: 'firm',    label: 'Firm',                      max: LIMITS.short },
    { name: 'subject', label: 'Subject',   required: true, max: LIMITS.short, oneOf: CONTACT_SUBJECTS },
    { name: 'message', label: 'Message',   required: true, max: LIMITS.message },
  ],
  newsletter: [
    { name: 'email', label: 'Email', required: true, max: LIMITS.email, email: true },
  ],
}

export function fieldsFor(kind: EnquiryKind): FieldSpec[] {
  return SPECS[kind]
}

export function isEnquiryKind(value: unknown): value is EnquiryKind {
  return value === 'application' || value === 'contact' || value === 'newsletter'
}

/**
 * Validate one submission. Returns the trimmed fields, or a message per
 * invalid field, addressed to the person filling the form, so it says what
 * to do, not what the parser disliked.
 */
export function validateEnquiry(kind: EnquiryKind, input: unknown): ValidationResult {
  const errors: Record<string, string> = {}
  const fields: EnquiryFields = {}
  const raw = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>

  for (const spec of SPECS[kind]) {
    const value = typeof raw[spec.name] === 'string' ? (raw[spec.name] as string).trim() : ''

    if (!value) {
      if (spec.required) errors[spec.name] = `${spec.label} is required.`
      continue
    }
    if (value.length > spec.max) {
      errors[spec.name] = `${spec.label} is too long (${spec.max} characters maximum).`
      continue
    }
    if (spec.email && !EMAIL.test(value)) {
      errors[spec.name] = 'That email address does not look right. Check it and try again.'
      continue
    }
    if (spec.oneOf && !spec.oneOf.includes(value)) {
      errors[spec.name] = `Choose one of the ${spec.label.toLowerCase()} options.`
      continue
    }
    // Header injection: a newline in a single-line field could add headers if
    // a value ever reaches an email header. Strip rather than reject.
    fields[spec.name] = spec.max === LIMITS.message ? value : value.replace(/[\r\n]+/g, ' ')
  }

  return Object.keys(errors).length > 0 ? { ok: false, errors } : { ok: true, kind, fields }
}

/**
 * The honeypot: `company` is hidden in the page, so a person never fills it.
 * Not a security control, it just keeps the inbox usable, alongside the rate
 * limit in the route.
 *
 * There is deliberately no "submitted too quickly" rule. It fires on fast
 * people (password-manager autofill, a quick typist), and since a suspected
 * bot is answered with a plain success, a false positive means silently
 * dropping a real message. A browser check caught exactly that.
 */
export function looksAutomated(body: Record<string, unknown>): boolean {
  return typeof body.company === 'string' && body.company.trim() !== ''
}
