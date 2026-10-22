import { Link } from '@inertiajs/react';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { btnGhost, btnPrimary, inputClass } from '@/components/atoms/ui';
import FormField from '@/components/molecules/form-field';
import type { ProjectFormData } from '@/types/project';

interface Props {
    data: ProjectFormData;
    setData: <K extends keyof ProjectFormData>(key: K, value: ProjectFormData[K]) => void;
    errors: Partial<Record<keyof ProjectFormData, string>>;
    processing: boolean;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    submitLabel: string;
    currentImageUrl?: string | null;
}

// Shared by create.tsx and edit.tsx — one form, two pages.
export default function ProjectForm({ data, setData, errors, processing, onSubmit, submitLabel, currentImageUrl }: Props) {
    const [preview, setPreview] = useState<string | null>(null);

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setData('image', file);
        setPreview(file && file.type.startsWith('image/') ? URL.createObjectURL(file) : null);
    };

    // noValidate: let Laravel (the server) do the validating so its error messages are shown.
    return (
        <form onSubmit={onSubmit} noValidate className="rounded-xl border border-white/[0.08] bg-[#181b26] p-7">
            <FormField label="Title" icon="fa-heading" error={errors.title}>
                <input
                    type="text"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    placeholder="e.g. Light House"
                    className={inputClass(errors.title)}
                />
            </FormField>

            <FormField label="Description" icon="fa-align-left" error={errors.description}>
                <textarea
                    rows={5}
                    value={data.description}
                    onChange={(e) => setData('description', e.target.value)}
                    placeholder="What is this project about?"
                    className={inputClass(errors.description)}
                />
            </FormField>

            <FormField
                label="Tech Stack"
                icon="fa-layer-group"
                error={errors.tech_stack}
                hint="Separate with commas, e.g. Blender, Figma"
            >
                <input
                    type="text"
                    value={data.tech_stack}
                    onChange={(e) => setData('tech_stack', e.target.value)}
                    placeholder="Blender, Figma"
                    className={inputClass(errors.tech_stack)}
                />
            </FormField>

            <div className="grid gap-x-5 md:grid-cols-2">
                <FormField label="Project URL (optional)" icon="fa-link" error={errors.project_url}>
                    <input
                        type="text"
                        value={data.project_url}
                        onChange={(e) => setData('project_url', e.target.value)}
                        placeholder="https://example.com"
                        className={inputClass(errors.project_url)}
                    />
                </FormField>

                <FormField label="Repository URL (optional)" icon="fa-code-branch" error={errors.repo_url}>
                    <input
                        type="text"
                        value={data.repo_url}
                        onChange={(e) => setData('repo_url', e.target.value)}
                        placeholder="https://github.com/you/repo"
                        className={inputClass(errors.repo_url)}
                    />
                </FormField>
            </div>

            <FormField label="Date Completed" icon="fa-calendar" error={errors.date_completed}>
                <input
                    type="date"
                    value={data.date_completed}
                    onChange={(e) => setData('date_completed', e.target.value)}
                    className={inputClass(errors.date_completed)}
                />
            </FormField>

            <FormField
                label={currentImageUrl ? 'Image (leave empty to keep current)' : 'Image (optional)'}
                icon="fa-image"
                error={errors.image}
                hint="JPG, PNG or WEBP — max 2 MB"
            >
                {(preview || currentImageUrl) && (
                    <div className="mb-3">
                        <p className="mb-1.5 text-[11px] uppercase tracking-wider text-[#4e5060]">
                            {preview ? 'New image' : 'Current image'}
                        </p>
                        <img
                            src={preview || currentImageUrl || ''}
                            alt="Preview"
                            className="h-36 rounded-lg border border-white/[0.08] object-cover"
                        />
                    </div>
                )}
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImage}
                    className={`${inputClass(errors.image)} cursor-pointer file:mr-3 file:cursor-pointer file:rounded file:border-0 file:bg-[#c8a96e] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-[#0d0e12]`}
                />
            </FormField>

            <div className="mt-2 flex gap-3">
                <button type="submit" disabled={processing} className={btnPrimary}>
                    <i className="fas fa-save"></i> {processing ? 'Saving...' : submitLabel}
                </button>
                <Link href="/projects" className={btnGhost}>
                    Cancel
                </Link>
            </div>
        </form>
    );
}
