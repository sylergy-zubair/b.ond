<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# let's use Nordcraft’s internal component names and suggest me a BE

Perfect — let’s lock in **Nordcraft‑native component names** and pair them with a **lightweight backend** that plays well with Nordcraft’s open‑source runtime and API workflows.[^1][^2][^3]

***

## 1. Nordcraft Component‑Level Structure

Below are **suggested component names** you can drop into Nordcraft (e.g., in the **Components** panel). Nordcraft will treat them as reusable UI + logic units.[^4][^1]

### Global / Layout

- `GlobalLayout`
    - Root layout for all pages.
    - Attaches `Header`, `Footer`, `CookieBanner`, and `WhatsAppButton`.
- `Header`
    - Logo + (optional) nav links (Home, Pricing, Results, etc.).
- `Footer`
    - Links: Privacy, Cookie Policy, Contact, WhatsApp, Social.
- `CookieBanner`
    - GDPR‑style banner with “Accept necessary” / “Accept all”.
- `WhatsAppButton`
    - Floating / sticky button with click‑to‑chat (used on all pages).


### Homepage

- `HomeHero`
    - Hero section with headline, sub‑headline, two buttons, and background video.
- `HomeValueStack`
    - 3–4 value bullets in a grid.
- `HomeQualitySection`
    - Scroll‑down cinematic video loop section.


### AI Smile Preview

- `SmilePreviewHero`
    - Intro text and primary CTA to open the form.
- `SmilePreviewForm`
    - Form with:
        - `ImageUploadInput`
        - `TextInput` (name, email, phone)
        - `Checkbox` (consent)
    - On submit:
        - `ShowLoading` → `ShowPreviewResult` (placeholder).
- `PreviewResultCard`
    - Component that shows:
        - Generated preview image.
        - Text: “This is a visualisation, not a guarantee. A clinician will review your case.”


### Treatment Matcher

- `TreatmentMatcherFlow`
    - Stateful flow with 4–5 steps.
- `QuestionStep` (reusable)
    - Single question with:
        - `RadioGroup` or `RadioCards` as options.
        - Next button.
- `PersonalisedResultsPage`
    - Displays:
        - Recommendation text.
        - `PricingRangeSummary` (see below).
        - CTA: `WhatsAppButton` + “Book a consultation”.


### Pricing \& Finance

- `PricingCard`
    - For each pricing tier (per tooth, per arch).
- `PricingRangeSummary`
    - Reusable block for “Investment range: £X–£Y”.
- `FinanceCalculatorWidget`
    - Sticky bottom bar (mobile) / sidebar (desktop) with:
        - `Slider` (amount).
        - `TextInput` (deposit).
        - `Select` (12/24/36 months).
        - `Display` (monthly payment).


### Results Library

- `ResultsLibraryPage`
    - Hosts:
        - `ResultsFilterBar` (tabs/chips).
        - `ResultsGrid`.
- `ResultsFilterBar`
    - Buttons: “Gaps”, “Chipped / broken”, “Uneven shape”, “Discolouration”.
- `ResultsCard`
    - Reusable card with:
        - Before/after image or video.
        - Fields as Nordcraft text elements:
            - `Concern`,
            - `WhatWasDone`,
            - `TimeTaken`,
            - `Investment`,
            - `PatientQuote`.


### Aftercare Hub

- `AftercareHubPage`
    - Container for search + AI area.
- `AftercareSearch`
    - Text input with placeholder: “Ask about your aftercare…”.
- `AftercareAIWidget`
    - Displays:
        - AI answer.
        - Optional escalation CTAs: `WhatsAppButton`, “Call the clinic”.


### Trust / Story Pages

- `HospitalityPageTemplate` (shared)
    - Minimal layout for:
        - `IsBondRightPage`
        - `FounderStoryPage`.
- `IsBondRightPage`
    - Two sections: “Who we’re for” and “Who we’re not for”.
- `FounderStoryPage`
    - Narrative text + image block.

***

## 2. Backend Suggestion (BE)

Nordcraft exposes its runtime and can connect to **any backend** over HTTP APIs.[^2][^3]
Given you’re a JS/Node‑savvy dev, I’d recommend:

### Stack: **Vercel Edge Functions + Prisma + PostgreSQL**

Why this combo:

- **Fast, serverless, and SEO‑friendly**: works with Nordcraft’s SSR‑friendly runtime.[^3][^2]
- **Simple data model** for your use cases:
    - Leads (Smile Preview + Treatment Matcher).
    - Results Library entries.
    - Aftercare Q\&A logs.


#### 2.1 Backend Responsibilities

The BE should expose:

- **Leads API**
    - `POST /api/leads/smile-preview`
        - Body: `name`, `email`, `phone`, `imageUploadUrl`, `consent`.
        - Response: confirmation; queues for clinician review.
    - `POST /api/leads/treatment‑matcher`
        - Body: problem type, budget range, timeline, plus email/phone.
- **Results Library API**
    - `GET /api/results`
        - Returns: list of cases with filters in `tags` (e.g., `gaps`, `chipped`).
    - `GET /api/results/:id`.
- **Aftercare AI API**
    - `POST /api/aftercare/ask`
        - Body: `question` (string), `patientId` (if authed).
        - Response: `answer`, `needsEscalation: boolean`.

You then wire these endpoints into Nordcraft’s **workflow** editor (e.g., on form submit → API call → update UI).[^1][^2]

#### 2.2 Tech Stack Breakdown

- **Backend Framework**:
    - **Next.js** project on **Vercel Edge Functions** (or standard API routes).
- **Database**:
    - **PostgreSQL** (Supabase or Neon) with:
        - `leads` table (smile previews, treatment matcher).
        - `results` table (results library).
        - `aftercare_logs` (optional, for tracking questions).
- **AI glue** (for Smile Preview \& Aftercare):
    - Call your existing **AI‑smile model** (e.g., hosted on your own infra, Replicate, or a dental‑AI SaaS) from the backend.
    - For Aftercare, pipe questions through a **fine‑tuned model** (e.g., OpenAI or open‑source LLM) with context from your clinic’s aftercare docs.

***

## 3. How to Wire It into Nordcraft

- In Nordcraft:
    - Use **Workflows** on `SmilePreviewForm` and `TreatmentMatcherFlow` to:
        - On submit → call `POST /api/leads/...`.
        - On success → update `PreviewResultCard` or `PersonalisedResultsPage`.
- Use **API Listeners** (Nordcraft’s API integration) to:
    - Load `results` into `ResultsGrid`.
    - Call `aftercare/ask` from `AftercareAIWidget`.

***

If you tell me:

- whether you want **Supabase** vs **Neon** vs self‑hosted Postgres,
- and whether you prefer **OpenAI** or an open‑source LLM for the Aftercare AI,

I can give you concrete **schema definitions** (Postgres tables) and **/api route examples** (Next.js + TypeScript) you can directly paste into your backend repo.
<span style="display:none">[^10][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://docs.nordcraft.com/components/overview

[^2]: https://www.youtube.com/watch?v=JFKB1IbReyE

[^3]: https://github.com/nordcraftengine/nordcraft

[^4]: https://docs.nordcraft.com/guides/component-creation

[^5]: https://app.daily.dev/posts/nordcraft-ai-agent-visual-website-builder-owjvelis7

[^6]: https://one.spark-pro.dev

[^7]: https://aiagentstore.ai/ai-agent/nordcraft

[^8]: https://nordcraft.com

[^9]: https://blog.nordcraft.com/nordcraft-2.0

[^10]: https://github.com/nordcraftengine

