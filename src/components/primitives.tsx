import type { ReactNode } from "react";
import { initials } from "../lib/format";
import type { Delta } from "../data/mock";

/**
 * Initials avatar — no external image deps.
 * LinkedIn's real convention: people are round, companies are squared.
 */
export function Avatar({
  name,
  size = 40,
  tint = "plain",
  shape = "round",
}: {
  name: string;
  size?: number;
  tint?: "plain" | "accent" | "sand";
  shape?: "round" | "square";
}) {
  const bg =
    tint === "accent"
      ? "color-mix(in oklch, var(--color-accent) 20%, var(--color-elevated))"
      : tint === "sand"
        ? "color-mix(in oklch, var(--color-sand) 14%, var(--color-elevated))"
        : "var(--color-elevated)";
  const fg =
    tint === "accent"
      ? "var(--color-accent-ink)"
      : tint === "sand"
        ? "var(--color-sand)"
        : "var(--color-ink-2)";
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center border border-line font-medium"
      style={{
        width: size,
        height: size,
        background: bg,
        color: fg,
        fontSize: size * 0.36,
        borderRadius: shape === "round" ? "9999px" : "5px",
        fontFamily: shape === "square" ? "var(--font-serif)" : "var(--font-sans)",
      }}
      aria-hidden
    >
      {initials(name)}
    </span>
  );
}

/** Squared tag — slightly rounded rect, never a pill. */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-chip border border-line bg-elevated px-2 py-0.5 text-[11px] font-medium text-ink-2">
      {children}
    </span>
  );
}

/** Week-over-week delta. Green gains, warm-red losses, calm flat. */
export function DeltaPill({ delta, invertColor = false }: { delta: Delta; invertColor?: boolean }) {
  const isGain = invertColor ? delta.direction === "down" : delta.direction === "up";
  const isLoss = invertColor ? delta.direction === "up" : delta.direction === "down";
  const color = isGain ? "var(--color-gain)" : isLoss ? "var(--color-loss)" : "var(--color-ink-3)";
  const arrow = delta.direction === "up" ? "↑" : delta.direction === "down" ? "↓" : "→";
  return (
    <span className="tnum inline-flex items-center gap-0.5 text-[12px] font-medium" style={{ color }}>
      <span aria-hidden>{arrow}</span>
      {delta.value}
      {delta.direction !== "flat" && "%"}
    </span>
  );
}

/** Bare inline sparkline drawn from a normalized series. */
export function Sparkline({
  data,
  width = 88,
  height = 28,
  stroke = "var(--color-accent)",
}: {
  data: number[];
  width?: number;
  height?: number;
  stroke?: string;
}) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const span = max - min || 1;
  const step = width / (data.length - 1);
  const pts = data.map((d, i) => {
    const x = i * step;
    const y = height - ((d - min) / span) * (height - 4) - 2;
    return [x, y] as const;
  });
  const line = pts.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;
  const gid = `sg-${Math.round(pts[0][1])}-${data.length}-${Math.round(max)}`;
  return (
    <svg width={width} height={height} className="overflow-visible" aria-hidden>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.2" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${gid})`} />
      <path d={line} fill="none" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="1.8" fill={stroke} />
    </svg>
  );
}

/** Editorial section header — small serif kicker, newspaper-flavored. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return <h2 className="kicker">{children}</h2>;
}
