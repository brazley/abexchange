/* ------------------------------------------------------------------ *
   American Business Exchange — Network
   LinkedIn-style professional graph. All figures illustrative.
 * ------------------------------------------------------------------ */

export type NetStat = { id: string; value: string; label: string; delta?: string };

export const netStats: NetStat[] = [
  { id: "connections", value: "2,940", label: "Connections", delta: "+54 this week" },
  { id: "views", value: "318", label: "Profile views", delta: "+22%" },
  { id: "invites", value: "4", label: "Pending invitations" },
  { id: "appearances", value: "1,120", label: "Search appearances", delta: "+8%" },
];

export type Person = {
  id: string;
  name: string;
  role: string;
  company: string;
  tint: "plain" | "accent" | "sand";
  mutual: number;
  note?: string;
};

export const invitations: Person[] = [
  { id: "iv1", name: "Priya Nair", role: "Founder & CEO", company: "Halcyon Robotics", tint: "accent", mutual: 14, note: "Building an ecosystem team — wants to connect." },
  { id: "iv2", name: "Marcus Reyes", role: "VP Strategy", company: "Atlas Financial", tint: "sand", mutual: 9 },
  { id: "iv3", name: "Sofia Mendez", role: "Co-founder", company: "Cobalt & Rowe", tint: "sand", mutual: 6, note: "Met at the Q2 partnerships summit." },
];

export const peopleYouMayKnow: Person[] = [
  { id: "p1", name: "Elena Ford", role: "Head of Revenue", company: "Veredge Systems", tint: "plain", mutual: 21 },
  { id: "p2", name: "Theo Blackwell", role: "Design Director", company: "Praxis Design Co", tint: "sand", mutual: 12 },
  { id: "p3", name: "Grace Lin", role: "Partner", company: "Ironwood Capital", tint: "accent", mutual: 33 },
  { id: "p4", name: "Daniel Osei", role: "CTO", company: "Meridian Data Group", tint: "accent", mutual: 8 },
  { id: "p5", name: "Nadia Klein", role: "Managing Director", company: "Cobalt & Rowe", tint: "plain", mutual: 17 },
  { id: "p6", name: "Marcus Vaughn", role: "Head of Partnerships", company: "Lumen Health", tint: "plain", mutual: 5 },
  { id: "p7", name: "Aisha Bello", role: "SVP Operations", company: "Rivera Logistics", tint: "sand", mutual: 11 },
  { id: "p8", name: "Jonah Pierce", role: "Founder", company: "Ironclad Security", tint: "plain", mutual: 4 },
  { id: "p9", name: "Lena Ortiz", role: "VP Product", company: "Delta Health Solutions", tint: "accent", mutual: 19 },
  { id: "p10", name: "Samuel Reyes", role: "Principal", company: "Summit Facilities", tint: "sand", mutual: 7 },
];

export type Company = { id: string; name: string; tint: "plain" | "accent" | "sand"; sector: string; followers: string };

export const companiesToFollow: Company[] = [
  { id: "c1", name: "Northwind Labs", tint: "accent", sector: "AI infra", followers: "48K" },
  { id: "c2", name: "Atlas Financial", tint: "plain", sector: "FinTech", followers: "112K" },
  { id: "c3", name: "Ironwood Capital", tint: "plain", sector: "Venture", followers: "31K" },
  { id: "c4", name: "Halcyon Robotics", tint: "accent", sector: "Robotics", followers: "27K" },
  { id: "c5", name: "Veredge Systems", tint: "sand", sector: "SaaS", followers: "19K" },
  { id: "c6", name: "Lumen Health", tint: "accent", sector: "HealthTech", followers: "22K" },
];

export const networkGlance = {
  sectors: [
    { label: "Financial services", pct: 28 },
    { label: "Technology", pct: 24 },
    { label: "Healthcare", pct: 16 },
    { label: "Venture & PE", pct: 14 },
    { label: "Logistics", pct: 9 },
  ],
  regions: [
    { label: "West", pct: 34 },
    { label: "Northeast", pct: 29 },
    { label: "South", pct: 22 },
    { label: "Midwest", pct: 15 },
  ],
};
