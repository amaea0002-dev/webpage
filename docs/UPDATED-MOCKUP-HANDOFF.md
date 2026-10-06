# Updated website preview — 1 October 2026 (CEO v2)

Source: `amaea-ceo-update-2026-10-01-v2.zip`, package `2026-10-01-ceo-v2`, reference revision `2fae00412b4d6ab8cfd4647cacdba4e81f1f76a4`. All file hashes in the supplied `VERSION.json` match. This updates the existing Next.js website repository (`amaea0002-dev/webpage`) from the deployed 30 September rebuild, commit `6fbb782`. The earlier two ZIP filenames contained the old export; this package supersedes them.

## Original 1 October preview notes (historical)

These original preview notes describe the CEO v2 handoff before later releases. The current booking release is documented below; later website changes include actual Terms pages and updated legal notices.

Run `pnpm dev --port 3235` or `pnpm build && pnpm start --port 3236`. This CEO v2 update has not been deployed. The 30 September rebuild remains live on amaea.co.uk. Show and review this preview before deploying.

The public page set is Home, About, Features, Pricing and Contact, plus the existing registration, privacy and cookie pages. Legacy marketing pages and draft contractual terms remain gated. The Terms link retains the reference's email destination. Sign-in goes to the existing app login. The existing enquiry handler, rate limiting, email delivery configuration and registration destinations are unchanged.

## Design and behaviour

- Original logo path, supplied assets, locally hosted fonts, plum/cream palette, hero lettering and tagline continuation preserved.
- Shared navigation/footer and seven feature chapters are React components; the five pages have separate routes and metadata.
- All fifteen story beats and the supplied semantic transcript are present: black expansion; Friday deadline; lens; manual spreadsheet errors; Andrew & Kate’s missing signed date; search; four folders and final-folder opening; signed report found; report beside register; Emma/Kate mismatch; abrupt black reveal; 100 more rows; return to light; pain question; correct client/date/evidence in the illustrative Amaea journey.
- Professional leads at £1,599/month for up to 600 active clients, no setup fee and unlimited logins. Scale and Enterprise follow; Essentials stays collapsed in its own quieter section. The comparison order is Professional, Scale, Enterprise, Essentials. Annual billing continues to charge ten months.
- Both new pricing justification paragraphs and “With Amaea, you just ask.” are copied exactly from the supplied HTML. The earlier penalty/consultant/PII comparison is removed.
- The homepage name, tail and script tagline reveal in the supplied sequence; the original logo and all shared assets remain unchanged.
- Native sticky stage, one GSAP scroll clock, Previous/Next, full-story reading mode and Skip to features. Screens no wider than 1000px and no taller than 640px use the complete readable version. This extends the mockup’s landscape fallback to short portrait phones, where the spreadsheet and evidence cards otherwise clipped internal content. Other viewports retain the animated story. Compact card spacing at heights up to 800px keeps the whole register and evidence panel visible on laptops and narrow phones; fixed-color panels have theme-independent text contrast.
- Motion preference changes cleanly switch between animated and readable layouts. Animation initialization occurs after the page hydrates and listeners/timers are cleaned up on navigation.
- Founder photograph remains absent.
- Route-pending indicators and form-loading animation remain available. Removing the old streamed page-loader boundary allows the actual content to be read with JavaScript disabled.

## Demo booking and plan guide (6 October 2026)

The approved public booking address is `https://calendly.com/hasna-amaea/demo`. The 6 October 2026 preview adds an optional three-question plan guide and an on-page calendar. Visitors can skip the guide. Recommendations use active-client capacity and capabilities from the published monthly plans; unlimited logins are not a pricing input. Unknown client numbers prompt a discussion rather than inventing a fixed-tier fit. Recommendations are non-binding and feature availability is confirmed during the demo.

Guide answers stay in page memory and are neither stored in browser storage nor transmitted to Amaea or Calendly. The external script and frame load only after “Load booking calendar”. The official widget hides event details, including the founder photograph, while retaining Calendly cookie controls. Only the trusted Calendly host can be embedded, and arbitrary configuration query parameters are discarded. The separate approved booking link and a no-JavaScript link remain available. Cookie, privacy and security notices describe this behavior.

The booking update was deployed to amaea.co.uk on 6 October 2026 from commit `9e37f7dcc8265232541501166dbfce5f28a15a10`, deployment `dpl_GDCT2CdFonUtt85sDVNaLUZ7NzAY`. All 36 checks and the production build passed; ten staged and ten live HTTP/content/security checks passed. The preview covered desktop, 390px and 320px layouts, keyboard selection, cookie controls and the empty attendee form. Reduced-motion CSS was verified; browser motion emulation was unavailable. Do not create a real booking merely to test the link. Hasna’s connected-calendar destination and actual confirmation delivery remain checks for the account owner or an explicitly authorised test booking.

### Business booking details

