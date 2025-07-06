'use client';

import { useState } from 'react';

type QA = {
    q: string;
    a: string;
};

const qas: QA[] = [
    {
        q: 'What do I do for you?',
        a: 'I hear what you need, design it, code it and care it.',
    },
    {
        q: 'What do I make?',
        a: 'I make various websites and mobile apps. I make online shops, social platforms and more!',
    },
    {
        q: 'Why Sakura?',
        a: "I'm a minimalist. I don't put more contents or decoration than you need. I guarantee best performance ever!",
    },
];

export default function Faq() {
    const [open, setOpen] = useState<number | null>(null);

    const toggle = (idx: number) =>
        setOpen((o) => (o === idx ? null : idx));

    return (
        <section id="faq" className="my-12 mx-auto max-w-2xl px-4">
            {qas.map((item, idx) => (
                <div
                    key={idx}
                    className="mb-4 rounded-xl bg-[var(--card)] shadow-sm overflow-hidden"
                >
                    {/* question row */}
                    <button
                        onClick={() => toggle(idx)}
                        className="flex w-full items-center justify-between p-4 text-left"
                    >
                        <span className="text-base font-semibold text-[var(--fg)]">
                            {item.q}
                        </span>
                        <span className="text-[var(--fg)]">
                            {open === idx ? '−' : '+'}
                        </span>
                    </button>

                    {/* answer */}
                    {open === idx && (
                        <div className="px-4 pb-4 text-sm text-[var(--fg)]">
                            {item.a}
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}