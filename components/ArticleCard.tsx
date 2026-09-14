import Link from "next/link";

type Props = {
  post: { slug: string; title: string; description: string; category: string; date: string; readTime: string };
  art?: string;
};

export default function ArticleCard({ post, art = "snowflake-art" }: Props) {
  return (
    <Link href={`/blog/${post.slug}`} className="card card-hover block overflow-hidden">
      <div className={`article-art ${art}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl font-bold tracking-tight text-white/85">
            {post.category === "Snowflake" ? "❄" : post.category === "dbt" ? "✕" : post.category.includes("AI") ? "⌁" : "</>"}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-3 text-[11px] font-bold uppercase tracking-[.08em] text-[#35bfff]">{post.category}</div>
        <h3 className="min-h-[52px] text-[16px] font-semibold leading-6">{post.title}</h3>
        <p className="mt-2 min-h-[66px] text-[13px] leading-5 text-[#8998a9]">{post.description}</p>
        <div className="mt-5 flex gap-4 text-[11px] text-[#788798]">
          <span>{post.date}</span><span>·</span><span>{post.readTime}</span>
        </div>
      </div>
    </Link>
  );
}