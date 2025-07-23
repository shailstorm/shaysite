"use client";

import { useEffect } from "react";

export default function SparkleTrail() {

    useEffect(() => {
        const chars = ["⊹", "*", "°", " ", " ", " ", " "];
        const trailStrength = [0.3, 0.2, 0.1];

        const handler = (e: MouseEvent) => {
            trailStrength.forEach((i) => {
                const offset = (1 - i) * 75;
                const star = document.createElement("div");
                const char = chars[Math.floor(Math.random() * chars.length)];

                star.className = "star";
                star.textContent = char;

                Object.assign(star.style, {
                    position: "fixed",
                    pointerEvents: "none",
                    top: e.clientY + Math.round(Math.random() * offset - offset / 2) + "px",
                    left: e.clientX + Math.round(Math.random() * offset - offset / 2) + "px",
                    fontSize: "16px",
                    opacity: "0.8",
                    transition: "opacity 0.5s ease-out",
                });

                document.body.appendChild(star);

                requestAnimationFrame(() => {
                    star.style.opacity = "0";
                });

                setTimeout(() => {
                    document.body.removeChild(star);
                }, 500);
            });
        };

        window.addEventListener("mousemove", handler);
        return () => window.removeEventListener("mousemove", handler);
    }, []);

    return null;
}

