import type { ReactNode } from 'react';

interface Props {
    id: string;
    className?: string;
    children: ReactNode;
}

// Wrapper used by every portfolio section (same padding, min height, gold side line).
export default function Section({ id, className = '', children }: Props) {
    return (
        <section
            id={id}
            className={`section-line relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pb-[60px] pt-[90px] md:px-11 md:pb-[70px] md:pt-[100px] lg:px-20 lg:pb-20 ${className}`}
        >
            {children}
        </section>
    );
}
