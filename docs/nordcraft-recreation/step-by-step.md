# B.OND → Nordcraft Recreation Guide

Element-by-element instructions for rebuilding B.OND in Nordcraft.

---

## Step 1 — Set Up Your Nordcraft Project

1. Create new project in Nordcraft. Name it "B.OND".
2. Go to **Project Settings → Theme**.
3. Set your brand tokens:

| Token | Value | Use |
|---|---|---|
| `--color--primary` | `#2e2520` | Body text, headings |
| `--color--secondary` | `#f4efe8` | Page background |
| `--color--text-muted` | `rgba(46,37,32,0.65)` | Sub-headlines, micro-copy |
| `--color--border` | `rgba(46,37,32,0.12)` | Hairline dividers |

4. Set font family to **Inter** (or any clean sans-serif).
5. Set max content width to **1024px**.

---

## Step 2 — Global Theme Variables (CSS)

Paste this into your project's global CSS:

```css
:root {
  --color--primary: #2e2520;
  --color--secondary: #f4efe8;
  --color--text-muted: #2e2520a6;
  --color--border: #2e25201f;
  --color--surface-elev: #ffffff80;
  --font-display: "Inter", system-ui, sans-serif;
  --max-content: 1024px;
}
```

Set `--color--secondary` as your page background. Set `--color--primary` as your default text colour.

---

## Step 3 — GlobalLayout Shell

Every page uses this structure:

```
GlobalLayout
├── Header (sticky)
├── [page content slot]
└── Footer
```

### 3a — Header

**Create:** `Header` component (or use built-in Header element with customisation).

**Structure:**
- Logo slot: text "B.OND" in uppercase, tracked (letter-spacing: 0.18em), semibold, font-display
- Desktop nav (hidden on mobile):
  - AI Smile Preview → `/smile-preview`
  - Pricing → `/pricing`
  - Results → `/results`
  - Aftercare → `/aftercare`
  - Story → `/story`
- Mobile: hamburger menu (later)
- "Start" CTA button (mocha bg, bone text) → `/smile-preview`

**Styling:**
- Sticky top
- `backdrop-filter: blur(12px)`
- Background: `--color--secondary` at 80% opacity
- Border-bottom: 1px `--color--border`
- Height: 64px

### 3b — Footer

**Structure:**
- 4-column grid (→ 1-col mobile):
  - Col 1: Logo wordmark + tagline ("Composite bonding, the way it should feel. London.")
  - Col 2: "Treatments" heading + links (Smile Preview, Treatment Matcher, Pricing, Results)
  - Col 3: "About" heading + links (Story, Is B.OND right for you?, Aftercare hub)
  - Col 4: "Legal" heading + links (Privacy policy, Cookie policy)
- Bottom strip: copyright year + opening hours ("Mon–Fri 9:00–18:00 · London")

**Styling:**
- Border-top: 1px `--color--border`
- Footer text: `--color--primary` at 85%
- Footer muted text: `--color--text-muted`
- Logo: same as header

### 3c — WhatsAppButton

**Create:** `WhatsAppButton` component.

**Structure:**
- Floating button, bottom-right corner
- Round pill shape, mocha background, bone text
- Icon slot: WhatsApp glyph (or SVG chat icon)
- Text: "Chat on WhatsApp" (desktop), "Chat" (mobile)

**Styling:**
- Position: fixed, `bottom: 2rem`, `right: 2rem` (desktop); `bottom: 1.25rem`, `right: 1.25rem` (mobile)
- `z-index: 40`
- Background: `--color--primary`
- Text: `--color--secondary`
- Border-radius: 9999px (full)
- Shadow: `0 8px 28px -12px rgba(46,37,32,0.6)`
- Hover: opacity 90%
- Links to: `https://wa.me/447000000000?text=Hi%20B.OND%20%E2%80%94%20I%27d%20like%20to%20ask%20about%20composite%20bonding.`

### 3d — CookieBanner

**Create:** `CookieBanner` component.

**Structure:**
- Fixed card, bottom-right (desktop) or bottom-centre (mobile)
- Copy: "We use cookies to keep the site working and to learn what makes it better. Read more in our cookie policy."
- Two buttons:
  - "Necessary only" (outline style)
  - "Accept all" (solid mocha)
