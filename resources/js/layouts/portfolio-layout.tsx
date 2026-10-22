import type { ReactNode } from 'react';
import Footer from '@/components/organisms/footer';
import Navbar from '@/components/organisms/navbar';
import '../../css/portfolio.css';

// Public portfolio frame: navbar + footer stay mounted, only the page content changes.
export default function PortfolioLayout({ children }: { children: ReactNode }) {
    return (
        <div className="font-body bg-[#0d0e12] text-[#f0ece4]">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}
