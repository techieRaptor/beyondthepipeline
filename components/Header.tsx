import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#142234] bg-[#050a12]/90 backdrop-blur-xl">
      <div className="container flex h-[68px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="logo-mark"><span>✣</span></span>
          <span className="text-[15px] font-bold tracking-[-0.02em]">
            Beyond<span className="text-[#35bfff]">ThePipeline</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-[13px] text-[#b1bdca] md:flex">
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/projects" className="hover:text-white">Projects</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          {/* <Link href="/about" className="hover:text-white">Speaking</Link> */}
          <Link href="/about" className="hover:text-white">Certifications</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          {/* <span className="text-[#aeb9c5]" aria-label="Search">⌕</span>
          <span className="text-lg text-[#aeb9c5]" aria-label="Theme">☾</span> */}
          <Link href="/contact" className="rounded-md bg-[#1688ff] px-4 py-2.5 text-[12px] font-bold text-white shadow-[0_8px_24px_rgba(22,136,255,.2)] hover:bg-[#2995ff]">
            Get in Touch
          </Link>
        </div>

        <Link href="/contact" className="rounded-md bg-[#1688ff] px-3 py-2 text-xs font-bold md:hidden">
          Contact
        </Link>
      </div>
    </header>
  );
}