- Links to `/cookie-policy`

**Styling:**
- Position: fixed, `bottom: 6rem`, `right: 2rem` (desktop)
- `z-index: 45`
- Background: white with backdrop-blur
- Border: 1px `--color--border`
- Border-radius: 1rem
- Max-width: 384px

---

## Step 4 — HomePage Sections

### 4a — HomeHero

**Structure:**
- Full-width section, `min-height: 100dvh`
- Background: optional video loop (autoplay, muted, looped, playsinline) — placeholder rectangle for now
- Eyebrow text: "London · Composite bonding" (uppercase, tracked 0.2em, muted colour)
- Headline: "A smile you'd choose again." (font-display, ~2.5rem mobile / 4rem desktop, tracking -0.02em, max-width: 16ch)
- Sub-headline: "See your smile before you commit. Honest pricing, clinician-reviewed previews, no marketing fluff." (text-lg, muted, max-width: 44ch)
- CTA row:
  - Primary: "Preview my smile" → `/smile-preview` (solid mocha pill)
  - Secondary: "Ask on WhatsApp" → WhatsApp link (outline pill)
- Disclaimer: "Previews are a visualisation, not a guarantee. Every result is reviewed by a clinician before sending." (text-xs, muted)

**Styling:**
- Section padding: `py-16 mobile / py-24 desktop`, `px-5 sm:px-8`
- Max content width: `--max-content`, centred
- Background: `--color--secondary`

### 4b — HomeValueStack

**Structure:**
- Section with border-top divider
- Headline: "What 'accessible luxury' actually means." (font-display, ~1.5rem mobile / 2rem desktop, tracking -0.02em)
- 3-column grid of value bullets:
  - Each: number label (01, 02, 03 in tabular nums, muted) + title (font-display, xl) + body copy
- Values:
  1. "See it before you book" — "Upload one selfie. Get a clinician-reviewed preview of your post-treatment smile, by WhatsApp or email."
  2. "Transparent £, no menu tricks" — "Real ranges per tooth and per arch. Sticky finance calculator so monthly is never a surprise."
  3. "A clinician, not a salesperson" — "Honest assessments. If composite isn't right for you, we'll say so."

**Styling:**
- Section padding: same as HomeHero
- Grid gap: `gap-10 mobile / gap-12 desktop`
- 3 columns on desktop, 1 on mobile
- Text colour: primary for titles, primary/80% for body

### 4c — HomeQualitySection

**Structure:**
- Section with border-top divider
- 2-column layout (5/12 + 7/12 split on desktop, stacked on mobile)
- Left column:
  - Eyebrow: "The craft" (uppercase, tracked 0.2em, muted)
  - Headline: "Twenty minutes per tooth, ten years of practice in every one." (font-display, ~2rem mobile / 2.5rem desktop)
  - Body: "Composite is layered, sculpted, and polished by hand. We don't rush and we don't oversell. If we'd rather not treat, we'll tell you." (muted)
  - Link: "See real results →" → `/results`
- Right column:
  - Aspect-ratio 4:5 container
  - Placeholder rectangle for video (rounded-lg, border `--color--border`)
  - Label: "quality video loop"

**Styling:**
- Same section padding
- Aspect ratio: `aspect-[4/5]`
- Link underline on hover

---

## Step 5 — AI Smile Preview Page (`/smile-preview`)

### 5a — SmilePreviewHero

**Structure:**
- Eyebrow + headline + sub-headline + disclaimer
- Copy:
  - Eyebrow: "AI Smile Preview"
  - Headline: "See your new smile in under 15 seconds."
  - Sub: "Upload a selfie. Our AI gives you a preview. A clinician reviews it before it lands in your inbox or WhatsApp."
  - Disclaimer: "Visualisation, not a guarantee."

### 5b — SmilePreviewForm

**Create:** `SmilePreviewForm` component.

**Structure:**
- Image upload zone:
  - Drag-and-drop or click to browse
  - Mobile: camera capture option
  - Accepts: JPG, PNG, WEBP
- Contact fields:
  - Name (text input)
  - Email (email input)
  - Phone (tel input, optional)
- Consent checkbox:
  - Label: "I consent to B.OND processing my image for an AI smile preview. I understand this is a visualisation and not a medical guarantee. Read our privacy policy."
