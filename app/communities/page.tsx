"use client"

import { useState } from "react"
import {
  redditCommunities,
  redditCategories,
  type RedditCategory,
} from "@/lib/data"
import { ExternalLink } from "lucide-react"

export default function CommunitiesPage() {
  const [active, setActive] = useState<RedditCategory | "All">("All")

  const filtered =
    active === "All"
      ? redditCommunities
      : redditCommunities.filter((c) => c.category === active)

  return (
    <div className="border-b border-[#1a1a1a]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
          Reddit Communities
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--ds-gray-600)]">
          The only Reddit list you need. Curated subreddits for startup
          founders, developers, marketers, and designers.
        </p>

        {/* Category filters */}
        <div className="mt-8 flex flex-wrap gap-2">
          {(["All", ...redditCategories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`border px-3 py-1.5 text-sm transition-colors ${
                active === cat
                  ? "border-white bg-white text-black"
                  : "border-[#333] text-[#888] hover:border-[#555] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-1 gap-px bg-[#1a1a1a] sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((community) => (
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
      </div>
    </div>
  )
}
