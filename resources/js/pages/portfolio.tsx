import { Head, Link } from '@inertiajs/react';
import type { ReactElement } from 'react';
import Section from '@/components/atoms/section';
import SectionTitle from '@/components/atoms/section-title';
import ProjectCard from '@/components/organisms/project-card';
import PortfolioLayout from '@/layouts/portfolio-layout';
import type { Project } from '@/types/project';

const skills = [
    {
        name: 'SketchUp',
        logo: '/images/sketchup.jpeg',
        desc: "I use SketchUp mostly for 3D modeling — it's my go-to whenever I need to visualize a design or build something from scratch.",
    },
    {
        name: 'Java',
        logo: '/images/java.png',
        desc: "Java was one of the first programming languages I learned. I'm still getting better at it but I can build simple programs and understand how the logic works.",
    },
    {
        name: 'Blender',
        logo: '/images/blender.png',
        desc: "I've been learning Blender for 3D modeling and rendering. It's challenging but I enjoy the creative side of it — especially seeing the final output come together.",
    },
];

const stats = [
    { num: 'UCU', label: 'Urdaneta City University' },
    { num: '3D', label: 'Design & Modeling' },
    { num: '20', label: 'Years Old' },
];

const glassCard =
    'rounded-xl border border-white/[0.08] bg-white/[0.04] transition-colors duration-200 hover:border-[#c8a96e]/35 hover:bg-[#c8a96e]/5';
const adminBtn =
    'inline-flex items-center gap-[7px] rounded-[5px] px-[18px] py-[9px] text-[11px] font-semibold uppercase tracking-[1.2px] transition-all duration-200';
const inputWrap =
    'w-full rounded-lg border border-white/[0.08] bg-white/[0.04] py-3.5 pl-10 pr-3.5 text-sm text-[#f0ece4] outline-none transition-colors placeholder:text-[#4e5060] focus:border-[#c8a96e]';

