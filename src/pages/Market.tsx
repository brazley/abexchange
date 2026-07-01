import { motion } from "framer-motion";
import {
  Sparkles,
  BadgeCheck,
  ShieldCheck,
  Search,
  SlidersHorizontal,
  MapPin,
  Users,
  ArrowRight,
  ArrowUpRight,
  Check,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Avatar, SectionLabel } from "../components/primitives";
import {
  stats,
  certMeta,
  certOrder,
  suppliers,
  matchmaking,
  buyers,
  spendDashboard,
  capabilities,
  type CertKey,
} from "../data/market";

/* ----------------------------- atoms ------------------------------- */

function CertDot({ k, size = 7 }: { k: CertKey; size?: number }) {
  const m = certMeta[k];
  return (
    <span
      className="inline-block shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        background: m.gradient
          ? "conic-gradient(from 210deg, #CE7FA6, #C6A15B, #5FA79C, #6E93C7, #9A7FD1, #CE7FA6)"
          : m.color,
      }}
      aria-hidden
    />
  );
}

function CertBadge({ k }: { k: CertKey }) {
  const m = certMeta[k];
  return (
    <span className="inline-flex items-center gap-1.5 rounded-chip border border-line bg-elevated px-2 py-0.5 text-[10.5px] font-medium text-ink-2">
      <CertDot k={k} />
      {m.short}
    </span>
  );
}

function SectionHead({ kicker, title, blurb }: { kicker: string; title: string; blurb?: string }) {
  return (
    <div className="mb-6 max-w-2xl">
      <SectionLabel>{kicker}</SectionLabel>
      <h2 className="display mt-2 text-[22px] font-semibold leading-tight tracking-tight text-ink sm:text-[26px]">{title}</h2>
      {blurb && <p className="mt-2.5 text-[14px] leading-relaxed text-ink-2">{blurb}</p>}
    </div>
  );
}

/* ----------------------------- hero -------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-panel border border-line bg-surface">
      <div className="glow-field pointer-events-none absolute inset-0" />
      <div className="relative px-6 py-12 sm:px-10 sm:py-16">
        <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-ink-3">
          <span className="h-1 w-1 rounded-full" style={{ background: "var(--color-accent)" }} />
          The Market · Certified Business Network
        </div>

        <h1 className="display mt-4 max-w-3xl text-[34px] font-semibold leading-[1.06] tracking-tight text-ink sm:text-[48px]">
          Certification that comes to you.
          <span className="text-ink-3"> Not a directory you dig through.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-2 sm:text-[16px]">
          A certified-business network for every small and/or local business. Registry-grade certification,
          AI-native matchmaking, and live opportunity flow from the Exchange, so the right buyers and suppliers
          actually find each other.
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <button className="inline-flex items-center gap-1.5 rounded-field bg-ink px-4 py-2.5 text-[13.5px] font-medium text-canvas transition-transform hover:scale-[1.015] active:scale-[0.99]">
            <BadgeCheck size={16} />
            Get certified
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-field border border-line-strong px-4 py-2.5 text-[13.5px] font-medium text-ink-2 transition-colors hover:text-ink">
            Join as a buyer
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* --------------------------- stats band ---------------------------- */

