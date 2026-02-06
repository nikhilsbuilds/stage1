export type Category =
  | "Cloud & Infrastructure"
  | "AI & ML"
  | "Developer Tools"
  | "Fintech & Payments"
  | "Design & No-Code"
  | "Marketing & Analytics"
  | "Communication"
  | "Security & Compliance"
  | "Productivity"

export type Stage = "Idea" | "MVP" | "Early Traction" | "Growth"

export interface Offer {
  id: string
  name: string
  provider: string
  logo: string
  tagline: string
  description: string
  value: string
  category: Category
  stages: Stage[]
  eligibility: string[]
  howToApply: string
  applyUrl: string
  expiresAt: string | null
  verified: boolean
  featured: boolean
  upvotes: number
  tags: string[]
}

export interface Playbook {
  id: string
  title: string
  description: string
  stage: Stage
  offers: string[]
  totalValue: string
}

export const categories: Category[] = [
  "Cloud & Infrastructure",
  "AI & ML",
  "Developer Tools",
  "Fintech & Payments",
  "Design & No-Code",
  "Marketing & Analytics",
  "Communication",
  "Security & Compliance",
  "Productivity",
]

export const stages: Stage[] = ["Idea", "MVP", "Early Traction", "Growth"]

export const offers: Offer[] = [
  {
    id: "vercel-ai-accelerator",
    name: "Vercel AI Accelerator",
    provider: "Vercel",
    logo: "Vercel",
    tagline: "6 weeks, 40 participants, over $6M in credits",
    description:
      "Join the Vercel AI Accelerator and get access to over $6M in credits from Vercel, v0, AWS, Anthropic, OpenAI, Cursor, Supabase, Neon, and 15+ more partners. Includes weekly fireside chats, workshops with industry leaders, and a Demo Day with investors in San Francisco.",
    value: "$150,000",
    category: "AI & ML",
    stages: ["Idea", "MVP", "Early Traction"],
    eligibility: [
      "Building an AI-powered application",
      "Must be able to participate for 6 weeks",
      "Open to global founders",
    ],
    howToApply:
      "Apply on the Vercel AI Accelerator page. Selected participants receive credits from 20+ partners including $30K Vercel credits, $25K AWS credits, $15K Anthropic credits, and more.",
    applyUrl: "https://vercel.com/ai-accelerator",
    expiresAt: null,
    verified: true,
    featured: true,
    upvotes: 523,
    tags: ["ai", "accelerator", "credits", "vercel", "llm", "demo-day"],
  },
  {
    id: "aws-activate",
    name: "AWS Activate",
    provider: "Amazon Web Services",
    logo: "AWS",
    tagline: "Up to $100K in AWS credits for startups",
    description:
      "AWS Activate provides startups with free tools, resources, and more to quickly get started on AWS. Get credits, technical support, and training to help build and grow your business.",
    value: "$100,000",
    category: "Cloud & Infrastructure",
    stages: ["Idea", "MVP", "Early Traction"],
    eligibility: [
      "Must be a startup less than 10 years old",
      "Must have a functional website or app",
      "Previously unfunded by AWS Activate at the Portfolio level",
    ],
    howToApply:
      "Apply through the AWS Activate console. If affiliated with an accelerator, use the provided Organization ID for higher credit tiers.",
    applyUrl: "https://aws.amazon.com/activate/",
    expiresAt: null,
    verified: true,
    featured: true,
    upvotes: 342,
    tags: ["cloud", "hosting", "compute", "storage"],
  },
  {
    id: "gcp-startups",
    name: "Google Cloud for Startups",
    provider: "Google Cloud",
    logo: "GCP",
    tagline: "Up to $200K in Google Cloud credits",
    description:
      "Google for Startups Cloud Program provides cloud credits, technical training, and business support to help startups build and scale with Google Cloud.",
    value: "$200,000",
    category: "Cloud & Infrastructure",
    stages: ["MVP", "Early Traction", "Growth"],
    eligibility: [
      "Series A or below",
      "New to Google Cloud or existing customer",
      "Associated with approved accelerator, incubator, or VC",
    ],
    howToApply:
      "Apply online through Google for Startups. Approval takes 5-10 business days.",
    applyUrl: "https://cloud.google.com/startup",
    expiresAt: null,
    verified: true,
    featured: true,
    upvotes: 289,
    tags: ["cloud", "ai", "compute", "kubernetes"],
  },
  {
    id: "azure-startups",
    name: "Microsoft for Startups Founders Hub",
    provider: "Microsoft Azure",
    logo: "Azure",
    tagline: "Up to $150K in Azure credits + GitHub & LinkedIn perks",
    description:
      "Microsoft for Startups Founders Hub provides free access to Azure credits, development tools, Microsoft 365, GitHub Enterprise, LinkedIn marketing credits, and mentorship.",
    value: "$150,000",
    category: "Cloud & Infrastructure",
    stages: ["Idea", "MVP", "Early Traction"],
    eligibility: [
      "Must be a startup (no funding requirement)",
      "Must be building a software-based product",
      "Less than 7 years old",
    ],
    howToApply:
      "Sign up at the Founders Hub. No third-party endorsement required.",
    applyUrl: "https://www.microsoft.com/en-us/startups",
    expiresAt: null,
    verified: true,
    featured: true,
    upvotes: 256,
    tags: ["cloud", "ai", "devtools", "office"],
  },
  {
    id: "vercel-startup",
    name: "Vercel Startup Program",
    provider: "Vercel",
    logo: "Vercel",
    tagline: "$3,000 in Vercel credits for early-stage startups",
    description:
      "The Vercel Startup Program gives early-stage startups credits for the Pro plan, helping you deploy and scale your frontend applications with zero configuration.",
    value: "$3,000",
    category: "Developer Tools",
    stages: ["Idea", "MVP"],
    eligibility: [
      "Series A or below",
      "Less than $5M in funding",
      "New Vercel customer",
    ],
    howToApply: "Apply on the Vercel startup program page.",
    applyUrl: "https://vercel.com/startups",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 198,
    tags: ["frontend", "deployment", "hosting", "nextjs"],
  },
  {
    id: "openai-startup",
    name: "OpenAI Startup Fund Credits",
    provider: "OpenAI",
    logo: "OpenAI",
    tagline: "API credits for AI-first startups",
    description:
      "OpenAI provides API credits to early-stage startups building with GPT and other OpenAI models. Credits can be used for API calls across all models.",
    value: "$10,000",
    category: "AI & ML",
    stages: ["Idea", "MVP", "Early Traction"],
    eligibility: [
      "Must be building an AI-powered product",
      "Series A or below",
      "Affiliated with a participating accelerator",
    ],
    howToApply: "Apply through a participating accelerator or VC partner.",
    applyUrl: "https://openai.com/blog/openai-startup-fund",
    expiresAt: null,
    verified: true,
    featured: true,
    upvotes: 412,
    tags: ["ai", "llm", "gpt", "api"],
  },
  {
    id: "stripe-atlas",
    name: "Stripe Atlas",
    provider: "Stripe",
    logo: "Stripe",
    tagline: "$5,000 in Stripe fee credits + incorporation",
    description:
      "Stripe Atlas helps you incorporate your company in Delaware, get a bank account, and start accepting payments. Includes processing fee credits and partner perks.",
    value: "$5,000",
    category: "Fintech & Payments",
    stages: ["Idea", "MVP"],
    eligibility: [
      "Must be incorporating a new business",
      "Available globally",
    ],
    howToApply: "Sign up at Stripe Atlas. One-time fee of $500 for incorporation.",
    applyUrl: "https://stripe.com/atlas",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 178,
    tags: ["payments", "incorporation", "banking"],
  },
  {
    id: "notion-startups",
    name: "Notion for Startups",
    provider: "Notion",
    logo: "Notion",
    tagline: "Free Plus plan with unlimited AI ($6,000+ value)",
    description:
      "Notion offers startups free access to the Plus plan with unlimited AI features for up to 6 months, helping teams collaborate on docs, wikis, and project management.",
    value: "$6,000",
    category: "Productivity",
    stages: ["Idea", "MVP", "Early Traction"],
    eligibility: [
      "Less than 50 employees",
      "Backed by a qualifying investor or accelerator",
      "New to Notion Plus plan",
    ],
    howToApply: "Apply via the Notion for Startups page with your investor info.",
    applyUrl: "https://www.notion.so/startups",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 167,
    tags: ["docs", "wiki", "project-management", "ai"],
  },
  {
    id: "figma-startups",
    name: "Figma for Startups",
    provider: "Figma",
    logo: "Figma",
    tagline: "Free Organization plan for 2 years",
    description:
      "Figma provides startups with free access to the Organization plan for 2 years, including FigJam, advanced design systems, and branching.",
    value: "$9,000",
    category: "Design & No-Code",
    stages: ["Idea", "MVP"],
    eligibility: [
      "Series A or below",
      "Less than 50 employees",
      "New to Figma Organization plan",
    ],
    howToApply: "Apply through the Figma for Startups page.",
    applyUrl: "https://www.figma.com/startups/",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 203,
    tags: ["design", "prototyping", "collaboration"],
  },
  {
    id: "hubspot-startups",
    name: "HubSpot for Startups",
    provider: "HubSpot",
    logo: "HubSpot",
    tagline: "Up to 90% off HubSpot CRM Suite",
    description:
      "HubSpot for Startups offers up to 90% off the CRM Suite for qualifying early-stage startups, including marketing, sales, service, and CMS tools.",
    value: "$60,000",
    category: "Marketing & Analytics",
    stages: ["MVP", "Early Traction", "Growth"],
    eligibility: [
      "Must be associated with a HubSpot-approved partner",
      "Less than $2M in funding for highest discount tier",
      "New HubSpot customer",
    ],
    howToApply: "Apply through your accelerator or VC partner portal.",
    applyUrl: "https://www.hubspot.com/startups",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 145,
    tags: ["crm", "marketing", "sales", "email"],
  },
  {
    id: "twilio-startups",
    name: "Twilio Startups",
    provider: "Twilio",
    logo: "Twilio",
    tagline: "$5,000 in Twilio credits for communications",
    description:
      "Twilio provides startups with API credits for SMS, voice, video, and email services to build communication features into their products.",
    value: "$5,000",
    category: "Communication",
    stages: ["MVP", "Early Traction"],
    eligibility: [
      "Series A or below",
      "Part of a qualifying accelerator",
      "New Twilio customer",
    ],
    howToApply: "Apply through the Twilio startup partner portal.",
    applyUrl: "https://www.twilio.com/startups",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 112,
    tags: ["sms", "voice", "communications", "api"],
  },
  {
    id: "1password-startups",
    name: "1Password for Startups",
    provider: "1Password",
    logo: "1Password",
    tagline: "Free Teams plan for 1 year",
    description:
      "1Password offers startups a free Teams plan for one year, providing secure password management and secret sharing for your entire team.",
    value: "$2,000",
    category: "Security & Compliance",
    stages: ["Idea", "MVP", "Early Traction"],
    eligibility: [
      "Less than 25 employees",
      "Backed by a recognized VC or accelerator",
      "New 1Password customer",
    ],
    howToApply: "Apply through the 1Password for Startups page.",
    applyUrl: "https://start.1password.com/",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 98,
    tags: ["security", "passwords", "secrets"],
  },
  {
    id: "anthropic-credits",
    name: "Anthropic Startup Credits",
    provider: "Anthropic",
    logo: "Anthropic",
    tagline: "API credits for Claude-powered startups",
    description:
      "Anthropic provides API credits to startups building with Claude, their AI assistant. Credits cover API usage across Claude models.",
    value: "$25,000",
    category: "AI & ML",
    stages: ["MVP", "Early Traction"],
    eligibility: [
      "Building with Claude APIs",
      "Series A or below",
      "Affiliated with select partners",
    ],
    howToApply: "Apply through an Anthropic partner program.",
    applyUrl: "https://www.anthropic.com/startups",
    expiresAt: null,
    verified: true,
    featured: true,
    upvotes: 287,
    tags: ["ai", "llm", "claude", "api"],
  },
  {
    id: "linear-startups",
    name: "Linear for Startups",
    provider: "Linear",
    logo: "Linear",
    tagline: "Free Plus plan for 1 year",
    description:
      "Linear offers startups free access to the Plus plan for issue tracking, project management, and product roadmaps.",
    value: "$2,400",
    category: "Developer Tools",
    stages: ["Idea", "MVP"],
    eligibility: [
      "Less than 20 employees",
      "New Linear customer",
      "Less than $5M in funding",
    ],
    howToApply: "Apply on the Linear for Startups page.",
    applyUrl: "https://linear.app/startups",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 176,
    tags: ["project-management", "issues", "roadmap"],
  },
  {
    id: "supabase-startups",
    name: "Supabase Startup Program",
    provider: "Supabase",
    logo: "Supabase",
    tagline: "$100K+ in Supabase credits",
    description:
      "Supabase offers startups credits for their open-source Firebase alternative, including database, auth, storage, and edge functions.",
    value: "$100,000",
    category: "Developer Tools",
    stages: ["Idea", "MVP", "Early Traction"],
    eligibility: [
      "Series A or below",
      "Part of a qualifying accelerator",
      "Building with Supabase",
    ],
    howToApply: "Apply through the Supabase startup program.",
    applyUrl: "https://supabase.com/startups",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 221,
    tags: ["database", "auth", "backend", "open-source"],
  },
  {
    id: "mongo-startups",
    name: "MongoDB for Startups",
    provider: "MongoDB",
    logo: "MongoDB",
    tagline: "$5,000 in Atlas credits + partner perks",
    description:
      "MongoDB for Startups provides Atlas credits, technical guidance, and co-marketing opportunities for early-stage startups using MongoDB.",
    value: "$5,000",
    category: "Developer Tools",
    stages: ["MVP", "Early Traction"],
    eligibility: [
      "Series A or below",
      "Less than $10M in total funding",
      "New MongoDB Atlas customer",
    ],
    howToApply: "Apply at the MongoDB for Startups page.",
    applyUrl: "https://www.mongodb.com/startups",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 134,
    tags: ["database", "nosql", "atlas"],
  },
  {
    id: "brex-startups",
    name: "Brex for Startups",
    provider: "Brex",
    logo: "Brex",
    tagline: "$150K+ in startup perks & corporate card",
    description:
      "Brex offers startups a corporate card with no personal guarantee, plus a curated package of partner perks including credits from AWS, Google, and more.",
    value: "$150,000",
    category: "Fintech & Payments",
    stages: ["MVP", "Early Traction", "Growth"],
    eligibility: [
      "Must be a venture-backed startup",
      "US-based",
      "Must open a Brex account",
    ],
    howToApply: "Sign up for a Brex account to unlock the startup perk stack.",
    applyUrl: "https://www.brex.com/startups",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 167,
    tags: ["banking", "corporate-card", "perks"],
  },
  {
    id: "segment-startups",
    name: "Segment Startup Program",
    provider: "Twilio Segment",
    logo: "Segment",
    tagline: "$25,000 in Segment credits for analytics",
    description:
      "Segment offers startups free access to their customer data platform, helping you collect, clean, and route user data to any analytics tool.",
    value: "$25,000",
    category: "Marketing & Analytics",
    stages: ["MVP", "Early Traction"],
    eligibility: [
      "Less than $5M in funding",
      "Less than 50 employees",
      "New Segment customer",
    ],
    howToApply: "Apply through the Segment Startup Program page.",
    applyUrl: "https://segment.com/industry/startups/",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 143,
    tags: ["analytics", "data", "cdp"],
  },
  {
    id: "datadog-startups",
    name: "Datadog for Startups",
    provider: "Datadog",
    logo: "Datadog",
    tagline: "$2,500+ in Datadog credits for monitoring",
    description:
      "Datadog provides startups with monitoring and observability credits covering infrastructure, APM, logs, and more.",
    value: "$2,500",
    category: "Developer Tools",
    stages: ["MVP", "Early Traction"],
    eligibility: [
      "Series A or below",
      "Affiliated with a qualifying partner",
      "New Datadog customer",
    ],
    howToApply: "Apply through the Datadog startup partner program.",
    applyUrl: "https://www.datadoghq.com/partner/startups/",
    expiresAt: null,
    verified: true,
    featured: false,
    upvotes: 89,
    tags: ["monitoring", "observability", "apm", "logs"],
  },
]

