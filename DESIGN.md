---
name: Amaea
description: FCA compliance platform for UK financial advisers — the marketing surface.
colors:
  deep-plum: "#40243F"
  plum-dark: "#2A1729"
  plum-mid: "#5A3558"
  plum-soft: "#6B5C7B"
  ink: "#17131E"
  ink-2: "#3C354A"
  subdued: "#6B5C7B"
  muted: "#9088A3"
  canvas: "#FFFFFF"
  surface-warm: "#F9F8FA"
  line-soft: "#F0EDF4"
  line: "#E8E6ED"
  green: "#059669"
  amber: "#D97706"
  red: "#EF4444"
  blue: "#2563EB"
typography:
  display:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 4.4rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.15rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "12px"
  lg: "18px"
  xl: "24px"
  2xl: "32px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "24px"
  xl: "32px"
  2xl: "64px"
  section: "120px"
components:
  button-primary:
    backgroundColor: "{colors.deep-plum}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "#4D2D4C"
    textColor: "{colors.canvas}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.deep-plum}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.pill}"
    padding: "12px 20px"
  button-sm:
    padding: "8px 18px"
  button-lg:
    padding: "15px 34px"
  card-feature:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    padding: "28px 28px 32px"
  input-text:
    backgroundColor: "{colors.surface-warm}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "11px 14px"
  nav-bar:
    backgroundColor: "rgba(255,255,255,0.82)"
    height: "68px"
---

# Design System: Amaea

## 1. Overview

**Creative North Star: "The Plum Office"**

Amaea is software for compliance officers at UK financial advice firms — a role that lives inside FCA rule references, document expiry dates, and audit trails. The visual system serves that role by deliberately departing from every default the category reaches for. Navy-and-gold fintech says "trust us, we're old money." SaaS purple-on-cream says "we'll handle the boring stuff for you." Amaea says neither. The primary is plum, a colour the category does not recognise — confident enough to use it everywhere, restrained enough not to make it loud.

The whole surface is warm grays with a slight magenta undertone, generous spacing, and pill-shaped controls. Motion is Stripe-grade — crisp, no overshoot, no choreography. The product is technical (RAG against 11,645 FCA Handbook chunks, COBS 9.5 nightly sweeps, RMAR section pre-population) and the design refuses to flatten that into an "AI-powered everything" template. Every flourish that would suggest sales theatre — gradient text, hero-metric grids, identical icon-headline-text cards, eyebrows above every heading — is suspect.

The system is for senior practitioners who keep tabs open for years. It should feel like a tool, not a launch.

**Key Characteristics:**

- Plum primary (`#40243F`) used as committed brand colour, not hedged with neutrals around the edges
- Warm magenta-tinted neutrals throughout — no cool slate, no cream
- Pill-shaped buttons (radius 999px) against soft-rounded cards (radius 18–24px) — generous geometry, no hard corners
- Subtly layered always: cards carry low-elevation shadow at rest; hover deepens
- Stripe-style motion: `cubic-bezier(0.32, 0.72, 0, 1)`, durations 80–360ms, no bounce
- Honesty over polish in voice; the design follows

## 2. Colors

A committed plum-centred palette: one primary that carries identity, a warm gray ramp with a magenta cast that pulls the whole surface toward the brand, and four functional status colours used sparingly.

### Primary
- **Deep Plum** (`#40243F`): The brand colour. Used on primary buttons, key accents, link hovers, the nav logo, and the brand glow under the hero. The whole site is anchored here.
- **Plum Dark** (`#2A1729`): The committed dark backdrop — dashboard sidebars in the app, deeper plum sections on landing surfaces, the founders programme callout. Reads almost black; resolves as plum at scale.
- **Plum Mid** (`#5A3558`): Hover variants and secondary plum accents.
- **Plum Soft** (`#6B5C7B`): Plum-leaning secondary text. The bridge between brand and neutral.

### Neutral
The neutral ramp is *not* slate. Every step carries a magenta-warm undertone that ties the surface to the plum primary.

