"use client";

import { APP_STORE_URL } from "@/lib/constants";
import { useState } from "react";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/#features", label: "Özellikler" },
  { href: "/#screenshots", label: "Ekranlar" },
  { href: "/#leaderboard", label: "Lider Tablosu" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-[100] flex h-16 items-center justify-between border-b border-[var(--border)] bg-[rgba(6,12,6,0.85)] px-[5vw] backdrop-blur-2xl">
      <Logo />
      <ul
        className={`m-0 list-none items-center gap-7 p-0 ${open ? "absolute top-16 right-0 left-0 flex flex-col gap-4 border-b border-[var(--border)] bg-[rgba(6,12,6,0.97)] px-[5vw] py-5 md:static md:flex md:flex-row md:border-0 md:bg-transparent" : "hidden md:flex"}`}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm font-medium text-[var(--muted)] no-underline transition hover:text-[var(--text)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-[var(--green)] px-[18px] py-2 text-sm font-bold text-black no-underline transition hover:bg-[#16a34a]"
          >
            İndir
          </a>
        </li>
      </ul>
      <button
        type="button"
        className="cursor-pointer border-0 bg-transparent text-[22px] text-[var(--text)] md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menü"
      >
        ☰
      </button>
    </nav>
  );
}
