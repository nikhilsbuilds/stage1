"use client"

import { useEffect, useRef, useState } from "react"

function parseValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^0-9]*)([0-9,]+)(.*)$/)
  if (!match) return { prefix: "", number: 0, suffix: value }
  return {
    prefix: match[1],
    number: parseInt(match[2].replace(/,/g, ""), 10),
    suffix: match[3],
  }
}

function formatNumber(n: number): string {
  return n.toLocaleString()
}

function AnimatedNumber({
  value,
  duration = 1800,
}: {
  value: string
  duration?: number
}) {
  const { prefix, number: target, suffix } = parseValue(value)
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const start = performance.now()

          function tick(now: number) {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplay(Math.floor(eased * target))

            if (progress < 1) {
              requestAnimationFrame(tick)
            } else {
              setDisplay(target)
            }
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {formatNumber(display)}
      {suffix}
    </span>
  )
}

interface Stat {
  value: string
  label: string
}

export function StatsGrid({ stats }: { stats: Stat[] }) {
  return (
    <section className="border-b border-[#1a1a1a]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center px-6 py-10 ${
                i < 3 ? "border-b border-[#1a1a1a] md:border-b-0 md:border-r" : ""
              } ${i < 2 ? "border-r md:border-r" : ""}`}
            >
              <p className="text-3xl font-bold tracking-tight text-white md:text-5xl">
                <AnimatedNumber value={stat.value} />
              </p>
              <p className="mt-2 text-xs text-[var(--ds-gray-600)] md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
