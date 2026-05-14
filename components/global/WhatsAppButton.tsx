/*
 * Floating WhatsApp CTA, sticky on every page (per DESIGN.md).
 * Number + prefilled message live in env later. For now: hardcoded UK placeholder.
 */
const WA_NUMBER = "447000000000"; // TODO replace with real clinic WhatsApp number
const WA_PREFILL = encodeURIComponent(
  "Hi B.OND — I'd like to ask about composite bonding."
);
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_PREFILL}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WA_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with B.OND on WhatsApp"
      className="fixed bottom-5 right-5 max-sm:bottom-[max(0.75rem,env(safe-area-inset-bottom,0px))] sm:bottom-8 sm:right-8 z-40 inline-flex items-center gap-2 rounded-full bg-mocha text-bone pl-3 pr-4 py-2.5 text-sm shadow-[0_8px_28px_-12px_rgba(46,37,32,0.6)] hover:opacity-90 transition-opacity"
    >
      <span
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-bone text-mocha"
        aria-hidden
      >
        {/* Simple chat glyph; swap for a brand-correct WhatsApp icon later */}
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </span>
      <span className="hidden sm:inline">Chat on WhatsApp</span>
      <span className="sm:hidden">Chat</span>
    </a>
  );
}
