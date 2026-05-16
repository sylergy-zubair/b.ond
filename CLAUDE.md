# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind v4** — brand tokens defined in `app/globals.css`
- **Vercel** target deploy
- Backend (AI/DB/WhatsApp) deferred — focus is frontend only

## Commands

```sh
npm run dev      # dev server at localhost:3000
npm run build    # production build
npm run start    # production server
```

No test suite yet. No linting configured yet.

## Architecture

```
app/                  # Next.js App Router
  layout.tsx         # Root layout. Mounts Header / Footer / WhatsAppButton / CookieBanner globally
  page.tsx           # HomePage
  globals.css        # Tailwind + brand CSS variables
  smile-preview/
    page.tsx         # AI Smile Preview page

components/
  global/            # Shared across all pages
    Header.tsx       # Sticky, blurred, bone/80, B.OND wordmark + 5-link nav + Start CTA
    Footer.tsx       # 4-col: wordmark/blurb, Treatments, About, Legal
    WhatsAppButton.tsx  # Floating bottom-right CTA, opens wa.me with prefilled message
    CookieBanner.tsx    # GDPR banner, writes bond.cookie-consent to localStorage

  home/              # HomePage sections
    HomeHero.tsx
    HomeValueStack.tsx
    HomeQualitySection.tsx

  smile-preview/     # AI Smile Preview funnel
    SmilePreviewHero.tsx
    SmilePreviewForm.tsx  # Client component, handles image upload + contact capture

docs/
  PRODUCT.md         # Full PRD — what and why
  DESIGN.md          # Visual system, component inventory, page composition
```

## Design Tokens

Defined in `app/globals.css`. Token names mirror Nordcraft cloud project for future porting.

| Token | Hex | Use |
|---|---|---|
| `--color--primary` | `#2e2520` | text-mocha, bg-mocha |
| `--color--secondary` | `#f4efe8` | text-bone, bg-bone |
| `rgba(46,37,32,0.65)` | — | text-muted |
| `rgba(46,37,32,0.12)` | — | border-hair |

Nordcraft's blue/green/grey/red/yellow palettes kept intact — do not use in regular UI, they break brand.

**No accent colour. No gradients.** Subtle borders + soft shadows only.

## Key Decisions

- **Stack pivot (2026-05-13):** Nordcraft cloud parked — no documented JSON import API. Building in plain Next.js here. Token names preserved identical so future round-trip is mechanical.
- **Backend deferred:** AI preview pipeline, Supabase, WhatsApp Business API — all TBD. Frontend is the current focus.
- **AI previews:** Must be reviewed by a clinician before send. All AI output flagged as "visualisation, not guarantee."
- **WhatsApp as primary CTA** everywhere except Smile Preview / Matcher where AI funnel takes over.
- **GDPR-first:** Cookie banner blocks analytics until consent. Consent strings near every form.

## Open Items

- Logo asset, hero video, quality-section video — not yet provided. Placeholders used.
- Real before/after media for ResultsCard — not yet provided.
- Finance calculator lender terms (Klarna/V12/etc.) — not yet chosen.
- AI Smile model provider — not yet chosen.
- Meta Pixel / CAPI wiring — not yet specified.