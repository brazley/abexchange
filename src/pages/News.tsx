import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { Img } from "../components/Img";
import {
  feature,
  secondary,
  mosaic,
  carousels,
  listSections,
  newsMeta,
  type Article,
} from "../data/news";

/* ----------------------------- atoms ------------------------------- */

function Kicker({ children, tone = "accent" }: { children: React.ReactNode; tone?: "accent" | "plain" }) {
  return (
    <span
      className="text-[10.5px] font-semibold uppercase tracking-[0.12em]"
      style={{ color: tone === "accent" ? "var(--color-accent-ink)" : "var(--color-ink-3)" }}
    >
      {children}
    </span>
  );
}

function Meta({ a, showSource = true }: { a: Article; showSource?: boolean }) {
  return (
    <div className="flex items-center gap-2 text-[11.5px] text-ink-3">
      {showSource && <span className="font-medium text-ink-2">{a.source}</span>}
      {showSource && <span className="text-ink-3/50">·</span>}
      <span>{a.timestamp}</span>
      <span className="text-ink-3/50">·</span>
      <span className="inline-flex items-center gap-1">
        <Clock size={11} />
        {a.readMin} min
      </span>
    </div>
  );
}

function SectionHeader({ title, accent }: { title: string; accent?: boolean }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="h-3.5 w-[3px]" style={{ background: accent ? "var(--color-accent)" : "var(--color-line-strong)", borderRadius: 1 }} />
      <h2 className="display text-[17px] font-semibold tracking-tight text-ink">{title}</h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

/* --------------------------- feature ------------------------------- */

function Feature({ a }: { a: Article }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-panel border border-line"
    >
      {/* taller canvas on mobile so the full serif headline has room to sit
          over the image without clipping; cinematic 16/10 from sm up */}
      <Img src={a.img} alt={a.alt} ratioClassName="aspect-[4/5] sm:aspect-[16/10]" priority className="h-full w-full" />
      {/* legibility scrim — deliberately tall/strong so the overlaid serif
          stays readable even when a narrow crop pushes text over bright sky */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(10,10,10,0.97) 0%, rgba(10,10,10,0.88) 30%, rgba(10,10,10,0.6) 52%, rgba(10,10,10,0.28) 72%, rgba(10,10,10,0) 100%)",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <Kicker>{a.category}</Kicker>
        <h1 className="display mt-2.5 max-w-3xl text-[26px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-[38px]">
          {a.headline}
        </h1>
        {a.dek && <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-2 sm:text-[15px]">{a.dek}</p>}
        <div className="mt-4 flex items-center gap-2 text-[12.5px] text-ink-2">
          {a.byline && <span>By <span className="text-ink">{a.byline}</span></span>}
          <span className="text-ink-3/50">·</span>
          <span className="text-ink-3">{a.source}</span>
          <span className="text-ink-3/50">·</span>
          <span className="inline-flex items-center gap-1 text-ink-3"><Clock size={12} />{a.readMin} min</span>
        </div>
      </div>
    </motion.article>
  );
}

/* --------------- secondary (compact, image left) ------------------ */

function SecondaryCard({ a }: { a: Article }) {
  return (
    <article className="group flex gap-4 rounded-card border border-line bg-surface p-3 transition-colors hover:border-line-strong">
      <Img src={a.img} alt={a.alt} ratio="1 / 1" className="w-24 shrink-0 rounded-chip sm:w-28" />
      <div className="min-w-0 flex-1 py-0.5">
        <Kicker tone="plain">{a.category}</Kicker>
        <h3 className="display mt-1.5 text-[15.5px] font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-white">
          {a.headline}
        </h3>
        <div className="mt-2">
          <Meta a={a} />
        </div>
      </div>
    </article>
  );
}

/* ---------------- mosaic (image top, stacked) --------------------- */

function MosaicCard({ a, index }: { a: Article; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 + index * 0.06, duration: 0.4 }}
      className="group overflow-hidden rounded-card border border-line bg-surface transition-colors hover:border-line-strong"
    >
      <Img src={a.img} alt={a.alt} ratio={a.ratio} />
      <div className="p-4">
        <Kicker>{a.category}</Kicker>
        <h3 className="display mt-1.5 text-[16px] font-semibold leading-snug tracking-tight text-ink">{a.headline}</h3>
        <div className="mt-2.5">
          <Meta a={a} />
        </div>
      </div>
    </motion.article>
  );
}

