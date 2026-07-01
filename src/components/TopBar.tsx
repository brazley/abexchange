import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Bell, Plus, Sparkles } from "lucide-react";
import { BRAND, BRAND_SHORT, user } from "../data/mock";
import { Avatar } from "./primitives";

/**
 * ABE mark — an editorial masthead initial. A squared, hairline-bordered
 * tile holding a serif "A"; institutional, not techy. Reads like the
 * drop-cap on a newspaper's front page.
 */
function Mark() {
  return (
    <span className="inline-flex items-center gap-3 select-none">
      <span
        className="grid h-8 w-8 shrink-0 place-items-center border border-line-strong bg-elevated"
        style={{ borderRadius: 5 }}
      >
        <span className="display text-[19px] font-semibold leading-none text-ink" style={{ marginTop: -1 }}>
          A
        </span>
      </span>
      <span className="display hidden text-[15px] font-semibold leading-none tracking-tight text-ink md:inline">
        {BRAND}
      </span>
      <span className="display text-[15px] font-semibold leading-none tracking-tight text-ink md:hidden">
        {BRAND_SHORT}
      </span>
    </span>
  );
}

export function TopBar() {
  const [focused, setFocused] = useState(false);

  return (
    <div className="sticky top-0 z-30 border-b border-line bg-canvas/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1220px] items-center gap-4 px-5 sm:px-8">
        <Mark />

        <nav className="ml-5 hidden items-center gap-1 xl:flex" aria-label="Primary">
          {["The Exchange", "Opportunities", "Network", "Messages"].map((item, i) => (
            <a
              key={item}
              href="#"
              className={`rounded-field px-3 py-1.5 text-[13px] transition-colors ${
                i === 0 ? "text-ink" : "text-ink-3 hover:text-ink-2"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* AI ask bar — quiet: no glow at rest, a faint one on focus */}
        <div className="relative mx-auto hidden w-full max-w-sm md:block">
          <motion.div
            className="glow-field pointer-events-none absolute -inset-x-6 -inset-y-4 opacity-0"
            animate={{ opacity: focused ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
          <label
            className="relative flex items-center gap-2.5 rounded-field border bg-surface px-3.5 py-2 transition-colors"
            style={{ borderColor: focused ? "color-mix(in oklch, var(--color-accent) 45%, transparent)" : "var(--color-line)" }}
          >
            <Sparkles size={14} className="shrink-0" style={{ color: focused ? "var(--color-accent)" : "var(--color-ink-3)" }} />
            <input
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              placeholder={`Ask ${BRAND_SHORT} or search the exchange…`}
              className="w-full bg-transparent text-[13px] text-ink placeholder:text-ink-3 focus:outline-none"
              aria-label={`Ask ${BRAND_SHORT} or search`}
            />
            <kbd className="tnum hidden shrink-0 rounded-chip border border-line bg-elevated px-1.5 py-0.5 text-[10px] text-ink-3 sm:inline-block">
              ⌘K
            </kbd>
          </label>
        </div>

        <div className="ml-auto flex items-center gap-1.5 md:ml-4">
          <button className="grid h-9 w-9 place-items-center rounded-field text-ink-3 transition-colors hover:bg-surface hover:text-ink-2 md:hidden" aria-label="Search">
            <Search size={17} />
          </button>
          <button className="relative grid h-9 w-9 place-items-center rounded-field text-ink-3 transition-colors hover:bg-surface hover:text-ink-2" aria-label="Notifications">
            <Bell size={17} />
            <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full" style={{ background: "var(--color-accent)" }} />
          </button>

          <button className="ml-1.5 hidden items-center gap-1.5 rounded-field bg-ink px-3 py-2 text-[13px] font-medium text-canvas transition-transform hover:scale-[1.015] active:scale-[0.99] sm:inline-flex">
            <Plus size={15} strokeWidth={2.4} />
            Post
          </button>

          <button className="ml-1 rounded-full ring-1 ring-transparent transition hover:ring-line" aria-label={`${user.name} account`}>
            <Avatar name={user.name} size={34} tint="sand" shape="round" />
          </button>
        </div>
      </div>
    </div>
  );
}
