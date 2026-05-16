import Link from "next/link";

/*
 * Cinematic quality / craft section.
 * Looped, muted video of prep / polish / smile reveal.
 * Placeholder rectangle until real footage lands.
 */
export default function HomeQualitySection() {
  return (
    <section
      aria-labelledby="quality-title"
      className="border-t border-hair"
    >
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8 py-16 sm:py-24 grid gap-10 sm:grid-cols-12 sm:gap-12 items-center">
        <div className="sm:col-span-5">
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-5">
            The craft
          </p>
          <h2
            id="quality-title"
            className="font-display text-3xl sm:text-4xl tracking-[-0.02em]"
          >
            Twenty minutes per tooth, ten years of practice in every one.
          </h2>
          <p className="mt-5 text-mocha/80 leading-relaxed max-w-[40ch]">
            Composite is layered, sculpted, and polished by hand. We don't rush
            and we don't oversell. If we'd rather not treat, we'll tell you.
          </p>
          <Link
            href="/results"
            className="mt-7 inline-flex items-center text-sm border-b border-mocha/40 pb-1 hover:border-mocha transition-colors"
          >
            See real results →
          </Link>
        </div>

        <div className="sm:col-span-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-hair">
            {/* Parallax placeholder — floats at half scroll speed. */}
            <div
              className="absolute inset-0 bg-bone parallax-bg"
              style={{ "--parallax-speed": "0.4" } as React.CSSProperties}
              aria-hidden
            >
              <span className="text-xs uppercase tracking-[0.2em] text-muted">
                quality video loop
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
