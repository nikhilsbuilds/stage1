"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    async function trackVisit() {
      try {
        const hasVisited = sessionStorage.getItem("stage1:visited")
        const method = hasVisited ? "GET" : "POST"
        console.log("[v0] Visitor counter:", method, "hasVisited:", hasVisited)
        
        const res = await fetch("/api/visitors", { 
          method,
          cache: "no-store"
        })
        console.log("[v0] Visitor API response status:", res.status)
        
        if (!res.ok) {
          console.log("[v0] Visitor API error:", await res.text())
          return
        }
        
        const data = await res.json()
        console.log("[v0] Visitor count:", data.count)
        setCount(data.count)
        
        if (!hasVisited) {
          sessionStorage.setItem("stage1:visited", "1")
        }
      } catch (err) {
        console.log("[v0] Visitor counter error:", err)
      }
    }
    trackVisit()
  }, [])

  if (count === null) return null

  return (
    <div className="flex items-center gap-1.5 text-sm text-[#888]">
      <Eye className="h-3.5 w-3.5" />
      <span>{count.toLocaleString()}</span>
    </div>
  )
}
