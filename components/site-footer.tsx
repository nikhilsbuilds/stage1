import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1a1a1a]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <p className="text-sm text-[#666]">
          Open source. No affiliates. Community owned.
        </p>
        <div className="flex items-center gap-6 text-sm text-[#666]">
          <nav className="flex items-center gap-6" aria-label="Footer">
            <Link href="/offers" className="transition-colors hover:text-white">
              Offers
            </Link>
            <Link href="/playbooks" className="transition-colors hover:text-white">
              Playbooks
            </Link>
            <Link href="/contributors" className="transition-colors hover:text-white">
              Contributors
            </Link>
            <a href="https://github.com/nikhilsbuilds/stage1" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
              Contribute
            </a>
          </nav>
          <span className="h-3 w-px bg-[#333]" aria-hidden="true" />
          <a
            href="https://v0.link/nikhil-shukla"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            Built with v0
          </a>
        </div>
      </div>
    </footer>
  )
}
