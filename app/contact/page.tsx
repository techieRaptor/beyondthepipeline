import Link from "next/link";
export const metadata = { title: "Contact" };
export default function ContactPage() {
  return <main className="container py-16"><div className="max-w-2xl"><div className="eyebrow">Contact</div><h1 className="mt-3 text-5xl font-bold tracking-[-.04em]">Let's build something useful.</h1><p className="mt-5 text-lg leading-7 text-[#93a2b2]">For engineering conversations, collaboration, speaking, or consulting opportunities, connect through LinkedIn or GitHub.</p><div className="mt-8 flex gap-4"><Link className="btn-primary" href="https://www.linkedin.com/">LinkedIn ↗</Link><Link className="btn-secondary" href="https://github.com/">GitHub ↗</Link></div></div></main>;
}