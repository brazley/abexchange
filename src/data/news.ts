/* ------------------------------------------------------------------ *
   American Business Exchange — News
   Editorial dummy content. Every image is a specific, verified Unsplash
   photo (200 / image-jpeg, confirmed in-browser) matched by hand to its
   headline — no source.unsplash.com, no random tiles.
 * ------------------------------------------------------------------ */

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Article = {
  id: string;
  category: string;
  headline: string;
  dek?: string;
  source: string;
  byline?: string;
  timestamp: string;
  readMin: number;
  img: string;
  alt: string;
  ratio: string; // CSS aspect-ratio, prevents layout shift
};

export const feature: Article = {
  id: "f1",
  category: "M&A",
  headline: "The Megadeal Era Returns: Corporate America Bets $2 Trillion on Consolidation",
  dek: "After two lean years, boards are reaching for scale again — and antitrust regulators are bracing for the busiest deal calendar since 2021.",
  source: "ABE Markets",
  byline: "Eleanor Whitfield",
  timestamp: "2h ago",
  readMin: 8,
  img: U("1486406146926-c627a92ad1ab", 1600),
  alt: "Corporate skyscrapers seen from below against an overcast sky",
  ratio: "16 / 10",
};

export const secondary: Article[] = [
  {
    id: "s1",
    category: "Markets",
    headline: "Bond Yields Slip as Traders Price In a Dovish Turn",
    source: "ABE Wire",
    timestamp: "1h ago",
    readMin: 4,
    img: U("1611974789855-9c2a0a7236a3", 900),
    alt: "Descending red candlestick chart on a trading screen",
    ratio: "3 / 2",
  },
  {
    id: "s2",
    category: "Economy",
    headline: "Inflation Cools to 2.4%, Clearing a Path for the Fed",
    source: "The Ledger",
    timestamp: "3h ago",
    readMin: 5,
    img: U("1526304640581-d334cdbbf45e", 900),
    alt: "A spread of United States dollar bills",
    ratio: "3 / 2",
  },
];

export const mosaic: Article[] = [
  {
    id: "m1",
    category: "Markets",
    headline: "Tech Megacaps Lead a Broad Rally Into the Close",
    source: "ABE Markets",
    timestamp: "4h ago",
    readMin: 3,
    img: U("1590283603385-17ffb3a7f29f", 800),
    alt: "A financial trading terminal showing green and red price data",
    ratio: "4 / 3",
  },
  {
    id: "m2",
    category: "Deals",
    headline: "Northwind Labs Acquires Veredge in $3.2B Cash-and-Stock Deal",
    source: "ABE Wire",
    timestamp: "5h ago",
    readMin: 6,
    img: U("1454165804606-c3d57bc86b40", 800),
    alt: "Two people signing documents across a desk",
    ratio: "4 / 3",
  },
  {
    id: "m3",
    category: "Energy",
    headline: "The Grid Race: Why AI Demand Is Rewiring Power Markets",
    source: "Frontier Weekly",
    timestamp: "6h ago",
    readMin: 7,
    img: U("1451187580459-43490279c0fa", 800),
    alt: "The Earth at night from orbit, showing city lights",
    ratio: "4 / 3",
  },
];

export type Carousel = { id: string; title: string; items: Article[] };

export const carousels: Carousel[] = [
  {
    id: "c1",
    title: "Top Business Stories",
    items: [
      {
        id: "c1a",
        category: "Leadership",
        headline: "Boards Are Quietly Rewriting the CEO Succession Playbook",
        source: "ABE Leadership",
        timestamp: "3h ago",
        readMin: 6,
        img: U("1521737604893-d14cc237f11d", 700),
        alt: "Executives gathered around a boardroom table",
        ratio: "3 / 2",
      },
      {
        id: "c1b",
        category: "Technology",
        headline: "Enterprise AI Spend Crosses $300B — and Keeps Climbing",
        source: "ABE Technology",
        timestamp: "5h ago",
        readMin: 5,
        img: U("1460925895917-afdab827c52f", 700),
        alt: "A laptop displaying an analytics dashboard",
        ratio: "3 / 2",
      },
      {
        id: "c1c",
        category: "Real Estate",
        headline: "Commercial Real Estate Finds a Floor in Gateway Cities",
        source: "The Ledger",
        timestamp: "7h ago",
        readMin: 5,
        img: U("1449034446853-66c86144b0ad", 700),
        alt: "A suspension bridge at sunset over the bay",
        ratio: "3 / 2",
      },
      {
        id: "c1d",
        category: "Industry",
        headline: "The Reshoring Boom Puts Robotics at the Center of the Factory",
        source: "Frontier Weekly",
        timestamp: "8h ago",
        readMin: 6,
        img: U("1581091226825-a6a2a5aee158", 700),
        alt: "An engineer working alongside industrial robotics",
        ratio: "3 / 2",
      },
      {
        id: "c1e",
        category: "Fintech",
        headline: "Embedded Finance Quietly Becomes Banking's Biggest Channel",
        source: "ABE Wire",
        timestamp: "9h ago",
        readMin: 4,
        img: U("1554260570-e9689a3418b8", 700),
        alt: "A hand holding a phone making a mobile payment",
        ratio: "3 / 2",
      },
      {
        id: "c1f",
        category: "Economy",
        headline: "The Case for Optimism: Five Charts on a Resilient Economy",
        source: "ABE Markets",
        timestamp: "11h ago",
        readMin: 7,
        img: U("1444653614773-995cb1ef9efa", 700),
        alt: "A person reading a business newspaper",
        ratio: "3 / 2",
      },
    ],
  },
  {
    id: "c2",
    title: "Deals & Markets",
    items: [
      {
        id: "c2a",
        category: "Markets",
        headline: "IPO Window Cracks Open as Three Unicorns File",
        source: "ABE Markets",
        timestamp: "2h ago",
        readMin: 5,
        img: U("1579532537598-459ecdaf39cc", 700),
        alt: "A business broadsheet newspaper with market charts",
        ratio: "3 / 2",
      },
      {
        id: "c2b",
        category: "Supply Chain",
        headline: "Logistics Giants Bet Billions on Automated Fulfillment",
        source: "Frontier Weekly",
        timestamp: "4h ago",
        readMin: 6,
        img: U("1590247813693-5541d1c609fd", 700),
        alt: "A vast warehouse aisle of stacked storage",
        ratio: "3 / 2",
      },
      {
        id: "c2c",
        category: "Data",
        headline: "Why CFOs Are Finally Trusting Real-Time Financials",
        source: "ABE Technology",
        timestamp: "6h ago",
        readMin: 4,
        img: U("1560472354-b33ff0c44a43", 700),
        alt: "A screen of performance metrics and charts",
        ratio: "3 / 2",
      },
      {
        id: "c2d",
        category: "Startups",
        headline: "Series B Is the New Series A in a Pickier Market",
        source: "ABE Wire",
        timestamp: "8h ago",
        readMin: 5,
        img: U("1556761175-5973dc0f32e7", 700),
        alt: "A founder presenting to a small team in an office",
        ratio: "3 / 2",
      },
      {
        id: "c2e",
        category: "Workplace",
        headline: "The Four-Day Week Graduates From Experiment to Policy",
        source: "The Ledger",
        timestamp: "10h ago",
        readMin: 4,
        img: U("1497215728101-856f4ea42174", 700),
        alt: "A laptop and plant on a desk by a bright window",
        ratio: "3 / 2",
      },
      {
        id: "c2f",
        category: "Startups",
        headline: "The Anti-Portfolio: Investors Confront the Deals They Missed",
        source: "Frontier Weekly",
        timestamp: "12h ago",
        readMin: 6,
        img: U("1568992687947-868a62a9f521", 700),
        alt: "A small team meeting in a bright coworking cafe",
        ratio: "3 / 2",
      },
    ],
  },
];

