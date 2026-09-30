# Updated website preview — 30 September 2026

Source: the supplied `amaea-reference/README.md` and complete static mockup, reference revision `b855f891331749ca57d5bcff60ce0e2f9d2a4aa0`. This is an integration into the existing Next.js website repository (`amaea0002-dev/webpage`), based on commit `61751d0`.

## Preview, not a production release

Run `pnpm dev --port 3235` or `pnpm build && pnpm start --port 3236`. No deployment to amaea.co.uk has been performed. Show and review this preview before deploying.

The public page set is Home, About, Features, Pricing and Contact, plus the existing registration, privacy and cookie pages. Legacy marketing pages and draft contractual terms remain gated. The Terms link retains the reference's email destination. Sign-in goes to the existing app login. The existing enquiry handler, rate limiting, email delivery configuration and registration destinations are unchanged.

## Design and behaviour

- Original logo path, supplied assets, locally hosted fonts, plum/cream palette, hero lettering and tagline continuation preserved.
- Shared navigation/footer and seven feature chapters are React components; the five pages have separate routes and metadata.
- All eleven story beats and the complete semantic transcript are present: expansion; Friday FCA request; lens; search; four folders and last-folder opening; signed report found; report next to spreadsheet; Kate/Emma mismatch; abrupt black reveal; return to light; pain question and solution.
- Native sticky stage, one GSAP scroll clock, Previous/Next, full-story reading mode and Skip to features. Short phone and landscape styles prevent content colliding with controls.
- Motion preference changes cleanly switch between animated and readable layouts. Animation initialization occurs after the page hydrates and listeners/timers are cleaned up on navigation.
- Founder photograph remains absent.
- Route-pending indicators and form-loading animation remain available. Removing the old streamed page-loader boundary allows the actual content to be read with JavaScript disabled.

## Booking connection still required

Neither the current website nor the mockup supplied a real scheduler URL. The owner has been asked for it. `BookingScheduler.tsx` accepts an approved HTTPS URL through `NEXT_PUBLIC_BOOKING_URL`, opens the real scheduler in a new tab and labels that behaviour. The URL must be supplied before building the release. No guessed scheduler, fake availability or simulated booking confirmation is used. Until then the Contact page uses the existing `hello@amaea.co.uk` demo email link.

After the owner supplies the URL, open it, verify that it belongs to Amaea, shows the intended appointment type and permits choosing an available time, and verify the website CTA. Do not create a real booking merely to test the link.

## Product assets still needed

| Chapter | Current preview | Real asset needed |
| --- | --- | --- |
| 1 — Client journeys | Interactive concept with synthetic clients | Sanitised recording of a real journey, supporting documents and review history |
| 2 — Firm overview | Supplied public dashboard prototype still | Current dashboard capture; separate review/document screens or recording if those views are demonstrated |
| 3 — Prioritised insights | Simulated issue resolution | Real issue detail, supporting evidence/rule reference and human resolution workflow |
| 4 — Amaea AI | Predetermined sample answers | Sanitised recording of a real question, cited evidence and limitations/abstention behaviour |
| 5 — Governance/Horizon | Simulated publication update | Real publication feed, relevance review, ownership and calendar workflow |
| 6 — Reports | Simulated draft status | Actual draft generation, evidence gaps, editing and reviewer sign-off |
| 7 — Integrations/import | Illustrative connections and local-only file selection | Confirmed supported connectors and a sanitised import/extraction/human-review recording |

All six interactive concepts remain visibly labelled as illustrations with sample data. The dashboard retains its prototype/synthetic-data label. File selection stays local; no client file is uploaded by the marketing preview. Asset production must use synthetic or properly sanitised material, never real client records.

## Copy requiring evidence before public release

The requested About, feature and pricing copy is preserved for design review. Preserving that copy does not verify its claims. The supplied README explicitly requires verification before publishing. These statements need evidence or agreed replacement wording before deployment:

- About: checks “all the FCA rules”; automatic signature checks; preventing regulator surprises.
- Features: issue-to-rule applicability and one-click resolution; live health score; assistant scope and RMAR deadline knowledge; complete weekly publication coverage; “all 19 document types” and automatic classification/matching.
- Integrations: Intelliflo, SharePoint, Salesforce, Curo, Assureweb, open API and which are actually available per tier.
- Pricing specifications: 17 tracked types versus 19 imported types; 11,645 corpus chunks; seven-year retention; append-only audit controls; token encryption; RMAR sections and GABRIEL CSV; custom-trained AI and network/principal visibility.
- Commercial promises: prices and caps, two free months, no setup fee, upgrade/downgrade policy, notification at caps, onboarding timelines and support commitments.
- Pricing comparisons: consultant-day costs, typical penalties/percentage comparison and PII deductible. No supporting study or source was supplied with the mockup.

The visible statement remains: “Amaea AI is decision support for qualified compliance staff — not regulated advice. Verify before acting.” No launch date has been invented. No additional security certification or data-residency claims have been added.

## Verification

`pnpm check` runs type checking, lint and the 22 existing form/backend tests. `pnpm build` validates a production build. `scripts/smoke.mjs` checks the eight public routes, canonical/social metadata, CSP, social image, delivery configuration and the unpublished-page gate.

`node scripts/check-reference.mjs http://127.0.0.1:3236 /tmp/amaea-reference-check` tests desktop 1440×1000, mobile 390×844, small mobile 320×568 and landscape 844×390; every story beat; 222 forward/backward scroll samples per viewport; Previous/Next/reading mode; mobile menu; persistent theme; pricing; sample controls; local mocked registration; both-theme accessibility; reduced motion (including changes while open); and no JavaScript. It writes screenshots and `browser-results.json`. No real email or booking is submitted.

Automated viewport checks are browser emulation, not a physical-device or screen-reader certification. Local email configuration is intentionally absent; a successful mocked registration is not evidence of inbox delivery. The previous live audit email still awaits its owner's inbox check.

Final local result: all 15 browser check groups passed, with zero browser errors or outstanding layout/accessibility findings. Type checking, lint, 22 form/backend tests, the production build, HTTP checks and dependency audit passed. The About, Features and Pricing copy, eleven story captions/order and original logo path were compared directly with the supplied reference. All ten copied asset/font files match the reference byte for byte. Client-side navigation, the final story CTA, mouse-wheel scrolling and 404 navigation were also exercised.
