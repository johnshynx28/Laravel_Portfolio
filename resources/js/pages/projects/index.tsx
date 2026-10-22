import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import type { ReactElement } from 'react';
import { btnDanger, btnEdit, btnGhost, btnPrimary } from '@/components/atoms/ui';
import PageHeader from '@/components/molecules/page-header';
import DeleteModal from '@/components/organisms/delete-modal';
import AdminLayout from '@/layouts/admin-layout';
import type { Project } from '@/types/project';

interface Props {
    projects: Project[];
    flash?: string | null;
}

function Index({ projects, flash }: Props) {
    const [target, setTarget] = useState<Project | null>(null); // project waiting for delete confirmation
    const [deleting, setDeleting] = useState(false);

    const confirmDelete = () => {
        if (!target) return;
        setDeleting(true);
        router.delete(`/projects/${target.id}`, {
            preserveScroll: true,
            onFinish: () => {
                setDeleting(false);
                setTarget(null);
            },
        });
    };

    return (
        <>
            <Head title="Manage Projects" />

            <PageHeader title="Manage Projects" icon="fa-cog">
                <Link href="/projects/create" className={btnPrimary}>
                    <i className="fas fa-plus"></i> Add New Project
                </Link>
                <Link href="/" className={btnGhost}>
                    <i className="fas fa-arrow-left"></i> Back to Portfolio
                </Link>
            </PageHeader>

            {flash && (
                <div className="mb-5 flex items-center gap-2 rounded-lg border border-[#2ea057]/30 bg-[#2ea057]/10 px-4 py-3 text-sm text-[#4ec97a]">
                    <i className="fas fa-check-circle"></i> {flash}
                </div>
            )}

            <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-[#181b26]">
                {projects.length > 0 ? (
                    <table className="w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="border-b border-white/[0.08] text-[11px] uppercase tracking-[1.2px] text-[#4e5060]">
                                <th className="px-4 py-3">Image</th>
                                <th className="px-4 py-3">Title</th>
                                <th className="px-4 py-3">Tech Stack</th>
                                <th className="px-4 py-3">Date</th>
                                <th className="px-4 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                                <tr key={project.id} className="border-b border-white/[0.05] last:border-0">
                                    <td className="px-4 py-3">
                                        {project.image_url ? (
                                            <img
                                                src={project.image_url}
                                                alt={project.title}
                                                className="h-12 w-16 rounded object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-12 w-16 items-center justify-center rounded bg-[#0d0e12] text-[#4e5060]">
                                                <i className="fas fa-image"></i>
                                            </div>
                                        )}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="font-semibold text-[#f0ece4]">{project.title}</div>
                                        <div className="mt-0.5 max-w-xs truncate text-xs text-[#8b8d97]">
                                            {project.description}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-[#8b8d97]">{project.tech_stack}</td>
                                    <td className="whitespace-nowrap px-4 py-3 text-[#8b8d97]">
                                        {project.date_completed}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex justify-end gap-2">
                                            <Link href={`/projects/${project.id}/edit`} className={btnEdit}>
                                                <i className="fas fa-edit"></i> Edit
                                            </Link>
                                            <button onClick={() => setTarget(project)} className={btnDanger}>
                                                <i className="fas fa-trash"></i> Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="px-6 py-16 text-center text-[#8b8d97]">
                        <i className="fas fa-folder-open mb-3 text-4xl text-[#4e5060]"></i>
                        <p>
                            No projects yet.{' '}
                            <Link href="/projects/create" className="text-[#c8a96e]">
                                Add your first project!
                            </Link>
                        </p>
                    </div>
                )}
            </div>

            <DeleteModal
                project={target}
                processing={deleting}
                onCancel={() => setTarget(null)}
                onConfirm={confirmDelete}
            />
        </>
    );
}

// Persistent layout (Lesson 5): the frame stays mounted, only the content changes.
Index.layout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default Index;