- **Canvas** (`#FFFFFF`): Page background and card faces in light mode.
- **Surface Warm** (`#F9F8FA`): Alt-section backgrounds, input field interiors at rest. Off-white with a plum hint.
- **Line Soft** (`#F0EDF4`): Divider lines, faint separators.
- **Line** (`#E8E6ED`): Card borders, table cell borders.
- **Muted** (`#9088A3`): De-emphasised metadata, placeholder text, "ghost" CTA labels. Approaches 4.5:1 contrast on white — reserve for ≥14px or backgrounds tinted to surface-warm or darker.
- **Subdued** (`#6B5C7B`): Secondary body copy, captions, form-label text.
- **Ink 2** (`#3C354A`): Body emphasis, sub-headings.
- **Ink** (`#17131E`): Primary text. Tinted near-black, not pure `#000`.

### Status
Used as accent colour on a specific functional surface — never as decoration. Each carries its semantic meaning across both themes.

- **Green** (`#059669`): "Met" — Consumer Duty outcome on track, suitability report current, compliance health ≥85%.
- **Amber** (`#D97706`): "Approaching" — review due within 60 days, RMAR deadline approaching.
- **Red** (`#EF4444`): "Breach" — overdue review (COBS 9.5), missing suitability report, fair-value gap.
- **Blue** (`#2563EB`): Informational links, neutral state callouts.

### Named Rules

**The Plum Departure Rule.** The primary is plum because the FCA-fintech category default is navy. If a surface design would read identically with navy substituted in, the plum isn't doing its job. Commit to it.

**The Warm Neutral Rule.** All grays carry magenta. Never substitute a cool gray (`#64748B`, `#94A3B8`) or a pure neutral (`#888`, `#666`) — they read as a different brand. When in doubt, lean warmer.

**The Status-as-Function Rule.** Status colours are functional, not decorative. Red is for FCA breach severity, never for a decorative pop or "important" accent. Amber is not "warning-flavoured." If you're tempted to use red for emphasis, use weight + size instead.

## 3. Typography

**Display Font:** Inter (with `-apple-system, BlinkMacSystemFont, "Segoe UI"` fallback)
**Body Font:** Inter
**Label Font:** Inter

**Character:** Single-family Inter, used with committed weight and tracking contrast. The choice is workmanlike: Inter reads as "competent product" rather than "expressive brand." A custom or less-saturated humanist sans (Söhne, ABC Diatype, Untitled Sans) is a worthwhile upgrade path — Inter is on most designers' reflex-reject list for being the default — but the contrast and weight discipline within the family is what carries the system today.

Display copy runs at weight 800 with tight `-0.045em` tracking. Body copy is weight 400, `1.6` line-height, generous. Labels are weight 600, 0.78rem, no uppercase tracking by default (the site has eyebrow labels — see anti-pattern flag in §6).

### Hierarchy

- **Display** (weight 800, `clamp(2.6rem, 6vw, 4.4rem)`, line-height 1.05): Hero `h1` only. Drops to `clamp(1.9rem, 6vw, 2.4rem)` below 768px.
- **Headline** (weight 800, `clamp(2rem, 4vw, 3rem)`, line-height 1.1, letter-spacing -0.045em): Section titles. The narrative anchors of each long-scroll fold.
- **Title** (weight 700, ~1.15rem, line-height 1.3): Card headings, feature card titles, callout headers.
- **Body** (weight 400, 1rem, line-height 1.6): Default paragraph text. Cap line length at 65–75ch on long-form pages.
- **Label** (weight 600, 0.78rem, line-height 1.4): Form labels, metadata captions, footer column headings.

### Named Rules

**The Weight-Not-Decoration Rule.** Hierarchy comes from weight (400 → 600 → 700 → 800) and scale (≥1.25 ratio between steps), not from colour shifts, gradients, or decorative weight oscillation. If a heading needs gradient text to be noticed, the scale is too flat.

**The Eyebrow Restraint Rule.** Tiny uppercase tracked labels above section headings exist in the system but should appear at most twice per page. Every-section eyebrows are AI scaffolding; cut them.

## 4. Elevation

Subtly layered always. Cards, nav bars, and primary buttons each carry low-elevation shadow at rest — the system never goes fully flat. Hover deepens the elevation by ~1 step; focus adds a plum ring without altering depth. Shadows use a 2–3 layer composition (ambient + key + bounce) over the ink-tinted base, never the literal `rgba(0,0,0,*)` of stock shadows.

### Shadow Vocabulary

