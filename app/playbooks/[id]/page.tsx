import { notFound } from "next/navigation"
import Link from "next/link"
import { OfferCard } from "@/components/offer-card"
import { getOfferById, playbooks } from "@/lib/data"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return playbooks.map((pb) => ({ id: pb.id }))
}

export default async function PlaybookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const playbook = playbooks.find((pb) => pb.id === id)
  if (!playbook) notFound()

  const resolvedOffers = playbook.offers.map((offerId) => getOfferById(offerId)).filter(Boolean)

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <Link
        href="/playbooks"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-[var(--ds-gray-600)] transition-colors hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to playbooks
      </Link>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tighter text-white md:text-3xl">
            {playbook.title}
          </h1>
          <div className="mt-3 flex items-center gap-3">
            <span className="border border-[#333] px-3 py-1 text-[12px] text-[var(--ds-gray-600)]">
              {playbook.stage} Stage
            </span>
            <span className="text-sm text-[var(--ds-gray-600)]">
              {resolvedOffers.length} offers included
            </span>
          </div>
        </div>
        <span className="shrink-0 bg-white px-4 py-1.5 text-sm font-bold text-black">
          {playbook.totalValue}
        </span>
      </div>

      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[var(--ds-gray-700)]">
        {playbook.description}
      </p>

      <div className="mt-10">
        <h2 className="mb-5 text-[11px] font-medium uppercase tracking-widest text-[var(--ds-gray-600)]">
          Offers in this playbook
        </h2>
        <div className="grid grid-cols-1 gap-px bg-[#1a1a1a] sm:grid-cols-2 lg:grid-cols-3">
          {resolvedOffers.map(
            (offer) => offer && <OfferCard key={offer.id} offer={offer} />
          )}
        </div>
      </div>
    </div>
  )
}