function Portfolio({ projects }: { projects: Project[] }) {
    return (
        <>
            <Head title="Portfolio — John Lloyd G. Drapiza" />

            {/* HOME */}
            <section
                id="home"
                className="home-grid relative flex min-h-screen flex-col-reverse items-center justify-between gap-9 overflow-hidden bg-[#0d0e12] px-6 py-[100px] md:flex-row md:gap-0 md:px-11 md:py-0 lg:px-20"
            >
                <div className="relative z-[1] max-w-[660px]">
                    <p className="mb-5 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[4px] text-[#c8a96e] before:inline-block before:h-px before:w-7 before:bg-[#c8a96e] before:content-['']">
                        Creative Portfolio
                    </p>
                    <h1 className="font-display mb-6 text-[38px] font-black leading-none tracking-[-1px] md:text-[54px] lg:whitespace-nowrap lg:text-[72px] lg:tracking-[-2px]">
                        John Lloyd<span className="block text-[#c8a96e]">Drapiza.</span>
                    </h1>
                    <p className="max-w-[380px] text-[15px] leading-[1.7] text-[#8b8d97]">
                        Student at Urdaneta City University — aspiring 3D designer and developer, crafting ideas
                        into reality.
                    </p>
                </div>

                <div className="relative z-[1] shrink-0">
                    <div className="relative h-[240px] w-[200px] before:absolute before:-bottom-3.5 before:-right-3.5 before:left-3.5 before:top-3.5 before:rounded-md before:border before:border-[#c8a96e]/35 before:content-[''] md:h-[340px] md:w-[280px]">
                        <div className="relative z-[1] h-full w-full overflow-hidden rounded-md border border-white/[0.08] bg-[#181b26]">
                            <img
                                src="/images/profile.jpg"
                                alt="John Lloyd G. Drapiza"
                                className="block h-full w-full object-cover object-top"
                                onError={(e) => (e.currentTarget.style.display = 'none')}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ABOUT */}
            <Section id="about" className="bg-[#11131a]">
                <SectionTitle>About Me</SectionTitle>
                <div className="grid w-full items-center gap-8 md:grid-cols-2 md:gap-11 lg:gap-20">
                    <p className="text-[17px] leading-[1.9] text-[#8b8d97]">
                        My name is <strong className="text-[#f0ece4]">John Lloyd G. Drapiza</strong>, a 20-year-old
                        student at Urdaneta City University (UCU), residing in Nancamaliran West, Urdaneta City,
                        Pangasinan. Beyond academics, I'm developing expertise in 3D design, thriving in
                        collaborative environments, and mastering effective time management. I'm actively pursuing
                        opportunities to refine these skills and contribute to projects that foster my ongoing
                        personal and professional growth.
                    </p>
                    <div className="flex flex-col gap-4">
                        {stats.map((s) => (
                            <div key={s.label} className={`${glassCard} px-7 py-[22px]`}>
                                <div className="font-display mb-1 text-4xl font-black leading-none text-[#c8a96e]">
                                    {s.num}
                                </div>
                                <div className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#8b8d97]">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* SKILLS */}
            <Section id="skills" className="bg-[#0d0e12]">
                <SectionTitle>My Skills</SectionTitle>
                <div className="grid w-full grid-cols-2 gap-[18px] md:grid-cols-3">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className={`${glassCard} flex flex-col items-center gap-3 px-[18px] pb-5 pt-6 text-center hover:-translate-y-[3px]`}
                        >
                            <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[14px] bg-white p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.12)]">
                                <img src={skill.logo} alt={skill.name} className="h-full w-full object-contain" />
                            </div>
                            <h3 className="text-sm font-bold text-[#f0ece4]">{skill.name}</h3>
                            <p className="text-xs leading-[1.6] text-[#f0ece4]/80">{skill.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* PROJECTS — dynamic section (data comes from the database) */}
            <Section id="gallery" className="bg-[#11131a]">
                <SectionTitle>Projects</SectionTitle>

                <div className="mb-9 flex flex-wrap gap-2.5">
                    <Link
                        href="/projects"
                        className={`${adminBtn} border border-white/[0.08] text-[#8b8d97] hover:border-[#4f8fa8] hover:text-[#4f8fa8]`}
                    >
                        <i className="fas fa-cog"></i> Manage Projects
                    </Link>
                    <Link
                        href="/projects/create"
                        className={`${adminBtn} border border-[#c8a96e] bg-[#c8a96e] text-[#0d0e12] hover:bg-[#d4b87a]`}
                    >
                        <i className="fas fa-plus"></i> Add New Project
                    </Link>
                </div>

                <div className="grid w-full grid-cols-1 gap-[22px] md:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]">
                    {projects.length > 0 ? (
                        projects.map((project) => <ProjectCard key={project.id} project={project} />)
                    ) : (
                        <p className="col-span-full rounded-[10px] border border-dashed border-white/[0.08] px-10 py-[70px] text-center text-[15px] text-[#8b8d97]">
                            No projects yet.{' '}
                            <Link href="/projects/create" className="text-[#c8a96e]">
                                Add your first project!
                            </Link>
                        </p>
                    )}
                </div>
            </Section>

            {/* CONTACT */}
            <Section id="contact" className="bg-[#0d0e12]">
                <SectionTitle>Contact Me</SectionTitle>
                <div className="grid w-full max-w-[880px] gap-11 lg:grid-cols-2 lg:gap-20">
                    <div>
                        <p className="mb-[30px] text-[15px] leading-[1.75] text-[#8b8d97]">
                            Have a project in mind or want to collaborate? Feel free to reach out — I'd love to
                            connect.
                        </p>
                        {[
                            { icon: 'fa-envelope', text: 'johnlloyddrapiza.28@gmail.com' },
                            { icon: 'fa-phone', text: '09912837760' },
                        ].map((item) => (
                            <div key={item.icon} className="mb-3.5 flex items-center gap-3.5 text-[13px] text-[#8b8d97]">
                                <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[7px] border border-white/[0.08] text-xs text-[#c8a96e]">
                                    <i className={`fas ${item.icon}`}></i>
                                </div>
                                {item.text}
                            </div>
                        ))}

                        <p className="mb-3.5 mt-7 text-[10px] font-semibold uppercase tracking-[3px] text-[#4e5060]">
                            Follow Me
                        </p>
                        <div className="flex gap-2">
                            {['fa-facebook-f', 'fa-instagram', 'fa-twitter'].map((icon) => (
                                <a
                                    key={icon}
                                    href="#"
                                    className="flex h-9 w-9 items-center justify-center rounded-[7px] border border-white/[0.08] text-sm text-[#8b8d97] transition hover:border-[#c8a96e] hover:bg-[#c8a96e]/[0.07] hover:text-[#c8a96e]"
                                >
                                    <i className={`fab ${icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Same as the original: display only (not connected to a mailer). */}
                    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
                        <div className="relative">
                            <i className="fas fa-user pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[#4e5060]"></i>
                            <input type="text" placeholder="Your name" className={inputWrap} />
                        </div>
                        <div className="relative">
                            <i className="fas fa-envelope pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-[#4e5060]"></i>
                            <input type="email" placeholder="Your email" className={inputWrap} />
                        </div>
                        <div className="relative">
                            <i className="fas fa-comment-dots pointer-events-none absolute left-3.5 top-[15px] text-xs text-[#4e5060]"></i>
                            <textarea placeholder="Your message..." className={`${inputWrap} h-[150px] resize-none`} />
                        </div>
                        <button
                            type="submit"
                            className="cursor-pointer rounded-lg bg-[#c8a96e] p-3.5 text-xs font-bold uppercase tracking-[1.5px] text-[#0d0e12] transition-colors hover:bg-[#d4b87a]"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </Section>
        </>
    );
}

// Persistent layout (Lesson 5): Navbar + Footer stay mounted while the page changes.
Portfolio.layout = (page: ReactElement) => <PortfolioLayout>{page}</PortfolioLayout>;

export default Portfolio;
