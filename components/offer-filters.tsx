"use client"

import { cn } from "@/lib/utils"
import { categories, stages, type Category, type Stage } from "@/lib/data"
import { Search, X } from "lucide-react"

interface OfferFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  selectedCategory: Category | null
  onCategoryChange: (category: Category | null) => void
  selectedStage: Stage | null
  onStageChange: (stage: Stage | null) => void
}

export function OfferFilters({
  search,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedStage,
  onStageChange,
}: OfferFiltersProps) {
  const hasFilters = search || selectedCategory || selectedStage

  return (
    <div className="space-y-5">
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--ds-gray-600)]" />
        <input
          type="text"
          placeholder="Search offers, providers, categories..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="h-10 w-full border border-[#333] bg-[var(--ds-background-100)] pl-10 pr-10 text-sm text-white placeholder:text-[var(--ds-gray-600)] focus:border-[#555] focus:outline-none"
        />
        {hasFilters && (
          <button
            type="button"
            onClick={() => {
              onSearchChange("")
              onCategoryChange(null)
              onStageChange(null)
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[var(--ds-gray-600)] hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-[var(--ds-gray-600)]">
            Stage
          </p>
          <div className="flex flex-wrap gap-1.5">
            {stages.map((stage) => (
              <button
                key={stage}
                type="button"
                onClick={() => onStageChange(selectedStage === stage ? null : stage)}
                className={cn(
                  "border px-3 py-1 text-[13px] transition-colors",
                  selectedStage === stage
                    ? "border-white bg-white text-black"
                    : "border-[#333] text-[var(--ds-gray-700)] hover:border-[#555] hover:text-white"
                )}
              >
                {stage}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-[var(--ds-gray-600)]">
            Category
          </p>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => onCategoryChange(selectedCategory === cat ? null : cat)}
                className={cn(
                  "border px-3 py-1 text-[13px] transition-colors",
                  selectedCategory === cat
                    ? "border-white bg-white text-black"
                    : "border-[#333] text-[var(--ds-gray-700)] hover:border-[#555] hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
