"use client";

import { useEffect, useRef } from "react";

export default function MatrixStream() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const chars = "1010101010$@#%&*+";
        const fontSize = 14;
        let drops: number[] = [];

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const columns = Math.floor(rect.width / fontSize);
            drops = Array(columns).fill(1);
        };

        resize();

        const draw = () => {
            const rect = canvas.getBoundingClientRect();
            ctx.fillStyle = "rgba(24, 24, 28, 0.1)";
            ctx.fillRect(0, 0, rect.width, rect.height);

            ctx.fillStyle = "#4ade80";
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > rect.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        // Respect users who ask for reduced motion: paint one static frame.
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
        let interval: ReturnType<typeof setInterval> | undefined;

        const start = () => {
            if (interval) clearInterval(interval);
            if (reduced.matches) {
                for (let i = 0; i < 40; i++) draw();
                return;
            }
            interval = setInterval(draw, 40);
        };

        start();
        window.addEventListener("resize", resize);
        reduced.addEventListener("change", start);

        return () => {
            if (interval) clearInterval(interval);
            window.removeEventListener("resize", resize);
            reduced.removeEventListener("change", start);
        };
    }, []);

    return (
        <div className="w-full h-[220px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl border border-gray-800">
            <canvas ref={canvasRef} className="w-full h-full block bg-[#18181c]" />
        </div>
    );
}
