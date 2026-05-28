import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "store";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--green)] px-7 py-3.5 font-bold text-black transition hover:bg-[#16a34a] hover:-translate-y-0.5",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--border)] px-7 py-3.5 font-semibold text-[var(--text)] transition hover:border-[var(--green)] hover:text-[var(--green)]",
  store:
    "inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-[var(--text)] transition hover:border-[var(--green)] hover:bg-[rgba(34,197,94,0.15)] hover:-translate-y-0.5",
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  external,
}: ButtonProps) {
  const classes = `${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
