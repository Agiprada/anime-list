import Link from "next/link";
import React from "react";
import InputSearch from "./inputSearch";

export default function Navbar() {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-2xl">
          Anime List
        </Link>
        <InputSearch />
      </div>
    </header>
  );
}