- **sh-sm** (`0 1px 2px rgba(22,17,30,0.04), 0 2px 6px rgba(22,17,30,0.06)`): Resting state for nav bar on scroll, small chips, secondary buttons.
- **sh-md** (`0 2px 4px rgba(22,17,30,0.04), 0 6px 20px rgba(22,17,30,0.08), 0 1px 2px rgba(22,17,30,0.03)`): Card hover, hover on secondary surfaces.
- **sh-lg** (`0 4px 8px rgba(22,17,30,0.04), 0 12px 40px rgba(22,17,30,0.10), 0 2px 4px rgba(22,17,30,0.04)`): Feature card hover, hero preview at rest.
- **sh-xl** (`0 8px 16px rgba(22,17,30,0.06), 0 24px 64px rgba(22,17,30,0.14), 0 4px 8px rgba(22,17,30,0.05)`): Hero dashboard mockup, modal-grade lift.
- **sh-glow** (`0 0 0 1px {plum-border}, 0 4px 24px {plum-glow}`): The plum-tinted glow used as a focus or emphasis ring under accent surfaces.

In dark mode all four scale up — `0.04`/`0.06` ambient becomes `0.5`/`0.6` because the canvas is plum-black, not white. Same vocabulary, recalibrated weights.

### Named Rules

**The Layered-Always Rule.** Cards do not sit flat. A resting card carries `sh-sm`; hover lifts to `sh-md` or `sh-lg`. A card with `box-shadow: none` reads as a placeholder, not a card.

**The Ink-Tinted-Shadow Rule.** Shadows are `rgba(22, 17, 30, *)` (ink-tinted), not `rgba(0, 0, 0, *)`. Pure-black shadows read foreign against the warm-gray neutral ramp.

## 5. Components

### Buttons

- **Shape:** Full pill (radius 999px). No exceptions — square or 8px-radius buttons read foreign.
- **Primary:** Background Deep Plum (`#40243F`), text white, padding `12px 24px`, weight 600. Carries a 3-layer plum-tinted shadow at rest (inset highlight + key + diffuse), deepens on hover. Hover also lifts `translateY(-1px)`; press scales to `0.97`.
- **Secondary:** Background canvas, text Deep Plum, border `1.5px` solid `--plum-border` (`rgba(64,36,63,0.18)`), `sh-sm` at rest. Hover deepens to `sh-md`, background to `surface-warm`, border to `plum-soft`.
- **Ghost:** No background, no border, text Muted. Hover fills with `plum-tint` (~6% plum on canvas) and switches text to Deep Plum. Used for tertiary CTAs only.
- **Size variants:** `btn-sm` (padding `8px 18px`, 0.8rem), default (12×24, 0.88rem), `btn-lg` (15×34, 1rem). **Touch-target caveat:** `btn-sm` falls below the 44×44 WCAG AAA target — raise on `(pointer: coarse)` or mobile breakpoints.

### Cards

- **Corner Style:** `--r-xl` (24px) for feature cards, story cards, pricing tiles. `--r-2xl` (32px) for the hero dashboard preview only.
- **Background:** Canvas. In dark mode, plum-black `#160F16` with a `+1` step to `#1E1520` on hover.
- **Border:** 1px `--gray-200` (`#E8E6ED`). On hover, shifts to `--plum-border`.
- **Shadow:** None at rest *for inline content cards* (the border carries the structure); `sh-lg` on hover with a `translateY(-4px)` lift. The hero preview and standout cards (founders callout) carry `sh-xl` at rest per the layered-always rule.
- **Internal Padding:** `28px 28px 32px` for feature cards (bottom-heavier — the title sits closer to the icon, copy breathes below).

### Inputs

- **Style:** Background `--gray-50` (`#F9F8FA`) at rest, border `1.5px` solid `--gray-200`, radius `--r-md` (12px), padding `11px 14px`, body font, 0.88rem.
- **Placeholder colour:** `--gray-500` (`#9088A3`) — accessible but reads as de-emphasised.
- **Focus:** Border shifts to `--plum-soft`, background lifts to canvas, and a 3px `--plum-tint` ring appears outside the border. No outline. The combination reads as "lifted into focus."
- **Error:** Inline error message with `role="alert"` and `aria-live="polite"` below the field group. Inputs link to it via `aria-describedby`. Required state carries `aria-required="true"`.

### Navigation