export const playbooks: Playbook[] = [
  {
    id: "zero-to-mvp",
    title: "Zero to MVP Stack",
    description:
      "Everything you need to go from idea to a deployed MVP without spending a dollar. Cloud hosting, database, design tools, and project management -- all free.",
    stage: "Idea",
    offers: [
      "aws-activate",
      "vercel-startup",
      "supabase-startups",
      "figma-startups",
      "linear-startups",
      "notion-startups",
      "1password-startups",
    ],
    totalValue: "$222,400",
  },
  {
    id: "ai-first-startup",
    title: "AI-First Startup Stack",
    description:
      "Building with AI? Get credits from the top model providers plus the cloud and tools to deploy your AI product at scale.",
    stage: "MVP",
    offers: [
      "openai-startup",
      "anthropic-credits",
      "gcp-startups",
      "vercel-startup",
      "supabase-startups",
      "segment-startups",
    ],
    totalValue: "$363,000",
  },
  {
    id: "growth-stack",
    title: "Growth & Scale Stack",
    description:
      "Ready to grow? Get CRM, analytics, communications, and infrastructure credits to support your first 1,000 customers.",
    stage: "Early Traction",
    offers: [
      "hubspot-startups",
      "twilio-startups",
      "segment-startups",
      "datadog-startups",
      "gcp-startups",
      "brex-startups",
    ],
    totalValue: "$442,500",
  },
  {
    id: "fintech-founder",
    title: "Fintech Founder Stack",
    description:
      "Essential tools for fintech startups: payments infrastructure, banking, compliance, and the cloud to run it all.",
    stage: "MVP",
    offers: [
      "stripe-atlas",
      "brex-startups",
      "aws-activate",
      "1password-startups",
      "mongo-startups",
    ],
    totalValue: "$262,000",
  },
]

