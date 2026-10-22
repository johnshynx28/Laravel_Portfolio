import type { ReactNode } from 'react';
import '../../css/portfolio.css';

// Frame of the management pages (projects/index, create, edit).
export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="font-body min-h-screen bg-[#0d0e12] px-5 py-10 text-[#f0ece4]">
            <div className="mx-auto max-w-[1000px]">{children}</div>
        </div>
    );
}
