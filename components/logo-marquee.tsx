"use client"

import Image from "next/image"

const logos = [
  { name: "Vercel", src: "/logos/vercel.webp", width: 100 },
  { name: "AWS", src: "/logos/aws.webp", width: 70 },
  { name: "Anthropic", src: "/logos/anthropic.webp", width: 28 },
  { name: "Cursor", src: "/logos/cursor.webp", width: 100 },
  { name: "Neon", src: "/logos/neon.webp", width: 80 },
  { name: "Notion", src: "/logos/notion.webp", width: 90 },
  { name: "ElevenLabs", src: "/logos/elevenlabs.webp", width: 100 },
  { name: "v0", src: "/logos/v0.webp", width: 36 },
]

export function LogoMarquee() {
  return (
    <div className="mt-14 flex flex-col items-center gap-6">
      <p className="text-xs uppercase tracking-widest text-[#444]">
        Offers from
      </p>
      <div className="relative w-full max-w-[900px] overflow-hidden">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32"
          style={{
            background: "linear-gradient(to right, black 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32"
          style={{
            background: "linear-gradient(to left, black 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <div className="marquee-track flex w-max items-center">
          {[0, 1].map((set) => (
            <div
              key={set}
              className="flex shrink-0 items-center"
              aria-hidden={set === 1}
            >
              {logos.map((logo) => (
                <div
                  key={`${set}-${logo.name}`}
                  className="flex shrink-0 items-center justify-center px-8"
                >
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    width={logo.width}
                    height={40}
                    className="h-5 w-auto opacity-50 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
