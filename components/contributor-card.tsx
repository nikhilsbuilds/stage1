"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"

interface ContributorCardProps {
  login: string
  avatarUrl: string
  htmlUrl: string
  contributions: number
  initialEndorsements: number
}

export function ContributorCard({
  login,
  avatarUrl,
  htmlUrl,
  contributions,
  initialEndorsements,
}: ContributorCardProps) {
  const [count, setCount] = useState(initialEndorsements)
  const [endorsed, setEndorsed] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const key = `stage1:endorsed:${login}`
    if (sessionStorage.getItem(key)) {
      setEndorsed(true)
    }
  }, [login])

  async function handleEndorse() {
    if (endorsed) return
    setEndorsed(true)
    setAnimating(true)
    sessionStorage.setItem(`stage1:endorsed:${login}`, "1")

    try {
      const res = await fetch("/api/endorse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: login }),
      })
      if (res.ok) {
        const data = await res.json()
        setCount(data.count)
      }
    } catch {
      // silently fail, optimistic UI already updated
    }

    setTimeout(() => setAnimating(false), 600)
  }

  return (
    <div className="flex items-center justify-between bg-black p-5 transition-colors hover:bg-[#0a0a0a]">
      <div className="flex items-center gap-4">
        <img
          src={avatarUrl}
          alt={`${login}'s avatar`}
          width={44}
          height={44}
          className="rounded-full border border-[#1a1a1a]"
        />
        <div>
          <a
            href={htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-white transition-colors hover:text-[var(--ds-blue-900)]"
          >
            @{login}
          </a>
          <p className="mt-0.5 text-xs text-[var(--ds-gray-600)]">
            {contributions} {contributions === 1 ? "contribution" : "contributions"}
          </p>
        </div>
      </div>

      <button
        onClick={handleEndorse}
        disabled={endorsed}
        className={`group flex items-center gap-1.5 border px-3 py-1.5 text-xs transition-all ${
          endorsed
            ? "border-pink-500/30 bg-pink-500/10 text-pink-400"
            : "border-[#333] text-[#888] hover:border-pink-500/50 hover:text-pink-400"
        }`}
        aria-label={endorsed ? `Endorsed ${login}` : `Endorse ${login}`}
      >
        <Heart
          className={`h-3.5 w-3.5 transition-transform ${
            endorsed ? "fill-current" : ""
          } ${animating ? "scale-125" : ""}`}
        />
        <span>{count}</span>
      </button>
    </div>
  )
}
