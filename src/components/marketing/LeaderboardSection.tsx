import { RevealOnScroll } from "./RevealOnScroll";
import { assistLeaders, goalLeaders } from "./data";

const medalColor: Record<string, string> = {
  gold: "text-[#facc15]",
  silver: "text-[#94a3b8]",
  bronze: "text-[#b45309]",
  default: "text-[var(--muted)]",
};

function LeaderCard({
  title,
  rows,
}: {
  title: string;
  rows: readonly { rank: number; name: string; sub: string; val: string; medal: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--card)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
        <span className="font-[family-name:var(--font-condensed)] text-base font-bold tracking-wide uppercase">
          {title}
        </span>
        <div className="flex gap-1.5">
          <span className="rounded-full bg-[var(--green)] px-2.5 py-0.5 text-[11px] font-bold text-black">
            Bu Ay
          </span>
          <span className="rounded-full border border-[var(--border)] px-2.5 py-0.5 text-[11px] text-[var(--muted)]">
            Tüm Zaman
          </span>
        </div>
      </div>
      {rows.map((row) => (
        <div
          key={row.name}
          className={`flex items-center gap-3.5 border-b border-white/[0.04] px-5 py-3 last:border-0 ${row.rank === 1 ? "bg-[rgba(34,197,94,0.07)]" : ""}`}
        >
          <span
            className={`w-5 text-center font-[family-name:var(--font-display)] text-xl ${medalColor[row.medal]}`}
          >
            {row.rank}
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(34,197,94,0.15)] text-[15px] font-extrabold text-[var(--green)]">
            {row.name
              .split(" ")
              .map((p) => p[0])
              .join("")
              .slice(0, 2)}
          </span>
          <div className="flex-1">
            <div className="text-sm font-semibold">{row.name}</div>
            <div className="text-[11px] text-[var(--muted)]">{row.sub}</div>
          </div>
          <div className="font-[family-name:var(--font-display)] text-2xl text-[var(--green)]">
            {row.val}
          </div>
        </div>
      ))}
    </div>
  );
}

export function LeaderboardSection() {
  return (
    <section id="leaderboard" className="relative bg-[var(--bg2)] px-[5vw] py-[100px]">
      <div className="field-bg opacity-30" />
      <RevealOnScroll>
        <span className="text-xs font-bold tracking-[3px] text-[var(--green)] uppercase">
          Lider Tablosu
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(36px,5vw,60px)] leading-none">
          KIM EN <span className="text-[var(--green)]">İYİ?</span>
        </h2>
        <div className="mt-4 h-[3px] w-[60px] rounded-sm bg-[var(--green)]" />
        <p className="mt-2.5 max-w-[520px] text-[17px] text-[var(--muted)]">
          Haftalık, aylık ve tüm zamanlar filtresiyle gol, asist ve kazanma oranlarında zirvede kim
          olduğunu gör.
        </p>
      </RevealOnScroll>
      <div className="relative mt-14 grid gap-8 lg:grid-cols-2">
        <RevealOnScroll>
          <LeaderCard title="⚽ Gol Liderleri" rows={goalLeaders} />
        </RevealOnScroll>
        <RevealOnScroll>
          <LeaderCard title="🎯 Asist Liderleri" rows={assistLeaders} />
        </RevealOnScroll>
      </div>
    </section>
  );
}
