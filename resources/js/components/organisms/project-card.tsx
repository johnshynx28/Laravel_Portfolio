import type { Project } from '@/types/project';

// One card in the public "Projects" section.
const formatDate = (d: string) =>
    new Date(`${d}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

export default function ProjectCard({ project }: { project: Project }) {
    const tags = project.tech_stack
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean);

    return (
        <div className="group flex flex-col overflow-hidden rounded-[10px] border border-white/[0.08] bg-[#181b26] transition duration-300 hover:-translate-y-1.5 hover:border-[#c8a96e]/25 hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
            {/* image — fixed height, always on top */}
            <div className="relative h-[210px] w-full shrink-0 overflow-hidden bg-[#0d0e12]">
                {project.image_url ? (
                    <img
                        src={project.image_url}
                        alt={project.title}
                        className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.07]"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center text-[40px] text-[#4e5060]">
                        <i className="fas fa-image"></i>
                    </div>
                )}
                <span className="absolute left-3 top-3 rounded-[3px] border border-[#c8a96e]/20 bg-[rgba(13,14,18,0.82)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[1.5px] text-[#c8a96e] backdrop-blur-sm">
                    Project
                </span>
            </div>

            {/* text — fully below the image */}
            <div className="flex flex-1 flex-col gap-[7px] px-5 pb-5 pt-[18px]">
                <h3 className="font-display text-[17px] font-bold leading-snug text-[#f0ece4]">{project.title}</h3>
                <p className="line-clamp-3 flex-1 text-[13px] leading-[1.65] text-[#8b8d97]">{project.description}</p>

                {tags.length > 0 && (
                    <div className="mt-1 flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full border border-[#4f8fa8]/30 bg-[#4f8fa8]/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#4f8fa8]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <div className="mt-2.5 flex items-center justify-between border-t border-white/[0.08] pt-3">
                    <span className="flex items-center gap-[5px] text-[11px] text-[#4e5060]">
                        <i className="fas fa-calendar-alt text-[10px]"></i>
                        {formatDate(project.date_completed)}
                    </span>
                    <span className="flex gap-1.5">
                        {project.project_url && (
                            <a
                                href={project.project_url}
                                target="_blank"
                                rel="noreferrer"
                                title="View project"
                                className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-white/[0.08] text-[10px] text-[#4e5060] transition hover:border-[#c8a96e] hover:text-[#c8a96e]"
                            >
                                <i className="fas fa-arrow-up-right-from-square"></i>
                            </a>
                        )}
                        {project.repo_url && (
                            <a
                                href={project.repo_url}
                                target="_blank"
                                rel="noreferrer"
                                title="View repository"
                                className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-white/[0.08] text-[11px] text-[#4e5060] transition hover:border-[#c8a96e] hover:text-[#c8a96e]"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        )}
                    </span>
                </div>
            </div>
        </div>
    );
}
