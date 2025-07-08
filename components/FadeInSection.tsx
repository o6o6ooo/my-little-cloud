'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
    children: React.ReactNode;
    delay?: number;
};

const FadeInSection = ({ children, delay = 0 }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInSection;