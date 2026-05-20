# Homepage copy audit — actionable rewrite brief

Date: 2026-05-19
Source files: `index.html` (primary), plus `about.html`, `features.html`, others share the launch banner.
Action: edit when fresh tomorrow. Most of this is paste-ready.

---

## Verified against current copy

Claude's earlier diagnosis was based on a different session — I read `index.html` fresh and confirmed which parts of that critique map to what's actually on the page. Result: **most of it is accurate**, with two corrections.

### What's already strong (don't touch)

| Section | Why it works |
|---|---|
| Hero dashboard mockup (lines 150-240) | Specific clients (Margaret Thompson, Robert Chen, CLI references), real flag types, real rule citations (COBS 9.5, PS22/9). |
| "Sound familiar?" Robert Chen story (lines 245-310) | Five-step narrative, four systems, two Robert Chens, the bereavement misread, the `04/31/3036` date typo. Best section on the page. |
| Security & Data — 6 cards (lines 452-506) | Each card has a specific technical commitment with an actual implementation tell ("Row Level Security enforced at the database layer", "AES-256 at rest", "Append-only audit trail … 7-year retention aligned to FCA SYSC 9"). |
| Stats — "model firm we built Amaea against" (lines 422-450) | The pre-emptive honesty ("These are real Amaea numbers, computed live — your firm's will be different. Real customer outcomes will appear here after public launch.") is excellent. |
| AI Guardrails list (lines 402-410) | "11,645 chunks", "50-scenario evaluation suite", "no fabricated rule citations" — specific, verifiable, voice-1. |

### Where Claude's critique was slightly off

- **Testimonials**: Claude said they read like suspiciously clean customer quotes. The section is actually framed clearly as "direct quotes from compliance officers and directors we spoke to while building Amaea" — that's already the honest framing Claude recommended. The remaining issue is that they're anonymous AND clean; one or the other has to give.
- **Chat preview**: Claude flagged the Margaret Thompson reply as too-polished. It's part of the marketing dashboard mockup, not a real chat panel. That's fine — it's a static design asset, not implying it's a live AI response. Less of an issue than Claude suggested.

### Where Claude was right (and what to fix)

1. **The six Platform Features cards** — generic AI-sounding ("Smart Compliance Alerts", "Seamless Integrations"). Lines 320-361.
2. **"How it works" 3 steps** — "Stay ahead, always" is AI rhythm. Lines 374-390.
3. **"More integrations available, with new platforms added regularly. Don't see yours?"** — pure filler. Line 695.
4. **Section heading "Everything your compliance team needs, built in"** — could be on any B2B site. Line 316.

---

## Proposed rewrites — Voice 1, with verifiable specifics

### Section heading (line 316)

**Current:** "Everything your compliance team needs, built in."

**Proposed:** "How Amaea is built — the parts a compliance officer actually checks."

(Drops the "everything" puff, signals technical specificity, invites the discerning reader.)

---

### Feature card 1 — Client Journey Tracking (lines 320-326)

**Current:**
> Client Journey Tracking — Three-stage compliance visibility: Initial Engagement, Ad-hoc Work, and Annual Reviews. Every milestone, every document, every status, in one timeline.

**Proposed:**
> Client journey — Initial engagement, ad-hoc work, annual reviews. Each stage carries its own document requirements (fact find, suitability report, attitude-to-risk, Consumer Duty outcome, vulnerability assessment, AML CDD — 17 doc types in total). The system knows which are missing, which are expired, and which expire in the next 90 days.

---

### Feature card 2 — Consumer Duty Monitoring (lines 327-333)

**Current:**
> Consumer Duty Monitoring — Automated tracking of vulnerable client status, fair outcome documentation, and Consumer Duty assessment scores, updated in real time across your entire book.

**Proposed:**
> Consumer Duty (PS22/9) — Outcome assessments tracked per client per year. Vulnerability re-assessments raised automatically when a client's last assessment crosses the 12-month FG21/1 threshold. Fair-value gaps surface as risk flags with the specific PS22/9 outcome cited.

---

### Feature card 3 — Smart Compliance Alerts (lines 334-340)

**Current:**
> Smart Compliance Alerts — Proactive alerts for overdue annual reviews, expiring suitability letters, missing documents, and approaching FCA deadlines, before they become breaches.

**Proposed:**
> Annual review sweep — A nightly cron evaluates every overdue review against COBS 9.5. No reason recorded → flag raised. Reason recorded → Claude assesses against COBS 9.5's actual sufficiency test (bereavement, illness, documented unavailability) and either resolves the flag or flags as insufficient with the AI's reasoning attached to the audit trail.

---

### Feature card 4 — AI Compliance Assistant (lines 341-347)

**PARK FOR NOW.** The AI audit-trail copy depends on the pending Bovill / Pinsent legal-review outcome on verbatim retention. Don't rewrite this card until that engagement returns. Current copy is acceptable; the more accurate replacement lands when the legal posture is settled.

---

### Feature card 5 — FCA-Ready Reports (lines 348-354)

**Current:**
> FCA-Ready Reports — Generate RMAR sections, Consumer Duty assessments, and board-level compliance reports in minutes, pre-populated from your connected systems.

