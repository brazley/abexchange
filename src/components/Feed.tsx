import { motion } from "framer-motion";
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Award,
  Briefcase,
  Sparkles,
  ArrowUpRight,
  MapPin,
  SlidersHorizontal,
} from "lucide-react";
import {
  feed,
  type Post,
  type DealPost,
  type UpdatePost,
  type AwardPost,
  type HiringPost,
  type Author,
  type FactCard,
} from "../data/mock";
import { Avatar, Badge, SectionLabel } from "./primitives";

/* --------------------------- shared -------------------------------- */

function AuthorBlock({ author, timestamp, context }: { author: Author; timestamp: string; context?: string }) {
  const isCompany = author.kind === "company";
  return (
    <div className="flex items-start gap-3">
      <Avatar name={author.name} size={44} tint={author.tint} shape={isCompany ? "square" : "round"} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <span className="display truncate text-[14.5px] font-semibold leading-tight text-ink">{author.name}</span>
        </div>
        <div className="mt-0.5 truncate text-[12px] leading-tight text-ink-3">
          {author.role ? `${author.role} · ${author.company}` : context}
          <span className="text-ink-3/60"> · {timestamp}</span>
        </div>
      </div>
      <button className="grid h-8 w-8 shrink-0 place-items-center rounded-field text-ink-3 transition-colors hover:bg-elevated hover:text-ink-2" aria-label="Save post">
        <Bookmark size={15} />
      </button>
    </div>
  );
}

function TypePill({ label, tone = "plain" }: { label: string; tone?: "plain" | "accent" | "gold" }) {
  const color =
    tone === "accent" ? "var(--color-accent-ink)" : tone === "gold" ? "var(--color-sand)" : "var(--color-ink-3)";
  const border =
    tone === "accent"
      ? "color-mix(in oklch, var(--color-accent) 34%, transparent)"
      : tone === "gold"
        ? "color-mix(in oklch, var(--color-sand) 30%, transparent)"
        : "var(--color-line-strong)";
  return (
    <span
      className="inline-flex items-center rounded-chip border px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.08em]"
      style={{ color, borderColor: border }}
    >
      {label}
    </span>
  );
}

function EngagementRow({ post }: { post: Post }) {
  const items = [
    { icon: ThumbsUp, label: "Endorse", count: post.engagement.endorse },
    { icon: MessageSquare, label: "Comment", count: post.engagement.comment },
    { icon: Share2, label: "Share", count: post.engagement.share },
  ];
  return (
    <div className="mt-4 flex items-center gap-1 border-t border-line pt-3">
      {items.map(({ icon: Icon, label, count }) => (
        <button
          key={label}
          className="group inline-flex items-center gap-1.5 rounded-field px-2.5 py-1.5 text-[12.5px] font-medium text-ink-3 transition-colors hover:bg-elevated hover:text-ink-2"
        >
          <Icon size={14} className="transition-colors group-hover:text-ink-2" />
          <span className="hidden sm:inline">{label}</span>
          <span className="tnum text-ink-3">{count}</span>
        </button>
      ))}
    </div>
  );
}

/* --------------------------- deal ---------------------------------- */

function FactCardTile({ fact }: { fact: FactCard }) {
  // Deliberately not self-animated: the parent card handles entrance, and a
  // whileInView gate here would leave below-fold tiles invisible until scroll.
  return (
    <div
      className="relative flex min-w-[128px] snap-start flex-col justify-between rounded-chip border bg-canvas/50 p-3"
      style={{
        borderColor: fact.accent ? "color-mix(in oklch, var(--color-accent) 30%, transparent)" : "var(--color-line)",
      }}
    >
      {/* the one intelligence hint: a thin accent rule on the lead fact */}
      {fact.accent && (
        <span
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{ background: "color-mix(in oklch, var(--color-accent) 65%, transparent)", borderRadius: "3px 3px 0 0" }}
        />
      )}
      <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-ink-3">{fact.kicker}</span>
      <span
        className="tnum mt-3 text-[15px] font-medium leading-none"
        style={{ color: fact.accent ? "var(--color-accent-ink)" : "var(--color-ink)" }}
      >
        {fact.value}
      </span>
    </div>
  );
}

