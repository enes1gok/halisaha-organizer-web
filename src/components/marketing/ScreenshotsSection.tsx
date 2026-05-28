import { RevealOnScroll } from "./RevealOnScroll";

const screenshots = [
  { title: "⚡ Maç Oluştur", body: "Saha, tarih, ücret ve katılım kodu tek ekranda." },
  { title: "📊 Katılım Durumu", body: "Geliyor / Belki / Gelmiyor anlık takip." },
  { title: "👥 Kadro Kur", body: "Takım A/B, yedek ve kadro kilitleme." },
  { title: "⚽ Skor & İstatistik", body: "Gol, asist ve maç sonucu kaydı." },
  { title: "🏆 Lider Tablosu", body: "Gol, asist ve kazanma metrikleri." },
  { title: "💳 Ödeme Takibi", body: "IBAN ve ödeme durumu şeffaflığı." },
];

export function ScreenshotsSection() {
  return (
    <section id="screenshots" className="overflow-hidden bg-[var(--bg2)] px-[5vw] py-[100px]">
      <RevealOnScroll>
        <span className="text-xs font-bold tracking-[3px] text-[var(--green)] uppercase">
          Uygulama Ekranları
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,60px)] leading-none">
          UYGULAMAYI <span className="text-[var(--green)]">KEŞFEDİN</span>
        </h2>
        <div className="mt-4 h-[3px] w-[60px] rounded-sm bg-[var(--green)]" />
      </RevealOnScroll>
      <div className="mt-12 flex gap-5 overflow-x-auto pb-4">
        {screenshots.map((item) => (
          <RevealOnScroll key={item.title}>
            <div className="flex h-[500px] w-[280px] shrink-0 flex-col overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--bg3)]">
              <div className="border-b border-[var(--border)] px-4 py-4 font-[family-name:var(--font-condensed)] text-sm font-bold tracking-wide text-[var(--green)] uppercase">
                {item.title}
              </div>
              <div className="flex flex-1 items-center justify-center p-6 text-center text-sm text-[var(--muted)]">
                {item.body}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
