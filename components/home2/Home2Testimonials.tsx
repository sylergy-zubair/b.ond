const testimonials = [
  {
    quote:
      "I was nervous about getting composite bonding, but B.OND made the whole process feel effortless. My smile looks exactly how I imagined it — natural, bright, and mine.",
    name: "Amara O.",
    treatment: "Composite Bonding — 6 teeth",
    location: "Clapham",
  },
  {
    quote:
      "The AI preview was a game-changer. I could see what my smile would look like before anything touched my teeth. The result exceeded what I'd imagined.",
    name: "James T.",
    treatment: "Smile Makeover — full arch",
    location: "Shoreditch",
  },
  {
    quote:
      "Transparent pricing, no pressure, and a team that actually listens. I've recommended B.OND to everyone I know. That's never happened with a dentist before.",
    name: "Priya M.",
    treatment: "Composite Bonding — 4 teeth",
    location: "Notting Hill",
  },
];

export default function Home2Testimonials() {
  return (
    <section
      className="border-t border-tile section-tile py-16 sm:py-24"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[var(--max-content)] mx-auto px-5 sm:px-8">
        <div className="mb-12">
          <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
            Patient Stories
          </p>
          <h2
            id="testimonials-heading"
            className="font-display text-[1.75rem] sm:text-3xl tracking-[-0.01em] text-[var(--color--navy)]"
          >
            Real smiles. Real people.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="flex flex-col gap-4 rounded-lg border border-tile bg-white p-6 sm:p-8"
            >
              <svg
                className="h-6 w-6 shrink-0 text-gold"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>

              <p className="flex-1 text-sm leading-relaxed text-[var(--color--charcoal)]/85">
                &ldquo;{t.quote}&rdquo;
              </p>

              <footer className="mt-auto border-t border-tile pt-4">
                <cite className="not-italic">
                  <p className="text-sm font-medium text-[var(--color--navy)]">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs text-gold">{t.treatment}</p>
                  <p className="mt-0.5 text-xs text-[var(--color--charcoal)]/55">
                    {t.location}
                  </p>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 flex items-center gap-3">
          <div className="flex items-center gap-1" aria-hidden="true">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-4 w-4 text-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-[var(--color--charcoal)]/60">
            Rated 4.9 on Google
          </span>
        </div>
      </div>
    </section>
  );
}
