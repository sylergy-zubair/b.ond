import Link from "next/link";

const footerCols: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Treatments",
    links: [
      { href: "/smile-preview", label: "AI Smile Preview" },
      { href: "/treatment-matcher", label: "Treatment Matcher" },
      { href: "/pricing", label: "Pricing & Finance" },
      { href: "/results", label: "Results" },
    ],
  },
  {
    heading: "About",
    links: [
      { href: "/story", label: "Founder story" },
      { href: "/is-bond-right", label: "Is B.OND right for you?" },
      { href: "/aftercare", label: "Aftercare hub" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy policy" },
      { href: "/cookie-policy", label: "Cookie policy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-hair">
      <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8 py-14 grid gap-10 sm:grid-cols-4">
        <div>
          <p className="font-display tracking-[0.18em] text-sm uppercase font-semibold">
            B.OND
          </p>
          <p className="mt-3 text-sm text-muted leading-relaxed max-w-[24ch]">
            Composite bonding, the way it should feel. London.
          </p>
        </div>
        {footerCols.map((col) => (
          <div key={col.heading}>
            <h4 className="text-xs uppercase tracking-wider text-muted mb-3">
              {col.heading}
            </h4>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-mocha/85 hover:text-mocha transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-hair">
        <div className="mx-auto max-w-[var(--max-content)] px-5 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-muted">
          <p>© {new Date().getFullYear()} B.OND. All rights reserved.</p>
          <p>Mon–Fri 9:00–18:00 · London</p>
        </div>
      </div>
    </footer>
  );
}
