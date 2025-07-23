"use client";

import { useState } from "react";
import SparkleTrail from "@/utils/components/SparkleTrail";
import SparkleBackground from "@/utils/components/SparkleBackground";
import { useMediaQuery } from "@/utils/hooks/useMediaQuery";

export default function SparkleSwitcher() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [enabled, setEnabled] = useState(true);

  return (
    <>
      {enabled && (
        <>
          {isMobile ? <SparkleBackground /> : <SparkleTrail />}
        </>
      )}

      <button
        onClick={() => setEnabled((prev) => !prev)}
        className="self-end mb-5 text-xs text-violet-300 bg-transparent border-none cursor-pointer hover:text-pink-300 transition"
      >
        {enabled ? "deactivate magic" : "get magical"}
      </button>
    </>
  );
}

