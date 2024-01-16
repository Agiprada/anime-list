import Link from "next/link";
import React from "react";
import InputSearch from "./inputSearch";
import UserActionButton from "./UserActionButton";

export default function Navbar() {
  return (
    <header className="bg-darkblue fixed top-0 left-0 right-0 z-50">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-3 gap-2">
        <Link href="/" className="font-bold text-2xl text-white">
          Anime List
        </Link>
        <InputSearch />
        {/* <UserActionButton /> */}
        <UserActionButton />
      </div>
    </header>
  );
}
