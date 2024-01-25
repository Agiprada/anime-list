"use client";

import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function Header({ title }: { title: any }) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <>
      <div className="flex justify-between px-4 pt-2 text-xl font-bold">
        <h3>{title}</h3>
        <button onClick={handleBack} className="flex">
          <ArrowSquareLeft size={32} /> Back
        </button>
      </div>
    </>
  );
}