export function getOfferById(id: string): Offer | undefined {
  return offers.find((o) => o.id === id)
}

export function getOffersByCategory(category: Category): Offer[] {
  return offers.filter((o) => o.category === category)
}

export function getOffersByStage(stage: Stage): Offer[] {
  return offers.filter((o) => o.stages.includes(stage))
}

export function getFeaturedOffers(): Offer[] {
  return offers.filter((o) => o.featured)
}

export function searchOffers(query: string): Offer[] {
  const q = query.toLowerCase()
  return offers.filter(
    (o) =>
      o.name.toLowerCase().includes(q) ||
      o.provider.toLowerCase().includes(q) ||
      o.tagline.toLowerCase().includes(q) ||
      o.tags.some((t) => t.includes(q)) ||
      o.category.toLowerCase().includes(q)
  )
}

export function getTotalValue(): string {
  const total = offers.reduce((sum, o) => {
    const num = parseInt(o.value.replace(/[$,]/g, ""))
    return sum + (isNaN(num) ? 0 : num)
  }, 0)
  return `$${total.toLocaleString()}`
}

// --- Reddit Communities ---

export type RedditCategory =
  | "Startups & Entrepreneurship"
  | "Dev"
  | "Marketing"
  | "Product & UX Design"

export interface RedditCommunity {
  name: string
  members: string
  category: RedditCategory
  url: string
}

