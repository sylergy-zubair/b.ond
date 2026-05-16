import Link from "next/link";

/*
 * Cinematic hero per DESIGN.md.
 * Background video slot is a placeholder rectangle until real footage lands.
 * Headline + sub + dual CTA (Smile Preview primary, WhatsApp secondary).
 */
export default function HomeHero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      {/* Parallax bg layer — floats up as user scrolls. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-bone parallax-bg"
        style={{ "--parallax-speed": "0.6" } as React.CSSProperties}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bone/0 via-bone/0 to-bone" />
        <div className="absolute inset-x-0 bottom-0 top-[46%] z-[1] flex items-end justify-center pb-10 sm:pb-14 sm:items-end sm:justify-end sm:pr-12 pointer-events-none">
          <span className="text-xs uppercase tracking-[0.2em] text-muted/90">
            hero video
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8 pt-16 pb-24 sm:pt-24 sm:pb-32">
        <p className="text-xs uppercase tracking-[0.2em] text-muted mb-5">
          London · Composite bonding
        </p>
        <h1
          id="hero-title"
          className="font-display text-[2.5rem] leading-[1.05] sm:text-6xl sm:leading-[1.02] tracking-[-0.02em] max-w-[16ch]"
        >
          A smile you'd choose again.
        </h1>
        <p className="mt-6 max-w-[44ch] text-lg text-mocha/85 leading-relaxed">
          See your smile before you commit. Honest pricing, clinician-reviewed
          previews, no marketing fluff.
        </p>

        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <Link
            href="/smile-preview"
            className="inline-flex items-center justify-center rounded-full bg-mocha text-bone px-6 py-3 text-base hover:opacity-90 transition-opacity"
          >
            Preview my smile
          </Link>
          <a
            href="https://wa.me/447000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-mocha/25 px-6 py-3 text-base hover:bg-mocha/5 transition-colors"
          >
            Ask on WhatsApp
          </a>
        </div>

        <p className="mt-5 text-xs text-muted max-w-[44ch]">
          Previews are a visualisation, not a guarantee. Every result is reviewed
          by a clinician before sending.
        </p>
      </div>
    </section>
  );
}
