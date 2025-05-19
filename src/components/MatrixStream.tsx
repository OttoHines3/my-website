"use client";

import { useEffect, useRef } from "react";

export default function MatrixStream() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        canvas.width = window.innerWidth;
        canvas.height = 400; // adjust height as needed

        const chars = "1010101010$@#%&*+";
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        const draw = () => {
            ctx.fillStyle = "rgba(24, 24, 28, 0.1)"; // background fade
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#4ade80"; // Tailwind green-400
            ctx.font = fontSize + "px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = chars.charAt(Math.floor(Math.random() * chars.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                drops[i]++;
            }
        };

        const interval = setInterval(draw, 40);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[400px] overflow-hidden rounded-xl">
            <canvas ref={canvasRef} className="w-full h-full block bg-[#18181c]" />
        </div>
    );
}