export const redditCategories: RedditCategory[] = [
  "Startups & Entrepreneurship",
  "Dev",
  "Marketing",
  "Product & UX Design",
]

export const redditCommunities: RedditCommunity[] = [
  { name: "r/startups", members: "2.0M", category: "Startups & Entrepreneurship", url: "https://reddit.com/r/startups" },
  { name: "r/Entrepreneur", members: "5.1M", category: "Startups & Entrepreneurship", url: "https://reddit.com/r/Entrepreneur" },
  { name: "r/Entrepreneurship", members: "122K", category: "Startups & Entrepreneurship", url: "https://reddit.com/r/Entrepreneurship" },
  { name: "r/EntrepreneurRideAlong", members: "654K", category: "Startups & Entrepreneurship", url: "https://reddit.com/r/EntrepreneurRideAlong" },
  { name: "r/TechStartups", members: "7.5K", category: "Startups & Entrepreneurship", url: "https://reddit.com/r/TechStartups" },
  { name: "r/IndieDev", members: "349K", category: "Startups & Entrepreneurship", url: "https://reddit.com/r/IndieDev" },
  { name: "r/Startup_Ideas", members: "242K", category: "Startups & Entrepreneurship", url: "https://reddit.com/r/Startup_Ideas" },
  { name: "r/LeanStartup", members: "3.8K", category: "Startups & Entrepreneurship", url: "https://reddit.com/r/LeanStartup" },
  { name: "r/ProductManagement", members: "248K", category: "Startups & Entrepreneurship", url: "https://reddit.com/r/ProductManagement" },
  { name: "r/BusinessNetworking", members: "3.6K", category: "Startups & Entrepreneurship", url: "https://reddit.com/r/BusinessNetworking" },
  { name: "r/Programming", members: "6.8M", category: "Dev", url: "https://reddit.com/r/Programming" },
  { name: "r/webdev", members: "3.2M", category: "Dev", url: "https://reddit.com/r/webdev" },
  { name: "r/vibecoding", members: "152K", category: "Dev", url: "https://reddit.com/r/vibecoding" },
  { name: "r/VibeCodingSaaS", members: "5.7K", category: "Dev", url: "https://reddit.com/r/VibeCodingSaaS" },
  { name: "r/growthhacking", members: "123K", category: "Marketing", url: "https://reddit.com/r/growthhacking" },
  { name: "r/digitalmarketing", members: "356K", category: "Marketing", url: "https://reddit.com/r/digitalmarketing" },
  { name: "r/DigitalMarketingHack", members: "51K", category: "Marketing", url: "https://reddit.com/r/DigitalMarketingHack" },
  { name: "r/growmybusiness", members: "84K", category: "Marketing", url: "https://reddit.com/r/growmybusiness" },
  { name: "r/Marketing", members: "1.9M", category: "Marketing", url: "https://reddit.com/r/Marketing" },
  { name: "r/ProductDesign", members: "18K", category: "Product & UX Design", url: "https://reddit.com/r/ProductDesign" },
  { name: "r/userexperience", members: "141K", category: "Product & UX Design", url: "https://reddit.com/r/userexperience" },
  { name: "r/webdesign", members: "58K", category: "Product & UX Design", url: "https://reddit.com/r/webdesign" },
  { name: "r/UIUX", members: "20K", category: "Product & UX Design", url: "https://reddit.com/r/UIUX" },
]

