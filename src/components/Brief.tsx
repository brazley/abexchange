import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { brief, user } from "../data/mock";

const toneColor: Record<string, string> = {
  gain: "var(--color-gain)",
  loss: "var(--color-loss)",
  neutral: "var(--color-accent)",
};

/** Left column of the masthead. The editorial "what moved" brief. */
export function Brief() {
  const hour = 9;
  const partOfDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";

  return (
    <div className="relative">
      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-3">
        <span className="h-1 w-1 rounded-full" style={{ background: "var(--color-accent)" }} />
        Your brief
        <span className="text-ink-3/60">·</span>
        <span className="normal-case tracking-normal">since {brief.since}</span>
      </div>

      <h1 className="display mt-3 text-[27px] font-semibold leading-[1.12] tracking-tight text-ink sm:text-[32px]">
        Good {partOfDay}, {user.greeting}.
        <span className="text-ink-3"> Here's what moved.</span>
      </h1>

      <ul className="mt-5 space-y-3">
        {brief.lines.map((line, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.09, duration: 0.4 }}
            className="flex gap-3 text-[14px] leading-relaxed text-ink-2"
          >
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0" style={{ background: toneColor[line.tone], borderRadius: 1 }} />
            <span>{line.text}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span className="mr-1 text-[12px] text-ink-3">Suggested</span>
        {brief.actions.map((action) => (
          <button
            key={action}
            className="group inline-flex items-center gap-1.5 rounded-chip border px-2.5 py-1.5 text-[13px] font-medium text-ink-2 transition-colors hover:text-ink"
            style={{ borderColor: "var(--color-line-strong)" }}
          >
            {action}
            <ArrowUpRight size={13} className="text-ink-3 transition-colors group-hover:text-ink-2" />
          </button>
        ))}
      </div>
    </div>
  );
}
