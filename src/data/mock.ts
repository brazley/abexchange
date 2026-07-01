/* ------------------------------------------------------------------ *
   American Business Exchange — mock data
   Placeholder editorial B2B exchange. Swap BRAND to drop in the real
   name later; it is the single source for the wordmark.
 * ------------------------------------------------------------------ */

export const BRAND = "American Business Exchange";
export const BRAND_SHORT = "ABE";

export const user = {
  name: "Carl Okafor",
  role: "Principal, Partnerships",
  greeting: "Carl",
};

export type Delta = { value: number; direction: "up" | "down" | "flat" };

export type Metric = {
  id: string;
  label: string;
  value: string;
  delta: Delta;
  note: string;
  spark: number[];
};

export const metrics: Metric[] = [
  {
    id: "projects",
    label: "Active engagements",
    value: "18",
    delta: { value: 2, direction: "up" },
    note: "2 kicked off this week",
    spark: [11, 12, 12, 14, 13, 15, 16, 18],
  },
  {
    id: "pipeline",
    label: "Pipeline value",
    value: "$4.82M",
    delta: { value: 12.4, direction: "up" },
    note: "vs. $4.29M last week",
    spark: [3.1, 3.4, 3.3, 3.8, 4.0, 4.2, 4.5, 4.82],
  },
  {
    id: "network",
    label: "Network",
    value: "2,940",
    delta: { value: 1.9, direction: "up" },
    note: "54 new introductions",
    spark: [2610, 2680, 2710, 2760, 2800, 2850, 2890, 2940],
  },
  {
    id: "winrate",
    label: "Win rate",
    value: "68%",
    delta: { value: 3, direction: "down" },
    note: "17 of 25 this quarter",
    spark: [74, 73, 72, 71, 70, 71, 69, 68],
  },
];

/* ---------------------- Unified feed model ------------------------ */

export type Author = {
  name: string;
  role: string; // "VP Strategy" or "" for pure company posts
  company: string;
  kind: "person" | "company";
  tint: "plain" | "accent" | "sand";
};

export type FactCard = {
  kicker: string; // "Budget", "Timeline"…
  value: string; // "$285K/yr"
  accent?: boolean; // one card carries the quiet intelligence hint
};

export type Engagement = { endorse: number; comment: number; share: number };

type Base = {
  id: string;
  author: Author;
  timestamp: string;
  engagement: Engagement;
};

export type DealPost = Base & {
  type: "deal";
  tag: "RFP" | "Deal" | "Retainer" | "Mandate";
  headline: string;
  pitch: string;
  facts: FactCard[];
  aiNote?: string;
};

export type UpdatePost = Base & {
  type: "update";
  body: string;
  tags?: string[];
};

export type AwardPost = Base & {
  type: "award";
  award: string;
  body: string;
};

export type HiringPost = Base & {
  type: "hiring";
  role: string;
  location: string;
  comp: string;
  body: string;
};

export type Post = DealPost | UpdatePost | AwardPost | HiringPost;