// --- Launch Directories ---

export interface LaunchDirectory {
  name: string
  url: string
}

export const launchDirectories: LaunchDirectory[] = [
  { name: "ProductHunt", url: "https://producthunt.com" },
  { name: "MicroLaunch", url: "https://microlaunch.net" },
  { name: "Uneed", url: "https://uneed.best" },
  { name: "IndieHackers", url: "https://indiehackers.com" },
  { name: "Peerpush", url: "https://peerpush.com" },
  { name: "SaaSHub", url: "https://saashub.com" },
  { name: "LaunchIgniter", url: "https://launchigniter.com" },
  { name: "Foundrlist", url: "https://foundrlist.com" },
  { name: "LaunchDirectories", url: "https://launchdirectories.com" },
  { name: "Reddit", url: "https://reddit.com" },
  { name: "ToolFame", url: "https://toolfame.com" },
  { name: "HackerNews", url: "https://news.ycombinator.com" },
  { name: "StartupSubmit", url: "https://startupsubmit.com" },
  { name: "NextBigProduct", url: "https://nextbigproduct.net" },
  { name: "MadeLaunch", url: "https://madelaunch.com" },
  { name: "Hunt0", url: "https://hunt0.com" },
  { name: "WaitJoin", url: "https://waitjoin.com" },
  { name: "AILaunch", url: "https://ailaunch.com" },
  { name: "AItoolonline", url: "https://aitoolonline.com" },
  { name: "BetaList", url: "https://betalist.com" },
  { name: "DevHunt", url: "https://devhunt.org" },
  { name: "DirectoryHunt", url: "https://directoryhunt.com" },
  { name: "Fazier", url: "https://fazier.com" },
  { name: "Firsto", url: "https://firsto.dev" },
  { name: "PeerList", url: "https://peerlist.io" },
  { name: "Proofy", url: "https://proofy.io" },
  { name: "ShipYard HQ", url: "https://shipyard.so" },
  { name: "Shipsquad", url: "https://shipsquad.com" },
  { name: "Slocco", url: "https://slocco.com" },
  { name: "Stacker News", url: "https://stacker.news" },
  { name: "TinyLaunch", url: "https://tinylaunch.com" },
  { name: "TryLaunch", url: "https://trylaunch.com" },
  { name: "TwelveTools", url: "https://twelvetools.com" },
  { name: "TinyStartups", url: "https://tinystartups.com" },
  { name: "Neeed Directory", url: "https://neeed.com" },
  { name: "TheresAnAIForThat", url: "https://theresanaiforthat.com" },
  { name: "Turbo0", url: "https://turbo0.com" },
  { name: "Indie Deals", url: "https://indiedeals.com" },
  { name: "ShowMeBestAI", url: "https://showmebestai.com" },
  { name: "IndieTools", url: "https://indietools.com" },
  { name: "SaaSFame", url: "https://saasfame.com" },
  { name: "LaunchDubai", url: "https://launchdubai.com" },
  { name: "LaunchUrApp", url: "https://launchurapp.com" },
  { name: "BetaPage", url: "https://betapage.co" },
  { name: "LaunchingNext", url: "https://launchingnext.com" },
  { name: "StartupRanked", url: "https://startupranked.com" },
  { name: "The Grommet", url: "https://thegrommet.com" },
  { name: "Awesome Directories", url: "https://awesomedirectories.com" },
  { name: "AI Directories", url: "https://aidirectories.com" },
  { name: "AppSumo", url: "https://appsumo.com" },
  { name: "LaunchBoard", url: "https://launchboard.co" },
  { name: "FindlyTools", url: "https://findlytools.com" },
  { name: "DailyPings", url: "https://dailypings.com" },
  { name: "ConfettiSaaS", url: "https://confettisaas.com" },
  { name: "ShipIt Buzz", url: "https://shipitbuzz.com" },
  { name: "DesiFounder", url: "https://desifounder.com" },
  { name: "TapRefer", url: "https://taprefer.com" },
  { name: "LaunchVibe", url: "https://launchvibe.com" },
  { name: "EverythingAITool", url: "https://everythingaitool.com" },
  { name: "CutAndShip", url: "https://cutandship.com" },
  { name: "BestOfWebsite", url: "https://bestofwebsite.com" },
  { name: "TryLaunchAI", url: "https://trylaunchai.com" },
  { name: "AIToolFame", url: "https://aitoolfame.com" },
  { name: "StartupSlabSite", url: "https://startupslabsite.com" },
  { name: "KatseAI", url: "https://katseai.com" },
  { name: "SolutionsFast", url: "https://solutionsfast.com" },
  { name: "Top10Now", url: "https://top10now.com" },
  { name: "ProofStories", url: "https://proofstories.com" },
  { name: "LaunchTank", url: "https://launchtank.com" },
  { name: "SpeedLaunch", url: "https://speedlaunch.com" },
  { name: "SideProjectors", url: "https://sideprojectors.com" },
  { name: "NoCodeList", url: "https://nocodelist.co" },
  { name: "AlternativeTo", url: "https://alternativeto.net" },
  { name: "OpenAlternative", url: "https://openalternative.co" },
  { name: "PitchWall", url: "https://pitchwall.co" },
  { name: "Futurepedia", url: "https://futurepedia.io" },
  { name: "Insidr AI", url: "https://insidr.ai" },
  { name: "AI Scout", url: "https://aiscout.net" },
  { name: "Aixploria", url: "https://aixploria.com" },
  { name: "FutureTools", url: "https://futuretools.io" },
  { name: "WIP", url: "https://wip.co" },
  { name: "Makerlog", url: "https://getmakerlog.com" },
  { name: "Buildspace Demo Day", url: "https://buildspace.so" },
  { name: "TrustMRR", url: "https://trustmrr.com" },
  { name: "BacklinkGPT", url: "https://backlinkgpt.com" },
]
