import type { Project } from '@/types/project';

interface Props {
    project: Project | null;
    processing: boolean;
    onCancel: () => void;
    onConfirm: () => void;
}

// Confirmation step before a record is deleted.
export default function DeleteModal({ project, processing, onCancel, onConfirm }: Props) {
    if (!project) return null;

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/70 px-4">
            <div className="w-full max-w-md rounded-xl border border-white/[0.08] bg-[#181b26] p-7 text-center shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e05555]/10 text-2xl text-[#e05555]">
                    <i className="fas fa-trash"></i>
                </div>
                <h3 className="font-display mb-2 text-xl font-bold text-[#f0ece4]">Delete this project?</h3>
                <p className="mb-6 text-sm leading-relaxed text-[#8b8d97]">
                    <span className="font-semibold text-[#f0ece4]">“{project.title}”</span> will be permanently
                    removed from your portfolio. This cannot be undone.
                </p>
                <div className="flex justify-center gap-3">
                    <button
                        onClick={onCancel}
                        className="cursor-pointer rounded-[5px] border border-white/[0.08] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-[#8b8d97] hover:text-[#f0ece4]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        disabled={processing}
                        className="cursor-pointer rounded-[5px] bg-[#e05555] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[1.2px] text-white hover:bg-[#c94545] disabled:opacity-60"
                    >
                        {processing ? 'Deleting...' : 'Yes, delete'}
                    </button>
                </div>
            </div>
        </div>
    );
}
