"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "bond.text-variant";

const VARIANTS = ["a", "b", "c"] as const;
type TextVariant = (typeof VARIANTS)[number];

const LABELS: Record<TextVariant, string> = {
  a: "A",
  b: "B",
  c: "C",
};

function applyVariant(variant: TextVariant) {
  if (variant === "a") {
    document.documentElement.removeAttribute("data-text-variant");
  } else {
    document.documentElement.dataset.textVariant = variant;
  }
}

function readStoredVariant(): TextVariant {
  if (typeof window === "undefined") return "a";
  const stored = localStorage.getItem(STORAGE_KEY);
  return VARIANTS.includes(stored as TextVariant) ? (stored as TextVariant) : "a";
}

export default function TextColorToggle() {
  const [variant, setVariant] = useState<TextVariant>("a");

  useEffect(() => {
    const initial = readStoredVariant();
    setVariant(initial);
    applyVariant(initial);
  }, []);

  function cycle() {
    const next = VARIANTS[(VARIANTS.indexOf(variant) + 1) % VARIANTS.length];
    setVariant(next);
    applyVariant(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <button
      type="button"
      onClick={cycle}
      className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-hair bg-bone/80 px-2.5 text-xs font-medium tracking-wide text-mocha hover:bg-mocha/5 transition-colors"
      aria-pressed={variant !== "a"}
      aria-label={`Text colour ${LABELS[variant]} of ${VARIANTS.length}`}
      title="Cycle text colour (A / B / C)"
    >
      {LABELS[variant]}
    </button>
  );
}
