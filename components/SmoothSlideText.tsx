"use client";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type SmoothSlideTextProps = {
    text: string;
    duration?: number;
};

export default function SmoothSlideText({ text, duration = 3 }: SmoothSlideTextProps) {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        if (inView) {
            setStartAnimation(true);
        }
    }, [inView]);

    return (
        <div
            ref={ref}
            className="overflow-hidden whitespace-nowrap"
            style={{ maxWidth: "100%" }}
        >
            <span
                className="inline-block"
                style={{
                    animation: startAnimation ? `slideIn ${duration}s ease forwards` : 'none',
                }}
            >
                {text}
            </span>

            <style jsx>{`
        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
}