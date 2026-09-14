import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <main className="container max-w-4xl py-16">
      <div className="eyebrow">{post.category}</div>
      <h1 className="mt-4 text-5xl font-bold leading-tight tracking-[-.04em]">{post.title}</h1>
      <p className="mt-5 max-w-2xl text-lg leading-7 text-[#93a2b2]">{post.description}</p>
      <div className="mt-5 text-sm text-[#718195]">{post.date} · {post.readTime}</div>
      <article className="prose prose-invert mt-12 max-w-none prose-headings:tracking-tight prose-p:text-[#aab5c2] prose-a:text-[#38aaff] prose-code:text-[#6fd5ff]">
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}