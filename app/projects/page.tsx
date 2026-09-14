import ProjectCard from "@/components/ProjectCard";
export const metadata = { title: "Projects" };
const projects = [
  { icon: "❄", title: "Snowflake Cost Analyzer", description: "Analyze and optimize Snowflake costs with actionable engineering insights.", tags: ["Snowflake", "Python", "Streamlit"] },
  { icon: "</>", title: "SQL 50", description: "A practical SQL challenge built around real interview and analytics patterns.", tags: ["SQL", "Next.js", "Tailwind CSS"] },
  { icon: "✣", title: "Cortex AI Experiments", description: "Hands-on experiments exploring Snowflake Cortex and AI-native data workflows.", tags: ["Snowflake", "Cortex AI", "Python"] }
];
export default function ProjectsPage() {
  return <main className="container py-16"><div className="eyebrow">Building</div><h1 className="mt-3 text-5xl font-bold tracking-[-.04em]">Projects</h1><p className="mt-5 max-w-2xl text-lg leading-7 text-[#93a2b2]">Experiments and practical engineering projects built to solve real problems.</p><div className="mt-12 grid gap-5 md:grid-cols-2">{projects.map(p => <ProjectCard key={p.title} {...p}/>)}</div></main>;
}