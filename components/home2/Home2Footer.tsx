import LussoBrandWordmark from "@/components/home2/LussoBrandWordmark";

export default function Home2Footer() {
  return (
    <footer className="bg-[var(--color--navy)] border-t border-light">
      <div className="max-w-[var(--max-content)] mx-auto px-5 sm:px-8 py-16 sm:py-20">
        {/* Main grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo wordmark */}
            <div className="mb-5">
              <LussoBrandWordmark variant="on-dark" size="lg" href="/home2" />
            </div>
            <p className="text-[var(--color--cream)]/60 text-sm leading-relaxed max-w-[22ch]">
              Cosmetic composite bonding studio in London. Designed around you,
              priced honestly.
            </p>
          </div>

          {/* Treatments column */}
          <div>
            <h3 className="text-[var(--color--cream)]/40 text-xs tracking-[0.15em] uppercase mb-5">
              Treatments
            </h3>
            <ul className="space-y-3">
              {[
                "Composite Bonding",
                "Smile Makeover",
                "Teeth Whitening",
                "Gum Contouring",
                "Facial Aesthetics",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[var(--color--cream)]/70 text-sm hover:text-[var(--color--cream)] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About column */}
          <div>
            <h3 className="text-[var(--color--cream)]/40 text-xs tracking-[0.15em] uppercase mb-5">
              About
            </h3>
            <ul className="space-y-3">
              {[
                ["Our Story", "#"],
                ["Is Lusso Right For You?", "#"],
                ["Results", "#"],
                ["Pricing", "#"],
                ["Aftercare Hub", "#"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[var(--color--cream)]/70 text-sm hover:text-[var(--color--cream)] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours column */}
          <div>
            <h3 className="text-[var(--color--cream)]/40 text-xs tracking-[0.15em] uppercase mb-5">
              Visit Us
            </h3>
            <address className="not-italic text-[var(--color--cream)]/70 text-sm leading-relaxed mb-6">
              12 Henrietta Street
              <br />
              Covent Garden, London
              <br />
              WC2E 8LH
            </address>

            {/* Opening hours */}
            <div className="mb-6">
              <p className="text-[var(--color--cream)]/40 text-xs tracking-[0.1em] uppercase mb-3">
                Opening Hours
              </p>
              <dl className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
                {[
                  ["Mon–Fri", "9am – 6pm"],
                  ["Saturday", "10am – 4pm"],
                  ["Sunday", "Closed"],
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <dt className="text-[var(--color--cream)]/50">{day}</dt>
                    <dd className="text-[var(--color--cream)]/70">{hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="border-t border-[var(--color--gold)] pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          {/* Copyright + legal */}
          <p className="text-[var(--color--cream)]/40 text-xs">
            &copy; {new Date().getFullYear()} Lusso Dental Studio. All rights
            reserved.
          </p>

          <nav aria-label="Legal navigation">
            <ul className="flex flex-wrap gap-4">
              {["Privacy Policy", "Cookie Policy", "Terms"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[var(--color--cream)]/40 text-xs hover:text-[var(--color--cream)]/70 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}