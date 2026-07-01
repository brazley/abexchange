import { motion } from "framer-motion";
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  Sparkles,
  ArrowUpRight,
  Bookmark,
  MapPin,
} from "lucide-react";
import { Avatar, SectionLabel } from "../components/primitives";
import {
  opportunities,
  oppTypes,
  savedSearches,
  type Opportunity,
  type OppType,
  type Fact,
} from "../data/opportunities";

const typeTone: Record<OppType, "accent" | "plain" | "sand"> = {
  RFP: "accent",
  Mandate: "accent",
  Deal: "plain",
  Retainer: "sand",
  Advisory: "plain",
};

function TypePill({ type }: { type: OppType }) {
  const tone = typeTone[type];
  const color = tone === "accent" ? "var(--color-accent-ink)" : tone === "sand" ? "var(--color-sand)" : "var(--color-ink-3)";
  const border =
    tone === "accent"
      ? "color-mix(in oklch, var(--color-accent) 32%, transparent)"
      : tone === "sand"
        ? "color-mix(in oklch, var(--color-sand) 28%, transparent)"
        : "var(--color-line-strong)";
  return (
    <span className="inline-flex items-center rounded-chip border px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.08em]" style={{ color, borderColor: border }}>
      {type}
    </span>
  );
}

function FactTile({ fact }: { fact: Fact }) {
  return (
    <div
      className="relative flex min-w-[112px] snap-start flex-col justify-between rounded-chip border bg-canvas/50 p-2.5"
      style={{ borderColor: fact.accent ? "color-mix(in oklch, var(--color-accent) 30%, transparent)" : "var(--color-line)" }}
    >
      {fact.accent && (
        <span className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "color-mix(in oklch, var(--color-accent) 60%, transparent)", borderRadius: "3px 3px 0 0" }} />
      )}
      <span className="text-[9.5px] font-medium uppercase tracking-[0.1em] text-ink-3">{fact.kicker}</span>
      <span className="tnum mt-2.5 text-[14px] font-medium leading-none" style={{ color: fact.accent ? "var(--color-accent-ink)" : "var(--color-ink)" }}>
        {fact.value}
      </span>
    </div>
  );
}

function OppCard({ o, index }: { o: Opportunity; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.03 * index, duration: 0.35 }}
      className="group rounded-card border border-line bg-surface p-5 transition-colors hover:border-line-strong"
    >
      <div className="flex gap-4">
        <Avatar name={o.company} size={44} tint={o.tint} shape="square" />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <TypePill type={o.type} />
                {o.matched && o.fit != null && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium" style={{ color: "var(--color-accent-ink)" }}>
                    <Sparkles size={11} style={{ color: "var(--color-accent)" }} />
                    <span className="tnum">{o.fit}%</span> fit
                  </span>
                )}
                <span className="text-[11px] text-ink-3">· {o.posted}</span>
              </div>
              <h3 className="display mt-1.5 text-[16px] font-semibold leading-snug tracking-tight text-ink">{o.headline}</h3>
              <div className="mt-1 flex items-center gap-2 text-[12px] text-ink-3">
                <span className="text-ink-2">{o.company}</span>
                <span className="text-ink-3/50">·</span>
                <span className="inline-flex items-center gap-1"><MapPin size={11} />{o.region}</span>
              </div>
            </div>
            <button className="grid h-8 w-8 shrink-0 place-items-center rounded-field text-ink-3 transition-colors hover:bg-elevated hover:text-ink-2" aria-label={`Save ${o.headline}`}>
              <Bookmark size={15} />
            </button>
          </div>

          <p className="mt-3 text-[13px] leading-relaxed text-ink-2">{o.pitch}</p>

          <div className="-mx-1 mt-3.5">
            <div className="no-scrollbar flex snap-x gap-2 overflow-x-auto px-1 pb-1">
              {o.facts.map((f) => (
                <FactTile key={f.kicker} fact={f} />
              ))}
            </div>
          </div>

          <div className="mt-3 flex items-start gap-2 text-[12px] leading-relaxed text-ink-3">
            <Sparkles size={12} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
            <span>
              <span className="font-medium" style={{ color: "var(--color-accent-ink)" }}>ABE read — </span>
              {o.abeRead}
            </span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <button className="inline-flex items-center gap-1.5 rounded-field bg-ink px-3 py-1.5 text-[12.5px] font-medium text-canvas transition-transform hover:scale-[1.015] active:scale-[0.99]">
              Express interest
            </button>
            <button className="inline-flex items-center gap-1 rounded-field px-2.5 py-1.5 text-[12.5px] font-medium text-ink-3 transition-colors hover:text-ink-2">
              View brief
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

