'use client';
import React, { useEffect } from 'react';
import { motion, useAnimation, easeOut } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = ['React', 'React Native', 'Laravel', 'Flutter', 'Firebase', 'Next.js'];

export default function Skills() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [inView, controls]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1.2,
                ease: easeOut,
            },
        },
    };

    return (
        <section
            ref={ref}
            className="h-[140px] flex items-center justify-center mb-32"
        >
            <motion.ul
                className="flex flex-wrap justify-center gap-4 md:gap-6 px-4"
                variants={containerVariants}
                initial="hidden"
                animate={controls}
            >
                {skills.map((skill) => (
                    <motion.li
                        key={skill}
                        variants={itemVariants}
                        className="rounded-full border px-4 py-1 text-sm font-medium text-[var(--fg)] border-[var(--fg)]/20"
                    >
                        {skill}
                    </motion.li>
                ))}
            </motion.ul>
        </section>
    );
}