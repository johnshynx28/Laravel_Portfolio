import { useEffect, useState } from 'react';

const links = [
    { id: 'home', label: 'Home', icon: 'fa-home' },
    { id: 'about', label: 'About', icon: 'fa-user' },
    { id: 'skills', label: 'Skills', icon: 'fa-tools' },
    { id: 'gallery', label: 'Projects', icon: 'fa-th' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
];

export default function Navbar() {
    const [active, setActive] = useState('home');

    // Highlight the link of the section currently in view.
    useEffect(() => {
        const onScroll = () => {
            let current = 'home';
            links.forEach(({ id }) => {
                const el = document.getElementById(id);
                if (el && window.scrollY >= el.offsetTop - 120) current = id;
            });
            setActive(current);
        };
        onScroll();
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className="fixed inset-x-0 top-0 z-[1000] flex items-center justify-end bg-[linear-gradient(to_bottom,rgba(13,14,18,0.97),transparent)] px-5 py-3 md:px-[60px] md:py-[18px]">
            <ul className="flex gap-0.5">
                {links.map(({ id, label, icon }) => (
                    <li key={id}>
                        <a
                            href={`#${id}`}
                            className={`flex items-center gap-1.5 rounded px-3 py-2 text-[11px] font-semibold uppercase tracking-[1.5px] transition-colors md:px-3.5 ${
                                active === id
                                    ? 'bg-[#c8a96e]/[0.08] text-[#c8a96e]'
                                    : 'text-[#8b8d97] hover:bg-[#c8a96e]/[0.08] hover:text-[#c8a96e]'
                            }`}
                        >
                            <i className={`fas ${icon} text-[10px]`}></i>
                            <span className="hidden sm:inline">{label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
