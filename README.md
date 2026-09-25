# Amaea website

The existing `amaea.co.uk` project now uses the approved R2 Next.js design,
including the six-scene animated story, company story, mission, values and
registration form. The linked Vercel project remains `amaea.ai`; the R2 Vercel
project and domain assignments are separate and are not changed by this code.

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

The default release publishes Home, Register Interest, Privacy and Cookies.
Old About/Features URLs redirect temporarily to the corresponding homepage
sections; Contact/Founders redirect to registration. `/signin` still points
to the app. HTML-form URLs redirect to their clean equivalents. Other staged
routes return 404; they are not replaced with unrelated homepage redirects.
`NEXT_PUBLIC_SITE_MODE=full` remains an explicit future release decision,
requiring a content review and sitemap expansion before use.

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
