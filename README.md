# Amaea website

This branch integrates the approved 30 September mockup into the existing
Next.js project: five separate pages, the original logo, the complete eleven-step
story and seven product chapters. It is a preview awaiting review, a real booking
URL and verification of the supplied product/commercial claims before deployment.
See [the mockup handoff](docs/UPDATED-MOCKUP-HANDOFF.md) for outstanding assets and checks.
The linked Vercel project remains `amaea.ai`; domain assignments are unchanged.

## Develop and check

Use Node 24 and pnpm. Run `pnpm install --frozen-lockfile`, `pnpm dev`,
`pnpm check`, and `pnpm build`. Start a production build with `pnpm start`.

The active application is `src/` and `public/`. Root HTML, `css/`, `js/`,
`assets/` and `api/` are retained as the previous static implementation and
are excluded from deployment. Existing local edits to those files are kept.
Do not edit those files to change the new website. `.vercelignore` permits
only application source, public assets and required build configuration.

## Hosting

`vercel.json` explicitly selects Next.js, `pnpm build` and `.next`, replacing
the static project's old output-directory settings. Keep the existing
`amaea.ai` project link and the `amaea.co.uk` / `www.amaea.co.uk` assignments.
Do not change the app subdomain or email DNS.

The new route set includes Home, About, Features, Pricing and Contact, plus
Register Interest, Privacy and Cookies. Founders redirects to registration.
`/signin` still points to the app. HTML-form URLs redirect to their clean
equivalents. Other legacy routes, including draft contractual terms, return 404.
Do not use `NEXT_PUBLIC_SITE_MODE=full` to enable unreviewed legacy content.

Set `NEXT_PUBLIC_BOOKING_URL` to the team's approved HTTPS scheduler address
before building. Until supplied, the demo card links to the existing contact
email. The preview does not invent availability or confirm bookings.

Email delivery requires `RESEND_API_KEY` and a verified sender. Existing
`WAITLIST_FROM_EMAIL` / `WAITLIST_TO_EMAIL`, `DEMO_FROM_EMAIL` /
`DEMO_TO_EMAIL`, and `NEWSLETTER_FROM_EMAIL` / `NEWSLETTER_TO_EMAIL` still
work. The previous defaults are retained: the relevant Amaea sender at
`hello@amaea.co.uk`, delivering to `founders@amaea.co.uk`. `ENQUIRY_FROM` and
`ENQUIRY_INBOX` can override these. Never put credentials in source control.
Existing `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` enable the
shared rate limiter; otherwise a bounded per-instance fallback applies.

The rebuild alone does not confirm real email delivery, finish the privacy
notice's factual gaps, or change the Vercel account's plan or security settings.
Keep the last production deployment available for rollback when publishing.
