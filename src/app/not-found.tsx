"use client";
import React from "react";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
        <div className="flex justify-center items-center gap-2 flex-col">
          <FileSearch size={42} className="text-color-accent" />
          <h1 className="text-color-accent text-4xl font-bold">NOT FOUND</h1>
          <Link
            href="/"
            className="text-color-primary hover:text-color-accent text-2xl transition-all underline"
          >
            Home
          </Link>
        </div>
      </div>
    </>
  );
}
