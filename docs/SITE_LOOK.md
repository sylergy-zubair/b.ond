# B.OND Website: Visual & Experience Specification

## Purpose

This document describes what the B.OND site looks and feels like. It complements the design system (DESIGN.md) and PRD with concrete page-level guidance. Read alongside those documents.

---

## The Feeling

**"A calm conversation with someone who genuinely wants the best for you."**

Not a clinic website. Not a SaaS landing page. Not a dental marketing template. The site feels like a trusted friend who happens to be a cosmetic dentist—warm, honest, confident without being salesy.

Users arrive from Meta ads, nervous and curious. The site calms them, shows real results, builds trust in 30 seconds, then offers a low-friction path to consultation (WhatsApp or AI Smile Preview).

---

## Page-by-Page Experience

### Home

**Hero Section**
- Full-viewport height on mobile
- Background: subtle video loop (muted, autoplay) of hands prepping composite, slow-motion smile reveal. Cinematic, Aēsop-style feel. No text overlay on video.
- Headline overlay (bottom-third aligned): "Smile-changing composite bonding, at an accessible price." Display type, bone on transparent overlay.
- Two CTAs below headline:
  - Primary: "See what your smile could look like" → AI Smile Preview page
  - Secondary: "WhatsApp us" → WhatsApp click-to-chat
- Subtle scroll indicator (chevron, terracotta, bottom center)

**Value Stack Section**
- 4 short bullets, centered, generous whitespace
- "Fast, affordable composite bonding"
- "Transparent pricing, no surprises"
- "Personalised plan, not a menu"
- "Video-rich, calm experience"
- Each bullet: Title weight text + one line body. No icons.

**Quality Section**
- Cinematic video loop (different angle: final polish, smile reveal)
- Soft Aēsop-style aesthetic
- Caption below: one line only, no paragraph

**Finance Calculator Widget**
- Sticky on desktop (right sidebar, compact)
- Sticky bottom bar on mobile (collapsed to "Calculate monthly payment" pill that expands)
- Range: £500–£5,000, term selector: 12/24/36 months
- Output: large monthly payment figure

**Footer**
- Bone background
- Navigation links: Home, Pricing, Results, Aftercare, 'Is B.OND Right For You?', Founder Story
- Contact: London address, phone, email
- Social: Instagram (clinic aesthetic)
- Legal: Privacy Policy, Cookie Policy
- Small print: "B.OND is a trading name of [Legal Entity]. Composite bonding is a cosmetic procedure. Results vary. A clinician will review your case before any treatment."

### AI Smile Preview Page

**Layout**
- Single-column, centered, max-width 600px
- Generous vertical padding (xxl)

**Headline Section**
- "See what your smile could look like."
- Subtext: "Upload a selfie. We'll show you a preview—and a clinician will review your case within 24 hours."
- Disclaimer badge: "Visualisation, not a guarantee."

**Upload Form**
- Large upload zone (dashed border, terracotta on hover)
- On mobile: "Take a photo" option first (camera access)
- Fields (below upload):
  - Email (required)
  - Phone (required)
  - Name (optional, labeled "So we can address you personally")
- Consent checkbox: "I consent to B.OND processing my photo for an AI smile preview. A clinician will review my case. This is a visualisation, not a guarantee."
- Submit: "Generate preview" (primary button, full-width on mobile)

**Post-Submit State**
- Loading: skeleton shimmer where preview image will appear
- Success: preview image (placeholder for now), message "We'll send this to your email and WhatsApp. A clinician will review your case within 24 hours."
- CTA: "Chat with us on WhatsApp" or "Browse results"

**GDPR Note**
- Small text below form: "Your photo is processed by OpenAI for visualization only. We do not store or use it for any other purpose. See our Privacy Policy."

### Treatment Matcher Page

**Entry**
- Headline: "Tell us what bothers you about your smile."
- Subtext: "Three questions. A personalised recommendation."

