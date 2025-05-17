// components/ThemeToggle.tsx
'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    // Lazy init from localStorage (default to dark)
    const [isDark, setIsDark] = useState<boolean>(() => {
        if (typeof window === 'undefined') return true;
        return localStorage.getItem('theme') !== 'light';
    });

    // Sync <html> class & localStorage whenever isDark changes
    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            root.classList.remove('light');
        } else {
            root.classList.add('light');
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(d => !d)}
            className="p-2 rounded-full hover:bg-gray-800 transition"
            aria-label="Toggle Theme"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}