import { RevealOnScroll } from "./RevealOnScroll";
import { features } from "./data";

export function FeaturesSection() {
  return (
    <section id="features" className="relative px-[5vw] py-[100px]">
      <div className="field-bg opacity-40" />
      <RevealOnScroll>
        <span className="text-xs font-bold tracking-[3px] text-[var(--green)] uppercase">
          Özellikler
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,60px)] leading-none tracking-wide">
          HER ŞEY <span className="text-[var(--green)]">BİR YERDE</span>
        </h2>
        <div className="mt-4 h-[3px] w-[60px] rounded-sm bg-[var(--green)]" />
        <p className="mt-2.5 max-w-[520px] text-[17px] text-[var(--muted)]">
          Maç organizasyonunun tüm adımlarını tek uygulamada yönet.
        </p>
      </RevealOnScroll>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {features.map((f) => (
          <RevealOnScroll key={f.title}>
            <article className="group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)] p-7 transition hover:-translate-y-1 hover:border-[rgba(34,197,94,0.35)] hover:shadow-[var(--shadow)]">
              <div className="absolute top-0 right-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--green)] to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[rgba(34,197,94,0.1)] text-[32px]">
                {f.icon}
              </div>
              <h3 className="font-[family-name:var(--font-condensed)] text-xl font-bold">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{f.desc}</p>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
