import { Button } from "@/components/ui/Button";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import { RevealOnScroll } from "./RevealOnScroll";

export function DownloadSection() {
  return (
    <section id="download" className="relative px-[5vw] py-[100px] text-center">
      <div className="field-bg" />
      <div className="relative mx-auto max-w-[680px]">
        <RevealOnScroll>
          <span className="text-xs font-bold tracking-[3px] text-[var(--green)] uppercase">
            Hemen İndir
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-[clamp(40px,6vw,72px)] leading-none">
            SAHAYA <span className="text-[var(--green)]">GEÇ</span>
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-[60px] rounded-sm bg-[var(--green)]" />
          <p className="mx-auto mt-4 max-w-lg text-[17px] text-[var(--muted)]">
            iOS ve Android&apos;de ücretsiz. Maçını organize et, istatistiklerini takip et.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="store" href={PLAY_STORE_URL} external className="px-7 py-4">
              <span className="text-[32px]">▶</span>
              <div>
                <div className="text-[11px] text-[var(--muted)]">Google Play&apos;den İndir</div>
                <div className="text-xl font-bold">Play Store</div>
              </div>
            </Button>
            <Button variant="store" href={APP_STORE_URL} external className="px-7 py-4">
              <span className="text-[32px]" />
              <div>
                <div className="text-[11px] text-[var(--muted)]">App Store&apos;dan İndir</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {["⭐ 5.0 App Store", "✅ Ücretsiz", "🔒 Güvenli", "📱 iOS 15.1+", "🤖 Android"].map(
              (tag) => (
                <span
                  key={tag}
                  className="inline-block rounded-full border border-[rgba(34,197,94,0.25)] bg-[rgba(34,197,94,0.12)] px-2.5 py-1 text-[11px] font-bold text-[var(--green)]"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
