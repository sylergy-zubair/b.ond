const values = [
  {
    number: "01",
    title: "Designed Around You",
    body:
      "Every treatment starts with understanding your goals. We listen first, recommend second — so the outcome matches what you imagined, not what we assumed.",
  },
  {
    number: "02",
    title: "Clinical Excellence",
    body:
      "Our studio uses the latest techniques and materials, overseen by clinicians with decades of cosmetic experience. Precision isn't a target — it's the baseline.",
  },
  {
    number: "03",
    title: "Honest Pricing",
    body:
      "No hidden fees, no upselling. You'll know exactly what your treatment costs before we begin — and every price includes the clinical review that keeps you safe.",
  },
];

export default function Home2ValueStack() {
  return (
    <section
      className="border-t border-light section-navy py-16 sm:py-24"
      aria-labelledby="values-heading"
    >
      <div className="max-w-[var(--max-content)] mx-auto px-5 sm:px-8">
        {/* Section label */}
        <p className="text-gold text-xs tracking-[0.2em] uppercase mb-12">
          Why Lusso Dental
        </p>

        {/* Heading */}
        <h2
          id="values-heading"
          className="font-display text-[1.75rem] sm:text-3xl tracking-[-0.01em] mb-12 max-w-[28ch]"
        >
          Not just a clinic.
          <br />
          A smile partner.
        </h2>

        {/* Values grid */}
        <div className="grid gap-10 sm:gap-12 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.number} className="border-t border-light pt-8">
              <span className="text-gold text-xs tabular-nums tracking-wider">
                {v.number}
              </span>
              <h3 className="font-display text-xl tracking-[-0.01em] mt-3 mb-4 text-[var(--color--cream)]">
                {v.title}
              </h3>
              <p className="text-[var(--color--cream)]/70 leading-relaxed text-sm">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}