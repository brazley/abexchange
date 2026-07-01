import { motion } from "framer-motion";
import { CalendarClock, ArrowUpRight, TrendingUp, Sparkles } from "lucide-react";
import { deadlines, quickActions, insights } from "../data/mock";
import { deadlineLabel } from "../lib/format";
import { SectionLabel } from "./primitives";

const kindLabel: Record<string, string> = {
  reply: "Reply",
  interview: "Interview",
  proposal: "Proposal",
  renewal: "Renewal",
};

function Deadlines() {
  return (
    <div className="rounded-panel border border-line bg-surface p-5">
      <div className="mb-4 flex items-center gap-2">
        <CalendarClock size={15} className="text-ink-3" />
        <SectionLabel>Upcoming deadlines</SectionLabel>
      </div>

      <ul className="space-y-1">
        {[...deadlines]
          .sort((a, b) => +new Date(a.due) - +new Date(b.due))
          .map((d) => {
            const dl = deadlineLabel(d.due);
            return (
              <li key={d.id}>
                <button className="flex w-full items-center gap-3 rounded-field px-2 py-2.5 text-left transition-colors hover:bg-elevated">
                  <span
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-chip border text-[10px] font-medium uppercase tracking-wide"
                    style={{
                      borderColor: dl.urgent ? "color-mix(in oklch, var(--color-loss) 40%, transparent)" : "var(--color-line)",
                      color: dl.urgent ? "var(--color-loss)" : "var(--color-ink-3)",
                    }}
                  >
                    {kindLabel[d.kind].slice(0, 4)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[13px] font-medium text-ink">{d.label}</span>
                    <span className="block truncate text-[12px] text-ink-3">{d.company}</span>
                  </span>
                  <span
                    className="shrink-0 text-[12px] font-medium"
                    style={{ color: dl.urgent ? "var(--color-loss)" : "var(--color-ink-3)" }}
                  >
                    {dl.text}
                  </span>
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

function QuickActions() {
  return (
    <div className="rounded-panel border border-line bg-surface p-5">
      <div className="mb-4">
        <SectionLabel>Quick actions</SectionLabel>
      </div>
      <div className="space-y-2">
        {quickActions.map((a) => {
          const isAI = a.id === "q3";
          return (
            <button
              key={a.id}
              className="group flex w-full items-center gap-3 rounded-card border px-3.5 py-3 text-left transition-all hover:border-line-strong"
              style={{
                borderColor: isAI ? "color-mix(in oklch, var(--color-accent) 26%, transparent)" : "var(--color-line)",
                background: isAI ? "color-mix(in oklch, var(--color-accent) 5%, transparent)" : "transparent",
              }}
            >
              {isAI && <Sparkles size={15} className="shrink-0" style={{ color: "var(--color-accent)" }} />}
              <span className="min-w-0 flex-1">
                <span className="block text-[13px] font-medium text-ink">{a.label}</span>
                <span className="block text-[12px] text-ink-3">{a.hint}</span>
              </span>
              <ArrowUpRight
                size={15}
                className="shrink-0 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink-2"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Insights() {
  return (
    <div className="relative overflow-hidden rounded-panel border border-line bg-surface p-5">
      <div className="mb-4 flex items-center gap-2">
        <TrendingUp size={15} className="text-ink-3" />
        <SectionLabel>{insights.month} · this month</SectionLabel>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {insights.stats.map((s) => (
          <div key={s.label} className="rounded-card border border-line bg-canvas/40 px-3 py-3">
            <div className="tnum text-[20px] font-medium leading-none text-ink">{s.value}</div>
            <div className="mt-2 flex items-center gap-1">
              <span className="tnum text-[11px] font-medium" style={{ color: "var(--color-gain)" }}>{s.delta}</span>
            </div>
            <div className="mt-0.5 text-[11px] leading-tight text-ink-3">{s.label}</div>
          </div>
        ))}
      </div>

      <div
        className="mt-4 flex items-start gap-2 rounded-card px-3 py-2.5 text-[12.5px] leading-relaxed"
        style={{
          background: "color-mix(in oklch, var(--color-accent) 7%, transparent)",
          color: "var(--color-accent-ink)",
        }}
      >
        <Sparkles size={13} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
        <span>{insights.headline}</span>
      </div>
    </div>
  );
}

export function Sidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="space-y-4"
    >
      <Deadlines />
      <QuickActions />
      <Insights />
    </motion.aside>
  );
}
