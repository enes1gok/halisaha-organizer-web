import { Button } from "@/components/ui/Button";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/constants";
import { RevealOnScroll } from "./RevealOnScroll";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-[5vw] pt-[120px] pb-20"
    >
      <div className="field-bg" />
      <div
        className="pointer-events-none absolute -top-[100px] -right-[100px] h-[600px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)" }}
      />
      <div className="relative z-[1] max-w-[580px]">
        <RevealOnScroll>
          <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.12)] px-3.5 py-1.5 text-[13px] font-semibold text-[var(--green)]">
            ⚽ Halısaha Maç Organizasyonu
          </span>
        </RevealOnScroll>
        <RevealOnScroll>
          <h1 className="font-[family-name:var(--font-display)] text-[clamp(56px,8vw,96px)] leading-[0.95] tracking-wide">
            MAÇINI
            <span className="block text-[var(--green)]">ORGANIZE ET</span>
          </h1>
        </RevealOnScroll>
        <RevealOnScroll>
          <p className="mt-5 max-w-[460px] text-lg text-[var(--muted)]">
            Arkadaşlarını topla, kadroyu kur, skoru kaydet. Haftalık halısaha organizasyonunu
            karmaşadan çıkarıp tek uygulamada topla.
          </p>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="mt-9 flex flex-wrap gap-3.5">
            <Button variant="store" href={PLAY_STORE_URL} external>
              <span className="text-[26px]">▶</span>
              <div>
                <div className="text-[11px] text-[var(--muted)]">Google Play&apos;den İndir</div>
                <div className="text-base font-bold">Play Store</div>
              </div>
            </Button>
            <Button variant="store" href={APP_STORE_URL} external>
              <span className="text-[26px]" />
              <div>
                <div className="text-[11px] text-[var(--muted)]">App Store&apos;dan İndir</div>
                <div className="text-base font-bold">App Store</div>
              </div>
            </Button>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className="mt-12 flex gap-10">
            <div>
              <div className="font-[family-name:var(--font-display)] text-[40px] leading-none text-[var(--green)]">
                5.0
              </div>
              <div className="mt-0.5 text-[13px] text-[var(--muted)]">App Store Puanı</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-display)] text-[40px] leading-none text-[var(--green)]">
                iOS
              </div>
              <div className="mt-0.5 text-[13px] text-[var(--muted)]">+ Android</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-display)] text-[40px] leading-none text-[var(--green)]">
                %100
              </div>
              <div className="mt-0.5 text-[13px] text-[var(--muted)]">Ücretsiz</div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div
        className="absolute top-1/2 right-[5vw] z-[1] hidden -translate-y-1/2 lg:block"
        style={{ animation: "floatPhone 4s ease-in-out infinite" }}
      >
        <div className="h-[490px] w-[240px] overflow-hidden rounded-[36px] border-2 border-[rgba(74,222,128,0.3)] bg-[var(--bg2)] shadow-[0_0_80px_rgba(34,197,94,0.15),0_30px_80px_rgba(0,0,0,0.6)]">
          <div className="flex h-full flex-col items-center gap-2.5 bg-gradient-to-br from-[#0d2010] to-[#050a05] p-4 pt-5">
            <div className="flex w-full justify-between text-[11px] text-[var(--muted)]">
              <span>HalıSaha</span>
              <span>🟢 Canlı</span>
            </div>
            <div className="font-[family-name:var(--font-display)] text-lg text-[var(--green)]">
              ÇARŞAMBA MAÇI
            </div>
            <div className="w-full rounded-xl border border-[rgba(34,197,94,0.25)] bg-[rgba(34,197,94,0.1)] p-3">
              <div className="text-[11px] font-bold">Saha: Yıldız Halısaha</div>
              <div className="mt-0.5 text-[10px] text-[var(--muted)]">28 Mayıs · 21:00 · 10/10</div>
              <div className="mt-2 flex justify-between">
                <div className="text-center">
                  <div className="font-[family-name:var(--font-display)] text-[28px] text-[var(--green)]">
                    3
                  </div>
                  <div className="text-[9px] text-[var(--muted)]">TAKIM A</div>
                </div>
                <div className="self-center font-[family-name:var(--font-display)] text-sm text-[var(--muted)]">
                  -
                </div>
                <div className="text-center">
                  <div className="font-[family-name:var(--font-display)] text-[28px] text-[var(--green)]">
                    2
                  </div>
                  <div className="text-[9px] text-[var(--muted)]">TAKIM B</div>
                </div>
              </div>
            </div>
            <div className="w-full flex-1 text-[10px]">
              <div className="mb-1.5 font-bold text-[var(--muted)]">⚽ GOL LİDERLERİ</div>
              {["Can Y.", "Ahmet K.", "Mert Ş."].map((name, i) => (
                <div key={name} className="flex border-b border-white/5 py-1">
                  <span className="w-3.5 font-[family-name:var(--font-display)] text-sm text-[var(--green)]">
                    {i + 1}
                  </span>
                  <span className="flex-1">{name}</span>
                  <span className="font-bold text-[var(--green)]">{14 - i * 3}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
