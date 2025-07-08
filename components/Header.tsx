'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <section className="flex h-[400px] md:h-[450px] lg:h-[500px] w-full flex-col items-center justify-center text-center gap-6 px-4">
            <p className="text-base text-[var(--fg)]">
                Hi, I&apos;m Sakura 👩🏻‍💻 a Full-Stack&nbsp;Engineer
            </p>

            <h2 className="text-5xl font-semibold text-[var(--fg)]">
                Simple and Quality
            </h2>

            <h2 className="text-2xl font-semibold text-[var(--lightblue)]">
                Just everything you&nbsp;need
            </h2>

            <div className="mt-4 flex gap-4">
                <Link
                    href="#contact"
                    className="rounded-full bg-[var(--accent)] px-6 py-2 text-white text-sm font-medium hover:opacity-80 transition"
                >
                    Contact
                </Link>
                <Link
                    href="https://drive.google.com/file/d/18rQRJTE19656FWDABg1AucY1qUUv0xB5/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-[var(--lightblue)] px-6 py-2 text-white text-sm font-medium hover:opacity-80 transition"
                >
                    Resume
                </Link>
            </div>
        </section>
    );
}