export type ListSection = { id: string; category: string; items: Article[] };

export const listSections: ListSection[] = [
  {
    id: "l1",
    category: "Leadership",
    items: [
      {
        id: "l1a",
        category: "Leadership",
        headline: "How Halcyon's Founder Rebuilt the Company Around Partnerships",
        source: "ABE Leadership",
        timestamp: "3h ago",
        readMin: 6,
        img: U("1507003211169-0a1dd7228f2d", 400),
        alt: "Portrait of a smiling businessman",
        ratio: "1 / 1",
      },
      {
        id: "l1b",
        category: "Leadership",
        headline: "The Quiet Rise of the Chief Ecosystem Officer",
        source: "ABE Wire",
        timestamp: "6h ago",
        readMin: 4,
        img: U("1573496359142-b8d87734a5a2", 400),
        alt: "Portrait of a businesswoman in a grey blazer",
        ratio: "1 / 1",
      },
      {
        id: "l1c",
        category: "Careers",
        headline: "What the Best Operators Do in Their First 90 Days",
        source: "The Ledger",
        timestamp: "9h ago",
        readMin: 5,
        img: U("1590650153855-d9e808231d41", 400),
        alt: "A woman working in a modern office",
        ratio: "1 / 1",
      },
      {
        id: "l1d",
        category: "Governance",
        headline: "Inside the New Rules of Executive Compensation",
        source: "ABE Markets",
        timestamp: "1d ago",
        readMin: 7,
        img: U("1542744173-8e7e53415bb0", 400),
        alt: "A presentation underway in a boardroom",
        ratio: "1 / 1",
      },
    ],
  },
  {
    id: "l2",
    category: "Technology",
    items: [
      {
        id: "l2a",
        category: "Technology",
        headline: "The Platform Shift: Every Company Is Now an AI Company",
        source: "ABE Technology",
        timestamp: "4h ago",
        readMin: 5,
        img: U("1522071820081-009f0129c71c", 400),
        alt: "A team working together on laptops",
        ratio: "1 / 1",
      },
      {
        id: "l2b",
        category: "Security",
        headline: "Security Teams Are Drowning. Automation Is the Lifeline.",
        source: "Frontier Weekly",
        timestamp: "7h ago",
        readMin: 6,
        img: U("1556155092-490a1ba16284", 400),
        alt: "Hands working on a laptop in an office",
        ratio: "1 / 1",
      },
      {
        id: "l2c",
        category: "AI",
        headline: "Open Models vs. Frontier Labs: The Enterprise Verdict",
        source: "ABE Wire",
        timestamp: "10h ago",
        readMin: 8,
        img: U("1515378960530-7c0da6231fb1", 400),
        alt: "A person typing on a laptop at a warm desk",
        ratio: "1 / 1",
      },
      {
        id: "l2d",
        category: "Workplace",
        headline: "Return-to-Office Is Over. Now Comes the Redesign.",
        source: "The Ledger",
        timestamp: "1d ago",
        readMin: 4,
        img: U("1531973576160-7125cd663d86", 400),
        alt: "A quiet, modern open-plan office",
        ratio: "1 / 1",
      },
    ],
  },
];

export const newsMeta = {
  editionLabel: "Wednesday, July 1, 2026",
  desk: "The Exchange · Business News",
};
