'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon, MoonIcon as MoonSolid, SunIcon as SunSolid } from '@heroicons/react/24/solid';
import { useTheme } from '@/contexts/theme-context';

const navLinks = [
    { name: 'Contact', href: '#contact', external: false },
    { name: 'Resume', href: 'https://drive.google.com/file/d/18rQRJTE19656FWDABg1AucY1qUUv0xB5/view?usp=sharing', newTab: true },
    { name: 'Github', href: 'https://github.com/o6o6ooo', newTab: true },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/sakurawallace', newTab: true },
];

export default function NavBar() {
    const { theme, toggle } = useTheme();
    const [open, setOpen] = useState(false);

    const LinkItem = ({ name, href, newTab = false }: typeof navLinks[number]) =>
        newTab ? (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium hover:opacity-80 transition"
                onClick={() => setOpen(false)}
            >
                {name}
            </a>
        ) : (
            <Link
                href={href}
                className="text-sm font-medium hover:opacity-80 transition"
                onClick={() => setOpen(false)}
            >
                {name}
            </Link>
        );

    return (
        <header className="sticky top-0 z-50 w-full bg-[var(--bg)]/70 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                {/* Desktop links */}
                <nav className="hidden gap-6 md:flex">
                    {navLinks.map((l) => <LinkItem key={l.name} {...l} />)}
                </nav>

                {/* Mobile hamburger */}
                <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(true)}>
                    <Bars3Icon className="size-6" />
                </button>

                {/* Theme toggle */}
                <button
                    aria-label="Toggle theme"
                    onClick={toggle}
                    className="rounded-full p-2 hover:bg-[var(--card)] transition"
                >
                    {theme === 'light' ? (
                        <MoonSolid className="size-6" />
                    ) : (
                        <SunSolid className="size-6" />
                    )}
                </button>
            </div>

            {/* Mobile drawer */}
            {open && (
                <div className="fixed inset-0 z-50 flex flex-col bg-[var(--bg)] p-6 md:hidden">
                    <div className="flex justify-between">
                        <span className="text-lg font-semibold">Menu</span>
                        <button aria-label="Close" onClick={() => setOpen(false)}>
                            <XMarkIcon className="size-6" />
                        </button>
                    </div>
                    <nav className="mt-8 flex flex-col gap-4">
                        {navLinks.map((l) => <LinkItem key={l.name} {...l} />)}
                    </nav>
                </div>
            )}
        </header>
    );
}