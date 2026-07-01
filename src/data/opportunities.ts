/* ------------------------------------------------------------------ *
   American Business Exchange — Opportunities
   The full deal & RFP marketplace behind the Exchange feed.
   All figures illustrative.
 * ------------------------------------------------------------------ */

export type OppType = "RFP" | "Deal" | "Mandate" | "Retainer" | "Advisory";

export type Fact = { kicker: string; value: string; accent?: boolean };

export type Opportunity = {
  id: string;
  type: OppType;
  company: string;
  tint: "plain" | "accent" | "sand";
  headline: string;
  pitch: string;
  facts: Fact[];
  abeRead: string;
  sector: string;
  region: string;
  posted: string;
  matched?: boolean;
  fit?: number;
};

export const opportunities: Opportunity[] = [
  {
    id: "op1",
    type: "Mandate",
    company: "Northwind Labs",
    tint: "accent",
    headline: "VP of Platform Partnerships to own our infrastructure GTM",
    pitch: "Post-Series C, scaling fast. Operator who has built infra partner ecosystems from zero and can carry a number.",
    facts: [
      { kicker: "Budget", value: "$285K/yr", accent: true },
      { kicker: "Equity", value: "0.25–0.5%" },
      { kicker: "Stage", value: "Series C" },
      { kicker: "Timeline", value: "Immediate" },
      { kicker: "Deadline", value: "2 days" },
      { kicker: "In network", value: "6 people" },
    ],
    abeRead: "Your infra work at Halcyon maps directly to their GTM gap.",
    sector: "AI infra",
    region: "San Francisco, CA",
    posted: "2h ago",
    matched: true,
    fit: 96,
  },
  {
    id: "op2",
    type: "RFP",
    company: "Atlas Financial",
    tint: "plain",
    headline: "Enterprise data-platform build partner",
    pitch: "Six-month engagement to architect and deliver our next-generation internal data platform. Onsite New York preferred.",
    facts: [
      { kicker: "Budget", value: "$1.2M", accent: true },
      { kicker: "Type", value: "RFP" },
      { kicker: "Timeline", value: "6 months" },
      { kicker: "Deadline", value: "7 days" },
      { kicker: "Location", value: "New York" },
      { kicker: "In network", value: "3 people" },
    ],
    abeRead: "Two of your references already sit on their vendor panel.",
    sector: "FinTech",
    region: "New York, NY",
    posted: "1d ago",
    matched: true,
    fit: 91,
  },
  {
    id: "op3",
    type: "Deal",
    company: "Lumen Health",
    tint: "accent",
    headline: "Fractional Chief Growth Officer through Series B",
    pitch: "Two days a week, high leverage, direct line to the founders. Own commercial strategy end to end.",
    facts: [
      { kicker: "Budget", value: "$18K/mo", accent: true },
      { kicker: "Type", value: "Fractional" },
      { kicker: "Commit", value: "2 days/wk" },
      { kicker: "Deadline", value: "4 days" },
      { kicker: "Sector", value: "HealthTech" },
      { kicker: "In network", value: "4 people" },
    ],
    abeRead: "Low competition and closing soon — worth a same-day reply.",
    sector: "HealthTech",
    region: "Boston, MA",
    posted: "3h ago",
    matched: true,
    fit: 88,
  },
  {
    id: "op4",
    type: "Retainer",
    company: "Praxis Design Co",
    tint: "sand",
    headline: "Design systems retainer for Q3",
    pitch: "Ongoing partner to steward and extend our design system across four product surfaces. Senior-only, async-friendly.",
    facts: [
      { kicker: "Budget", value: "$96K/6mo", accent: true },
      { kicker: "Type", value: "Retainer" },
      { kicker: "Start", value: "6 weeks" },
      { kicker: "Deadline", value: "20 days" },
      { kicker: "Mode", value: "Remote" },
      { kicker: "In network", value: "5 people" },
    ],
    abeRead: "Portfolio overlaps your product surfaces; long horizon suits you.",
    sector: "Agency",
    region: "Remote",
    posted: "1 week ago",
  },
  {
    id: "op5",
    type: "Mandate",
    company: "Ironwood Capital",
    tint: "plain",
    headline: "Director of Ecosystem for the platform team",
    pitch: "Turn a portfolio of 60 companies into a network that compounds. Relationship instinct over investing background.",
    facts: [
      { kicker: "Budget", value: "$210K", accent: true },
      { kicker: "Upside", value: "+ carry" },
      { kicker: "Stage", value: "Growth" },
      { kicker: "Deadline", value: "30 days" },
      { kicker: "Location", value: "Menlo Park" },
      { kicker: "In network", value: "8 people" },
    ],
    abeRead: "Strongest network overlap on the board — 8 warm paths in.",
    sector: "Venture",
    region: "Menlo Park, CA",
    posted: "6d ago",
  },
  {
    id: "op6",
    type: "Deal",
    company: "Veredge Systems",
    tint: "plain",
    headline: "Head of Revenue, North America",
    pitch: "Own the number for the fastest-growing region. Series B momentum, category-defining product.",
    facts: [
      { kicker: "Budget", value: "$240K", accent: true },
      { kicker: "Equity", value: "0.4–0.6%" },
      { kicker: "Stage", value: "Series B" },
      { kicker: "Deadline", value: "14 days" },
      { kicker: "Location", value: "Austin, TX" },
      { kicker: "In network", value: "2 people" },
    ],
    abeRead: "Comp is competitive but your network here is thin — cold-ish.",
    sector: "SaaS",
    region: "Austin, TX",
    posted: "5d ago",
  },
  {
    id: "op7",
    type: "Advisory",
    company: "Cobalt & Rowe",
    tint: "sand",
    headline: "Strategic Advisor — go-to-market",
    pitch: "Quarterly cadence advising the leadership team on GTM strategy and market entry. Light lift, high signal.",
    facts: [
      { kicker: "Budget", value: "$65K/yr", accent: true },
      { kicker: "Type", value: "Advisory" },
      { kicker: "Cadence", value: "Quarterly" },
      { kicker: "Deadline", value: "28 days" },
      { kicker: "Location", value: "Chicago" },
      { kicker: "In network", value: "1 person" },
    ],
    abeRead: "Right-sized for your bandwidth; recurring and durable.",
    sector: "Consulting",
    region: "Chicago, IL",
    posted: "1 week ago",
  },
  {
    id: "op8",
    type: "Mandate",
    company: "Halcyon Robotics",
    tint: "accent",
    headline: "Capital-raise advisory for the Series C",
    pitch: "Lead a $60M raise into an oversubscribed round. Investor relationships in deep-tech a must.",
    facts: [
      { kicker: "Fee", value: "2% success", accent: true },
      { kicker: "Round", value: "$60M" },
      { kicker: "Stage", value: "Series C" },
      { kicker: "Deadline", value: "10 days" },
      { kicker: "Timeline", value: "90 days" },
      { kicker: "In network", value: "3 people" },
    ],
    abeRead: "Your deep-tech investor list is exactly their gap.",
    sector: "Robotics",
    region: "San Jose, CA",
    posted: "2d ago",
  },
  {
    id: "op9",
    type: "RFP",
    company: "Summit Facilities Group",
    tint: "sand",
    headline: "National janitorial + MRO program",
    pitch: "Multi-site facilities program across 3.2M sq ft. Certified suppliers prioritized; incumbents welcome to rebid.",
    facts: [
      { kicker: "Budget", value: "$3.2M/yr", accent: true },
      { kicker: "Type", value: "RFP" },
      { kicker: "Term", value: "12 months" },
      { kicker: "Deadline", value: "18 days" },
      { kicker: "Location", value: "Denver" },
      { kicker: "In network", value: "3 people" },
    ],
    abeRead: "Regional density matches your Mountain-West footprint.",
    sector: "Facilities",
    region: "Denver, CO",
    posted: "4d ago",
  },
  {
    id: "op10",
    type: "Deal",
    company: "Delta Health Solutions",
    tint: "accent",
    headline: "Telehealth platform integration",
    pitch: "Integrate our telehealth stack across 30 hospital systems. Healthcare-data experience essential.",
    facts: [
      { kicker: "Budget", value: "$540K", accent: true },
      { kicker: "Type", value: "Project" },
      { kicker: "Timeline", value: "4 months" },
      { kicker: "Deadline", value: "9 days" },
      { kicker: "Location", value: "Chicago" },
      { kicker: "In network", value: "5 people" },
    ],
    abeRead: "Deep healthcare-data overlap; five warm paths inside.",
    sector: "Health IT",
    region: "Chicago, IL",
    posted: "3d ago",
  },
  {
    id: "op11",
    type: "RFP",
    company: "Rivera Logistics Partners",
    tint: "sand",
    headline: "Southern-corridor freight & 3PL",
    pitch: "Two-year managed-freight program on southern lanes. Certified diverse suppliers encouraged to bid.",
    facts: [
      { kicker: "Budget", value: "$40M", accent: true },
      { kicker: "Type", value: "RFP" },
      { kicker: "Term", value: "24 months" },
      { kicker: "Deadline", value: "21 days" },
      { kicker: "Location", value: "El Paso" },
      { kicker: "In network", value: "4 people" },
    ],
    abeRead: "Your lane density beats the incumbent on price.",
    sector: "Logistics",
    region: "El Paso, TX",
    posted: "5d ago",
  },
  {
    id: "op12",
    type: "Retainer",
    company: "Brightline Creative",
    tint: "plain",
    headline: "Brand + web refresh partner",
    pitch: "Refresh brand and rebuild the marketing site ahead of a Series B. Senior team, fast tempo.",
    facts: [
      { kicker: "Budget", value: "$120K", accent: true },
      { kicker: "Type", value: "Retainer" },
      { kicker: "Timeline", value: "3 months" },
      { kicker: "Deadline", value: "15 days" },
      { kicker: "Mode", value: "Remote" },
      { kicker: "In network", value: "5 people" },
    ],
    abeRead: "Scope fits a single senior pod — clean, self-contained.",
    sector: "Brand",
    region: "Remote",
    posted: "1 week ago",
  },
];

export const oppTypes: OppType[] = ["RFP", "Deal", "Mandate", "Retainer", "Advisory"];
export const oppSectors = ["AI infra", "FinTech", "HealthTech", "SaaS", "Venture", "Logistics", "Facilities", "Agency"];
export const savedSearches = [
  { id: "ss1", label: "Infra & data · $200K+", count: 7 },
  { id: "ss2", label: "Fractional & advisory", count: 4 },
  { id: "ss3", label: "Certified-supplier RFPs", count: 11 },
];