- Submit button: "Generate my preview" (solid mocha pill)
- On submit: loading state (timer counting up)
- On success: preview result card with user's image + reassurance copy + WhatsApp CTA

**Styling:**
- Form max-width: 480px
- Input fields: outlined style, `--color--border` border, focus ring `--color--primary`
- Submit button: full-width, mocha bg, bone text

---

## Step 6 — Pricing Page (`/pricing`)

### PricingCard

**Structure per tier:**
- Tier name (e.g., "Per tooth", "Per arch")
- Price range (e.g., "£150–£350")
- What's included list

### FinanceCalculatorWidget

**Create:** `FinanceCalculatorWidget` component.

**Structure:**
- Sticky bar on mobile (bottom), sidebar on desktop
- Controls:
  - Deposit amount (text input or slider)
  - Term length (select: 12 / 24 / 36 months)
  - Displays calculated monthly payment
- Shows: "From £X/month"

---

## Step 7 — Results Library (`/results`)

### ResultsFilterBar

**Structure:**
- Chip-style filter buttons: Gaps · Chipped · Uneven · Discolouration
- Active chip: solid mocha bg
- Inactive: outline style

### ResultsCard

**Structure per result:**
- Before/after media (image or video)
- Concern label (e.g., "Gaps")
- What was done
- Time taken
- Investment range
- Patient quote

---

## Step 8 — Treatment Matcher (`/treatment-matcher`)

**Create:** `TreatmentMatcherFlow` component.

**Structure:**
- 4–5 step questionnaire
- Progress indicator (step X of Y)
- Each step: question + radio card options
- Final step: personalised recommendations + pricing summary + WhatsApp CTA

---

## Step 9 — Aftercare Hub (`/aftercare`)

### AftercareSearch

**Structure:**
- Search input: "Ask about your aftercare…"
- AI widget below showing answer + escalation CTAs (WhatsApp, Call clinic)

---

## Step 10 — Static Pages

### Founder Story (`/story`)

- Minimal narrative layout (same HospitalityPageTemplate)
- Large portrait image
- Pull quotes
- Body copy

### Is B.OND Right For You? (`/is-bond-right`)

- Two-column: "Who we're for" / "Who we're not for"
- No CTAs

---

## Design Token Quick Reference

| Look | Value | Notes |
|---|---|---|
| Primary text / headings | `#2e2520` | --color--primary |
| Page background | `#f4efe8` | --color--secondary |
| Muted text | `rgba(46,37,32,0.65)` | --color--text-muted |
| Borders | `rgba(46,37,32,0.12)` | --color--border |
| Elevated surfaces | `rgba(255,255,255,0.5)` | --color--surface-elev |
| Max content width | 1024px | --max-content |
| Font | Inter (or clean sans-serif) | --font-display |

**No accent colour. No gradients. Subtle borders + soft shadows only.**

---

## Typography Scale

| Element | Size | Weight | Line-height |
|---|---|---|---|
| Eyebrow | 12px (0.75rem) | — | — |
| H1 | 40px (2.5rem) mobile / 60px (4rem) desktop | bold | 1.05 |
| H2 | 24px mobile / 32px desktop | bold | — |
| H3 | 20px | bold | — |
| Body | 16px | regular | 1.6 |
| Small | 14px | regular | — |
| Micro | 12px | regular | — |

---

## Spacing Scale

| Name | Value |
|---|---|
| section-y (mobile) | 64px (py-16) |
| section-y (desktop) | 96px (py-24) |
| content-padding-x | 20px mobile / 32px desktop |
| grid-gap (mobile) | 40px |
| grid-gap (desktop) | 48px |
| max-content | 1024px |

---

## Component Checklist

- [ ] Header
- [ ] Footer
- [ ] WhatsAppButton
- [ ] CookieBanner
- [ ] HomeHero
- [ ] HomeValueStack
- [ ] HomeQualitySection
- [ ] SmilePreviewHero
- [ ] SmilePreviewForm
- [ ] PricingCard
- [ ] FinanceCalculatorWidget
- [ ] ResultsFilterBar
- [ ] ResultsCard
- [ ] TreatmentMatcherFlow
- [ ] AftercareSearch
- [ ] FounderStoryPage
- [ ] IsBondRightPage