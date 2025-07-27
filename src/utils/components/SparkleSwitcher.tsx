"use client";
import { lora } from "@/fonts";

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
        className={`self-end mb-8 text-xs text-violet-300 hover:text-[#ff96f6] transition italic ${lora.className}`}
      >
        <i>{enabled ? "hide magic" : "get magical"}</i>
      </button>
    </>
  );
}