Hasna’s live Calendly demo event now asks for a required firm name in addition to name and email. Optional questions cover role, active-client bands, current business systems, demo priorities, FCA firm reference and preparation notes. These are Calendly invitee questions, so submitted booking answers are handled by Calendly and Amaea; the separate optional website plan guide still keeps its answers only in page memory. No actual booking was created to verify these fields.

The website uses the official widget’s automatic sizing so the longer attendee form can be read without a fixed-height internal scroll area. Client bands use radio buttons because Calendly recommends avoiding dropdown questions with automatic sizing. The founder’s account avatar is an Amaea logo, and no founder photograph appears in the checked public booking form.

### Calendar navigation recovery

The original Contact-only CSP exception failed when visitors entered the booking page through Next.js client-side links: the initial homepage policy continued to apply. Every entry document now uses the same narrowly scoped allowlist for Calendly’s exact widget script and stylesheet and its frame origin. This permits booking navigation without loading Calendly before the visitor chooses it. Other protections, including frame-ancestor and object restrictions, remain intact.

The widget also has a minimum frame height during startup so an early 2px auto-resize message cannot collapse the calendar. Loading success is shown only after a documented event from Calendly’s own origin and the current iframe window. Failed or slow loads offer a plain reload link as well as the existing separate booking link. Regression tests cover document policies, trusted readiness signals and blank/resize-only messages. No actual appointment is submitted during these checks.

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

The new story spreadsheet and final client journey also remain explicitly labelled illustrative. All six interactive concepts remain visibly labelled as illustrations with sample data. The dashboard retains its prototype/synthetic-data label. File selection stays local; no client file is uploaded by the marketing preview. Asset production must use synthetic or properly sanitised material, never real client records.

## Copy requiring evidence before public release

The requested About, feature and pricing copy is preserved for design review. Preserving that copy does not verify its claims. The supplied README explicitly requires verification before publishing. These statements need evidence or agreed replacement wording before production publication:

- About: checks “all the FCA rules”; automatic signature checks; preventing regulator surprises.
- Features: issue-to-rule applicability and one-click resolution; live health score; assistant scope and RMAR deadline knowledge; complete weekly publication coverage; “all 19 document types” and automatic classification/matching.
- Integrations: Intelliflo, SharePoint, Salesforce, Curo, Assureweb, open API and which are actually available per tier.
- Pricing specifications: 17 tracked types versus 19 imported types; 11,645 corpus chunks; seven-year retention; append-only audit controls; token encryption; RMAR sections and GABRIEL CSV; custom-trained AI and network/principal visibility.
- Commercial promises: prices and caps, two free months, no setup fee, upgrade/downgrade policy, notification at caps, onboarding timelines and support commitments.
- The new time-cost comparison is supplied commercial copy; no measurement study was supplied for its 1.5-hours-per-week example.

The visible statement remains: “Amaea AI is decision support for qualified compliance staff — not regulated advice. Verify before acting.” No launch date has been invented. No additional security certification or data-residency claims have been added.

## Verification

`pnpm check` runs type checking, lint and the 22 existing form/backend tests. `pnpm build` validates a production build. `scripts/smoke.mjs` checks the eight public routes, canonical/social metadata, CSP, social image, delivery configuration and the unpublished-page gate.

`node scripts/check-reference.mjs http://127.0.0.1:3236 /tmp/amaea-reference-check` tests desktop 1440×1000, mobile 390×844, small mobile 320×568 and landscape 844×390 / 667×375; every story beat; 302 forward/backward scroll samples per animated viewport; Previous/Next/reading mode; mobile menu; persistent theme; pricing; sample controls; local mocked registration; both-theme accessibility; reduced motion (including changes while open); and no JavaScript. Additional card-clipping checks cover 375×667, 360×740, 768×1024, 1280×720 and 1366×768. Reduced-motion/readable layouts are audited in both themes. Add the extracted `mockup` directory as the final script argument to verify exact supplied page/story copy and the original logo. It writes screenshots and `browser-results.json`. No real email or booking is submitted.

Automated viewport checks are browser emulation, not a physical-device or screen-reader certification. Local email configuration is intentionally absent; a successful mocked registration is not evidence of inbox delivery. The previous live audit email still awaits its owner's inbox check.

CEO v2 verification results are recorded in `outputs/website-ceo-update-2026-10-01` in the task workspace. Final result: all 20 browser check groups passed, with zero browser errors or outstanding layout/accessibility findings. Type checking, lint, 22 unit tests, the production build and eight-route HTTP smoke checks passed. The exact supplied Home story, About, Features and Pricing copy, the original SVG logo and all ten copied assets/fonts match. Automated browser coverage spans ten desktop, laptop, tablet and phone viewport sizes. The earlier 30 September validation record remains in the preceding Git revision. No live email, booking, deployment or database changes are part of this preview update.