/* ------------------------- carousel ------------------------------- */

function CarouselCard({ a }: { a: Article }) {
  return (
    <article className="group w-[248px] shrink-0 snap-start overflow-hidden rounded-card border border-line bg-surface transition-colors hover:border-line-strong sm:w-[268px]">
      <Img src={a.img} alt={a.alt} ratio="3 / 2" />
      <div className="p-3.5">
        <Kicker tone="plain">{a.category}</Kicker>
        <h3 className="display mt-1.5 line-clamp-3 text-[14.5px] font-semibold leading-snug tracking-tight text-ink">{a.headline}</h3>
        <div className="mt-2.5">
          <Meta a={a} />
        </div>
      </div>
    </article>
  );
}

function CarouselRow({ title, items }: { title: string; items: Article[] }) {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-3.5 w-[3px]" style={{ background: "var(--color-accent)", borderRadius: 1 }} />
          <h2 className="display text-[17px] font-semibold tracking-tight text-ink">{title}</h2>
        </div>
        <button className="inline-flex items-center gap-1 text-[12.5px] font-medium text-ink-3 transition-colors hover:text-ink-2">
          See all
          <ArrowRight size={13} />
        </button>
      </div>
      <div className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-1">
        {items.map((a) => (
          <CarouselCard key={a.id} a={a} />
        ))}
      </div>
    </section>
  );
}

/* ----------------------- list section ----------------------------- */

function ListRow({ a }: { a: Article }) {
  return (
    <article className="group flex items-center gap-3.5 border-b border-line py-3.5 last:border-b-0">
      <div className="min-w-0 flex-1">
        <Kicker tone="plain">{a.category}</Kicker>
        <h3 className="display mt-1 text-[14.5px] font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-white">
          {a.headline}
        </h3>
        <div className="mt-1.5">
          <Meta a={a} />
        </div>
      </div>
      <Img src={a.img} alt={a.alt} ratio="1 / 1" className="w-16 shrink-0 rounded-chip sm:w-[68px]" />
    </article>
  );
}

/* ------------------------------ page ------------------------------ */

export default function News() {
  return (
    <main className="relative z-10 mx-auto max-w-[1220px] px-5 pb-24 pt-6 sm:px-8 sm:pt-8">
      {/* Masthead */}
      <header className="mb-6 flex items-end justify-between border-b border-line pb-4">
        <div>
          <div className="kicker" style={{ color: "var(--color-ink-3)" }}>{newsMeta.desk}</div>
          <h1 className="display mt-1.5 text-[24px] font-semibold tracking-tight text-ink sm:text-[28px]">News</h1>
        </div>
        <span className="tnum hidden text-[12px] text-ink-3 sm:block">{newsMeta.editionLabel}</span>
      </header>

      {/* Top: feature (left) + secondary stack (right) */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.62fr_1fr]">
        <Feature a={feature} />
        <div className="flex flex-col gap-4">
          {secondary.map((a) => (
            <SecondaryCard key={a.id} a={a} />
          ))}
          {/* the third slot of the right rail: a lead mosaic card, keeps the
              column balanced against the tall feature */}
          <MosaicCard a={mosaic[0]} index={0} />
        </div>
      </div>

      {/* Secondary mosaic row */}
      <div className="mt-10">
        <SectionHeader title="More Top Stories" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {mosaic.slice(1).map((a, i) => (
            <MosaicCard key={a.id} a={a} index={i} />
          ))}
        </div>
      </div>

      {/* Carousels */}
      <div className="mt-12 space-y-12">
        {carousels.map((c) => (
          <CarouselRow key={c.id} title={c.title} items={c.items} />
        ))}
      </div>

      {/* Category list sections */}
      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2">
        {listSections.map((s) => (
          <section key={s.id}>
            <SectionHeader title={s.category} accent />
            <div>
              {s.items.map((a) => (
                <ListRow key={a.id} a={a} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-16 flex flex-col items-center gap-1 text-center">
        <span className="display text-[13px] text-ink-3">American Business Exchange · News</span>
        <span className="text-[11px] text-ink-3/70">A working prototype · imagery via Unsplash · all content illustrative</span>
      </footer>
    </main>
  );
}
