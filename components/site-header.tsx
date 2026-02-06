"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { VisitorCounter } from "@/components/visitor-counter"

const navItems = [
  { href: "/offers", label: "Offers" },
  { href: "/playbooks", label: "Playbooks" },
  { href: "/launch", label: "Launch" },
  { href: "/communities", label: "Communities" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-black/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center overflow-hidden">
            <Image
              src="/stage1-logo.png"
              alt="Stage 1 logo"
              width={160}
              height={80}
              className="h-12 w-auto -my-2"
              priority
            />
          </Link>

          <span className="hidden h-6 w-px bg-[#333] md:block" aria-hidden="true" />

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1.5 text-sm transition-colors",
                  pathname === item.href
                    ? "text-white"
                    : "text-[#888] hover:text-[#fafafa]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <VisitorCounter />
          <a
          href="https://github.com/nikhilsbuilds/stage1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-[#333] px-3 py-1.5 text-sm text-[#888] transition-colors hover:border-[#555] hover:text-white"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
          <span className="hidden sm:inline">GitHub</span>
        </a>
        </div>
      </nav>
    </header>
  )
}