**Step Flow**
- One question per screen
- Progress indicator: 3 dots, current filled (terracotta)
- Options as large tappable cards (not small radio buttons)

**Questions**
1. "What would you like to change?" → Gaps, Chips/cracks, Uneven shape, Color/discoloration, Something else
2. "What's your budget?" → Under £1,000, £1,000–£2,000, £2,000–£4,000, £4,000+
3. "How soon are you looking to start?" → Within 1 month, 1–3 months, 3–6 months, Just exploring

**Results Screen**
- Headline: "Based on what you've shared..."
- Personalized card:
  - Recommended treatment (e.g., "Composite bonding for 2 teeth")
  - Why this fits
  - Investment range (e.g., "£800–£1,200")
  - Time estimate (e.g., "1 visit, 2 hours")
- Primary CTA: "Book a consultation" → WhatsApp
- Secondary: "Start over"

### Pricing Page

**Structure**
- No long paragraphs. Ranges and facts only.
- Section per treatment type

**Composite Bonding Section**
- Headline: "Composite Bonding"
- Table-style layout (not a literal table):
  - Per tooth: "From £[X]"
  - Full upper arch: "From £[Y]"
  - Note: "Price varies by number of teeth and complexity. Your clinician will confirm exact cost at consultation."

**Finance Section**
- "Finance from £[Z]/month"
- Link to Finance Calculator (expands inline or anchors to widget)

**FAQ Accordion**
- "What affects the price?" → Complexity, number of teeth, whether any prep is needed
- "Is the consultation free?" → Yes. The £50 deposit is credited toward treatment.
- "Do you offer payment plans?" → Yes. 12, 24, or 36 months. See calculator.

**Disclaimer**
- Small text: "All prices are indicative. A clinician will provide a confirmed quote at consultation."

### Results Library

**Filter Bar**
- Horizontal scroll on mobile, row on desktop
- Chips: All, Gaps, Chipped/broken, Uneven shape, Discoloration
- Selected state: mocha bg, bone text
- Unselected: transparent, mocha border

**Grid**
- 2 columns mobile, 3 columns desktop
- Cards vary in height (not identical grid)
- Before/after image or short video loop
- Below image:
  - The concern (e.g., "Gaps between front teeth")
  - What was done (one line)
  - Time and investment (compact, e.g., "2 hours · £900")
  - One-sentence patient quote (if available)

**Card Interaction**
- Tap/click: expands inline to show full case details
- No modal, no new page

### Aftercare Hub

**Search Entry**
- Large search input, centered
- Placeholder: "Ask about your aftercare (e.g., 'Can I drink coffee after bonding?')"
- Submit: "Ask" button or Enter key

**AI Response Area**
- Below search
- Response appears as a conversational bubble (not a clinical form)
- If out of scope: "I'm not able to answer that. Please [WhatsApp our team] or [call us]."
- Links to WhatsApp and phone number inline

**Static FAQ Section**
- Below AI widget
- Accordion-style, clinic-approved aftercare questions
- "How long does composite bonding last?"
- "Can I eat normally after the procedure?"
- "Do I need to avoid certain foods?"
- "What if something feels wrong after treatment?"

### Is B.OND Right For You? Page

**Two-Column Layout (stacked on mobile)**

**Left/Top: "B.OND is a great fit if..."**
- You want to fix gaps, chips, or discoloration
- You prefer a conservative, non-invasive approach
- You want transparent pricing before committing
- You're looking for a clinician who explains everything clearly
- You want flexible finance options

**Right/Bottom: "B.OND might not be the right fit if..."**
- You need significant orthodontic work (we refer to specialists)
- You want porcelain veneers (we specialize in composite)
- You need treatment under NHS funding (we're private only)
- You're looking for the absolute cheapest option (we're competitively priced but not the cheapest)

**Tone**
- Honest, not judgmental
- Matter-of-fact about limitations
- Warm throughout

### Founder Story Page

**Structure**
- Narrative, not CV
- Sectioned short paragraphs with pull quotes

