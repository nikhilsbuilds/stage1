"use client"

import { useState, useMemo } from "react"
import { OfferCard } from "@/components/offer-card"
import { OfferFilters } from "@/components/offer-filters"
import { offers, searchOffers, type Category, type Stage } from "@/lib/data"
import { PackageOpen } from "lucide-react"

export default function OffersPage() {
  const [search, setSearch] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null)

  const filtered = useMemo(() => {
    let results = search ? searchOffers(search) : [...offers]
    if (selectedCategory) results = results.filter((o) => o.category === selectedCategory)
    if (selectedStage) results = results.filter((o) => o.stages.includes(selectedStage))
    return results.sort((a, b) => b.upvotes - a.upvotes)
  }, [search, selectedCategory, selectedStage])

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
          Browse Offers
        </h1>
        <p className="mt-2 text-sm text-[var(--ds-gray-600)]">
          {offers.length} verified startup programs across 9 categories
        </p>
      </div>

      <OfferFilters
        search={search}
        onSearchChange={setSearch}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        selectedStage={selectedStage}
        onStageChange={setSelectedStage}
      />

      <div className="mt-8">
        {filtered.length > 0 ? (
          <>
            <p className="mb-4 text-[13px] text-[var(--ds-gray-600)]">
              {filtered.length} {filtered.length === 1 ? "offer" : "offers"} found
            </p>
            <div className="grid grid-cols-1 gap-px bg-[#1a1a1a] sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <PackageOpen className="h-12 w-12 text-[var(--ds-gray-400)]" />
            <p className="mt-4 text-sm font-medium text-white">No offers found</p>
            <p className="mt-1 text-[13px] text-[var(--ds-gray-600)]">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
