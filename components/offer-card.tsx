import Link from "next/link"
import type { Offer } from "@/lib/data"
import { ArrowUpRight } from "lucide-react"

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <Link
      href={`/offers/${offer.id}`}
      className="group relative flex flex-col border border-[#1a1a1a] bg-[var(--ds-background-100)] p-5 transition-colors hover:border-[#333] hover:bg-[var(--ds-background-200)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-medium text-[var(--ds-gray-1000)]">
              {offer.name}
            </h3>
            {offer.verified && (
              <svg className="h-3.5 w-3.5 shrink-0 text-[var(--ds-blue-900)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-label="Verified">
                <path d="M9 12l2 2 4-4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            )}
          </div>
          <p className="mt-0.5 text-[13px] text-[var(--ds-gray-600)]">{offer.provider}</p>
        </div>
        <span className="shrink-0 rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-black">
          {offer.value}
        </span>
      </div>

      <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-[var(--ds-gray-700)]">
        {offer.tagline}
      </p>

      <div className="mt-auto flex items-center justify-between pt-4">
        <div className="flex flex-wrap gap-1.5">
          {offer.stages.slice(0, 2).map((s) => (
            <span key={s} className="border border-[#1a1a1a] px-2 py-0.5 text-[11px] text-[var(--ds-gray-600)]">
              {s}
            </span>
          ))}
          <span className="border border-[#1a1a1a] px-2 py-0.5 text-[11px] text-[var(--ds-gray-600)]">
            {offer.category}
          </span>
        </div>
        <ArrowUpRight className="h-4 w-4 text-[var(--ds-gray-600)] opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
    </Link>
  )
}
