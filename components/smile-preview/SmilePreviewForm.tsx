"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";

type Phase = "collect" | "loading" | "success";

const WA_NUMBER = "447000000000";
const WA_PREFILL = encodeURIComponent(
  "Hi B.OND — I've just generated an AI smile preview and have a question."
);
const WA_HREF = `https://wa.me/${WA_NUMBER}?text=${WA_PREFILL}`;

export default function SmilePreviewForm() {
  const formId = useId();
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [phase, setPhase] = useState<Phase>("collect");
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const onFileChosen = (f: File | null) => {
    if (!f || !f.type.startsWith("image/")) return;
    setFile(f);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) return;
    setPhase("loading");
    window.setTimeout(() => setPhase("success"), 2200);
  };

  const reset = useCallback(() => {
    setPhase("collect");
    setFile(null);
    galleryInputRef.current && (galleryInputRef.current.value = "");
    cameraInputRef.current && (cameraInputRef.current.value = "");
  }, []);

  if (phase === "success" && previewUrl) {
    return (
      <div className="rounded-2xl border border-hair bg-elev/90 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
          Your preview
        </p>
        <div className="relative overflow-hidden rounded-xl border border-hair bg-bone aspect-[4/5] max-h-[min(70vh,28rem)] mx-auto">
          <img
            src={previewUrl}
            alt="Your uploaded photo"
            className="h-full w-full object-cover"
          />
          <span className="absolute left-3 top-3 rounded-full bg-mocha/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-bone">
            Visualisation
          </span>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-mocha/85 text-center max-w-[48ch] mx-auto">
          We&apos;ll send this to your email and WhatsApp. A clinician will review
          your case within 24 hours.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-mocha text-bone px-6 py-3 text-sm hover:opacity-90 transition-opacity"
          >
            Chat on WhatsApp
          </a>
          <Link
            href="/results"
            className="inline-flex items-center justify-center rounded-full border border-mocha/25 px-6 py-3 text-sm hover:bg-mocha/5 transition-colors"
          >
            Browse results
          </Link>
        </div>
        <button
          type="button"
          onClick={reset}
          className="mt-6 w-full text-center text-xs text-muted underline-offset-2 hover:underline"
        >
          Start over with a different photo
        </button>
      </div>
    );
  }

  if (phase === "loading") {
    return (
      <div
        role="status"
        aria-live="polite"
        aria-busy
        className="rounded-2xl border border-hair bg-elev/90 p-8 sm:p-10"
      >
        <p className="text-center text-sm font-medium text-mocha">
          Generating your preview…
        </p>
        <div className="mt-6 mx-auto max-w-xs aspect-[4/5] rounded-xl border border-hair bg-bone overflow-hidden relative">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-bone via-mocha/5 to-bone" />
          <div className="absolute inset-x-0 top-1/3 h-8 bg-mocha/[0.06] blur-xl animate-pulse" />
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          This usually takes a few seconds.
        </p>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={onSubmit}
      className="space-y-8"
    >
      <div>
        <input
          ref={galleryInputRef}
          type="file"
          accept="image/*"
          className="sr-only"
          aria-label="Choose a photo from your gallery"
          onChange={(e) => onFileChosen(e.target.files?.[0] ?? null)}
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="user"
          className="sr-only"
          aria-label="Take a photo with your camera"
          onChange={(e) => onFileChosen(e.target.files?.[0] ?? null)}
        />

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            onFileChosen(e.dataTransfer.files?.[0] ?? null);
          }}
          className={`rounded-2xl border-2 border-dashed px-4 py-12 sm:py-16 text-center transition-colors ${
            dragOver
              ? "border-mocha/50 bg-mocha/[0.04]"
              : "border-hair hover:border-mocha/35 bg-bone/40"
          }`}
        >
          {previewUrl ? (
            <div className="mx-auto max-w-[12rem]">
              <img
                src={previewUrl}
                alt=""
                className="mx-auto h-32 w-32 rounded-full object-cover border border-hair"
              />
              <p className="mt-3 text-sm text-muted">Photo selected</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-mocha/90">
                Drag a selfie here, or use the buttons below.
              </p>
              <p className="mt-2 text-xs text-muted">
                JPG or PNG · well-lit, face forward, neutral smile works best
              </p>
            </>
          )}
        </div>

        <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            type="button"
            onClick={() => cameraInputRef.current?.click()}
            className="rounded-full bg-mocha text-bone text-sm px-5 py-2.5 hover:opacity-90 transition-opacity sm:hidden"
          >
            Take a photo
          </button>
          <button
            type="button"
            onClick={() => galleryInputRef.current?.click()}
            className="rounded-full border border-mocha/30 text-sm px-5 py-2.5 hover:bg-mocha/5 transition-colors"
          >
            {previewUrl ? "Replace photo" : "Upload from gallery"}
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <label htmlFor={`${formId}-email`} className="block text-xs font-medium text-muted mb-1.5">
            Email <span className="text-mocha">*</span>
          </label>
          <input
            id={`${formId}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-hair bg-bone px-4 py-3 text-sm text-mocha placeholder:text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-mocha/30"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor={`${formId}-phone`} className="block text-xs font-medium text-muted mb-1.5">
            Phone <span className="text-mocha">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-xl border border-hair bg-bone px-4 py-3 text-sm text-mocha placeholder:text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-mocha/30"
            placeholder="+44…"
          />
        </div>
        <div>
          <label htmlFor={`${formId}-name`} className="block text-xs font-medium text-muted mb-1.5">
            Name <span className="text-muted font-normal">(optional)</span>
          </label>
          <input
            id={`${formId}-name`}
            name="name"
            type="text"
            autoComplete="name"
            className="w-full rounded-xl border border-hair bg-bone px-4 py-3 text-sm text-mocha placeholder:text-muted/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-mocha/30"
            placeholder="So we can address you personally"
          />
        </div>
      </div>

      <div className="flex gap-3 items-start">
        <input
          id={`${formId}-consent`}
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-hair text-mocha focus:ring-mocha/30"
        />
        <label htmlFor={`${formId}-consent`} className="text-sm leading-relaxed text-mocha/85">
          I consent to B.OND processing my photo for an AI smile preview. A clinician
          will review my case. This is a visualisation, not a guarantee.
        </label>
      </div>

      <button
        type="submit"
        disabled={!file}
        className="w-full rounded-full bg-mocha text-bone py-3.5 text-base font-medium hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Generate preview
      </button>

      <p className="text-xs text-muted leading-relaxed text-center max-w-[56ch] mx-auto">
        Your photo is processed for visualisation only. We do not store or use it
        for any other purpose without your consent. See our{" "}
        <Link href="/privacy" className="underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );
}
