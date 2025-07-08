"use client";
import React from "react";

type SmoothSlideTextProps = {
    text: string;
    duration?: number; // アニメーション時間（秒）
};

export default function SmoothSlideText({ text, duration = 3 }: SmoothSlideTextProps) {
    return (
        <div
            className="overflow-hidden whitespace-nowrap"
            style={{ maxWidth: "100%" }}
        >
            <span
                className="inline-block"
                style={{
                    animation: `slideIn ${duration}s ease forwards`,
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