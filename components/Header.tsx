'use client';

import Link from 'next/link';

export default function Header() {
    return (
        /* ❶ 400 px 高さ - モバイル基準
           ❷ md:450px, lg:500px に伸ばす
           ❸ flex＋items-center＋justify-center で “上下左右中央寄せ” */
        <section className="flex h-[400px] md:h-[450px] lg:h-[500px] w-full flex-col items-center justify-center text-center gap-6 px-4">
            <p className="text-base text-[var(--fg)]">
                Hi, I&apos;m Sakura 👩🏻‍💻 a Full-Stack&nbsp;Engineer
            </p>

            <h2 className="text-5xl font-semibold text-[var(--fg)]">
                Simple and Functional
            </h2>

            <h2 className="text-2xl font-semibold text-[var(--lightblue)]">
                Just everything you&nbsp;need
            </h2>

            <div className="mt-4 flex gap-4">
                <Link
                    href="#works"
                    className="rounded-full bg-[var(--accent)] px-6 py-2 text-white text-sm font-medium hover:opacity-80 transition"
                >
                    Works
                </Link>
                <Link
                    href="#contact"
                    className="rounded-full bg-[var(--lightblue)] px-6 py-2 text-white text-sm font-medium hover:opacity-80 transition"
                >
                    Contact
                </Link>
            </div>
        </section>
    );
}