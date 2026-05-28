import { RevealOnScroll } from "./RevealOnScroll";
import { steps } from "./data";

export function HowItWorksSection() {
  return (
    <section id="how" className="bg-[var(--bg)] px-[5vw] py-[100px]">
      <RevealOnScroll>
        <span className="text-xs font-bold tracking-[3px] text-[var(--green)] uppercase">
          Nasıl Çalışır
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,60px)] leading-none">
          3 ADIMDA <span className="text-[var(--green)]">HAZIR</span>
        </h2>
        <div className="mt-4 h-[3px] w-[60px] rounded-sm bg-[var(--green)]" />
      </RevealOnScroll>
      <div className="relative mt-[60px] grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <RevealOnScroll key={step.num}>
            <div className="flex flex-col items-center gap-4 p-5 text-center">
              <div className="relative z-[1] flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--green)] font-[family-name:var(--font-display)] text-[22px] text-black">
                {step.num}
              </div>
              <div className="font-bold">{step.title}</div>
              <p className="text-[13px] text-[var(--muted)]">{step.desc}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
