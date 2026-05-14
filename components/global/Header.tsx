import Link from "next/link";

const navLinks = [
  { href: "/smile-preview", label: "AI Smile Preview" },
  { href: "/pricing", label: "Pricing" },
  { href: "/results", label: "Results" },
  { href: "/aftercare", label: "Aftercare" },
  { href: "/story", label: "Story" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-bone/80 border-b border-hair">
      <div className="mx-auto max-w-[var(--max-content)] flex items-center justify-between px-5 sm:px-8 h-16">
        <Link
          href="/"
          className="font-display tracking-[0.18em] text-sm uppercase font-semibold"
          aria-label="B.OND home"
        >
          B.OND
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-mocha/80 hover:text-mocha transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="/smile-preview"
          className="hidden sm:inline-flex items-center rounded-full bg-mocha text-bone text-sm px-4 py-2 hover:opacity-90 transition-opacity"
        >
          Start
        </Link>
        {/* TODO mobile menu (hamburger) — defer until we have pages built */}
      </div>
    </header>
  );
}
