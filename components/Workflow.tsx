'use client';
import { useEffect } from "react";
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import FadeInSection from '@/components/FadeInSection';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function cn(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

const notes = [
    {
        id: 1,
        number: '01',
        title: 'Design',
        content:
            "I don't just draw UI — I design with intention. From listening carefully to your goals, I create a solution that works. Wireframes, flows, and interactions — all crafted with your users in mind.",
        color: 'bg-[var(--stickernotes)] border-[var(--stickernotes-border)]',
        pinColor: '#2a68b2',
        rotation: 'rotate-2',
    },
    {
        id: 2,
        number: '02',
        title: 'Code',
        content:
            "Using frameworks like React, Laravel, or Flutter, I bring designs to life — clean, scalable, and responsive. I write code that's easy to maintain and ready to grow.",
        color: 'bg-[var(--stickernotes)] border-[var(--stickernotes-border)]',
        pinColor: '#2a68b2',
        rotation: '-rotate-1',
    },
    {
        id: 3,
        number: '03',
        title: 'Care',
        content:
            "I believe in long-term value. After release, I stay committed — Fixing, improving, and supporting. I care about performance, security, and user feedback. Your product evolves, and I'm here for that journey.",
        color: 'bg-[var(--stickernotes)] border-[var(--stickernotes-border)]',
        pinColor: '#2a68b2',
        rotation: 'rotate-1',
    },
];

function NoteCard({ note, index }: { note: (typeof notes)[0]; index: number }) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.2 + index * 0.2,
                    duration: 0.6,
                    ease: "easeOut",
                },
            });
        }
    }, [inView, controls, index]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            className="relative"
        >
            {/* Pin */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10">
                <div
                    className="w-3.5 h-3.5 rounded-full shadow-md relative"
                    style={{ backgroundColor: note.pinColor }}
                >
                    <div className="absolute top-[2px] left-[6px] w-[6px] h-[6px] bg-white rounded-full opacity-50" />
                </div>
            </div>

            {/* Sticky Note */}
            <div
                className={cn(
                    'w-64 h-64 border-2 rounded-xl mx-4 p-4 pt-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 hover:rotate-0 duration-300',
                    note.color,
                    note.rotation
                )}
            >
                <div className="text-xl font-bold text-[var(--accent)] opacity-80 mb-1">
                    {note.number}
                </div>
                <h3 className="text-base font-semibold text-[var(--fg)] mb-2">
                    {note.title}
                </h3>
                <p className="text-xs leading-relaxed text-[var(--fg)]">
                    {note.content}
                </p>
            </div>
        </motion.div>
    );
}

export default function Workflow() {
    return (
        <FadeInSection delay={0.2}>
            <div className="flex flex-col items-center my-20 px-4">
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

                <div className="flex flex-wrap justify-center gap-6 max-w-screen-lg">
                    {notes.map((note, index) => (
                        <NoteCard key={note.id} note={note} index={index} />
                    ))}
                </div>
            </div>
        </FadeInSection>
    );
}