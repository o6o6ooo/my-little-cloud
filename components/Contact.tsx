'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');
    const formRef = useRef<HTMLFormElement>(null);
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,   // Service ID
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,  // Template ID
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!    // Public Key
            )
            .then(() => {
                setSent(true);
                setLoading(false);
                formRef.current?.reset();
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
                alert('Failed to send. Please try again.');
            });
    };

    if (sent) {
        return (
            <section id="contact" className="my-24 mx-auto max-w-2xl px-4 text-center">
                <h2 className="mb-6 text-2xl font-bold text-[var(--fg)]">Contact&nbsp;me</h2>
                <p className="text-[var(--accent)]">Thanks! I&apos;ll reply soon.</p>
            </section>
        );
    }

    return (
        <section id="contact" className="my-32 mx-auto max-w-2xl px-4">
            <h2 className="mb-6 text-2xl font-bold text-[var(--fg)] text-center">
                Contact&nbsp;me
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                {/* Email input */}
                <input
                    type="email"
                    required
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full rounded-2xl shadow-md bg-[var(--card)] p-3 text-sm text-[var(--fg)] outline-none ring-1 ring-transparent focus:ring-[var(--accent)]"
                />

                {/* Textarea */}
                <textarea
                    required
                    name='message'
                    rows={5}
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="Ask me anything"
                    className="w-full resize-none rounded-2xl shadow-md bg-[var(--card)] p-3 text-sm text-[var(--fg)] outline-none ring-1 ring-transparent focus:ring-[var(--accent)]"
                />

                {/* Submit button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="self-center rounded-full bg-[var(--accent)] px-8 py-2 text-white text-sm font-medium hover:opacity-90 transition"
                >
                    {loading ? 'Sending…' : 'Contact'}
                </button>
            </form>
        </section>
    );
}