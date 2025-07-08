'use client';
import Image from 'next/image';
import { useState } from 'react';
import FadeInSection from '@/components/FadeInSection';

type Work = {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    needsBorder?: boolean;
};

/* Sample data — replace paths with your real icons */
const works: Work[] = [
    {
        id: 'app1',
        title: 'Kuusi',
        subtitle: 'Photo sharing app',
        icon: '/icons/kuusi.png',
    },
    {
        id: 'app2',
        title: 'Finu',
        subtitle: 'Expenses sharing app',
        icon: '/icons/finu.jpg',
        needsBorder: true,
    },
    {
        id: 'app3',
        title: 'Snow',
        subtitle: 'Online shop platform',
        icon: '/icons/snow.png',
    },
];

export default function Works() {
    const [, setSelected] = useState<Work | null>(null);

    const openModal = (work: Work) => {
        setSelected(work);
        // later: open a real modal component
        alert(`${work.title} is to be implemented`);
    };

    return (
        <FadeInSection delay={0.2}>
            <section id="works" className="mx-auto my-32 max-w-6xl px-4">
                {/* Grid 3-col, responsive gap */}
                <div className="grid grid-cols-3 gap-4 md:gap-12">
                    {works.map((work) => (
                        <button
                            key={work.id}
                            onClick={() => openModal(work)}
                            className="group flex flex-col items-center text-center"
                        >
                            {/* Icon box */}
                            <div className={`flex items-center justify-center bg-transparent shadow-md transition-transform group-hover:scale-105 rounded-[21px] md:rounded-[55px] ${work.needsBorder ? 'border border-[var(--fg)]/10 md:border-2' : ''}`}>
                                <Image
                                    src={work.icon}
                                    alt={work.title}
                                    width={250}
                                    height={250}
                                    className="h-28 w-28 md:h-[250px] md:w-[250px] object-contain rounded-[21px] md:rounded-[55px]"
                                />
                            </div>

                            {/* Title / subtitle */}
                            <p className="mt-4 text-lg font-semibold text-[var(--fg)]">
                                {work.title}
                            </p>
                            <p className="text-base text-[var(--lightblue)]">
                                {work.subtitle}
                            </p>
                        </button>
                    ))}
                </div>
            </section>
        </FadeInSection>
    );
}