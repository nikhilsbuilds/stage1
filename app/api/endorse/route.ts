import { Redis } from "@upstash/redis"
import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
})

const keyFor = (username: string) => `stage1:endorse:${username}`

export async function POST(req: Request) {
  try {
    const { username } = await req.json()
    if (!username || typeof username !== "string") {
      return NextResponse.json({ error: "Invalid username" }, { status: 400 })
    }
    const count = await redis.incr(keyFor(username))
    return NextResponse.json({ count })
  } catch {
    return NextResponse.json({ error: "Failed to endorse" }, { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const usernames = searchParams.get("usernames")?.split(",").filter(Boolean)
    if (!usernames?.length) {
      return NextResponse.json({ counts: {} })
    }

    const pipeline = redis.pipeline()
    for (const u of usernames) {
      pipeline.get(keyFor(u))
    }
    const results = await pipeline.exec()

    const counts: Record<string, number> = {}
    usernames.forEach((u, i) => {
      counts[u] = (results[i] as number) ?? 0
    })

    return NextResponse.json({ counts })
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 })
  }
}
