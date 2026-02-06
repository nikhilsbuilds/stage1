import { Redis } from "@upstash/redis"
import { NextResponse } from "next/server"

// Disable caching for this route
export const dynamic = "force-dynamic"
export const revalidate = 0

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
})

const KEY = "stage1:visitor_count"

export async function POST() {
  try {
    console.log("[v0] POST /api/visitors - incrementing counter")
    const count = await redis.incr(KEY)
    console.log("[v0] POST /api/visitors - count:", count)
    return NextResponse.json({ count })
  } catch (err) {
    console.log("[v0] POST /api/visitors error:", err)
    return NextResponse.json({ error: "Failed to increment" }, { status: 500 })
  }
}

export async function GET() {
  try {
    console.log("[v0] GET /api/visitors - fetching counter")
    const count = (await redis.get<number>(KEY)) ?? 0
    console.log("[v0] GET /api/visitors - count:", count)
    return NextResponse.json({ count })
  } catch (err) {
    console.log("[v0] GET /api/visitors error:", err)
    return NextResponse.json({ error: "Failed to get count" }, { status: 500 })
  }
}
