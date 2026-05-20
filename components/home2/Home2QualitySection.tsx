export default function Home2QualitySection() {
  return (
    <section
      className="border-t border-tile section-tile py-16 sm:py-24"
      aria-labelledby="quality-heading"
    >
      <div className="max-w-[var(--max-content)] mx-auto px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-12 sm:gap-12 items-center">
          {/* Text side */}
          <div className="sm:col-span-5">
            {/* Gold accent label */}
            <p className="text-gold text-xs tracking-[0.2em] uppercase mb-6">
              The Lusso Experience
            </p>

            <h2
              id="quality-heading"
              className="font-display text-[1.75rem] sm:text-3xl tracking-[-0.01em] mb-6 text-[var(--color--navy)]"
            >
              From first consultation
              <br />
              to final reveal.
            </h2>

            <p className="text-[var(--color--charcoal)]/80 leading-relaxed mb-8 text-sm">
              Every step is designed around your comfort. We walk you through
              each stage — prep, treatment, reveal — so there are no surprises,
              only milestones toward a smile you'll want to share.
            </p>

            {/* Gold accent line */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-8 bg-gold" />
              <span className="text-[var(--color--charcoal)]/60 text-xs tracking-wide">
                Results vary. Clinician review included.
              </span>
            </div>

            {/* CTA */}
            <a
              href="/smile-preview"
              className="inline-flex items-center text-sm font-medium text-[var(--color--navy)] border-b border-[var(--color--navy)]/40 pb-1 hover:border-[var(--color--gold)] hover:text-[var(--color--gold)] transition-colors"
            >
              See the transformation process
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>

          {/* Media side */}
          <div className="sm:col-span-7">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-tile">
              {/* Unsplash image */}
              <img
                src="https://images.unsplash.com/photo-1558154839-19f6ddb31384?auto=format&fit=crop&w=1200&q=80"
                alt="Lusso Dental Studio — modern clinical environment"
                className="absolute inset-0 w-full h-full object-cover object-center"
                loading="lazy"
              />

              {/* Gold corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--color--gold)] rounded-tr-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}