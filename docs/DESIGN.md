# B.OND — Design Memory

> Visual system, component inventory, and per-page composition. Source of truth for "what does this look like and which Nordcraft components does it use."

## Brand positioning

Accessible luxury cosmetic dental — **warm, reassuring, non-salesy.** Apple-like minimalism. References:

- [thedentalist.co.uk](https://thedentalist.co.uk) — scroll quality, cinematic loops.
- [32co questioning flow](https://app.32co.com/Tahir-Zaidi/TqkTgil/sq) — Treatment Matcher tone.

## Design tokens

### Colour

We are reusing Nordcraft's default token names rather than renaming, to avoid breaking any built-in references. Semantic mapping:

| Nordcraft token | Hex | Semantic meaning | Use |
|---|---|---|---|
| `--color--primary` | `#2e2520` | **text** (mocha) | Body + headings. |
| `--color--secondary` | `#f4efe8` | **bg** (bone) | Page background, large surfaces. |
| *(inline)* `rgba(46, 37, 32, 0.65)` | — | **text-muted** | Sub-headlines, micro-copy. Inline rgba until reused enough to promote to a token. |
| *(inline)* `rgba(46, 37, 32, 0.12)` | — | **border** | Hairline dividers only. Inline rgba for now. |
| *(inline)* `rgba(255, 255, 255, 0.5)` | — | **surface-elev** | Optional soft card on bone. Inline rgba for now. |

Nordcraft's default `--color--blue/green/grey/red/yellow` palettes are kept intact for potential future state colours (errors, success, info). **Do not use them in regular UI** — they break the brand.

**No accent colour. No gradients.** Subtle borders + soft shadows only when needed.

### Typography

- Family: **Inter** (or SF-like clean sans-serif).
- Headings: bold weight, generous line-height, sentence case.
- Body: 16px base, 1.6 line-height.
- Use type hierarchy + whitespace for emphasis, not colour.

### Spacing scale

Tailwind-like: `4, 8, 12, 16, 24, 32, 48, 64, 96, 128` px.
Defaults: section vertical padding `py-12` mobile / `py-24` desktop. Grid gap `gap-6`. Max content width `max-w-screen-lg` (≈ 1024px).

### Motion

- Quiet. No bouncy easing. Use `ease-out` 200–400ms for hover/state.
- Video loops: autoplay, muted, `playsinline`, looped, low-bitrate.

## UX principles

1. **Mobile-first.** Test 360px wide first; desktop is the enhancement.
2. **Sub-2s load on 3G.** Lazy-load videos and below-the-fold images.
3. **WhatsApp as primary CTA** everywhere except where AI Smile / Matcher takes over.
4. **Sticky finance calc** on Pricing, Home, Results, Aftercare.
5. **GDPR-first.** Consent strings near every form. Cookie banner blocks analytics until accepted.
6. **Clinician trust.** Every AI output flagged as visualisation, reviewed before send.
7. **Honest copy.** No marketing fluff. Show prices upfront.

## Component inventory (Nordcraft-native names)

### Layout (shared)

- `GlobalLayout` — root shell for every page. Slots: `Header`, page content, `Footer`. Mounts `WhatsAppButton` + `CookieBanner` globally.
- `Header` — logo + nav (Home, Pricing, Results, Aftercare, Story). Mobile: hamburger.
- `Footer` — Privacy, Cookie Policy, Contact, WhatsApp, Social. Address + opening hours for local SEO.
- `CookieBanner` — GDPR. "Accept necessary" / "Accept all". Blocks GA4 until consent.
- `WhatsAppButton` — floating sticky CTA. Click-to-chat with prefilled message.

### Home

- `HomeHero` — headline, sub-headline, primary CTA (→ Smile Preview), secondary CTA (WhatsApp), muted background video loop.
- `HomeValueStack` — 3–4 value bullets in a grid.
- `HomeQualitySection` — cinematic video loop (prep / polish / smile reveal).

### AI Smile Preview

- `SmilePreviewHero` — intro copy, "visualisation, not guarantee" disclaimer, primary CTA.
- `SmilePreviewForm` — composes `ImageUploadInput`, `TextInput` (name/email/phone), `Checkbox` (consent), submit. On submit → loading → `PreviewResultCard`.
- `PreviewResultCard` — generated image + reassurance copy + clinician-review note.

### Treatment Matcher

- `TreatmentMatcherFlow` — stateful 4–5 step flow with progress indicator.
- `QuestionStep` — reusable; composes `RadioGroup`/`RadioCards` + next button.
- `PersonalisedResultsPage` — recommendation + `PricingRangeSummary` + `WhatsAppButton`.

### Pricing & Finance

- `PricingCard` — per tier (per tooth / per arch).
- `PricingRangeSummary` — reusable "Investment range: £X–£Y" block.
- `FinanceCalculatorWidget` — sticky bottom bar (mobile) / sidebar (desktop). `Slider`, deposit `TextInput`, term `Select` (12/24/36), monthly `Display`.

### Results Library

- `ResultsLibraryPage` — hosts filter bar + grid.
- `ResultsFilterBar` — chips: Gaps / Chipped / Uneven / Discolouration.
- `ResultsGrid` — responsive grid of `ResultsCard`s.
- `ResultsCard` — before/after media + Concern, WhatWasDone, TimeTaken, Investment, PatientQuote.

### Aftercare Hub

- `AftercareHubPage`
- `AftercareSearch` — input "Ask about your aftercare…".
- `AftercareAIWidget` — answer + escalation CTAs (`WhatsAppButton`, "Call the clinic").

### Trust / Story

- `HospitalityPageTemplate` — shared minimal layout for narrative pages.
- `IsBondRightPage` — "Who we're for" + "Who we're not for".
- `FounderStoryPage` — narrative + portrait + pull quotes.

## Page → component composition

```
HomePage
├─ GlobalLayout
   ├─ HomeHero
   ├─ HomeValueStack
   └─ HomeQualitySection

SmilePreviewPage
├─ GlobalLayout
   ├─ SmilePreviewHero
   └─ SmilePreviewForm → PreviewResultCard

TreatmentMatcherPage
├─ GlobalLayout
   └─ TreatmentMatcherFlow → PersonalisedResultsPage
        ├─ QuestionStep ×N
        └─ PricingRangeSummary

PricingPage
├─ GlobalLayout
   ├─ PricingCard ×N
   ├─ PricingRangeSummary
   └─ FinanceCalculatorWidget (sticky)

ResultsLibraryPage
├─ GlobalLayout
   ├─ ResultsFilterBar
   └─ ResultsGrid → ResultsCard ×N

AftercareHubPage
├─ GlobalLayout
   ├─ AftercareSearch
   └─ AftercareAIWidget

IsBondRightPage / FounderStoryPage
├─ GlobalLayout → HospitalityPageTemplate → narrative content
```

## Build order

1. **Global theme** (colour vars, font, spacing).
2. **GlobalLayout + Header + Footer + WhatsAppButton + CookieBanner.**
3. **HomePage** sections.
4. **AI Smile Preview** (highest-value funnel page).
5. **Pricing + FinanceCalculatorWidget** (reusable, blocks later pages).
6. **Treatment Matcher**.
7. **Results Library**.
8. **Aftercare Hub**.
9. **Is B.OND Right For You? + Founder Story**.
10. **London Landing variant**.
11. **Cookie/Privacy pages**.

## Open visual decisions

- Logo asset — not yet provided.
- Hero video asset — not yet provided. Placeholder needed.
- Quality-section video asset — not yet provided.
- Real before/after media for `ResultsCard` — not yet provided.
- Founder portrait — not yet provided.

## Build log

- 2026-05-13 — Set `--color--primary = #2e2520` and `--color--secondary = #f4efe8` in the Nordcraft cloud Default theme. Kept blue/green/grey/red/yellow palettes intact for future use.
- 2026-05-13 — Added `<main>` with `background-color: var(--color--secondary); min-height: 100dvh` to HomePage in Nordcraft cloud, plus an empty `<section>`.
- 2026-05-13 — Deferred: load **Inter** as a project font; extra colour tokens for `text-muted`/`border` (inline rgba until reused).
- 2026-05-13 — Placeholder convention agreed: wordmark `B.OND` for the logo; solid bone-coloured rectangles with a small label (e.g. "hero video") for any unassigned media slots.
- 2026-05-13 — **Stack pivot:** Nordcraft cloud doesn't have a documented JSON import API; manual editing through the in-app browser is ~270 round-trips for the global shell + HomePage. Pivoted to a real Next.js + Tailwind app in this workspace (PRD's stated stack). Token names kept identical to the Nordcraft theme so a future port is mechanical.
- 2026-05-13 — **GlobalLayout shipped** in `app/layout.tsx`: `<Header>` (sticky, blurred, bone/80, with B.OND wordmark + 5-link primary nav + Start CTA), `<Footer>` (4-col: wordmark/blurb, Treatments, About, Legal + bottom strip with year & hours), `<WhatsAppButton>` (floating bottom-right, mocha pill, opens `wa.me` with prefilled copy), `<CookieBanner>` (bottom-right card, "Necessary only" / "Accept all", writes `bond.cookie-consent` to localStorage). Inter loaded via `next/font/google`.
- 2026-05-13 — **HomePage shipped**: `HomeHero` (eyebrow → 6xl headline → 44ch sub → dual CTA → disclaimer, with bone "hero video" placeholder rect), `HomeValueStack` (3 numbered bullets, no icons), `HomeQualitySection` (2-col on sm+: copy left, 4:5 placeholder rect right). Dev server confirms HTTP 200 + correct rendering at `localhost:3000`.
- 2026-05-13 — **Home polish:** Cookie banner sits above the WhatsApp FAB on narrow viewports (`bottom` uses `safe-area` + ~5.75rem clearance); FAB uses `z-40` vs banner `z-[45]` and respects safe-area on small screens. Hero "hero video" label anchored to the lower well (`top-[46%]` + `z-[1]` above vignette) so it does not sit behind headline copy.
- 2026-05-13 — **`/smile-preview`:** `SmilePreviewHero` + client `SmilePreviewForm` (gallery + optional mobile camera capture, drag-drop, email/phone/name, consent, timed loading → success with user image + WhatsApp / results CTAs). Backend hook deferred; copy matches SITE_LOOK.md.
