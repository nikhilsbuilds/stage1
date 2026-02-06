import { notFound } from "next/navigation"
import Link from "next/link"
import { getOfferById, offers } from "@/lib/data"
import { ArrowLeft, ArrowUpRight, CheckCircle2, Clock, ExternalLink, Info } from "lucide-react"

export function generateStaticParams() {
  return offers.map((offer) => ({ id: offer.id }))
}

export default async function OfferDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const offer = getOfferById(id)
  if (!offer) notFound()

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/offers"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-[var(--ds-gray-600)] transition-colors hover:text-white"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to offers
      </Link>

      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl font-bold tracking-tighter text-white md:text-3xl">
              {offer.name}
            </h1>
            {offer.verified && <CheckCircle2 className="h-5 w-5 text-[var(--ds-blue-900)]" />}
          </div>
          <p className="mt-1.5 text-sm text-[var(--ds-gray-600)]">by {offer.provider}</p>
        </div>
        <span className="shrink-0 bg-white px-4 py-1.5 text-sm font-bold text-black">
          {offer.value}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-1.5">
        {offer.stages.map((stage) => (
          <span key={stage} className="border border-[#333] px-3 py-1 text-[12px] text-[var(--ds-gray-600)]">
            {stage}
          </span>
        ))}
        <span className="border border-[#333] px-3 py-1 text-[12px] text-[var(--ds-gray-600)]">
          {offer.category}
        </span>
        {offer.featured && (
          <span className="bg-[var(--ds-gray-100)] px-3 py-1 text-[12px] font-medium text-white">
            Featured
          </span>
        )}
      </div>

      <div className="mt-10 space-y-8">
        <div>
          <h2 className="text-[11px] font-medium uppercase tracking-widest text-[var(--ds-gray-600)]">
            About
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ds-gray-900)]">
            {offer.description}
          </p>
        </div>

        <div className="border border-[#1a1a1a] p-5">
          <h2 className="flex items-center gap-2 text-sm font-medium text-white">
            <Info className="h-4 w-4 text-[var(--ds-gray-600)]" />
            Eligibility
          </h2>
          <ul className="mt-4 space-y-3">
            {offer.eligibility.map((req) => (
              <li key={req} className="flex items-start gap-2.5 text-sm text-[var(--ds-gray-900)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--ds-gray-600)]" />
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] font-medium uppercase tracking-widest text-[var(--ds-gray-600)]">
            How to Apply
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--ds-gray-900)]">
            {offer.howToApply}
          </p>
        </div>

        {offer.expiresAt && (
          <div className="flex items-center gap-2 text-sm text-[var(--ds-gray-600)]">
            <Clock className="h-4 w-4" />
            Expires: {offer.expiresAt}
          </div>
        )}

        <div className="flex flex-wrap gap-1.5">
          {offer.tags.map((tag) => (
            <span key={tag} className="border border-[#1a1a1a] px-2.5 py-0.5 text-[12px] text-[var(--ds-gray-600)]">
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 border-t border-[#1a1a1a] pt-8">
          <a
            href={offer.applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[var(--ds-gray-900)]"
          >
            Apply Now
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/nikhilsbuilds/stage1/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[#333] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#555] hover:bg-[var(--ds-gray-100)]"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Report Issue
          </a>
        </div>
      </div>
    </div>
  )
}
