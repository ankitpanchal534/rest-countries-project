"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function BackButton() {
  const router = useRouter();
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <img
        src="/icons/arrow_back.png"
        className="h-4 w-4 object-contain"
        alt="arrow back icon"
      />
      <span className="font-semibold" onClick={() => router.back()}>
        Back
      </span>
    </div>
  );
}