**Opening**
- Large portrait photo (headshot or in-clinic candid)
- Name and credentials below photo
- Opening paragraph: why this clinician chose composite bonding specifically

**Pull Quotes**
- Scattered through narrative
- Key insights about philosophy, approach, what they love about the work

**Closing**
- Brief: what B.OND is built to fix
- Personal note on what drives the work

**No Bullets**
- No "Education," "Experience," "Certifications" sections
- Human narrative throughout

---

## Component States

### Buttons

| State | Primary | Secondary |
|-------|---------|-----------|
| Default | Mocha bg, bone text | Transparent, mocha border |
| Hover | Accent-deep bg | Terracotta border |
| Focus | 2px terracotta outline, 2px offset | Same |
| Active | Slightly darker mocha | Same as hover |
| Disabled | 40% opacity mocha | 40% opacity border |

### Inputs

| State | Treatment |
|-------|----------|
| Default | Surface bg, 1px mocha border, 8px radius |
| Focus | Border shifts to terracotta |
| Error | Border shifts to error color (warm red), error message below |
| Disabled | 40% opacity, no interaction |

### Filter Chips

| State | Appearance |
|-------|------------|
| Unselected | Transparent, mocha border, mocha text |
| Selected | Mocha bg, bone text |
| Hover (unselected) | Terracotta border |

### Cards

| State | Behavior |
|-------|----------|
| Default | Surface bg, 8px radius, no border |
| Hover | Subtle lift (translate -2px), 200ms ease-out |
| Expanded | Inline expansion, no modal |

### Navigation

| State | Treatment |
|-------|----------|
| Default | Bone bg, mocha text |
| Hover | Terracotta text |
| Active page | Mocha text, terracotta underline indicator |
| Mobile open | Full-screen overlay, bone bg, stacked nav links |

---

## Responsive Behavior

### Breakpoints
- Mobile: < 640px
- Tablet: 640px – 1024px
- Desktop: > 1024px

### Mobile-First Rules
- All touch targets minimum 44px
- Full-width buttons on mobile
- Single-column layouts
- Sticky bottom bars for key CTAs (finance calculator, WhatsApp)
- Hamburger navigation

### Desktop Enhancements
- Horizontal navigation
- 2–3 column grids
- Finance calculator as sidebar widget
- Hover states on interactive elements
- Max content width: 1200px, centered

---

## Animation & Motion

**Philosophy:** Responsive, not choreographed. Motion serves feedback, not decoration.

### Allowed
- Hover state transitions (200ms, ease-out-quart)
- Focus ring appearance
- Card lift on hover
- Filter chip selection
- Accordion expand/collapse
- Form input focus

### Prohibited
- Staggered scroll reveals (anti-reference from PRD)
- Page-load animation sequences
- Parallax scrolling
- Loading spinners (use skeleton shimmer)
- Bounce or elastic easing

### Reduced Motion
- Respects `prefers-reduced-motion`
- All animations instant when preference is set

---

## Photography & Video Guidelines

### Style
- Real patients (with consent), not stock
- Warm, natural lighting
- Close-ups on details: the bonding work, the smile, hands at work
- Candid moments preferred over posed

### Anti-Reference
- Generic dental stock photography (blue clinical gloves, model smiles, clinical overhead lights)
- Before/after carousels that look like stock ads
- Stock imagery of people touching their chins thoughtfully

### Video
- Cinematic, slow motion
- Muted autoplay in heroes
- No text overlays on video
- Sound-on optional on secondary videos only

---

## Accessibility Checklist

- [ ] All interactive elements keyboard accessible
- [ ] Focus visible on all focusable elements (terracotta outline)
- [ ] Color contrast minimum 4.5:1 for text
- [ ] All images have alt text
- [ ] Form labels associated with inputs
- [ ] Error messages announced to screen readers
- [ ] `prefers-reduced-motion` respected
- [ ] Touch targets minimum 44px on mobile
- [ ] Skip navigation link (for keyboard users)
- [ ] GDPR consent flows are explicit and accessible