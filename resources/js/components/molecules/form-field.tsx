import type { ReactNode } from 'react';

interface Props {
    label: string;
    icon?: string;
    error?: string;
    hint?: string;
    children: ReactNode;
}

// Label + input slot + error message. Reused by every field of ProjectForm.
export default function FormField({ label, icon, error, hint, children }: Props) {
    return (
        <div className="mb-5">
            <label className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[1.2px] text-[#8b8d97]">
                {icon && <i className={`fas ${icon} text-[#c8a96e]`}></i>}
                {label}
            </label>

            {children}

            {error ? (
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#ff6b6b]">
                    <i className="fas fa-exclamation-circle"></i>
                    {error}
                </p>
            ) : (
                hint && <p className="mt-1.5 text-xs text-[#4e5060]">{hint}</p>
            )}
        </div>
    );
}
