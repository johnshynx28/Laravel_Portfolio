import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent, ReactElement } from 'react';
import { btnGhost } from '@/components/atoms/ui';
import PageHeader from '@/components/molecules/page-header';
import ProjectForm from '@/components/organisms/project-form';
import AdminLayout from '@/layouts/admin-layout';
import type { Project, ProjectFormData } from '@/types/project';

type EditFormData = ProjectFormData & { _method: 'put' };

function Edit({ project }: { project: Project }) {
    const { data, setData, post, processing, errors } = useForm<EditFormData>({
        _method: 'put', // PHP can't read files from a real PUT request, so we POST and spoof PUT
        title: project.title,
        description: project.description,
        tech_stack: project.tech_stack,
        project_url: project.project_url ?? '',
        repo_url: project.repo_url ?? '',
        date_completed: project.date_completed,
        image: null,
    });

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(`/projects/${project.id}`, { forceFormData: true });
    };

    return (
        <>
            <Head title={`Edit Project #${project.id}`} />

            <PageHeader title={`Edit Project #${project.id}`} icon="fa-edit">
                <Link href="/projects" className={btnGhost}>
                    <i className="fas fa-arrow-left"></i> Back to Manage
                </Link>
            </PageHeader>

            <ProjectForm
                data={data}
                setData={setData}
                errors={errors}
                processing={processing}
                onSubmit={submit}
                submitLabel="Update Project"
                currentImageUrl={project.image_url}
            />
        </>
    );
}

Edit.layout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default Edit;
