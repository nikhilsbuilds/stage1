import { PlaybookCard } from "@/components/playbook-card"
import { playbooks } from "@/lib/data"

export default function PlaybooksPage() {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
          Startup Playbooks
        </h1>
        <p className="mt-2 max-w-lg text-sm text-[var(--ds-gray-600)]">
          Pre-built stacks of verified offers tailored to your startup stage.
          Each playbook bundles the best free credits into one actionable plan.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px bg-[#1a1a1a] md:grid-cols-2">
        {playbooks.map((pb) => (
          <PlaybookCard key={pb.id} playbook={pb} />
        ))}
      </div>
    </div>
  )
}
