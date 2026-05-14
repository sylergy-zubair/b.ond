/*
 * Three-up value bullets per DESIGN.md.
 * Hierarchy via type + whitespace; no decorative icons (yet) to stay minimal.
 */

const values = [
  {
    title: "See it before you book",
    body: "Upload one selfie. Get a clinician-reviewed preview of your post-treatment smile, by WhatsApp or email.",
  },
  {
    title: "Transparent £, no menu tricks",
    body: "Real ranges per tooth and per arch. Sticky finance calculator so monthly is never a surprise.",
  },
  {
    title: "A clinician, not a salesperson",
    body: "Honest assessments. If composite isn't right for you, we'll say so.",
  },
];

export default function HomeValueStack() {
  return (
    <section
      aria-labelledby="value-stack-title"
      className="border-t border-hair"
    >
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8 py-16 sm:py-24">
        <h2
          id="value-stack-title"
          className="font-display text-2xl sm:text-3xl tracking-[-0.02em] max-w-[24ch]"
        >
          What "accessible luxury" actually means.
        </h2>

        <ul className="mt-12 grid gap-10 sm:gap-12 sm:grid-cols-3">
          {values.map((v, i) => (
            <li key={v.title}>
              <span className="text-xs tabular-nums text-muted">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-xl tracking-[-0.01em]">
                {v.title}
              </h3>
              <p className="mt-3 text-mocha/80 leading-relaxed">{v.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