function DealCard({ post }: { post: DealPost }) {
  return (
    <>
      <AuthorBlock author={post.author} timestamp={post.timestamp} context="Posted an opportunity" />

      <div className="mt-3.5 flex items-center gap-2">
        <TypePill label={post.tag} tone="accent" />
        <span className="text-[11px] text-ink-3">Open call · warm intros prioritized</span>
      </div>

      <h3 className="display mt-2.5 text-[19px] font-semibold leading-snug tracking-tight text-ink">
        {post.headline}
      </h3>
      <p className="mt-2 text-[13.5px] leading-relaxed text-ink-2">{post.pitch}</p>

      {/* TLDR fact carousel — the hero interaction */}
      <div className="-mx-1 mt-4">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-1">
          {post.facts.map((f) => (
            <FactCardTile key={f.kicker} fact={f} />
          ))}
        </div>
      </div>

      {post.aiNote && (
        <div className="mt-3 flex items-start gap-2 text-[12.5px] leading-relaxed" style={{ color: "var(--color-ink-3)" }}>
          <Sparkles size={13} className="mt-0.5 shrink-0" style={{ color: "var(--color-accent)" }} />
          <span>
            <span className="font-medium" style={{ color: "var(--color-accent-ink)" }}>ABE read — </span>
            {post.aiNote}
          </span>
        </div>
      )}

      <div className="mt-4 flex items-center justify-between gap-3">
        <button className="inline-flex items-center gap-1.5 rounded-field bg-ink px-3 py-1.5 text-[12.5px] font-medium text-canvas transition-transform hover:scale-[1.015] active:scale-[0.99]">
          Express interest
        </button>
        <button className="inline-flex items-center gap-1 rounded-field px-2.5 py-1.5 text-[12.5px] font-medium text-ink-3 transition-colors hover:text-ink-2">
          View brief
          <ArrowUpRight size={14} />
        </button>
      </div>

      <EngagementRow post={post} />
    </>
  );
}

/* --------------------------- update -------------------------------- */

function UpdateCard({ post }: { post: UpdatePost }) {
  return (
    <>
      <AuthorBlock author={post.author} timestamp={post.timestamp} context="Shared an update" />
      <p className="mt-4 text-[14.5px] leading-relaxed text-ink" style={{ fontFamily: "var(--font-serif)" }}>
        {post.body}
      </p>
      {post.tags && (
        <div className="mt-3.5 flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      )}
      <EngagementRow post={post} />
    </>
  );
}

/* --------------------------- award --------------------------------- */

function AwardCard({ post }: { post: AwardPost }) {
  return (
    <>
      <AuthorBlock author={post.author} timestamp={post.timestamp} context="Recognition" />
      <div
        className="mt-4 flex items-start gap-3 rounded-card border p-3.5"
        style={{
          borderColor: "color-mix(in oklch, var(--color-sand) 22%, transparent)",
          background: "color-mix(in oklch, var(--color-sand) 5%, transparent)",
        }}
      >
        <span
          className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-chip border"
          style={{ borderColor: "color-mix(in oklch, var(--color-sand) 30%, transparent)", color: "var(--color-sand)" }}
        >
          <Award size={16} />
        </span>
        <div className="min-w-0">
          <TypePill label="Award" tone="gold" />
          <div className="display mt-1.5 text-[15.5px] font-semibold leading-snug text-ink">{post.award}</div>
        </div>
      </div>
      <p className="mt-3 text-[13.5px] leading-relaxed text-ink-2">{post.body}</p>
      <EngagementRow post={post} />
    </>
  );
}

/* --------------------------- hiring -------------------------------- */

function HiringCard({ post }: { post: HiringPost }) {
  return (
    <>
      <AuthorBlock author={post.author} timestamp={post.timestamp} context="Hiring" />
      <p className="mt-4 text-[13.5px] leading-relaxed text-ink-2">{post.body}</p>

      <div className="mt-3.5 flex flex-wrap items-center gap-2 rounded-card border border-line bg-canvas/40 p-3">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-chip border border-line-strong text-ink-2">
          <Briefcase size={15} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="display truncate text-[14px] font-semibold leading-tight text-ink">{post.role}</div>
          <div className="mt-0.5 flex items-center gap-2 text-[12px] text-ink-3">
            <span className="inline-flex items-center gap-1">
              <MapPin size={12} />
              {post.location}
            </span>
            <span className="text-ink-3/60">·</span>
            <span className="tnum">{post.comp}</span>
          </div>
        </div>
        <button className="shrink-0 rounded-field border border-line-strong px-2.5 py-1.5 text-[12.5px] font-medium text-ink-2 transition-colors hover:text-ink">
          Refer someone
        </button>
      </div>

      <EngagementRow post={post} />
    </>
  );
}

/* --------------------------- switch -------------------------------- */

function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 + index * 0.045, duration: 0.4 }}
      className="rounded-card border border-line bg-surface p-5 transition-colors hover:border-line-strong"
    >
      {post.type === "deal" && <DealCard post={post} />}
      {post.type === "update" && <UpdateCard post={post} />}
      {post.type === "award" && <AwardCard post={post} />}
      {post.type === "hiring" && <HiringCard post={post} />}
    </motion.article>
  );
}

export function Feed() {
  return (
    <section>
      <div className="mb-3.5 flex items-center justify-between">
        <div className="flex items-baseline gap-2.5">
          <SectionLabel>The Exchange</SectionLabel>
          <span className="text-[11px] text-ink-3">Deals, updates & signals from your network</span>
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-field border border-line px-2.5 py-1.5 text-[12px] text-ink-2 transition-colors hover:border-line-strong hover:text-ink">
          <SlidersHorizontal size={13} />
          Filter
        </button>
      </div>

      <div className="space-y-3">
        {feed.map((post, i) => (
          <PostCard key={post.id} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
