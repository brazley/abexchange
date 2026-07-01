import { motion } from "framer-motion";
import { metrics } from "../data/mock";
import { DeltaPill, Sparkline } from "./primitives";

/**
 * Compact 2×2 bento of the four numbers that matter. Lives in the right
 * column of the masthead. Minimal sparklines, mono numerals, squared.
 * Folds to a single column when the masthead stacks on mobile.
 */
export function Metrics() {
  return (
    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
      {metrics.map((m, i) => {
        const invert = m.id === "winrate"; // a drop in win rate is bad → reads red
        return (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
            className="group flex flex-col justify-between rounded-card border border-line bg-canvas/40 p-3.5 transition-colors hover:border-line-strong"
          >
            <div className="flex items-start justify-between gap-2">
              <span className="text-[11.5px] leading-tight text-ink-3">{m.label}</span>
              <DeltaPill delta={m.delta} invertColor={invert} />
            </div>

            <div className="mt-3 flex items-end justify-between gap-2">
              <div className="min-w-0">
                <div className="tnum text-[22px] font-medium leading-none text-ink">{m.value}</div>
                <div className="mt-1.5 truncate text-[10.5px] leading-tight text-ink-3">{m.note}</div>
              </div>
              <div className="shrink-0 opacity-70 transition-opacity group-hover:opacity-100">
                <Sparkline
                  data={m.spark}
                  width={54}
                  height={18}
                  stroke={invert ? "var(--color-loss)" : "var(--color-accent)"}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
