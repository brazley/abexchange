/* ------------------------------------------------------------------ *
   American Business Exchange — The Market
   Certified-business network. Takes the incumbent minority-supplier
   directory as the floor and one-ups it: proactive explainable AI
   matching, all five diverse categories, a portable verified credential,
   live opportunity flow, and always-on spend dashboards.
   All figures illustrative.
 * ------------------------------------------------------------------ */

export type CertKey = "minority" | "women" | "veteran" | "lgbtq" | "disability";

export const certMeta: Record<
  CertKey,
  { label: string; short: string; color: string; gradient?: boolean }
> = {
  minority: { label: "Minority-owned", short: "MBE", color: "#C6A15B" },
  women: { label: "Women-owned", short: "WBE", color: "#CE7FA6" },
  veteran: { label: "Veteran-owned", short: "VBE", color: "#6E93C7" },
  lgbtq: { label: "LGBTQ+-owned", short: "LGBTBE", color: "#9A7FD1", gradient: true },
  disability: { label: "Disability-owned", short: "DOBE", color: "#5FA79C" },
};

export const certOrder: CertKey[] = ["minority", "women", "veteran", "lgbtq", "disability"];

export type Stat = { id: string; value: string; label: string; sub?: string; accent?: boolean };

export const stats: Stat[] = [
  { id: "certified", value: "18,400", label: "Certified businesses", sub: "+22% YoY" },
  { id: "buyers", value: "2,300", label: "Buyer members", sub: "Fortune 1000, gov & health" },
  { id: "matches", value: "4,120", label: "Matches made this quarter", accent: true },
  { id: "value", value: "$1.8B", label: "Contract value flowed", sub: "trailing 12 months" },
  { id: "speed", value: "9 days", label: "Avg. to first match", sub: "not weeks" },
];

export type Supplier = {
  id: string;
  name: string;
  tint: "plain" | "accent" | "sand";
  certs: CertKey[];
  capabilities: string[];
  region: string;
  performance: string;
  network: number;
  abeRead: string;
};

export const suppliers: Supplier[] = [
  {
    id: "sup1",
    name: "Meridian Data Group",
    tint: "accent",
    certs: ["minority"],
    capabilities: ["Data engineering", "Cloud", "Analytics"],
    region: "Atlanta, GA",
    performance: "98% on-time delivery",
    network: 6,
    abeRead: "Direct match for enterprise data-platform builds; two of your references sit on their panel.",
  },
  {
    id: "sup2",
    name: "Rivera Logistics Partners",
    tint: "sand",
    certs: ["women", "minority"],
    capabilities: ["Freight", "3PL", "Warehousing"],
    region: "El Paso, TX",
    performance: "$40M freight under management",
    network: 4,
    abeRead: "Dual-certified and priced below your incumbent on southern-corridor lanes.",
  },
  {
    id: "sup3",
    name: "Ironclad Security",
    tint: "plain",
    certs: ["veteran"],
    capabilities: ["Cybersecurity", "SOC", "Compliance"],
    region: "Norfolk, VA",
    performance: "SOC 2 Type II auditors",
    network: 3,
    abeRead: "Cleared team; strong fit for your regulated-data mandate.",
  },
  {
    id: "sup4",
    name: "Brightline Creative",
    tint: "plain",
    certs: ["lgbtq"],
    capabilities: ["Brand", "Web", "Content"],
    region: "Portland, OR",
    performance: "120 product launches",
    network: 5,
    abeRead: "Portfolio overlaps your product surfaces; senior team, async-friendly.",
  },
  {
    id: "sup5",
    name: "Access Fabrication Co",
    tint: "plain",
    certs: ["disability"],
    capabilities: ["Precision machining", "Assembly"],
    region: "Toledo, OH",
    performance: "ISO 9001 certified",
    network: 2,
    abeRead: "Capacity available this quarter; meets your onshore-sourcing target.",
  },
  {
    id: "sup6",
    name: "Nakamura Advisory",
    tint: "accent",
    certs: ["minority"],
    capabilities: ["Management consulting", "GTM"],
    region: "San Jose, CA",
    performance: "45 active engagements",
    network: 7,
    abeRead: "Deep GTM bench; lighter on hands-on build than Meridian.",
  },
  {
    id: "sup7",
    name: "Summit Facilities Group",
    tint: "sand",
    certs: ["women"],
    capabilities: ["Facilities", "Janitorial", "MRO"],
    region: "Denver, CO",
    performance: "3.2M sq ft managed",
    network: 3,
    abeRead: "Regional density matches your Mountain-West footprint.",
  },
  {
    id: "sup8",
    name: "Delta Health Solutions",
    tint: "accent",
    certs: ["minority", "women"],
    capabilities: ["Healthcare IT", "Telehealth"],
    region: "Chicago, IL",
    performance: "30 hospital deployments",
    network: 5,
    abeRead: "Dual-certified with deep healthcare-data overlap for your diversity mandate.",
  },
  {
    id: "sup9",
    name: "Vanguard Electrical",
    tint: "plain",
    certs: ["veteran"],
    capabilities: ["Electrical", "Solar", "Grid"],
    region: "Phoenix, AZ",
    performance: "500+ commercial installs",
    network: 2,
    abeRead: "Bonded and available; strong for your Sun Belt facilities program.",
  },
  {
    id: "sup10",
    name: "Cobalt Talent Partners",
    tint: "sand",
    certs: ["lgbtq", "women"],
    capabilities: ["Staffing", "RPO"],
    region: "Boston, MA",
    performance: "2,000 placements / yr",
    network: 4,
    abeRead: "Fills your hardest reqs fastest; two clients in common.",
  },
];

