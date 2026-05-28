"use client";

import {
  type AuthCallbackView,
  buildAuthCallbackDeepLink,
  decodeAuthError,
  parseAuthCallbackFromLocation,
  resolveAuthCallbackView,
} from "@/features/auth/parse-callback";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

function openApp(deepLink: string) {
  window.location.href = deepLink;
}

export function AuthCallbackClient() {
  const [view, setView] = useState<AuthCallbackView>("verifying");
  const [errorMsg, setErrorMsg] = useState(
    "Doğrulama sırasında bir hata meydana geldi. Lütfen tekrar dene.",
  );
  const [raw, setRaw] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    const search = window.location.search;
    const params = parseAuthCallbackFromLocation(hash, search);
    setRaw(params.rawHashOrQuery);

    if (params.errorDescription) {
      setErrorMsg(decodeAuthError(params.errorDescription));
      setView("error");
      return;
    }

    const resolved = resolveAuthCallbackView(params);
    setView(resolved);

    if (resolved === "reset") {
      const deepLink = buildAuthCallbackDeepLink(params.rawHashOrQuery);
      const t = window.setTimeout(() => openApp(deepLink), 1500);
      return () => window.clearTimeout(t);
    }

    if (resolved === "success" && params.rawHashOrQuery) {
      const deepLink = buildAuthCallbackDeepLink(params.rawHashOrQuery);
      const t = window.setTimeout(() => openApp(deepLink), 800);
      return () => window.clearTimeout(t);
    }
  }, []);

  const resetDeepLink = useMemo(() => buildAuthCallbackDeepLink(raw), [raw]);

  return (
    <div className="relative z-[1] w-full max-w-[400px] rounded-[20px] border border-[var(--border)] bg-[var(--card)] p-11 px-9 text-center shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
      <div className="mb-8 font-[family-name:var(--font-display)] text-[22px]">
        HALI<span className="text-[var(--green)]">SAHA</span>
      </div>

      {view === "verifying" && (
        <>
          <div className="mx-auto mb-3 h-[18px] w-[18px] animate-spin rounded-full border-[3px] border-[var(--green)] border-t-transparent" />
          <h1 className="font-[family-name:var(--font-display)] text-4xl leading-none">
            DOĞRULAMA <span className="text-[var(--green)]">YAPILIYOR</span>
          </h1>
          <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--muted)]">
            Lütfen bekle, işlemin tamamlanıyor...
          </p>
        </>
      )}

      {view === "success" && (
        <>
          <div className="mb-5 text-[60px]">✅</div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl leading-none">
            E-POSTA <span className="text-[var(--green)]">DOĞRULANDI</span>
          </h1>
          <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--muted)]">
            Hesabın başarıyla doğrulandı. Uygulamaya dönerek giriş yapabilirsin.
          </p>
          <div className="my-6 rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.08)] p-4 text-sm">
            🎉 Artık HalıSaha&apos;ya giriş yapabilirsin!
          </div>
          <button
            type="button"
            onClick={() => openApp(buildAuthCallbackDeepLink(raw))}
            className="mb-2.5 w-full cursor-pointer rounded-xl border-0 bg-[var(--green)] py-3.5 text-base font-bold text-black"
          >
            📱 Uygulamayı Aç
          </button>
          <Link
            href="/"
            className="block w-full rounded-xl border border-[var(--border)] py-3.5 text-base font-bold text-[var(--text)] no-underline"
          >
            Ana Sayfaya Dön
          </Link>
        </>
      )}

      {view === "reset" && (
        <>
          <div className="mb-5 text-[60px]">🔑</div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl leading-none">
            ŞİFRE <span className="text-[var(--green)]">SIFIRLAMA</span>
          </h1>
          <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--muted)]">
            Şifre sıfırlama bağlantısı doğrulandı. Uygulamada yeni şifrenizi belirleyin.
          </p>
          <div className="my-6 rounded-xl border border-[rgba(34,197,94,0.2)] bg-[rgba(34,197,94,0.08)] p-4 text-sm">
            Uygulamaya yönlendiriliyorsunuz...
          </div>
          <button
            type="button"
            onClick={() => openApp(resetDeepLink)}
            className="mb-2.5 w-full cursor-pointer rounded-xl border-0 bg-[var(--green)] py-3.5 text-base font-bold text-black"
          >
            📱 Uygulamada Sıfırla
          </button>
          <Link
            href="/"
            className="block w-full rounded-xl border border-[var(--border)] py-3.5 text-base font-bold text-[var(--text)] no-underline"
          >
            Ana Sayfaya Dön
          </Link>
        </>
      )}

      {view === "error" && (
        <>
          <div className="mb-5 text-[60px]">❌</div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl leading-none">
            BİR <span className="text-[var(--green)]">HATA OLUŞTU</span>
          </h1>
          <p className="mt-2.5 text-[15px] leading-relaxed text-[var(--muted)]">{errorMsg}</p>
          <Link
            href="/"
            className="mt-6 block w-full rounded-xl bg-[var(--green)] py-3.5 text-base font-bold text-black no-underline"
          >
            Ana Sayfaya Dön
          </Link>
        </>
      )}
    </div>
  );
}
