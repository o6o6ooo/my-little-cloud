'use client';

import Image from 'next/image';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-10 px-6 md:px-12 text-[var(--fg)]">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
                {/* アイコン＋名前 */}
                <div className="flex items-center gap-3">
                    <Image
                        src="/icons/sakura.jpg"
                        alt="icon"
                        width={48}
                        height={48}
                        className="rounded-full"
                    />
                    <div className="text-sm leading-tight">
                        <p className="font-semibold">Sakura Wallace</p>
                        <p className="text-xs text-[var(--lightblue)]">Minimal Developer</p>
                    </div>
                </div>

                {/* SNSリンク（横並び） */}
                <div className="flex gap-3">
                    <a
                        href="https://github.com/o6o6ooo"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:opacity-80"
                    >
                        <Github className="size-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/sakurawallace"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:opacity-80"
                    >
                        <Linkedin className="size-5" />
                    </a>
                </div>
                <p className='text-xs text-[var(--lightblue)]'>© 2025 Sakura Walllace. All rights reserved.</p>
            </div>
        </footer>
    );
}