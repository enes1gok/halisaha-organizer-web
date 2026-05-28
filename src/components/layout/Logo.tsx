import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 no-underline ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[var(--green)] text-lg">
        ⚽
      </span>
      <span className="font-[family-name:var(--font-display)] text-[22px] tracking-wide text-[var(--text)]">
        HALI<span className="text-[var(--green)]">SAHA</span>
      </span>
    </Link>
  );
}
