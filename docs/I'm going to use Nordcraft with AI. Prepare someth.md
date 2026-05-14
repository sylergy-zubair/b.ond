<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# I'm going to use Nordcraft with AI. Prepare something for that

Perfect—Nordcraft’s AI agent is ideal for this kind of project. Below is a **Nordcraft‑ready spec** you can paste directly into Nordcraft’s **AI Assistant** (via `Cmd/Ctrl + I`) or keep as your project blueprint.

***

# B.OND – Nordcraft AI‑Readied Spec

You can give this as a prompt to Nordcraft’s AI Agent (in **Build mode**) and it will:

- generate the **page structure**,
- create **components** (Hero, SmilePreview, FinanceCalculator, ResultsCard, etc.),
- and wire basic **workflows** and **styling**.

***

## 1. Project Overview for Nordcraft AI

> “Build a dental cosmetic‑bonding clinic website for **B.OND**, primarily focused on **composite bonding** at an accessible price.
> Use a **minimalist** design similar to **Apple’s website**, with:
> - Background: `#f4efe8` (bone colour).
> - Text: `#2e2520` (deep mocha).
> - No heavy colours or gradients; keep UI clean and typography‑forward.
>
> Make it **mobile‑first**, fast‑loading, and structured as a single‑site with these main pages:
> - Home
> - AI Smile Preview
> - Conversational Treatment Matcher
> - Transparent Pricing
> - Results Library (problem‑based before/after)
> - Aftercare Hub (AI Q\&A)
> - ‘Is B.OND Right For You?’
> - Founder/Clinician Story
>
> Ensure WhatsApp click‑to‑chat is the primary CTA across all pages.
> Add GDPR‑compliant cookie banner and schema markup for local SEO.
> Output: Nordcraft page structure + components + workflows.”

***

## 2. Page Structure (Nordcraft Pages)

Give Nordcraft AI this list as your **site tree**:

- `Home`
- `AI Smile Preview`
- `Treatment Matcher`
- `Pricing`
- `Results Library`
- `Aftercare Hub`
- `Is B.OND Right For You`
- `Founder Story`
- `Cookie Policy / Privacy Policy` (linked from footer)

Use Nordcraft’s **navigation builder** to connect these as top‑level pages.

***

## 3. Design \& Styling (for Nordcraft’s CSS/Theme)

Tell Nordcraft AI:

> “Apply these styles globally:
> - Background: `#f4efe8`.
> - Text color: `#2e2520`.
> - No accent colours; allow only subtle borders or soft shadows if needed.
> - Use a clean sans‑serif font (e.g., Inter / SF‑like) for body and headings.
> - Use generous whitespace and minimal sections.
> - Keep all sections full‑width, centre‑aligned text, and avoid heavy visual clutter.”

Ask Nordcraft to:

- Create a **global style** (CSS variables) for the two colours.
- Apply consistent spacing (e.g., `gap‑6`, `py‑12`, `max‑width‑screen‑lg`).

***

## 4. Home Page (Nordcraft AI Prompt)

> “Create a **Home** page with:
> 1. **Hero section**:
>    - Short headline: ‘Smile‑changing composite bonding, at an accessible price.’
>    - 1–2 sub‑headline lines.
>    - Primary button: ‘See what your smile could look like’ → links to **AI Smile Preview** page.
>    - Secondary button: ‘WhatsApp us’ (WhatsApp click‑to‑chat).
>    - Gentle video loop autoplay, muted, in background or hero.
> 2. **Value‑stack section** (3–4 short bullets):
>    - ‘Fast, affordable composite bonding’
>    - ‘Transparent pricing, no surprises’
>    - ‘Personalised plan, not a menu’
>    - ‘Video‑rich, calm experience’
> 3. **Scroll‑down ‘quality’ section**:
>    - Short cinematic video loop of hands prepping composite, polish, slow‑motion smile reveal.
>    - Autoplay, sound‑off, soft Aēsop‑style feel.
>
> Ensure this is mobile‑first, responsive, and loads quickly.”

