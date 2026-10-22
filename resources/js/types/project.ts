// Shape of a Project record sent by Laravel (see app/Models/Project.php).
export interface Project {
    id: number;
    title: string;
    description: string;
    tech_stack: string;
    project_url: string | null;
    repo_url: string | null;
    image_path: string | null;
    image_url: string | null; // added by the model accessor
    date_completed: string; // YYYY-MM-DD
    created_at: string;
    updated_at: string;
}

// Values handled by the Create / Edit form (useForm).
export type ProjectFormData = {
    title: string;
    description: string;
    tech_stack: string;
    project_url: string;
    repo_url: string;
    date_completed: string;
    image: File | null;
};