function FilterButton({ label }: { label: string }) {
  return (
    <button className="inline-flex items-center gap-1.5 rounded-field border border-line px-3 py-2 text-[12.5px] text-ink-2 transition-colors hover:border-line-strong hover:text-ink">
      {label}
      <ChevronDown size={13} className="text-ink-3" />
    </button>
  );
}

export default function Opportunities() {
  const matched = opportunities.filter((o) => o.matched);
  const rest = opportunities.filter((o) => !o.matched);

  return (
    <main className="relative z-10 mx-auto max-w-[1220px] px-5 pb-24 pt-6 sm:px-8 sm:pt-8">
      <header className="mb-5 flex flex-wrap items-end justify-between gap-3 border-b border-line pb-4">
        <div>
          <SectionLabel>Marketplace</SectionLabel>
          <h1 className="display mt-1.5 text-[24px] font-semibold tracking-tight text-ink sm:text-[28px]">Opportunities</h1>
        </div>
        <span className="tnum text-[12px] text-ink-3">{opportunities.length} open · updated live from the Exchange</span>
      </header>

      {/* filter / sort bar */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-2.5 rounded-field border border-line bg-surface px-3.5 py-2.5">
          <Search size={15} className="shrink-0 text-ink-3" />
          <span className="truncate text-[13px] text-ink-3">Search deals, RFPs, mandates — company, capability, sector…</span>
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <FilterButton label="Type" />
          <FilterButton label="Sector" />
          <FilterButton label="Budget" />
          <FilterButton label="Region" />
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-field border border-line px-3 py-2.5 text-[12.5px] text-ink-2 transition-colors hover:border-line-strong hover:text-ink">
          <span className="text-ink-3">Sort</span> Fit <ChevronDown size={13} className="text-ink-3" />
        </button>
        <button className="inline-flex items-center gap-1.5 rounded-field border border-line px-3 py-2.5 text-[12.5px] text-ink-2 transition-colors hover:border-line-strong hover:text-ink lg:hidden">
          <SlidersHorizontal size={13} /> Filter
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[224px_minmax(0,1fr)] lg:gap-8">
        {/* left rail */}
        <aside className="hidden lg:block">
          <div className="sticky top-20 space-y-6">
            <div>
              <SectionLabel>Saved searches</SectionLabel>
              <ul className="mt-3 space-y-1">
                {savedSearches.map((s) => (
                  <li key={s.id}>
                    <button className="flex w-full items-center justify-between gap-2 rounded-field px-2.5 py-2 text-left text-[13px] text-ink-2 transition-colors hover:bg-surface hover:text-ink">
                      <span className="truncate">{s.label}</span>
                      <span className="tnum shrink-0 text-[11px] text-ink-3">{s.count}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel>Type</SectionLabel>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {oppTypes.map((t) => (
                  <button key={t} className="rounded-chip border border-line px-2.5 py-1 text-[11.5px] text-ink-2 transition-colors hover:border-line-strong hover:text-ink">
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* main column */}
        <div className="min-w-0">
          <section>
            <div className="mb-3.5 flex items-center gap-2.5">
              <Sparkles size={14} style={{ color: "var(--color-accent)" }} />
              <SectionLabel>Matched for you</SectionLabel>
              <span className="tnum text-[11px] text-ink-3">{matched.length} high-fit</span>
            </div>
            <div className="space-y-3">
              {matched.map((o, i) => (
                <OppCard key={o.id} o={o} index={i} />
              ))}
            </div>
          </section>

          <section className="mt-10">
            <div className="mb-3.5 flex items-center gap-2.5">
              <SectionLabel>All opportunities</SectionLabel>
              <span className="tnum text-[11px] text-ink-3">{rest.length}</span>
            </div>
            <div className="space-y-3">
              {rest.map((o, i) => (
                <OppCard key={o.id} o={o} index={i} />
              ))}
            </div>
          </section>
        </div>
      </div>

      <footer className="mt-16 flex flex-col items-center gap-1 text-center">
        <span className="display text-[13px] text-ink-3">American Business Exchange · Opportunities</span>
        <span className="text-[11px] text-ink-3/70">A working prototype · all figures illustrative</span>
        <span className="mt-1 text-[11px] text-ink-3/70">
          A <span className="display text-ink-2">7/</span> company
        </span>
      </footer>
    </main>
  );
}