export const feed: Post[] = [
  {
    id: "p1",
    type: "deal",
    tag: "Mandate",
    author: { name: "Northwind Labs", role: "", company: "Northwind Labs", kind: "company", tint: "accent" },
    timestamp: "2h",
    headline: "Seeking a VP of Platform Partnerships to own our infrastructure GTM",
    pitch:
      "Post-Series C and scaling fast. We need an operator who has built infra partner ecosystems from zero and can carry a number. Warm intros through this network move to the front of the line.",
    facts: [
      { kicker: "Budget", value: "$285K/yr", accent: true },
      { kicker: "Equity", value: "0.25–0.5%" },
      { kicker: "Stage", value: "Series C" },
      { kicker: "Timeline", value: "Immediate" },
      { kicker: "Deadline", value: "2 days" },
      { kicker: "Sector", value: "AI infra" },
      { kicker: "In network", value: "6 people" },
    ],
    aiNote: "Strong fit — your infra work at Halcyon maps directly to their GTM gap.",
    engagement: { endorse: 48, comment: 12, share: 7 },
  },
  {
    id: "p2",
    type: "update",
    author: { name: "Marcus Reyes", role: "VP Strategy", company: "Atlas Financial", kind: "person", tint: "sand" },
    timestamp: "5h",
    body:
      "We just moved our enterprise data-platform build to contract. Thrilled to be partnering with three vendors I first met through this exchange — proof that the right introduction is worth more than a hundred cold emails.",
    tags: ["Enterprise", "Data"],
    engagement: { endorse: 132, comment: 24, share: 9 },
  },
  {
    id: "p3",
    type: "deal",
    tag: "RFP",
    author: { name: "Atlas Financial", role: "", company: "Atlas Financial", kind: "company", tint: "plain" },
    timestamp: "1d",
    headline: "RFP open: enterprise data platform — build partner",
    pitch:
      "Six-month engagement to architect and deliver the next generation of our internal data platform. Onsite presence in New York preferred. Shortlist closes end of next week.",
    facts: [
      { kicker: "Budget", value: "$1.2M", accent: true },
      { kicker: "Type", value: "RFP" },
      { kicker: "Timeline", value: "6 months" },
      { kicker: "Deadline", value: "7 days" },
      { kicker: "Location", value: "New York" },
      { kicker: "Sector", value: "FinTech" },
      { kicker: "In network", value: "3 people" },
    ],
    aiNote: "Two of your references already sit on their vendor panel.",
    engagement: { endorse: 61, comment: 18, share: 14 },
  },
  {
    id: "p4",
    type: "award",
    author: { name: "Veredge Systems", role: "", company: "Veredge Systems", kind: "company", tint: "plain" },
    timestamp: "1d",
    award: "Deloitte Technology Fast 500",
    body:
      "Veredge has been named to the 2026 Deloitte Technology Fast 500 at #142 — up 60 places year over year. Grateful to the partners and customers who scaled with us.",
    engagement: { endorse: 214, comment: 31, share: 22 },
  },
  {
    id: "p5",
    type: "hiring",
    author: { name: "Lumen Health", role: "", company: "Lumen Health", kind: "company", tint: "accent" },
    timestamp: "2d",
    role: "Fractional Chief Growth Officer",
    location: "Boston · Remote",
    comp: "$18K/mo",
    body:
      "We're bringing on a fractional CGO to own commercial strategy through our Series B. Two days a week, high leverage, direct line to the founders.",
    engagement: { endorse: 37, comment: 8, share: 5 },
  },
  {
    id: "p6",
    type: "update",
    author: { name: "Priya Nair", role: "Founder & CEO", company: "Halcyon Robotics", kind: "person", tint: "accent" },
    timestamp: "2d",
    body:
      "Closed our Series B extension this morning. The next chapter is ecosystem — we're opening a partnerships track across North America and I'd rather build it with people I already trust. Reach out.",
    tags: ["Series B", "Robotics"],
    engagement: { endorse: 308, comment: 46, share: 19 },
  },
  {
    id: "p7",
    type: "deal",
    tag: "Retainer",
    author: { name: "Praxis Design Co", role: "", company: "Praxis Design Co", kind: "company", tint: "sand" },
    timestamp: "3d",
    headline: "Design systems retainer open for Q3",
    pitch:
      "Ongoing partner to steward and extend our design system across four product surfaces. Async-friendly, senior-only, long horizon. We reward people who leave the system better than they found it.",
    facts: [
      { kicker: "Budget", value: "$96K/6mo", accent: true },
      { kicker: "Type", value: "Retainer" },
      { kicker: "Start", value: "6 weeks" },
      { kicker: "Deadline", value: "20 days" },
      { kicker: "Mode", value: "Remote" },
      { kicker: "In network", value: "5 people" },
    ],
    engagement: { endorse: 29, comment: 6, share: 3 },
  },
  {
    id: "p8",
    type: "award",
    author: { name: "Sofia Mendez", role: "Co-founder", company: "Cobalt & Rowe", kind: "person", tint: "sand" },
    timestamp: "4d",
    award: "Forbes 30 Under 30 — Enterprise Tech",
    body:
      "Humbled to be named to this year's Forbes 30 Under 30 in Enterprise Tech. This belongs to a team that outworks everyone I know. Onward.",
    engagement: { endorse: 421, comment: 58, share: 27 },
  },
  {
    id: "p9",
    type: "hiring",
    author: { name: "Ironwood Capital", role: "", company: "Ironwood Capital", kind: "company", tint: "plain" },
    timestamp: "5d",
    role: "Director of Ecosystem",
    location: "Menlo Park, CA",
    comp: "$210K + carry",
    body:
      "Building the platform team out. Looking for someone who can turn a portfolio of 60 companies into a network that compounds. Investing background not required — relationship instinct is.",
    engagement: { endorse: 74, comment: 11, share: 8 },
  },
];

/* ---------------------- Sidebar rail data ------------------------- */

export type Deadline = {
  id: string;
  label: string;
  company: string;
  due: string; // ISO
  kind: "reply" | "interview" | "proposal" | "renewal";
};

export const deadlines: Deadline[] = [
  { id: "d1", label: "Reply to shortlist", company: "Northwind Labs", due: "2026-07-04", kind: "reply" },
  { id: "d2", label: "Panel interview", company: "Atlas Financial", due: "2026-07-02", kind: "interview" },
  { id: "d3", label: "Submit proposal", company: "Lumen Health", due: "2026-07-11", kind: "proposal" },
  { id: "d4", label: "Retainer renewal", company: "Praxis Design Co", due: "2026-07-14", kind: "renewal" },
];

export const brief = {
  since: "Tuesday",
  lines: [
    { text: "Pipeline value crossed $4.8M — up $530K, led by the Atlas build partnership moving to contract.", tone: "gain" as const },
    { text: "Northwind Labs moved you to their shortlist; they expect a reply by Saturday.", tone: "neutral" as const },
    { text: "Win rate slipped 3 points — two advisory deals stalled in legal. Worth a nudge.", tone: "loss" as const },
  ],
  actions: ["Reply to Northwind", "Prep Atlas panel", "Nudge stalled deals"],
};

export const insights = {
  month: "July",
  stats: [
    { label: "Replies sent", value: "31", delta: "+8" },
    { label: "Intros made", value: "12", delta: "+3" },
    { label: "Meetings booked", value: "9", delta: "+2" },
  ],
  headline: "Your response time dropped to 4.2h — the fastest in your peer group.",
};

export const quickActions = [
  { id: "q1", label: "Post an opportunity", hint: "Share a role, RFP, or deal" },
  { id: "q2", label: "Request an intro", hint: "Warm path to a company" },
  { id: "q3", label: "Draft with AI", hint: "Outreach, briefs, replies" },
];
