import type { ReactNode } from 'react';

interface Props {
    title: string;
    icon: string;
    children?: ReactNode; // action buttons
}

// Title bar of the management pages (Index / Create / Edit).
export default function PageHeader({ title, icon, children }: Props) {
    return (
        <div className="mb-7 flex flex-wrap items-center justify-between gap-3.5 border-b border-white/[0.08] pb-5">
            <h1 className="font-display flex items-center gap-2.5 text-[26px] font-black">
                <i className={`fas ${icon} text-[#c8a96e]`}></i>
                {title}
            </h1>
            <div className="flex flex-wrap gap-2.5">{children}</div>
        </div>
    );
}
