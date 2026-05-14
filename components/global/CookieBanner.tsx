"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/*
 * Minimal GDPR cookie banner. Per DESIGN.md, GA4 + any analytics must remain blocked
 * until the user accepts. This component only writes a localStorage flag for now;
 * actual analytics scripts should read this flag before initialising.
 */
const STORAGE_KEY = "bond.cookie-consent";
type Consent = "necessary" | "all";

export default function CookieBanner() {
  const [decided, setDecided] = useState<boolean | null>(null);

  useEffect(() => {
    setDecided(Boolean(window.localStorage.getItem(STORAGE_KEY)));
  }, []);

  const accept = (kind: Consent) => {
    window.localStorage.setItem(STORAGE_KEY, kind);
    setDecided(true);
  };

  // Don't render anything until we know the current state — prevents a flash
  // for users who've already accepted on a previous visit.
  if (decided === null || decided === true) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 z-[45] max-sm:bottom-[max(1rem,calc(env(safe-area-inset-bottom,0px)+5.75rem))] sm:left-auto sm:right-8 sm:bottom-24 sm:max-w-sm rounded-2xl border border-hair bg-elev backdrop-blur-md p-5 shadow-[0_24px_64px_-32px_rgba(46,37,32,0.4)]"
    >
      <p className="text-sm leading-relaxed">
        We use cookies to keep the site working and to learn what makes it better.
        Read more in our{" "}
        <Link href="/cookie-policy" className="underline">
          cookie policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-col-reverse sm:flex-row gap-2 sm:gap-3">
        <button
          type="button"
          onClick={() => accept("necessary")}
          className="rounded-full border border-mocha/30 text-sm py-2 px-4 hover:bg-mocha/5 transition-colors"
        >
          Necessary only
        </button>
        <button
          type="button"
          onClick={() => accept("all")}
          className="rounded-full bg-mocha text-bone text-sm py-2 px-4 hover:opacity-90 transition-opacity"
        >
          Accept all
        </button>
      </div>
    </div>
  );
}
