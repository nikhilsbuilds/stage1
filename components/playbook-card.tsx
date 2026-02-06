import Link from "next/link"
import { getOfferById, type Playbook } from "@/lib/data"
import { ArrowRight } from "lucide-react"

export function PlaybookCard({ playbook }: { playbook: Playbook }) {
  const resolvedOffers = playbook.offers.map((id) => getOfferById(id)).filter(Boolean)

  return (
    <div className="group flex flex-col border border-[#1a1a1a] bg-[var(--ds-background-100)] p-6 transition-colors hover:border-[#333]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-medium text-[var(--ds-gray-1000)]">
            {playbook.title}
          </h3>
          <span className="mt-1.5 inline-block border border-[#1a1a1a] px-2 py-0.5 text-[11px] text-[var(--ds-gray-600)]">
            {playbook.stage} Stage
          </span>
        </div>
        <span className="shrink-0 rounded-full bg-white px-2.5 py-0.5 text-xs font-semibold text-black">
          {playbook.totalValue}
        </span>
      </div>

      <p className="mt-3 text-[13px] leading-relaxed text-[var(--ds-gray-700)]">
        {playbook.description}
      </p>

      <div className="mt-5">
        <p className="mb-2 text-[11px] font-medium uppercase tracking-widest text-[var(--ds-gray-600)]">
          Included
        </p>
        <div className="flex flex-wrap gap-1.5">
          {resolvedOffers.map((offer) =>
            offer ? (
              <Link
                key={offer.id}
                href={`/offers/${offer.id}`}
                className="border border-[#1a1a1a] px-2.5 py-0.5 text-[11px] text-[var(--ds-gray-600)] transition-colors hover:border-[#333] hover:text-white"
              >
                {offer.provider}
              </Link>
            ) : null
          )}
        </div>
      </div>

      <Link
        href={`/playbooks/${playbook.id}`}
        className="mt-5 flex items-center gap-1.5 text-sm font-medium text-white transition-colors hover:text-[var(--ds-gray-900)]"
      >
        View playbook <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  )
}
