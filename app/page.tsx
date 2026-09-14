import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import ProjectCard from "@/components/ProjectCard";
import { getAllPosts } from "@/lib/blog";

const projects = [
  { icon: "❄", title: "Snowflake Cost Analyzer", description: "Analyze and optimize Snowflake costs with actionable engineering insights.", tags: ["Snowflake", "Python", "Streamlit"] },
  { icon: "</>", title: "SQL 50", description: "A practical SQL challenge built around real interview and analytics patterns.", tags: ["SQL", "Next.js", "Tailwind CSS"] }
];

export default function Home() {
  const posts = getAllPosts().slice(0, 4);
  const art = ["snowflake-art", "dbt-art", "ai-art", "sql-art"];

  return (
    <main>
      <section className="relative overflow-hidden border-b border-[#142234]">
        <div className="grid-bg absolute inset-0" />
        <div className="container relative grid min-h-[530px] items-center gap-6 py-14 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-[650px]">
            <div className="eyebrow mb-5 inline-flex rounded-full border border-[#1c3449] bg-[#07121e] px-3 py-2">
              DATA ENGINEERING · SNOWFLAKE · AI
            </div>
            <h1 className="hero-title text-[60px] font-bold leading-[1.01] tracking-[-.045em]">
              Building Data Platforms.<br />
              Exploring AI.<br />
              <span className="text-[#218cff]">Sharing What Works.</span>
            </h1>
            <p className="mt-6 max-w-[590px] text-[17px] leading-7 text-[#a2afbe]">
              Deep dives, architectural patterns, and lessons from building scalable data systems with Snowflake, dbt, Python, and modern AI.
            </p>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link className="btn-primary" href="/blog">Read Articles <span>→</span></Link>
              <Link className="btn-secondary" href="/projects">View Projects <span>↗</span></Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {["Snowflake", "dbt", "Python", "Airflow", "Cortex AI"].map((x, i) =>
                <span className="tech-pill" key={x}><span className="tech-dot" style={{background: i === 1 ? "#ff684f" : i === 2 ? "#f2b84b" : i === 3 ? "#23b5a4" : i === 4 ? "#55b8ff" : "#35d5ff"}} />{x}</span>
              )}
            </div>
          </div>

          <div className="pipeline-visual hidden lg:block">
            <div className="pipeline-track" />
            <div className="snowflake-core" />
            <div className="pipeline-node node-ingest">INGEST</div>
            <div className="pipeline-node node-transform">TRANSFORM</div>
            <div className="pipeline-node node-model">MODEL</div>
            <div className="pipeline-node node-insights">INSIGHTS</div>
            <div className="chart-bars"><i/><i/><i/><i/></div>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <div className="mb-5 flex items-end justify-between">
          <div><div className="eyebrow">Writing</div><h2 className="mt-2 text-2xl font-semibold tracking-tight">Latest Articles</h2></div>
          <Link className="text-sm text-[#2799ff] hover:text-white" href="/blog">View all articles →</Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post, i) => <ArticleCard key={post.slug} post={post} art={art[i % art.length]} />)}
        </div>
      </section>

      <section className="container py-10">
        <div className="mb-5 flex items-end justify-between">
          <div><div className="eyebrow">Building</div><h2 className="mt-2 text-2xl font-semibold tracking-tight">Featured Projects</h2></div>
          <Link className="text-sm text-[#2799ff] hover:text-white" href="/projects">View all projects →</Link>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map(project => <ProjectCard key={project.title} {...project} />)}
        </div>
      </section>

      <section className="container py-10">
        <div className="card flex flex-col gap-6 p-7 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-[#167cff]/20 text-xl text-[#45b8ff]">✉</div>
            <div>
              <h2 className="font-semibold">Stay in the loop</h2>
              <p className="mt-1 text-sm text-[#8c9aab]">New articles, projects, and engineering notes — without the noise.</p>
            </div>
          </div>
          <div className="flex w-full max-w-[430px] gap-2">
            <input aria-label="Email address" placeholder="Enter your email" className="min-w-0 flex-1 rounded-md border border-[#25364a] bg-[#07101a] px-4 py-3 text-sm outline-none placeholder:text-[#667789] focus:border-[#278fff]" />
            <button className="rounded-md bg-[#1688ff] px-5 py-3 text-sm font-bold">Subscribe</button>
          </div>
        </div>
      </section>
    </main>
  );
}