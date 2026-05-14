/*
 * Lead funnel intro — copy aligned with docs/SITE_LOOK.md + DESIGN.md.
 */
export default function SmilePreviewHero() {
  return (
    <header className="text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
        AI Smile Preview
      </p>
      <h1 className="font-display text-3xl sm:text-4xl tracking-[-0.02em] text-balance">
        See what your smile could look like.
      </h1>
      <p className="mt-5 text-mocha/85 leading-relaxed text-balance max-w-[52ch] mx-auto">
        Upload a selfie. We&apos;ll show you a preview — and a clinician will review
        your case within 24 hours.
      </p>
      <p className="mt-4 inline-flex items-center rounded-full border border-hair bg-bone/80 px-3 py-1 text-xs text-muted">
        Visualisation, not a guarantee.
      </p>
    </header>
  );
}