function StatsBand() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {stats.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
          className="relative overflow-hidden rounded-card border border-line bg-surface p-4"
          style={s.accent ? { borderColor: "color-mix(in oklch, var(--color-accent) 28%, transparent)" } : undefined}
        >
          {s.accent && (
            <span className="absolute inset-x-0 top-0 h-[2px]" style={{ background: "color-mix(in oklch, var(--color-accent) 60%, transparent)" }} />
          )}
          <div className="tnum text-[26px] font-medium leading-none text-ink">{s.value}</div>
          <div className="mt-2.5 text-[12px] leading-tight text-ink-2">{s.label}</div>
          {s.sub && (
            <div className="mt-1 text-[11px] leading-tight" style={{ color: s.accent ? "var(--color-accent-ink)" : "var(--color-ink-3)" }}>
              {s.sub}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ------------------------ certification ---------------------------- */

function Certification() {
  return (
    <section className="mt-16">
      <SectionHead
        kicker="Certification"
        title="One credential. Every category."
        blurb="Where the incumbent certifies minority-owned firms only, the Market recognizes all five — verified once, honored everywhere."
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5">
        {certOrder.map((k, i) => {
          const m = certMeta[k];
          return (
            <motion.div
              key={k}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * i, duration: 0.35 }}
              className="group overflow-hidden rounded-card border border-line bg-surface p-4 transition-colors hover:border-line-strong"
            >
              <span className="h-[3px] w-9 rounded-full" style={{ background: m.gradient ? "linear-gradient(90deg,#CE7FA6,#C6A15B,#5FA79C,#6E93C7,#9A7FD1)" : m.color, display: "block" }} />
              <div className="mt-3.5 flex items-center gap-2">
                <CertDot k={k} size={9} />
                <span className="tnum text-[11px] font-medium tracking-wide text-ink-3">{m.short}</span>
              </div>
              <div className="display mt-1.5 text-[15px] font-semibold leading-snug text-ink">{m.label}</div>
            </motion.div>
          );
        })}
      </div>

      {/* Portable verified credential */}
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_1fr]">
        <div
          className="relative overflow-hidden rounded-card border p-6"
          style={{ borderColor: "color-mix(in oklch, var(--color-accent) 26%, transparent)", background: "color-mix(in oklch, var(--color-accent) 5%, transparent)" }}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck size={17} style={{ color: "var(--color-accent)" }} />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em]" style={{ color: "var(--color-accent-ink)" }}>
              Portable verified credential
            </span>
          </div>
          <h3 className="display mt-3 max-w-xl text-[19px] font-semibold leading-snug tracking-tight text-ink">
            Verified in days, not weeks — self-service, and recognized by every buyer on the network.
          </h3>
          <p className="mt-2.5 max-w-xl text-[13.5px] leading-relaxed text-ink-2">
            Certify once and carry a single portable badge. Renewals are automatic, status is live, and buyers see a
            green check the moment they meet you — no re-verification, no expired-cert surprises.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Self-service", "Auto-renewing", "Cross-recognized", "Live status"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-chip border border-line bg-surface px-2.5 py-1 text-[12px] text-ink-2">
                <Check size={12} style={{ color: "var(--color-accent)" }} />
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* the badge object itself */}
        <div className="flex items-center justify-center rounded-card border border-line bg-surface p-6">
          <div className="w-full max-w-[240px] rounded-card border border-line bg-canvas/50 p-5">
            <div className="flex items-center justify-between">
              <Avatar name="Meridian Data Group" size={40} tint="accent" shape="square" />
              <span className="inline-flex items-center gap-1 text-[11px] font-medium" style={{ color: "var(--color-accent-ink)" }}>
                <BadgeCheck size={14} style={{ color: "var(--color-accent)" }} />
                Verified
              </span>
            </div>
            <div className="display mt-3 text-[14px] font-semibold leading-tight text-ink">Meridian Data Group</div>
            <div className="mt-1 flex flex-wrap gap-1.5">
              <CertBadge k="minority" />
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-line pt-2.5 text-[10.5px] text-ink-3">
              <span>ID · ABE-MBE-0187</span>
              <span className="tnum">Valid → 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- directory ---------------------------- */

