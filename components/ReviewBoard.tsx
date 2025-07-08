'use client';
import React from 'react';

function cn(...classes: (string | false | null | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

const notes = [
    {
        id: 1,
        number: '01',
        title: 'Discover',
        content:
            "First, I dive deep to understand what's really happening. I explore user needs, business goals, and challenges to uncover insights.",
        color: 'bg-blue-50 border-blue-100',
        pinColor: '#2a68b2',
        textColor: 'text-blue-600',
        rotation: 'rotate-2',
    },
    {
        id: 2,
        number: '02',
        title: 'Define',
        content:
            'Next, I get super clear on the problem mapping pain points, synthesizing research, and framing the right direction.',
        color: 'bg-blue-50 border-blue-100',
        pinColor: '#2a68b2',
        textColor: 'text-blue-600',
        rotation: '-rotate-1',
    },
    {
        id: 3,
        number: '03',
        title: 'Ideate',
        content:
            'Time to explore! I generate ideas, sketch possibilities, and think through different approaches to craft the best solutions.',
        color: 'bg-blue-50 border-blue-100',
        pinColor: '#2a68b2',
        textColor: 'text-blue-600',
        rotation: 'rotate-1',
    },
];

export default function ReviewBoard() {
    return (
        <div className="flex flex-col items-center my-20 px-4">
            <h2 className="text-xl font-semibold mb-10 text-center text-[var(--fg)]">
                Reviews from users and co-workers
            </h2>

            <div className="flex flex-wrap justify-center gap-6 max-w-screen-lg">
                {notes.map((note) => (
                    <div key={note.id} className="relative">
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
                                'w-64 h-64 border-2 rounded-xl p-4 pt-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 hover:rotate-0 duration-300',
                                note.color,
                                note.rotation
                            )}
                        >
                            <div
                                className={cn(
                                    'text-xl font-bold opacity-60 mb-1',
                                    note.textColor
                                )}
                            >
                                {note.number}
                            </div>
                            <h3 className="text-base font-semibold text-[var(--fg)] mb-2">
                                {note.title}
                            </h3>
                            <p className="text-xs leading-relaxed text-[var(--fg-light)]">
                                {note.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}