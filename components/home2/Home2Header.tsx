"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import LussoBrandWordmark from "@/components/home2/LussoBrandWordmark";

const PHONE_DISPLAY = "020 7000 0000";
const PHONE_HREF = "tel:+442070000000";
const WA_HREF =
  "https://wa.me/447000000000?text=Hi%20B.OND%20%E2%80%94%20I%27d%20like%20to%20get%20in%20touch.";

const menuSections: {
  heading: string;
  links: { href: string; label: string }[];
}[] = [
  {
    heading: "Treatments",
    links: [
      { href: "/smile-preview", label: "AI Smile Preview" },
      { href: "/pricing", label: "Pricing & Finance" },
      { href: "/results", label: "Results" },
    ],
  },
  {
    heading: "About",
    links: [
      { href: "/story", label: "Our Story" },
      { href: "/aftercare", label: "Aftercare" },
      { href: "/is-bond-right", label: "Is Lusso right for you?" },
    ],
  },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-3.5 w-5 flex-col justify-between" aria-hidden>
      <span
        className={`block h-px w-full bg-current transition-transform duration-300 ease-out origin-center ${
          open ? "translate-y-[6px] rotate-45" : ""
        }`}
      />
      <span
        className={`block h-px w-full bg-current transition-opacity duration-200 ${
          open ? "opacity-0" : ""
        }`}
      />
      <span
        className={`block h-px w-full bg-current transition-transform duration-300 ease-out origin-center ${
          open ? "-translate-y-[6px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export default function Home2Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuId = useId();

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen, closeMenu]);

  const menuPanel =
    menuOpen && mounted ? (
      <div
        id={menuId}
        data-page="home2"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-hidden bg-[var(--color--navy)] sm:top-[6.25rem]"
      >
        <nav
          aria-label="Primary"
          className="mx-auto h-full max-w-[var(--max-content)] overflow-y-auto overscroll-contain px-5 py-8 sm:px-8"
        >
          <ul className="space-y-2">
            <li>
              <Link
                href="/home2"
                onClick={closeMenu}
                className="font-display text-2xl tracking-[-0.02em] text-[var(--color--cream)] hover:text-[var(--color--gold)] transition-colors"
              >
                Home
              </Link>
            </li>
          </ul>

          <div className="mt-10 space-y-10">
            {menuSections.map((section) => (
              <div key={section.heading}>
                <p className="text-gold mb-4 text-xs uppercase tracking-[0.2em]">
                  {section.heading}
                </p>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="font-display text-xl tracking-[-0.01em] text-[var(--color--cream)]/90 hover:text-[var(--color--gold)] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-[var(--color--border-light)] pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
            <a
              href={PHONE_HREF}
              className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color--cream)]/80 hover:text-[var(--color--gold)] transition-colors"
            >
              Call us {PHONE_DISPLAY}
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color--cream)]/80 hover:text-[var(--color--gold)] transition-colors"
            >
              Get in touch
            </a>
            <Link
              href="/smile-preview"
              onClick={closeMenu}
              className="cta-gold inline-flex w-fit rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] hover:opacity-90 transition-opacity"
            >
              Book online
            </Link>
          </div>
        </nav>
      </div>
    ) : null;

  return (
    <>
      <header className="sticky top-0 z-50 isolate border-b border-[var(--color--border-light)] bg-[var(--color--navy)]/95 text-[var(--color--cream)] backdrop-blur-md">
        {/* Utility strip — Chelsea-style CALL / GET IN TOUCH / BOOK */}
        <div className="hidden sm:block border-b border-[var(--color--border-light)]">
          <div className="mx-auto flex max-w-[var(--max-content)] items-center justify-end gap-6 px-5 py-2 sm:px-8">
            <a
              href={PHONE_HREF}
              className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[var(--color--cream)]/80 hover:text-[var(--color--gold)] transition-colors"
            >
              Call us {PHONE_DISPLAY}
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[var(--color--cream)]/80 hover:text-[var(--color--gold)] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Main bar — MENU · logo · primary CTA */}
        <div className="relative mx-auto flex h-14 max-w-[var(--max-content)] items-center justify-between px-5 sm:h-16 sm:px-8">
          <button
            type="button"
            className="relative z-10 inline-flex min-w-[4.5rem] items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[var(--color--cream)] hover:text-[var(--color--gold)] transition-colors"
            aria-expanded={menuOpen}
            aria-controls={menuOpen ? menuId : undefined}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <MenuIcon open={menuOpen} />
            <span>{menuOpen ? "Close" : "Menu"}</span>
          </button>

          <div className="absolute left-1/2 z-10 -translate-x-1/2">
            <LussoBrandWordmark variant="on-dark" size="sm" />
          </div>

          <div className="relative z-10 flex min-w-[4.5rem] items-center justify-end gap-3 sm:gap-4">
            <a
              href={PHONE_HREF}
              className="sm:hidden text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[var(--color--cream)]/80 hover:text-[var(--color--gold)] transition-colors"
              aria-label={`Call us ${PHONE_DISPLAY}`}
            >
              Call
            </a>
            <Link
              href="/smile-preview"
              className="cta-gold hidden rounded-full px-4 py-2 text-[0.65rem] font-medium uppercase tracking-[0.15em] hover:opacity-90 transition-opacity sm:inline-flex"
            >
              Book online
            </Link>
            <Link
              href="/smile-preview"
              className="cta-gold inline-flex rounded-full px-3 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.12em] hover:opacity-90 transition-opacity sm:hidden"
            >
              Book
            </Link>
          </div>
        </div>
      </header>

      {mounted && menuPanel ? createPortal(menuPanel, document.body) : null}
    </>
  );
}