function SupplierCard({ s, index }: { s: (typeof suppliers)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.03 * index, duration: 0.35 }}
      className="group flex flex-col rounded-card border border-line bg-surface p-4 transition-colors hover:border-line-strong"
    >
      <div className="flex items-start gap-3">
        <Avatar name={s.name} size={42} tint={s.tint} shape="square" />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <h3 className="display truncate text-[15px] font-semibold leading-tight text-ink">{s.name}</h3>
            <BadgeCheck size={13} className="shrink-0" style={{ color: "var(--color-accent)" }} />
          </div>
          <div className="mt-0.5 inline-flex items-center gap-1 text-[12px] text-ink-3">
            <MapPin size={11} />
            {s.region}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {s.certs.map((k) => (
          <CertBadge key={k} k={k} />
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {s.capabilities.map((c) => (
          <span key={c} className="rounded-chip bg-elevated px-2 py-0.5 text-[11px] text-ink-3">
            {c}
          </span>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 text-[12px] text-ink-3">
        <TrendingUp size={12} />
        <span className="text-ink-2">{s.performance}</span>
      </div>

      <div className="mt-3 flex items-start gap-2 border-t border-line pt-3 text-[12px] leading-relaxed">
        <Sparkles size={12} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
        <span className="text-ink-3">
          <span className="font-medium" style={{ color: "var(--color-accent-ink)" }}>ABE read — </span>
          {s.abeRead}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-[11.5px] text-ink-3">
          <Users size={12} />
          <span className="tnum">{s.network}</span> in your network
        </span>
        <button className="inline-flex items-center gap-1 text-[12px] font-medium text-ink-3 opacity-0 transition-opacity group-hover:opacity-100 hover:text-ink">
          Profile
          <ArrowUpRight size={13} />
        </button>
      </div>
    </motion.article>
  );
}

function Directory() {
  return (
    <section className="mt-16">
      <SectionHead
        kicker="The Directory"
        title="Certified suppliers, ranked for you — not just listed."
        blurb="Every profile is verified, capability-tagged, and scored against what you actually buy."
      />

      {/* search / filter bar (visual) */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-2.5 rounded-field border border-line bg-surface px-3.5 py-2.5">
          <Search size={15} className="shrink-0 text-ink-3" />
          <span className="truncate text-[13px] text-ink-3">Search 18,400 certified businesses — capability, region, certification…</span>
        </div>
        {certOrder.map((k) => (
          <button key={k} className="hidden items-center gap-1.5 rounded-field border border-line px-2.5 py-2 text-[12px] text-ink-2 transition-colors hover:border-line-strong lg:inline-flex">
            <CertDot k={k} />
            {certMeta[k].short}
          </button>
        ))}
        <button className="inline-flex items-center gap-1.5 rounded-field border border-line px-2.5 py-2.5 text-[12px] text-ink-2 transition-colors hover:border-line-strong lg:hidden">
          <SlidersHorizontal size={13} />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {suppliers.map((s, i) => (
          <SupplierCard key={s.id} s={s} index={i} />
        ))}
      </div>
    </section>
  );
}

/* -------------------------- matchmaking ---------------------------- */

function FitBar({ fit }: { fit: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-elevated">
        <div className="h-full rounded-full" style={{ width: `${fit}%`, background: "var(--color-accent)" }} />
      </div>
      <span className="tnum text-[13px] font-medium" style={{ color: "var(--color-accent-ink)" }}>{fit}%</span>
    </div>
  );
}

function Matchmaking() {
  const { mandate, ranked } = matchmaking;
  return (
    <section className="mt-16">
      <SectionHead
        kicker="AI Matchmaking"
        title="Proactive, explainable matches — pushed to both sides."
        blurb="No search box, no on-request report. The Market reads every live mandate against every certified supplier and explains why each pairing fits."
      />

      <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_auto_1.2fr]">
        {/* buyer mandate */}
        <div className="rounded-card border border-line bg-surface p-5">
          <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.1em] text-ink-3">
            <Zap size={13} style={{ color: "var(--color-accent)" }} />
            Buyer mandate
          </div>
          <div className="mt-3 flex items-center gap-3">
            <Avatar name={mandate.buyer} size={40} tint="plain" shape="square" />
            <div>
              <div className="display text-[15px] font-semibold leading-tight text-ink">{mandate.buyer}</div>
              <div className="text-[11.5px] text-ink-3">{mandate.posted}</div>
            </div>
          </div>
          <h3 className="display mt-4 text-[17px] font-semibold leading-snug tracking-tight text-ink">{mandate.title}</h3>
          <p className="tnum mt-2 text-[12.5px] text-ink-2">{mandate.detail}</p>
        </div>

        {/* connector */}
        <div className="hidden items-center justify-center lg:flex">
          <div className="flex flex-col items-center gap-1 text-ink-3">
            <Sparkles size={16} style={{ color: "var(--color-accent)" }} />
            <ArrowRight size={18} />
          </div>
        </div>

        {/* ranked supplier matches */}
        <div className="rounded-card border border-line bg-surface p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[11px] font-medium uppercase tracking-[0.1em] text-ink-3">Ranked matches</span>
            <span className="tnum text-[11px] text-ink-3">{ranked.length} of 18,400 scored</span>
          </div>
          <div className="space-y-2.5">
            {ranked.map((r, i) => (
              <motion.div
                key={r.supplierId}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.35 }}
                className="rounded-chip border border-line bg-canvas/40 p-3"
                style={i === 0 ? { borderColor: "color-mix(in oklch, var(--color-accent) 30%, transparent)" } : undefined}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <Avatar name={r.name} size={30} tint={i === 0 ? "accent" : "plain"} shape="square" />
                    <div className="min-w-0">
                      <div className="display truncate text-[13.5px] font-semibold leading-tight text-ink">{r.name}</div>
                      <div className="mt-0.5 flex gap-1">
                        {r.certs.map((k) => (
                          <CertDot key={k} k={k} size={6} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <FitBar fit={r.fit} />
                </div>
                <p className="mt-2 flex items-start gap-1.5 text-[11.5px] leading-relaxed text-ink-3">
                  <Sparkles size={11} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
                  {r.read}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-3 text-[12px] text-ink-3">
        Two-sided by design — suppliers see the same in reverse: live mandates from the Exchange, ranked to their
        capabilities and delivered the moment they post.
      </p>
    </section>
  );
}

/* ---------------------------- buyers ------------------------------- */

function Buyers() {
  return (
    <section className="mt-16">
      <SectionHead kicker="Buyer members" title="The institutions doing the buying." />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {buyers.map((b) => (
          <div key={b} className="flex items-center gap-2.5 rounded-card border border-line bg-surface px-3.5 py-3">
            <Avatar name={b} size={30} tint="plain" shape="square" />
            <span className="display truncate text-[13px] font-semibold text-ink-2">{b}</span>
          </div>
        ))}
      </div>

      {/* live spend dashboard */}
      <div className="mt-4 overflow-hidden rounded-card border border-line bg-surface p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em]" style={{ color: "var(--color-accent-ink)" }}>
              <TrendingUp size={13} style={{ color: "var(--color-accent)" }} />
              Live
            </div>
            <h3 className="display mt-2 text-[18px] font-semibold leading-snug tracking-tight text-ink">{spendDashboard.headline}</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-ink-2">
              Always on — not a point-in-time report you have to request. Track diverse spend against goals as contracts
              flow through the Exchange.
            </p>
          </div>
          <div className="grid shrink-0 grid-cols-3 gap-3">
            {spendDashboard.metrics.map((m) => (
              <div key={m.label} className="rounded-chip border border-line bg-canvas/40 px-4 py-3">
                <div className="tnum text-[20px] font-medium leading-none text-ink">{m.value}</div>
                <div className="tnum mt-2 text-[11px] font-medium" style={{ color: "var(--color-gain)" }}>{m.delta}</div>
                <div className="mt-1 text-[11px] leading-tight text-ink-3">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------- capabilities --------------------------- */

function Capabilities() {
  return (
    <section className="mt-16">
      <SectionHead kicker="Why the Market" title="Built to connect — not just to list." />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.04 * i, duration: 0.35 }}
            className="rounded-card border border-line bg-surface p-5"
          >
            <h3 className="display text-[16px] font-semibold tracking-tight text-ink">{c.title}</h3>
            <div className="mt-3 flex items-start gap-2.5">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full" style={{ background: "color-mix(in oklch, var(--color-accent) 18%, transparent)" }}>
                <Check size={11} style={{ color: "var(--color-accent)" }} />
              </span>
              <p className="text-[13.5px] leading-relaxed text-ink">
                <span className="font-medium" style={{ color: "var(--color-accent-ink)" }}>The Market · </span>
                {c.market}
              </p>
            </div>
            <div className="mt-2.5 flex items-start gap-2.5">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full border border-line text-ink-3">
                <span className="h-2 w-2 rounded-full bg-line-strong" />
              </span>
              <p className="text-[13px] leading-relaxed text-ink-3">
                <span className="font-medium text-ink-3">The status quo · </span>
                {c.statusQuo}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ CTA -------------------------------- */

function CTA() {
  return (
    <section className="relative mt-16 overflow-hidden rounded-panel border border-line bg-surface">
      <div className="glow-field pointer-events-none absolute inset-0" />
      <div className="relative flex flex-col items-start gap-6 px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="display text-[24px] font-semibold leading-tight tracking-tight text-ink sm:text-[30px]">
            Join the network that does the connecting.
          </h2>
          <p className="mt-2.5 text-[14px] leading-relaxed text-ink-2">
            Get verified as a certified supplier, or join as a buyer and let the Market bring the shortlist to you.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button className="inline-flex items-center gap-1.5 rounded-field bg-ink px-4 py-2.5 text-[13.5px] font-medium text-canvas transition-transform hover:scale-[1.015] active:scale-[0.99]">
            <BadgeCheck size={16} />
            Get certified
          </button>
          <button className="inline-flex items-center gap-1.5 rounded-field border border-line-strong px-4 py-2.5 text-[13.5px] font-medium text-ink-2 transition-colors hover:text-ink">
            Join as a buyer
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ page ------------------------------- */

export default function Market() {
  return (
    <main className="relative z-10 mx-auto max-w-[1220px] px-5 pb-24 pt-6 sm:px-8 sm:pt-8">
      <Hero />
      <StatsBand />
      <Certification />
      <Directory />
      <Matchmaking />
      <Buyers />
      <Capabilities />
      <CTA />

      <footer className="mt-16 flex flex-col items-center gap-1 text-center">
        <span className="display text-[13px] text-ink-3">American Business Exchange · The Market</span>
        <span className="text-[11px] text-ink-3/70">A working prototype · all figures illustrative</span>
        <span className="mt-1 text-[11px] text-ink-3/70">
          A <span className="display text-ink-2">7/</span> company
        </span>
      </footer>
    </main>
  );
}
