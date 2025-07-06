'use client';

import { useState } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Pretend-sending:\n${email}\n${msg}`);
        setEmail('');
        setMsg('');
    };

    return (
        <section id="contact" className="my-32 mx-auto max-w-2xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-[var(--fg)] text-center">
                Contact&nbsp;me
            </h2>

            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 w-full"
            >
                {/* Email input */}
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full rounded-2xl shadow-md bg-[var(--card)] p-3 text-sm text-[var(--fg)] outline-none ring-1 ring-transparent focus:ring-[var(--accent)]"
                />

                {/* Textarea */}
                <textarea
                    required
                    rows={5}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Ask me anything"
                    className="w-full resize-none rounded-2xl shadow-md bg-[var(--card)] p-3 text-sm text-[var(--fg)] outline-none ring-1 ring-transparent focus:ring-[var(--accent)]"
                />

                {/* Submit button */}
                <button
                    type="submit"
                    className="self-center rounded-full bg-[var(--accent)] px-8 py-2 text-white text-sm font-medium hover:opacity-90 transition"
                >
                    Contact
                </button>
            </form>
        </section>
    );
}