***

## 5. AI Smile Preview Page

> “Create an **AI Smile Preview** page that acts as the **lead funnel**:
> 1. Large section:
>    - Headline: ‘See what your smile could look like.’
>    - Sub‑headline: explaining it’s a **visualisation, not a guarantee**.
> 2. Form:
>    - Upload selfie (file/image input; mobile camera‑friendly).
>    - Fields:
>      - Name (optional)
>      - Email (required)
>      - Phone (required)
>    - Consent: ‘A clinician will review your case before any consultation. This is a visualisation, not a guarantee.’
>    - Submit button: ‘Generate preview’.
> 3. Post‑submit:
>    - Show loading state, then:
>      - AI‑generated preview image (placeholder for now).
>      - Message: ‘We’ll send your preview to your email and WhatsApp and a clinician will review your case.’
>      - Auto‑send preview link / email template (mock API / webhook).
> 4. Add a small **GDPR note** and link to privacy policy.
>
> Ensure the page is simple, focused, and mobile‑optimized.”

Later, you’ll replace the mock API with your actual AI‑smile backend.

***

## 6. Conversational Treatment Matcher (AI‑led Flow)

> “Create a **Treatment Matcher** page (or modal) that:
> 1. Starts with:
>    - Question: ‘Tell us what bothers you about your smile.’
> 2. Shows a step‑by‑step flow (1 question per screen):
>    - Options: gaps, chips, uneven shape, colour, etc.
>    - Budget range (ranges, not open‑text).
>    - Timeline (‘how soon?’).
> 3. After 4–5 questions, display a **personalised results page**:
>    - Headline: ‘Based on what you’ve shared…’
>    - List:
>      - Recommended treatment(s) in simple language.
>      - Investment range (per tooth / arch).
>      - Time estimate.
>    - CTA: ‘Book a consultation’ / ‘WhatsApp us’.
>
> Build this as a **step‑navigation** or progress‑indicator UI, clean and minimal.”

***

## 7. Transparent Pricing Page

> “Create a **Pricing** page with:
> - Section: **Composite Bonding**
>   - ‘£X per tooth’ (example placeholder).
>   - ‘£Y for full upper arch.’
>   - Explainers:
>     - ‘Price varies by number of teeth and complexity.’
> - Section: **Finance**
>   - ‘Finance from £Z/month.’
>   - Link to **Finance Calculator** (see below).
> - Keep copy short and honest; no hiding behind ‘book a consultation’.”

***

## 8. Finance Calculator (Reusable Component)

> “Create a **Finance Calculator** component that:
> - Appears as a **sticky bottom bar** on mobile and as a **compact sidebar / widget** on desktop.
> - Has:
>   - Range: amount to finance (slider: e.g., £500–£5,000).
>   - Optional deposit input.
>   - Term selector: 12 / 24 / 36 months.
> - Output: estimated monthly payment.
> - Micro‑copy: ‘This is an estimate. Actual finance may vary based on lender terms.’
>
> Reuse this component on:
> - Pricing
> - Home
> - Results Library
> - Aftercare Hub
> where relevant.”

***

## 9. Results Library (Problem‑Based Before/After)

> “Create a **Results Library** page with:
> 1. **Filters** at top:
>    - Tabs or chips: ‘Gaps’, ‘Chipped / broken’, ‘Uneven shape’, ‘Discolouration’.
> 2. A list of **ResultsCard** components:
>    - Before/after image or video.
>    - Fields:
>      - ‘The concern’
>      - ‘What was done’
>      - ‘Time taken’
>      - ‘Investment’
>      - ‘Patient quote’ (one short line)
> 3. Behavior:
>    - Clicking a filter hides/shows only relevant cards.
>
> Ensure the layout is clean, grid‑like, and mobile‑friendly.”

You can then tell Nordcraft to “duplicate ResultsCard as a reusable component.”

***

## 10. Aftercare Hub (AI Q\&A)

