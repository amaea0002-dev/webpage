# Website operations

Production: https://amaea.co.uk — Vercel project `amaea.ai`.
Source: https://github.com/amaea0002-dev/webpage, branch `main`.

## Release

Production releases currently use a manual deployment of the validated commit. A GitHub push runs checks; it does not by itself deploy to Vercel.

1. Use Node 24 and the pnpm version in package.json. Install with `pnpm install --frozen-lockfile`.
2. Run `pnpm check`, `pnpm audit --audit-level high`, and `pnpm build`. The Validate website workflow runs these plus HTTP smoke checks.
3. Review the change on desktop/mobile and both themes. Exercise validation and the success/failure paths using a mock mail provider; do not send unapproved live test email.
4. Record the current production deployment ID, then deploy the exact reviewed commit through the connected Vercel repository, or `vercel deploy --prod` from a clean export of that commit if a manual release is needed. Never upload an unrelated working tree or local secrets.
5. Run `node scripts/smoke.mjs https://amaea.co.uk` and inspect the published website. Store commit/deployment IDs together in the release record.
6. If a regression affects visitors, use Vercel's rollback to the recorded prior deployment, then investigate on a preview.

GitHub Pages is not the application host and should remain disabled. The old R2 alias should redirect to amaea.co.uk. Keep future preview deployments unindexed/protected.

## Registrations and delivery

The founders inbox is the current lead record. The handler uses Resend idempotency for identical retries within the provider's 24-hour window, generates an `AM-...` reference and records only the reference, provider ID and outcome in application logs. It never logs message bodies or contact details. Do not turn on provider request/response body logging.

An `enquiry.accepted` event means Resend accepted the message, not that the receiving inbox delivered it. For missing enquiries, use the reference/provider ID in Resend's delivery view. Investigate failed, bounced or suppressed messages and reconcile accepted messages against the inbox. The authorised 25 September audit message still awaits the founders' inbox check. No further live test email is authorised by this document.

The founders should assign one person to check the inbox and Resend delivery failures each working day, reply within the published promise (if one is agreed), and record follow-up status. A delivery webhook/alert integration can be connected once its credentials and destination are approved; do not claim that it is active merely because the send returned 200.

## Abuse protection

Vercel firewall rule `Protect website registrations`: `/api/enquiries`, fixed window, 10 requests per IP in 600 seconds, HTTP 429 beyond the limit. This acts before the serverless handler. Do not replace it with a log-only rule. Keep the per-instance five-valid-submissions limit as defence in depth. If Upstash is configured later, update the provider inventory and retention documentation before sending it personal data.

The handler bounds actual request bytes at 32 KiB, validates the allowed fields and rejects inactive form types and cross-site browser submissions. GET checks of `/api/health` do not send email or count against the form rule.

## Monitoring

The Website health workflow checks the public site and whether delivery configuration is present every six hours, and can be run manually. Failures appear as failed GitHub Actions runs; confirm the repository owners' GitHub notification preferences. It does not validate inbox delivery or replace provider monitoring.

Dependabot checks package and workflow updates weekly. Review coupled Next/eslint-config-next and React/react-dom updates together. Dependency counts are a point-in-time signal, not a permanent security guarantee.

Before a campaign, check search indexing/backlinks in Search Console and record traffic/conversion baselines using a reviewed measurement approach. No visitor analytics or marketing cookies have been added to this release. Real-device accessibility and field performance still require device/user data rather than a claim based on a single desktop check.

## Data retention and rights

The founders own the privacy inbox and enquiry retention. Review enquiries monthly. Delete closed-programme records once conversations end; delete enquiries with no contact for twelve months; action a valid earlier deletion request, subject to any applicable legal exception. Include inbox folders/trash and ask providers to remove records where needed. Record completion without retaining the deleted message itself.

For a rights request: acknowledge it, confirm identity proportionately, locate the inbox/provider records, respond normally within one month and record the outcome. Do not ask for client documents as proof of identity. Explain any lawful exception or extension.

Public legal controller identity, address, mailbox arrangements and provider contracts must match the founders' verified facts. Do not infer incorporation from the brand name. Do not assert UK-only processing: Resend documents US storage, regardless of sending region.

## Account and domain ownership

Enable Vercel MFA/passkeys and keep recovery methods in the owners' secure account system. Verify equivalent protection for GitHub, domain and email administrators. A commercial Vercel plan or another eligible host is required for the company site; the owner must authorise any purchase or terms.

Keep DMARC in monitoring mode until all legitimate senders and their DKIM/SPF alignment have been checked using actual received mail and aggregate reports. Then plan a gradual enforcement change with the domain owner; changing it blind can block legitimate email.

## Additional hardening

The static-site CSP retains inline scripts for Next hydration and the early theme preference. A nonce/hash migration is a separate hardening task and needs a measured caching/performance review. Do not describe the current policy as strict CSP or a complete XSS defence.
