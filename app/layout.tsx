import React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Stage1 - Everything Founders Need to Launch",
    template: "%s | Stage1",
  },
  description:
    "Free credits, launch directories, startup communities, and playbooks for early-stage founders. Open source, no affiliates, community owned.",
  openGraph: {
    title: "Stage1 - Everything Founders Need to Launch",
    description:
      "Free credits, launch directories, startup communities, and playbooks for early-stage founders. Open source, no affiliates, community owned.",
    images: [
      {
        url: "/stage1-og.png",
        width: 1200,
        height: 630,
        alt: "Stage1 - Everything Founders Need to Launch",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stage1 - Everything Founders Need to Launch",
    description:
      "Free credits, launch directories, startup communities, and playbooks for early-stage founders. Open source, no affiliates, community owned.",
    images: ["/stage1-og.png"],
  },
}

export const viewport: Viewport = {
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>
        <SiteHeader />
        <main className="min-h-[calc(100vh-3.5rem)]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
