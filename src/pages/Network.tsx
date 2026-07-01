import { motion } from "framer-motion";
import { UserPlus, Check, X, Users, ArrowUpRight, Plus } from "lucide-react";
import { Avatar, SectionLabel } from "../components/primitives";
import {
  netStats,
  invitations,
  peopleYouMayKnow,
  companiesToFollow,
  networkGlance,
  type Person,
  type Company,
} from "../data/network";

function StatsStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {netStats.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.04 * i, duration: 0.35 }}
          className="rounded-card border border-line bg-surface p-4"
        >
          <div className="tnum text-[24px] font-medium leading-none text-ink">{s.value}</div>
          <div className="mt-2.5 text-[12px] leading-tight text-ink-2">{s.label}</div>
          {s.delta && (
            <div className="tnum mt-1 text-[11px]" style={{ color: "var(--color-gain)" }}>{s.delta}</div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

function InvitationRow({ p, index }: { p: Person; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -6 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.35 }}
      className="flex items-start gap-3 rounded-card border border-line bg-surface p-4"
    >
      <Avatar name={p.name} size={44} tint={p.tint} shape="round" />
      <div className="min-w-0 flex-1">
        <div className="display truncate text-[14.5px] font-semibold leading-tight text-ink">{p.name}</div>
        <div className="truncate text-[12.5px] text-ink-3">{p.role} · {p.company}</div>
        {p.note && <p className="mt-1.5 text-[12px] leading-relaxed text-ink-2">{p.note}</p>}
        <div className="mt-1.5 inline-flex items-center gap-1 text-[11.5px] text-ink-3">
          <Users size={11} /><span className="tnum">{p.mutual}</span> mutual
        </div>
      </div>
      <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
        <button className="inline-flex items-center justify-center gap-1 rounded-field bg-ink px-3 py-1.5 text-[12.5px] font-medium text-canvas transition-transform hover:scale-[1.015] active:scale-[0.99]">
          <Check size={13} /> Accept
        </button>
        <button className="inline-flex items-center justify-center gap-1 rounded-field border border-line-strong px-3 py-1.5 text-[12.5px] font-medium text-ink-3 transition-colors hover:text-ink-2" aria-label={`Ignore ${p.name}`}>
          <X size={13} /> Ignore
        </button>
      </div>
    </motion.div>
  );
}

function PersonCard({ p, index }: { p: Person; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.03 * index, duration: 0.35 }}
      className="group flex flex-col items-center rounded-card border border-line bg-surface p-5 text-center transition-colors hover:border-line-strong"
    >
      <Avatar name={p.name} size={60} tint={p.tint} shape="round" />
      <div className="display mt-3 truncate text-[14.5px] font-semibold leading-tight text-ink">{p.name}</div>
      <div className="mt-1 line-clamp-2 text-[12px] leading-snug text-ink-3">{p.role} · {p.company}</div>
      <div className="mt-2 inline-flex items-center gap-1 text-[11.5px] text-ink-3">
        <Users size={11} /><span className="tnum">{p.mutual}</span> mutual
      </div>
      <button className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-field border border-line-strong px-3 py-1.5 text-[12.5px] font-medium text-ink-2 transition-colors hover:border-accent hover:text-ink">
        <UserPlus size={13} /> Connect
      </button>
    </motion.article>
  );
}

function CompanyCard({ c }: { c: Company }) {
  return (
    <article className="flex items-center gap-3 rounded-card border border-line bg-surface p-4">
      <Avatar name={c.name} size={42} tint={c.tint} shape="square" />
      <div className="min-w-0 flex-1">
        <div className="display truncate text-[13.5px] font-semibold leading-tight text-ink">{c.name}</div>
        <div className="truncate text-[11.5px] text-ink-3">{c.sector} · <span className="tnum">{c.followers}</span> followers</div>
      </div>
      <button className="inline-flex shrink-0 items-center gap-1 rounded-field border border-line-strong px-2.5 py-1.5 text-[12px] font-medium text-ink-2 transition-colors hover:text-ink">
        <Plus size={12} /> Follow
      </button>
    </article>
  );
}

function GlanceBar({ label, pct }: { label: string; pct: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-[12px]">
        <span className="text-ink-2">{label}</span>
        <span className="tnum text-ink-3">{pct}%</span>
      </div>
      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-elevated">
        <div className="h-full rounded-full" style={{ width: `${pct}%`, background: "color-mix(in oklch, var(--color-accent) 55%, var(--color-line-strong))" }} />
      </div>
    </div>
  );
}

export default function Network() {
  return (
    <main className="relative z-10 mx-auto max-w-[1220px] px-5 pb-24 pt-6 sm:px-8 sm:pt-8">
      <header className="mb-5 border-b border-line pb-4">
        <SectionLabel>Your graph</SectionLabel>
        <h1 className="display mt-1.5 text-[24px] font-semibold tracking-tight text-ink sm:text-[28px]">Network</h1>
      </header>

      <StatsStrip />

      <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* main column */}
        <div className="min-w-0 space-y-10">
          <section>
            <div className="mb-3.5 flex items-center gap-2.5">
              <SectionLabel>Invitations</SectionLabel>
              <span className="tnum text-[11px] text-ink-3">{invitations.length} pending</span>
            </div>
            <div className="space-y-3">
              {invitations.map((p, i) => (
                <InvitationRow key={p.id} p={p} index={i} />
              ))}
            </div>
          </section>

          <section>
            <div className="mb-3.5 flex items-center justify-between">
              <SectionLabel>People you may know</SectionLabel>
              <button className="inline-flex items-center gap-1 text-[12px] font-medium text-ink-3 transition-colors hover:text-ink-2">
                See all <ArrowUpRight size={13} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
              {peopleYouMayKnow.map((p, i) => (
                <PersonCard key={p.id} p={p} index={i} />
              ))}
            </div>
          </section>
        </div>

        {/* right rail */}
        <aside className="space-y-6">
          <section>
            <SectionLabel>Buyers in your space</SectionLabel>
            <div className="mt-3 space-y-2.5">
              {companiesToFollow.map((c) => (
                <CompanyCard key={c.id} c={c} />
              ))}
            </div>
          </section>

          <section className="rounded-card border border-line bg-surface p-5">
            <SectionLabel>Your network at a glance</SectionLabel>
            <div className="mt-4">
              <div className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-3">Top sectors</div>
              <div className="space-y-2.5">
                {networkGlance.sectors.map((s) => (
                  <GlanceBar key={s.label} label={s.label} pct={s.pct} />
                ))}
              </div>
            </div>
            <div className="mt-5">
              <div className="mb-1.5 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-3">By region</div>
              <div className="space-y-2.5">
                {networkGlance.regions.map((r) => (
                  <GlanceBar key={r.label} label={r.label} pct={r.pct} />
                ))}
              </div>
            </div>
          </section>
        </aside>
      </div>

      <footer className="mt-16 flex flex-col items-center gap-1 text-center">
        <span className="display text-[13px] text-ink-3">American Business Exchange · Network</span>
        <span className="text-[11px] text-ink-3/70">A working prototype · all figures illustrative</span>
        <span className="mt-1 text-[11px] text-ink-3/70">
          A <span className="display text-ink-2">7/</span> company
        </span>
      </footer>
    </main>
  );
}
