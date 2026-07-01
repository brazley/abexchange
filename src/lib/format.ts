/** Compact currency: 1240000 -> "$1.24M". Kept terse for mono numerals. */
export function money(value: number): string {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 2)}M`;
  }
  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(value % 1_000 === 0 ? 0 : 1)}K`;
  }
  return `$${value}`;
}

export function compact(value: number): string {
  if (value >= 1_000) return `${(value / 1_000).toFixed(value % 1_000 === 0 ? 0 : 1)}K`;
  return `${value}`;
}

/** Days-until helper for deadlines. Negative = overdue. */
export function daysUntil(iso: string): number {
  const now = new Date("2026-07-01T09:00:00");
  const then = new Date(iso);
  return Math.round((then.getTime() - now.getTime()) / 86_400_000);
}

export function deadlineLabel(iso: string): { text: string; urgent: boolean } {
  const d = daysUntil(iso);
  if (d < 0) return { text: "Overdue", urgent: true };
  if (d === 0) return { text: "Due today", urgent: true };
  if (d === 1) return { text: "Due tomorrow", urgent: true };
  if (d <= 4) return { text: `${d} days left`, urgent: true };
  return { text: `${d} days left`, urgent: false };
}

/** Deterministic initials from a full name. */
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
