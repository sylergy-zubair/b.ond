# B.OND — Product Memory

> Distilled, persistent reference. Source of truth = PRD v1.1. Update this file when product decisions change.

## One-liner

A mobile-first website for **B.OND**, a London composite-bonding clinic offering accessible-luxury cosmetic dentistry. Funnel = Meta ad → AI Smile Preview / AI consultation → WhatsApp clinician handoff.

## Audience

- 25–45, mobile-first cosmetic dental seekers in UK/London.
- 90%+ of traffic from Meta ads.
- Looking to fix: gaps, chips, uneven shape, discolouration.

## Pages

| Page | Primary CTA | Notes |
|---|---|---|
| Home | Online Consultation / WhatsApp | Hero video, value stack, Smile Preview entry. |
| London Landing | Start Consultation | Ad-optimised, UTM-tracked. |
| AI Smile Preview | Generate preview | Hero lead funnel. |
| Treatment Matcher | WhatsApp / Book | 4–5 step Q&A → personalised plan. |
| Pricing | WhatsApp | Ranges + sticky finance calc. |
| Results Library | Book via WhatsApp | Filtered by *problem*, not treatment. |
| Aftercare Hub | Escalate to WhatsApp/Call | AI Q&A widget. |
| Is B.OND Right For You? | — | Who we are / aren't for. |
| Founder Story | — | Clinician's "why". |
| Cookie / Privacy Policy | — | Footer links. |

## Features (priority)

1. **AI Smile Preview** — must-have. Selfie → email/phone capture → AI preview → clinician review queue → WhatsApp/SMS delivery. "Visualisation, not guarantee." <15s response. Mobile camera.
2. **AI Online Consultation** — must-have. 3–5 step chatbot, UTM auto-log, GA4/HubSpot, escalates to human.
3. **Transparent Pricing + Finance Calc** — must-have. £/tooth + £/arch, sticky calculator (deposit, term → monthly).
4. **Conversational Treatment Matcher** — high. 4–5 questions → custom recs with pricing/time.
5. **Results Library** — high. Filters: gaps / chips / uneven / discolouration. Per case: concern, method, time, cost, quote, before/after video.
6. **Video-first content** — medium. Cinematic muted autoplay loops.
7. **"Is B.OND Right For You?" + Aftercare Hub** — medium. AI Q&A with escalation for clinical questions.
8. **Founder Story** — narrative, not CV.

## Non-functional

- <2s load on 3G. Lazy videos/images.
- WCAG 2.1 AA. PWA for offline.
- GDPR consent for AI data. **All AI previews reviewed by a clinician before send.**
- GA4 events (submits, drop-offs). CRM sync for leads.
- Schema markup for local business.

## Stack (per PRD)

- **Frontend**: Nordcraft (visual builder).
- **Backend (deferred)**: Next.js on Vercel + Supabase Postgres + OpenAI + WhatsApp Business API.

## KPIs

- 20%+ lead conversion from ads.
- 15% selfie upload → lead.
- 30% chat completion.
- £/lead < £20 from ads.
- 3–4× WhatsApp bookings vs forms.

## Open decisions

- Postgres host: Supabase (PRD pick) vs Neon vs self-hosted. *PRD says Supabase — treat as locked unless user reopens.*
- Aftercare AI model: OpenAI vs open-source LLM. *Unresolved.*
- AI Smile model provider: not yet chosen.
- Finance lender for the calculator's real terms (Klarna/V12/etc.): not yet chosen.
- London landing UTM variant copy: not yet written.
- Meta Pixel / CAPI wiring: not yet specified.

## Phases

- **MVP (2 wks)**: Home + Smile Preview + basic form.
- **Full (4 wks)**: AI consultation + all pages.

## Current build status

- **Stack pivot (2026-05-13):** Frontend is being built as a real Next.js app in this workspace (per PRD's stated stack). The Nordcraft cloud project `bond / start` still exists but is parked — Nordcraft has no documented JSON import API, so we'd be editing JSON locally anyway. Plain React components are faster, type-safer, and integrate cleanly with the PRD's Supabase + OpenAI + WhatsApp backend later.
- Theme tokens set up in Nordcraft cloud are preserved (`--color--primary` = `#2e2520`, `--color--secondary` = `#f4efe8`). We re-use the same token names in Next.js CSS variables so a future round-trip stays possible.
- Backend work is deferred until frontend is ready.
- **Shipped in Next.js (2026-05-13):** Global shell + Home; **`/smile-preview`** with upload (gallery + mobile camera), contact fields, GDPR consent, loading → success UI using the user’s own image as the “preview” placeholder until the OpenAI/API pipeline exists.