/* ---- AI matchmaking: buyer mandate → ranked, explainable matches ---- */

export type RankedMatch = { supplierId: string; name: string; fit: number; certs: CertKey[]; read: string };

export const matchmaking = {
  mandate: {
    buyer: "Atlas Financial",
    title: "Enterprise data-platform build partner",
    detail: "$1.2M · 6 months · onsite New York · certified supplier required",
    posted: "Live from the Exchange · 2h ago",
  },
  ranked: [
    {
      supplierId: "sup1",
      name: "Meridian Data Group",
      fit: 96,
      certs: ["minority"] as CertKey[],
      read: "Direct match on data-platform builds; two references on Atlas's vendor panel.",
    },
    {
      supplierId: "sup8",
      name: "Delta Health Solutions",
      fit: 88,
      certs: ["minority", "women"] as CertKey[],
      read: "Deep data overlap; dual certification satisfies the diversity mandate cleanly.",
    },
    {
      supplierId: "sup6",
      name: "Nakamura Advisory",
      fit: 81,
      certs: ["minority"] as CertKey[],
      read: "Strong architecture + GTM; would sub-contract the hands-on build.",
    },
  ] as RankedMatch[],
};

export const buyers = [
  "Atlas Financial",
  "Northwind Labs",
  "Lumen Health",
  "Ironwood Capital",
  "Veredge Systems",
  "Cobalt & Rowe",
  "Praxis Group",
  "Halcyon Robotics",
];

export const spendDashboard = {
  headline: "Always-on diversity-spend dashboards for every buyer member",
  metrics: [
    { label: "Diverse spend, YTD", value: "$418M", delta: "+12%" },
    { label: "Of addressable spend", value: "31%", delta: "+4 pts" },
    { label: "Certified suppliers engaged", value: "1,240", delta: "+180" },
  ],
};

export type Capability = { id: string; title: string; market: string; statusQuo: string };

export const capabilities: Capability[] = [
  {
    id: "cap1",
    title: "Matchmaking",
    market: "Proactive, ranked, explainable matches pushed to buyers and suppliers alike.",
    statusQuo: "Search a static directory, or request a match report and wait.",
  },
  {
    id: "cap2",
    title: "Inclusion",
    market: "One network for all five diverse categories — minority, women, veteran, LGBTQ+, disability.",
    statusQuo: "Minority-owned businesses only.",
  },
  {
    id: "cap3",
    title: "Credential",
    market: "Portable verified credential in days, self-service, cross-recognized by every buyer.",
    statusQuo: "Weeks-long certification and manual, per-program renewals.",
  },
  {
    id: "cap4",
    title: "Visibility",
    market: "Always-on diversity-spend dashboards, wired to live contract flow.",
    statusQuo: "Point-in-time reports, generated on request.",
  },
];
