type Props = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
};

export default function ProjectCard({ icon, title, description, tags }: Props) {
  return (
    <article className="card card-hover p-5">
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#138dd0]/20 text-xl text-[#35caff]">{icon}</div>
        <div>
          <h3 className="text-[16px] font-semibold">{title}</h3>
          <p className="mt-1 text-[13px] leading-5 text-[#8796a7]">{description}</p>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map(tag => <span key={tag} className="rounded-md bg-[#101d2b] px-2.5 py-1 text-[11px] text-[#b4c0cd]">{tag}</span>)}
      </div>
      <div className="mt-5 flex gap-6 border-t border-[#172638] pt-4 text-xs text-[#9aa8b7]">
        <span>◌ GitHub</span><span className="text-[#32aaff]">↗ Live Demo</span>
      </div>
    </article>
  );
}