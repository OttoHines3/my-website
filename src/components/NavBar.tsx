'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Trading', href: '/trading' },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="flex justify-center px-4 py-6">
            <nav className="flex items-center space-x-6 border border-neutral-800 rounded-full bg-[#25252a] px-6 py-2 text-sm">
                {navItems.map(({ name, href }) => {
                    const isActive = pathname === href;

                    return (
                        <Link
                            key={name}
                            href={href}
                            className={`transition-colors px-2 ${isActive
                                    ? 'text-teal-400 font-medium'
                                    : 'text-gray-300 hover:text-teal-300'
                                }`}
                        >
                            {name}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}