- **Style:** Fixed bar (height 68px) over a translucent canvas background (`rgba(255,255,255,0.82)`) with 10px `backdrop-filter: blur`. Bottom border `1px` solid `rgba(22,17,30,0.08)`.
- **Typography:** Default link weight 500, active weight 700 with Deep Plum colour and `aria-current="page"`.
- **CTA pair:** Right-aligned ghost ("Sign in") + primary ("Book a demo"), both `btn-sm`.
- **Mobile:** Below 768px the centre links collapse into a hamburger that opens a full-width drawer. The drawer traps Tab focus, closes on Esc, and returns focus to the hamburger.

### Launch Banner

The thin 42px banner above the nav carries the public-launch date and the waitlist CTA. Plum-tinted background, white text, a single pill chip ("Public launch · September 2028 · Design partners onboarding now") followed by the waitlist arrow. This is signature voice, not chrome — preserve it.

### Hero Dashboard Mockup

A custom in-page mockup of the product (not a screenshot), built with the system's tokens. Sidebar at Plum Dark, status badges using the status colours, donut + bar charts using `--gray-200` track and status fills. The mockup carries `sh-xl` and a soft plum ambient glow behind it. It's the page's signature component; do not replace with a static image.

## 6. Do's and Don'ts

### Do:

- **Do** use Deep Plum (`#40243F`) as the brand colour on primary buttons, brand glows, and key accents. Commit to it; don't hedge with neutrals around the edges.
- **Do** tint every gray toward magenta. The neutral ramp is `--gray-50` through `--gray-900` defined in `:root` of `css/style.css` — consume them via `var(--gray-*)`, never reinvent.
- **Do** use the radius scale: `--r-sm` (6px), `--r-md` (12px), `--r-lg` (18px), `--r-xl` (24px), `--r-2xl` (32px), `--r-pill` (999px). Buttons are always `--r-pill`; cards are `--r-xl` or `--r-2xl`.
- **Do** use the Stripe ease `cubic-bezier(0.32, 0.72, 0, 1)` and the `--ease` / `--ease-out` tokens. Crisp, no overshoot.
- **Do** carry shadows in `--sh-sm` through `--sh-xl` (ink-tinted 3-layer shadows defined in `:root`). Hover lifts one step.
- **Do** ground every feature claim in a specific FCA rule citation (COBS 9.5, PS22/9, FG21/1, DISP 1.6, SYSC 9) — the design follows the copy's voice.
- **Do** maintain WCAG AA contrast: ≥4.5:1 for small text. Verify `--gray-500` on canvas; today it's borderline at ~4.2:1.
- **Do** keep the launch banner above the nav. The honesty signal is doing real work.

### Don't:

- **Don't** use navy-and-gold or any fintech-luxury palette. That's the category default the brand explicitly departs from.
- **Don't** use the SaaS gradient template (purple-to-pink hero gradients, gradient-on-white card backgrounds, gradient-text headlines). Solid plum is the answer.
- **Don't** use `background-clip: text` with a gradient. Emphasis is via weight and size, not colour-shift effects.
- **Don't** use `backdrop-filter: blur()` decoratively. The nav uses 10px blur as voice; that's the entire glassmorphism budget for the site.
- **Don't** use `--ease-spring` / `--spring` (`cubic-bezier(0.34, 1.4, 0.64, 1)`) for new code. The 1.4 y-value causes overshoot, which is the "delightful bounce" AI tell. The token survives in the codebase but is on its way out.
- **Don't** add an eyebrow label above every section heading. One or two per page is voice; every section is AI rhythm.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent on cards, alerts, or callouts. The side-stripe pattern is banned.
- **Don't** hard-code colour values in HTML `style=` attributes or CSS rules. Use `var(--plum)`, `var(--gray-900)`, etc. The current `features.html` has 43 inline-style violations that break dark mode; this is a known cleanup item.
- **Don't** use SVG strokes / fills with hard-coded hex inside the dashboard mockup. Use `stroke="currentColor"` + a CSS class, so theme switching propagates.
- **Don't** reach for em dashes ("—") in body copy. Use commas, colons, periods, or restructured sentences. (The site has 25 em dashes on `index.html` alone — that's a cleanup item too.)
- **Don't** repeat "Book a demo / See all features" as the CTA pair on every page. Differentiate the CTA per surface (`Show me the audit trail`, `View the price`, `Map an integration`).
- **Don't** ship `<img>` PNGs at 1024×1024 when displaying at 40px. Use sized variants; aim for SVG.
- **Don't** mock a customer testimonial. Anonymous-but-clean reads as filler. If the quote is from research, frame it as research (`"themes from 27 compliance officers we interviewed in 2025"`).
