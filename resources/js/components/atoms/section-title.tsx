import type { ReactNode } from 'react';

export default function SectionTitle({ children }: { children: ReactNode }) {
    return (
        <h2 className="font-display mb-8 text-[30px] font-black leading-none tracking-[-1px] text-[#f0ece4] after:mt-3.5 after:block after:h-[3px] after:w-10 after:rounded-sm after:bg-[#c8a96e] after:content-[''] md:mb-14 md:text-[40px] lg:text-[52px]">
            {children}
        </h2>
    );
}