> “Create an **Aftercare Hub** page:
> 1. Title: ‘Aftercare Hub’.
> 2. Section:
>    - Search bar: ‘Ask about your aftercare (e.g., “Can I drink coffee yet?”)’.
> 3. Below:
>    - AI Assistant widget that:
>      - Answers questions using clinic‑approved aftercare knowledge.
>      - If question is out‑of‑scope or clinically sensitive, replies:
>        ‘Please contact our team directly.’
>      - Provides options to:
>        - WhatsApp the clinic.
>        - Call the clinic.
> 4. Include a link to full written aftercare instructions (FAQ‑style section).”

Later, hook this widget to your own AI backend or Nordcraft‑wired API.

***

## 11. ‘Is B.OND Right For You?’ Page

> “Create a **‘Is B.OND Right For You?’** page:
> 1. Two clear sections:
>    - **Who B.OND is for**:
>      - Short, friendly bullets about ideal composite‑bonding candidates.
>    - **Who we’re not for**:
>      - Cases better suited to veneers or orthodontics.
>      - Clear explanation why bonding isn’t the best option.
> 2. Use honest, reassuring tone; no marketing fluff.
> 3. Keep layout simple and scannable.”

***

## 12. Founder / Clinician Story Page

> “Create a **Founder Story** page:
> 1. Tell a narrative:
>    - Why the clinician chose bonding.
>    - What they saw wrong with cosmetic dental.
>    - What B.OND is built to fix.
> 2. Design:
>    - Short sectioned paragraphs.
>    - Portrait photo on one side.
>  - Pull quotes scattered through the text.
> 3. No CV‑style bullets; keep it human‑centred.”

***

## 13. Technical Requirements (for Nordcraft AI)

> “Ensure the site:
> - Loads under **2 seconds** on average mobile connection.
> - Is **mobile‑first** (90%+ mobile‑oriented).
> - Uses **WhatsApp click‑to‑chat** as primary CTA on key pages.
> - Has a **GDPR‑compliant cookie banner** (with accept necessary / all options).
> - Includes **schema markup** for:
>   - Local business (dentist, clinic).
>   - Location, opening hours, phone.
>   - Reviews (if available).
>
> Output the site structure and component names in a way I can inspect and extend manually in Nordcraft.”

***

## 14. How to Use This in Nordcraft

1. **Open Nordcraft** and create a new project for **B.OND**.
2. Open the **AI Assistant** (`Cmd/Ctrl + I`).
3. Paste each section above (starting with **“Project Overview for Nordcraft AI”**) and ask:
    - “Create this page structure and components.”
    - “Generate the Home page layout and styling.”
    - “Build the AI Smile Preview page and form.”
4. Use **Ask mode** to clarify:
    - “Explain how to connect the AI Smile Preview form to a backend API.”
    - “Show me how to build the Results Library filters.”

If you tell me:

- whether you want **Next.js‑style** file structure or just Nordcraft’s internal component names,
- and which backend you plan to use (e.g., Vercel edge, Node, Firebase, etc.),

I can give you a **Nordcraft‑plus‑backend spec** next (e.g., API‑endpoint schema for AI Smile, Treatment Matcher, Finance, Aftercare AI).
<span style="display:none">[^1][^10][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: https://www.dentcraftdentalclinic.com/cutting-edge-technology.html

[^2]: https://docs.nordcraft.com/ai-assistant

[^3]: https://www.visalytica.com/tool/nordcraft-2-0

[^4]: https://www.nocodesupply.co/item/nordcraft

[^5]: https://app.daily.dev/posts/nordcraft-ai-agent-visual-website-builder-owjvelis7

[^6]: https://docs.nordcraft.com

[^7]: https://www.youtube.com/watch?v=cTiKP7y35Ss

[^8]: https://www.youtube.com/watch?v=Xl8K9crES-g

[^9]: https://www.youtube.com/watch?v=rbBwuc_M8Vc

[^10]: https://www.dentalcraft.co

