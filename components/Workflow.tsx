'use client';

import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

export default function Workflow() {
    return (
        <section className="flex h-[120px] md:h-[160px] w-full items-center justify-center gap-4 md:gap-6">
            <span className="text-2xl md:text-xl font-medium text-[var(--fg)]">
                Design
            </span>

            <EllipsisHorizontalIcon className="size-8 text-[var(--fg)]" />

            <span className="text-2xl md:text-xl font-medium text-[var(--fg)]">
                Code
            </span>

            <EllipsisHorizontalIcon className="size-8 text-[var(--fg)]" />

            <span className="text-2xl md:text-xl font-medium text-[var(--fg)]">
                Care
            </span>
        </section>
    );
}