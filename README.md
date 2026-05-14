# B.OND

Composite-bonding dental clinic site. Mobile-first, GDPR-conscious, AI-augmented funnel.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind v4** with brand tokens defined in `app/globals.css`
- **Vercel** (target deploy)

Backend deferred. See `docs/PRODUCT.md` for the full PRD and `docs/DESIGN.md` for the visual system.

## Local dev

```sh
npm install
npm run dev
```

Then open <http://localhost:3000>.

## File layout

```
app/                       # Next.js App Router
  layout.tsx               # Root layout. Mounts Header / Footer / WhatsApp / Cookie.
  page.tsx                 # HomePage.
  globals.css              # Brand tokens + Tailwind bridge.
components/
  global/                  # Shared across all pages
    Header.tsx
    Footer.tsx
    WhatsAppButton.tsx
    CookieBanner.tsx
  home/                    # HomePage-specific sections
    HomeHero.tsx
    HomeValueStack.tsx
    HomeQualitySection.tsx
docs/
  PRODUCT.md               # PRD. The "what" and "why".
  DESIGN.md                # Visual system + component map.
```

## Design tokens

Two semantic colours plus inline rgba for muted/border. See `docs/DESIGN.md`.

| Token | Hex | Tailwind class |
|---|---|---|
| `--color--primary` | `#2e2520` | `text-mocha` / `bg-mocha` |
| `--color--secondary` | `#f4efe8` | `text-bone` / `bg-bone` |
| `var(--color--text-muted)` | rgba(46,37,32,0.65) | `text-muted` |
| `var(--color--border)` | rgba(46,37,32,0.12) | `border-hair` |

Token names mirror the parked Nordcraft project's theme so a later port back is mechanical.
