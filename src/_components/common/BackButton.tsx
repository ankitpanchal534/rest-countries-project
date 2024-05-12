"use client";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();
  const { theme } = useTheme();
  return (
    <div className="flex items-center gap-2 cursor-pointer  py-2 px-6 rounded-lg dark:bg-darkBlue">
      <img
        src={
          theme == "dark"
            ? "/icons/arrow_back_dark.png"
            : "/icons/arrow_back.png"
        }
        className="h-4 w-4 object-contain"
        alt="arrow back icon"
      />
      <span className="font-semibold" onClick={() => router.back()}>
        Back
      </span>
    </div>
  );
}
