import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#142234]">
      <div className="container grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-4 flex items-center gap-3 font-bold">
            <span className="logo-mark"><span>✣</span></span>
            <span>Beyond<span className="text-[#35bfff]">ThePipeline</span></span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-[#8493a4]">
            Sharing practical knowledge on data engineering, Snowflake, dbt, AI, and building scalable data platforms.
          </p>
          <div className="mt-5 flex gap-4 text-sm text-[#8e9baa]">
            <span>in</span><span>◉</span><span>𝕏</span><span>✉</span>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Explore</h3>
          <div className="space-y-3 text-sm text-[#8b99a9]">
            <Link className="block hover:text-white" href="/blog">Articles</Link>
            <Link className="block hover:text-white" href="/projects">Projects</Link>
            <Link className="block hover:text-white" href="/about">About</Link>
            <Link className="block hover:text-white" href="/blog">Categories</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Resources</h3>
          <div className="space-y-3 text-sm text-[#8b99a9]">
            <Link className="block hover:text-white" href="/about">Resume</Link>
            <Link className="block hover:text-white" href="/about">Certifications</Link>
            <Link className="block hover:text-white" href="/about">Speaking</Link>
            <Link className="block hover:text-white" href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold">Categories</h3>
          <div className="space-y-3 text-sm text-[#8b99a9]">
            <span className="block">Snowflake</span>
            <span className="block">dbt</span>
            <span className="block">Data Engineering</span>
            <span className="block">AI & ML</span>
            <span className="block">SQL</span>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-2 border-t border-[#101d2b] py-6 text-xs text-[#667587] md:flex-row md:justify-between">
        <span>Built with Next.js · Tailwind CSS</span>
        <span>© 2026 BeyondThePipeline</span>
      </div>
    </footer>
  );
}