**Proposed:**
> RMAR auto-population — Sections B, D, E, G, and H pre-filled from your live data. Complaints with FOS rights, 5-day acknowledgement, and 8-week final response checks against DISP 1.6. PII renewal status from your policy schedule. Adviser roster from `firm_advisers`. Each section exports as CSV ready for GABRIEL.

---

### Feature card 6 — Seamless Integrations (lines 355-361)

**Current:**
> Seamless Integrations — Connects with Intelliflo, Salesforce, SharePoint, and other systems your firm already uses. No data migration, no new workflows; Amaea works around you.

**Proposed:**
> Integrations — SharePoint and Intelliflo sync nightly, OAuth-authenticated, encrypted with AES-256-GCM at the application layer (key in a Vercel-isolated env var, not the DB). New documents arrive in your client's record; new flags appear in your dashboard the next morning. Salesforce, Curo, Assureweb on the same pattern.

---

### Bonus card to consider adding (if you want a 7th)

> Cross-document consistency — When two documents about the same client disagree (suitability report says "growth", fact find says "income"), it's flagged as `extraction_uncertain` with both source documents linked. Catches the "two Robert Chens" class of problem.

(Skip if six is enough. The Robert Chen story already plants this earlier on the page.)

---

## "How it works" section (lines 366-392)

The whole section is generic. Two options:

**Option A — Rewrite each step with concrete detail:**

1. **Connect** — "Microsoft and Intelliflo OAuth. Tokens encrypted, stored on the integration row. No agent installed, no on-prem component. First sync starts within 60 seconds of consent."
2. **Index** — "Every document classified by Claude vision (18 doc types), extracted into a typed schema, hashed for idempotency. ~11,000 FCA Handbook chunks already embedded for retrieval."
3. **Govern** — "Nightly crons evaluate annual reviews, vulnerable re-assessments, document expiry, and Consumer Duty outcome coverage. Flags surface in the dashboard the next morning with the FCA rule cited."

**Option B — Drop the section entirely.** Robert Chen already covers the "what's it like to use this?" narrative beat; "How it works" repeats it weaker.

I'd lean toward Option B. Less = stronger.

---

## "More integrations available …" (line 695)

**Current:**
> More integrations available, with new platforms added regularly. Don't see yours? Get in touch →

**Proposed:**
> If you're on a platform that exposes documents over OAuth or REST, we can integrate it. Tell us what you use and we'll tell you whether it's a week's work or three. → Get in touch

(Specific, slightly self-deprecating, invites a real conversation rather than promising "added regularly".)

---

## Testimonials section (lines 509-549)

Two options. Pick one — don't half-fix it.

**Option A — Keep anonymous but add the research-frame number:**
Replace the section title from "What firms tell us / The same problems. Every firm. Every week." with:
> "Why we built Amaea — themes from 27 compliance officers we interviewed in 2025."

Then keep the quotes as-is. The "27" anchors them as research, not marketing.

**Option B — Drop the section.** The Robert Chen story already proves you've talked to compliance officers; the security card framing already proves you've built a real product. Quotes from anonymous people can read as filler regardless of how honest the underlying research was. The hero, story, security, and AI guardrails sections together carry the page without them.

Either is defensible. Don't leave it as-is.

---

## Launch banner — "Public launch · September 2028"

Appears on every page (`about`, `annual-reviews`, `consumer-duty`, etc.). Confirmed real, not a hallucination — set deliberately as part of the bootstrap-first stance.

Claude flagged that it creates a "come back later" feel above the fold. Fair point but it also signals honesty in a market saturated with vapourware. Two minimal options:

1. **Keep it but add value-first context:** "Public launch · September 2028 · Design partners onboarding now" — the second clause turns the lead time into a positive (exclusive access, you can shape the product).
2. **Move it lower on the page.** Below the hero, alongside the "model firm" honesty stat. Still visible, no longer the first thing.

Don't drop it — the honesty is doing work.

---

## What NOT to change

The Robert Chen story. The security cards. The AI guardrails list. The "model firm" footnote. The 4 stat tiles. Those are all voice-1 and earning their space. If you find yourself "improving" any of them tomorrow, stop — the test is whether the change makes them more specific or just more polished. Polished is the enemy.

---

## Suggested edit order (1.5 hrs total)

1. ~15 min — Rewrite the 5 feature cards (skip card 4, the AI one)
2. ~10 min — Decide on "How it works" (drop or rewrite); execute
3. ~5 min — Replace the "More integrations" filler
4. ~10 min — Decide on testimonials (anonymous-with-N or drop); execute
5. ~5 min — Tweak the launch banner (option 1 or 2)
6. ~30 min — Read the whole page end-to-end at full size. Cut anything that still feels like Voice 2. Trust your discomfort.

When done: deploy via whatever method `amaea-website` uses (probably Vercel CLI similar to the app). Don't push until Hasna has read it.

---

## Why the AI audit-trail card is deferred

The current copy ("Ask questions in plain English …") is bland but it's not making any claim that needs to be true. The rewrite would say something specific — verbatim retention, SHA-256 hashes, request_id storage — and the specifics may change after Bovill/Pinsent comes back. If the legal opinion says "verbatim must be the default", the rewrite reflects that. If it says "hashes are sufficient with a documented DPA basis", the rewrite reflects that instead. Either way, write it once, after the answer lands. ~3-4 weeks.
