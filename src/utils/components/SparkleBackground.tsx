"use client";

import { useEffect, useState } from "react";

const SPARKLE_CHARS = ["✦", "✧", "⊹", "*", "°", " ", " ", " ",];

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

interface Sparkle {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: string;
}

export default function SparkleBackground() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSparkles((prev) => [
        ...prev,
        {
          id: Date.now(),
          left: `${Math.random() * 100}%`,
          delay: 0,
          duration: randomBetween(4, 8),
          size: `${randomBetween(0.8, 1.2)}rem`,
        },
      ]);
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="absolute top-[-2rem] animate-fall text-indigo-400 opacity-80"
          style={{
            left: sparkle.left,
            fontSize: sparkle.size,
            animationDuration: `${sparkle.duration}s`,
          }}
        >
          {SPARKLE_CHARS[Math.floor(randomBetween(0, SPARKLE_CHARS.length))]}
        </span>
      ))}
    </div>
  );
}
