import { APP_STORE_URL, CONTACT_EMAIL, PLAY_STORE_URL, PRIVACY_POLICY_URL } from "@/lib/constants";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg2)] px-[5vw] pt-[60px] pb-8">
      <div className="mb-12 grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-3 max-w-[280px] text-sm leading-relaxed text-[var(--muted)]">
            Arkadaşlarınla halısaha maçı organize etmenin en pratik yolu. Kadro kur, katılımı yönet,
            istatistiklerini takip et.
          </p>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold">Uygulama</p>
          <div className="flex flex-col gap-2.5">
            <a
              href="/#features"
              className="text-sm text-[var(--muted)] no-underline hover:text-[var(--green)]"
            >
              Özellikler
            </a>
            <a
              href="/#screenshots"
              className="text-sm text-[var(--muted)] no-underline hover:text-[var(--green)]"
            >
              Ekranlar
            </a>
            <a
              href="/#how"
              className="text-sm text-[var(--muted)] no-underline hover:text-[var(--green)]"
            >
              Nasıl Çalışır
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold">İndir</p>
          <div className="flex flex-col gap-2.5">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] no-underline hover:text-[var(--green)]"
            >
              Google Play
            </a>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] no-underline hover:text-[var(--green)]"
            >
              App Store
            </a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold">Destek</p>
          <div className="flex flex-col gap-2.5">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-[var(--muted)] no-underline hover:text-[var(--green)]"
            >
              İletişim
            </a>
            <a
              href={PRIVACY_POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--muted)] no-underline hover:text-[var(--green)]"
            >
              Gizlilik Politikası
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[var(--border)] pt-6 text-[13px] text-[var(--muted)]">
        <span>© {new Date().getFullYear()} HalıSaha – Maç Organize Et. Tüm hakları saklıdır.</span>
      </div>
    </footer>
  );
}
