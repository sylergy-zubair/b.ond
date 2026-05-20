export default function Home2Hero() {
  return (
    <section
      className="relative isolate overflow-hidden section-navy min-h-[90vh] flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Unsplash background image */}
      <img
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1600&q=80"
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        loading="eager"
      />

      {/* Dark gradient overlay — keeps text readable over image */}
      <div className="absolute inset-0 bg-[var(--color--navy)]/80 z-[1]" />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-[2]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[var(--max-content)] mx-auto px-5 sm:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-gold text-xs tracking-[0.2em] uppercase mb-6">
            London&apos;s Premier Cosmetic Dental Studio
          </p>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="font-display text-[2.5rem] sm:text-6xl lg:text-7xl tracking-[-0.02em] leading-[1.05] mb-6"
          >
            Your smile,
            <br />
            <span className="text-gold">redesigned.</span>
          </h1>

          {/* Sub-headline */}
          <p
            className="text-[var(--color--cream)]/80 text-lg sm:text-xl leading-relaxed max-w-[44ch] mb-10"
          >
            Clinical precision meets boutique hospitality. B.OND transforms
            your smile with treatments designed around you — not the other way
            around.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/smile-preview"
              className="cta-gold rounded-full px-6 py-3 text-sm font-medium text-center hover:opacity-90 transition-opacity"
            >
              See Your New Smile
            </a>
            <a
              href="https://wa.me/447000000000?text=Hi%2C%20I%27d%20like%20to%20learn%20more%20about%20B.OND"
              className="cta-outline-gold rounded-full px-6 py-3 text-sm font-medium text-center hover:bg-[var(--color--gold)]/10 transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Disclaimer */}
          <p
            className="text-[var(--color--cream)]/50 text-xs mt-8 max-w-[40ch]"
          >
            AI smile previews are for visualisation purposes only. Final
            results reviewed by our clinical team before any treatment begins.
          </p>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-[var(--color--navy)]/0 to-[var(--color--navy)]" />
    </section>
  );
}
