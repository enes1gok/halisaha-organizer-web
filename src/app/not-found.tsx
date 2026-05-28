import { Logo } from "@/components/layout/Logo";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <Logo />
      <h1 className="font-[family-name:var(--font-display)] text-5xl">SAYFA BULUNAMADI</h1>
      <Link
        href="/"
        className="rounded-xl bg-[var(--green)] px-6 py-3 font-bold text-black no-underline"
      >
        Ana Sayfaya Dön
      </Link>
    </div>
  );
}
