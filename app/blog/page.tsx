import ArticleCard from "@/components/ArticleCard";
import { getAllPosts } from "@/lib/blog";

export const metadata = { title: "Articles" };

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <main className="container py-16">
      <div className="max-w-2xl">
        <div className="eyebrow">Writing</div>
        <h1 className="mt-3 text-5xl font-bold tracking-[-.04em]">Articles</h1>
        <p className="mt-5 text-lg leading-7 text-[#93a2b2]">Practical notes on data engineering, Snowflake, dbt, Python, architecture, and AI.</p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => <ArticleCard key={post.slug} post={post} art={["snowflake-art","dbt-art","ai-art","sql-art"][i % 4]} />)}
      </div>
    </main>
  );
}