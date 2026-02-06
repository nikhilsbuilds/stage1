"use client"

import { useState } from "react"
import { launchDirectories } from "@/lib/data"
import { ExternalLink, Search } from "lucide-react"

export default function LaunchPage() {
  const [query, setQuery] = useState("")

  const filtered = query
    ? launchDirectories.filter((d) =>
        d.name.toLowerCase().includes(query.toLowerCase()),
      )
    : launchDirectories

  return (
    <div className="border-b border-[#1a1a1a]">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
          Launch Your Startup
        </h1>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--ds-gray-600)]">
          {launchDirectories.length} directories and platforms where you can
          list and launch your SaaS or startup. Sorted for maximum visibility.
        </p>

        {/* Search */}
        <div className="relative mt-8 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#555]" />
          <input
            type="text"
            placeholder="Search directories..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-[#1a1a1a] bg-black py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-[#555] focus:border-[#333] focus:outline-none"
          />
        </div>

        {/* Count */}
        <p className="mt-4 text-xs text-[var(--ds-gray-600)]">
          Showing {filtered.length} of {launchDirectories.length} directories
        </p>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 gap-px bg-[#1a1a1a] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filtered.map((dir, i) => (
            <a
              key={dir.name}
              href={dir.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-black p-4 transition-colors hover:bg-[#0a0a0a]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center border border-[#1a1a1a] text-xs text-[#555]">
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
      </div>
    </div>
  )
}
