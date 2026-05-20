import Link from "next/link";

type LussoBrandWordmarkProps = {
  /** On navy/dark surfaces use cream + gold; on tile/cream use navy + gold */
  variant?: "on-dark" | "on-light";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
};

const sizes = {
  sm: {
    gap: "gap-2 sm:gap-2.5",
    text: "text-[0.48rem] sm:text-[0.56rem] tracking-[0.28em] sm:tracking-[0.32em]",
    rule: "h-3.5 sm:h-4",
  },
  md: {
    gap: "gap-2.5 sm:gap-3",
    text: "text-[0.56rem] sm:text-[0.62rem] tracking-[0.3em] sm:tracking-[0.34em]",
    rule: "h-4 sm:h-[1.125rem]",
  },
  lg: {
    gap: "gap-3 sm:gap-3.5",
    text: "text-[0.62rem] sm:text-xs tracking-[0.32em] sm:tracking-[0.38em]",
    rule: "h-[1.125rem] sm:h-5",
  },
} as const;

export default function LussoBrandWordmark({
  variant = "on-dark",
  size = "md",
  href = "/home2",
  className = "",
}: LussoBrandWordmarkProps) {
  const s = sizes[size];
  const primary =
    variant === "on-light"
      ? "text-[var(--color--navy)]"
      : "text-[var(--color--cream)]";

  const mark = (
    <span
      className={`font-brand-serif inline-flex items-center font-medium uppercase ${s.gap} ${s.text} ${className}`}
    >
      <span className={`${primary} transition-colors group-hover:text-[var(--color--gold)]`}>
        Lusso Dental
      </span>
      <span
        className={`w-px shrink-0 bg-[var(--color--gold)] ${s.rule}`}
        aria-hidden
      />
      <span className="text-[var(--color--gold)] transition-opacity group-hover:opacity-80">
        Studio
      </span>
    </span>
  );

  if (!href) {
    return mark;
  }

  return (
    <Link
      href={href}
      className="group inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color--gold)]"
      aria-label="Lusso Dental Studio home"
    >
      {mark}
    </Link>
  );
}
