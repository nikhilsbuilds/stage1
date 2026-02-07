import type { Metadata } from "next"
import { ContributorCard } from "@/components/contributor-card"
import { Redis } from "@upstash/redis"

export const metadata: Metadata = {
  title: "Contributors",
  description:
    "Meet the people who make Stage1 possible. Open source contributors building the best resource for founders.",
}

interface GitHubContributor {
  login: string
  avatar_url: string
  html_url: string
  contributions: number
  type: string
}

async function getContributors(): Promise<GitHubContributor[]> {
  const res = await fetch(
    "https://api.github.com/repos/nikhilsbuilds/stage1/contributors?per_page=100",
    { next: { revalidate: 3600 } }
  )
  if (!res.ok) return []
  const data: GitHubContributor[] = await res.json()
  return data.filter((c) => c.type === "User")
}

async function getEndorsements(
  usernames: string[]
): Promise<Record<string, number>> {
  if (!usernames.length) return {}
  try {
    const redis = new Redis({
      url: process.env.KV_REST_API_URL!,
      token: process.env.KV_REST_API_TOKEN!,
    })
    const pipeline = redis.pipeline()
    for (const u of usernames) {
      pipeline.get(`stage1:endorse:${u}`)
    }
    const results = await pipeline.exec()
    const counts: Record<string, number> = {}
    usernames.forEach((u, i) => {
      counts[u] = (results[i] as number) ?? 0
    })
    return counts
  } catch {
    return {}
  }
}

export default async function ContributorsPage() {
  const contributors = await getContributors()
  const endorsements = await getEndorsements(
    contributors.map((c) => c.login)
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[#1a1a1a]">
        <div
          className="geist-grid geist-grid-fade pointer-events-none absolute inset-0"
          style={{ backgroundSize: "64px 64px" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1200px] px-6 py-20 text-center md:py-28">
          <h1 className="text-balance text-4xl font-bold tracking-tighter text-white md:text-5xl">
            Our Contributors
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-[var(--ds-gray-700)]">
            Stage1 is built by the community. These are the people who make it
            happen. Endorse them to show your appreciation.
          </p>
          <p className="mt-6 text-sm text-[var(--ds-gray-600)]">
            {contributors.length} contributor{contributors.length !== 1 && "s"} and counting
          </p>
        </div>
      </section>

      {/* Contributors Grid */}
      <section className="border-b border-[#1a1a1a]">
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          {contributors.length > 0 ? (
            <div className="grid grid-cols-1 gap-px bg-[#1a1a1a] sm:grid-cols-2 lg:grid-cols-3">
              {contributors.map((c) => (
                <ContributorCard
                  key={c.login}
                  login={c.login}
                  avatarUrl={c.avatar_url}
                  htmlUrl={c.html_url}
                  contributions={c.contributions}
                  initialEndorsements={endorsements[c.login] ?? 0}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-sm text-[var(--ds-gray-600)]">
              Could not load contributors. Please try again later.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div
          className="geist-grid geist-grid-fade pointer-events-none absolute inset-0"
          style={{ backgroundSize: "64px 64px" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[1200px] px-6 py-20 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Want to see your name here?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[var(--ds-gray-600)]">
            Stage1 is fully open source. Submit a pull request to contribute
            offers, directories, playbooks, or improvements.
          </p>
          <a
            href="https://github.com/nikhilsbuilds/stage1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-[#333] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#555] hover:bg-[var(--ds-gray-100)]"
          >
            Contribute on GitHub
          </a>
        </div>
      </section>
    </>
  )
}
