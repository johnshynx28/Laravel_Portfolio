import { Head, Link, useForm } from '@inertiajs/react';
import type { FormEvent, ReactElement } from 'react';
import { btnGhost } from '@/components/atoms/ui';
import PageHeader from '@/components/molecules/page-header';
import ProjectForm from '@/components/organisms/project-form';
import AdminLayout from '@/layouts/admin-layout';
import type { ProjectFormData } from '@/types/project';

function Create() {
    // useForm keeps what the user typed, even when Laravel sends back validation errors.
    const { data, setData, post, processing, errors } = useForm<ProjectFormData>({
        title: '',
        description: '',
        tech_stack: '',
        project_url: '',
        repo_url: '',
        date_completed: new Date().toISOString().slice(0, 10),
        image: null,
    });

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post('/projects', { forceFormData: true }); // forceFormData -> needed for the file upload
    };

    return (
        <>
            <Head title="Add New Project" />

            <PageHeader title="Add New Project" icon="fa-plus-circle">
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
                submitLabel="Save Project"
            />
        </>
    );
}

Create.layout = (page: ReactElement) => <AdminLayout>{page}</AdminLayout>;

export default Create;
