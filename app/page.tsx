import Link from "next/link"
import { OfferCard } from "@/components/offer-card"
import { PlaybookCard } from "@/components/playbook-card"
import { StatsGrid } from "@/components/animated-counter"
import { LogoMarquee } from "@/components/logo-marquee"
import {
  getFeaturedOffers,
  getTotalValue,
  offers,
  playbooks,
  categories,
  launchDirectories,
  redditCommunities,
} from "@/lib/data"
import { ArrowRight, ExternalLink } from "lucide-react"

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#1a1a1a]">
      {/* Vercel grid background */}
      <div
        className="geist-grid geist-grid-fade pointer-events-none absolute inset-0"
        style={{ backgroundSize: "64px 64px" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1200px] px-6 pb-20 pt-24 md:pb-28 md:pt-32">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 border border-[#333] px-4 py-1.5 text-[13px] text-[var(--ds-gray-700)]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Open Source & Community Owned
          </div>

          <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tighter text-white md:text-6xl lg:text-[72px] lg:leading-[1.05]">
            Everything <span className="shimmer">founders</span> need to launch
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-[var(--ds-gray-700)]">
            Free credits, launch directories, startup communities, and playbooks
            -- all in one place. Open source, no affiliates, community owned.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/offers"
              className="inline-flex items-center gap-2 bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[var(--ds-gray-900)]"
            >
              Browse Offers
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/launch"
              className="inline-flex items-center gap-2 border border-[#333] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#555] hover:bg-[var(--ds-gray-100)]"
            >
              Launch Directories
            </Link>
            <Link
              href="/communities"
              className="inline-flex items-center gap-2 border border-[#333] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#555] hover:bg-[var(--ds-gray-100)]"
            >
              Communities
            </Link>
          </div>

          <LogoMarquee />
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const items = [
    {
      title: "No Affiliate Links",
      desc: "We never earn money from your clicks. Zero affiliate links, zero pay-to-rank.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
          <path d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      title: "Manually Verified",
      desc: "Every offer is checked against the provider's official program page before listing.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Community Owned",
      desc: "Fully open source. Anyone can submit a PR to add, update, or remove offers.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="border-b border-[#1a1a1a]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <h2 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl">
          How it works
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-sm text-[var(--ds-gray-600)]">
          Trust, accuracy, and community ownership are the core principles.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={`flex flex-col items-center px-8 py-8 text-center ${
                i < 2 ? "border-b border-[#1a1a1a] md:border-b-0 md:border-r" : ""
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center border border-[#333] text-[var(--ds-gray-900)]">
                {item.icon}
              </div>
              <h3 className="mt-4 text-sm font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[var(--ds-gray-600)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturedOffers() {
  const featured = getFeaturedOffers()

  return (
    <section className="border-b border-[#1a1a1a]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Featured Offers
            </h2>
            <p className="mt-2 text-sm text-[var(--ds-gray-600)]">
              Highest value programs verified this month
            </p>
          </div>
          <Link
            href="/offers"
            className="hidden items-center gap-1.5 text-sm font-medium text-[var(--ds-gray-900)] transition-colors hover:text-white md:flex"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Vercel-style grid layout: no rounded corners, 1px borders */}
        <div className="mt-8 grid grid-cols-1 gap-px bg-[#1a1a1a] sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/offers"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white"
          >
            View all offers <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function PlaybooksSection() {
  return (
    <section className="border-b border-[#1a1a1a]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Startup Playbooks
            </h2>
            <p className="mt-2 text-sm text-[var(--ds-gray-600)]">
              Pre-built stacks of offers for your stage
            </p>
          </div>
          <Link
            href="/playbooks"
            className="hidden items-center gap-1.5 text-sm font-medium text-[var(--ds-gray-900)] transition-colors hover:text-white md:flex"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-px bg-[#1a1a1a] md:grid-cols-2">
          {playbooks.slice(0, 2).map((pb) => (
            <PlaybookCard key={pb.id} playbook={pb} />
          ))}
        </div>
      </div>
    </section>
  )
}

function LaunchSection() {
  const featured = launchDirectories.slice(0, 12)

  return (
    <section className="border-b border-[#1a1a1a]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Launch Your Startup
            </h2>
            <p className="mt-2 text-sm text-[var(--ds-gray-600)]">
              {launchDirectories.length} directories to list your product
            </p>
          </div>
          <Link
            href="/launch"
            className="hidden items-center gap-1.5 text-sm font-medium text-[var(--ds-gray-900)] transition-colors hover:text-white md:flex"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-px bg-[#1a1a1a] sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((dir, i) => (
            <a
              key={dir.name}
              href={dir.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-black p-4 transition-colors hover:bg-[#0a0a0a]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center border border-[#1a1a1a] text-[10px] text-[#555]">
                  {i + 1}
                </span>
                <span className="text-sm text-[#ccc] group-hover:text-white">
                  {dir.name}
                </span>
              </div>
              <ExternalLink className="h-3 w-3 text-[#333] transition-colors group-hover:text-[#888]" />
            </a>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/launch"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white"
          >
            View all directories <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function CommunitiesSection() {
  const featured = redditCommunities.slice(0, 9)

  return (
    <section className="border-b border-[#1a1a1a]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Reddit Communities
            </h2>
            <p className="mt-2 text-sm text-[var(--ds-gray-600)]">
              The only startup Reddit list you need
            </p>
          </div>
          <Link
            href="/communities"
            className="hidden items-center gap-1.5 text-sm font-medium text-[var(--ds-gray-900)] transition-colors hover:text-white md:flex"
          >
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-px bg-[#1a1a1a] sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((community) => (
            <a
              key={community.name}
              href={community.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-black p-5 transition-colors hover:bg-[#0a0a0a]"
            >
              <div>
                <p className="text-sm font-medium text-white">
                  {community.name}
                </p>
                <p className="mt-1 text-xs text-[var(--ds-gray-600)]">
                  {community.members} members
                </p>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-[#333] transition-colors group-hover:text-[#888]" />
            </a>
          ))}
        </div>

        <div className="mt-6 text-center md:hidden">
          <Link
            href="/communities"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white"
          >
            View all communities <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function SubmitCTA() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="geist-grid geist-grid-fade pointer-events-none absolute inset-0"
        style={{ backgroundSize: "64px 64px" }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-[1200px] px-6 py-20 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          Something missing? Help us grow.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-[var(--ds-gray-600)]">
          Stage 1 is fully open source. Submit a PR to add offers, directories,
          communities, or playbooks.
        </p>
        <a
          href="https://github.com/nikhilsbuilds/stage1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 border border-[#333] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#555] hover:bg-[var(--ds-gray-100)]"
        >
          <ExternalLink className="h-4 w-4" />
          Submit an Offer
        </a>
      </div>
    </section>
  )
}

export default function Page() {
  return (
    <>
      <Hero />
      <StatsGrid
        stats={[
          { value: String(offers.length), label: "Verified offers" },
          { value: getTotalValue(), label: "Total value" },
          { value: String(launchDirectories.length), label: "Launch directories" },
          { value: String(redditCommunities.length), label: "Communities" },
        ]}
      />
      <HowItWorks />
      <FeaturedOffers />
      <PlaybooksSection />
      <LaunchSection />
      <CommunitiesSection />
      <SubmitCTA />
    </>
  )
}
