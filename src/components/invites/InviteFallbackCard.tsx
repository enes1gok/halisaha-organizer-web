"use client";

import type { InviteKind } from "@/features/invites/invite-links";
import { openInviteInApp } from "@/features/invites/open-in-app";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import { useState } from "react";

type InviteFallbackCardProps = {
  kind: InviteKind;
  code: string;
  title: string;
  subtitle: string;
  icon: string;
  codeLabel: string;
};

export function InviteFallbackCard({
  kind,
  code,
  title,
  subtitle,
  icon,
  codeLabel,
}: InviteFallbackCardProps) {
  const [status, setStatus] = useState("");

  const handleOpen = () => {
    setStatus("Uygulama açılıyor...");
    openInviteInApp(kind, code);
    window.setTimeout(() => {
      setStatus("Uygulama açılmadıysa aşağıdan indir. 👇");
    }, 2500);
  };

  return (
    <div className="relative z-[1] w-full max-w-[420px] rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-10 px-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
      <div className="mb-7 font-[family-name:var(--font-display)] text-[22px]">
        HALI<span className="text-[var(--green)]">SAHA</span>
      </div>
      <div className="mb-4 text-[56px]">{icon}</div>
      <h1 className="mb-2 font-[family-name:var(--font-display)] text-[32px] leading-tight">
        {title}
      </h1>
      <p className="mb-7 text-[15px] leading-relaxed text-[var(--muted)]">{subtitle}</p>

      <div className="mb-7 rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.08)] p-4 text-left">
        <div className="flex justify-between border-b border-white/[0.04] py-1.5 text-sm last:border-0">
          <span className="text-[var(--muted)]">{codeLabel}</span>
          <span className="font-bold">{code}</span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleOpen}
        className="mb-3 flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl border-0 bg-[var(--green)] py-3.5 text-base font-bold text-black transition hover:bg-[#16a34a]"
      >
        📱 Uygulamada Aç
      </button>

      {status ? <p className="mt-4 min-h-5 text-[13px] text-[var(--muted)]">{status}</p> : null}

      <p className="my-4 text-[13px] text-[var(--muted)]">— Uygulama yüklü değil mi? —</p>

      <div className="flex gap-2.5">
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-[10px] border border-[var(--border)] bg-white/5 px-2.5 py-2.5 text-[13px] font-bold text-[var(--text)] no-underline transition hover:border-[var(--green)] hover:text-[var(--green)]"
        >
          App Store
        </a>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center rounded-[10px] border border-[var(--border)] bg-white/5 px-2.5 py-2.5 text-[13px] font-bold text-[var(--text)] no-underline transition hover:border-[var(--green)] hover:text-[var(--green)]"
        >
          ▶ Play Store
        </a>
      </div>
    </div>
  );
}
