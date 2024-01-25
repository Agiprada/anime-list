import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="mt-16">
      <Header title="My Collection" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4">
        <Link href="" className="relative border-2 border-color-darkblue">
          <Image src="" alt="" width={300} height={300} className="w-full" />
          <div className="absolute flex items-center justify-center w-full bg-blue-700 text-white py-1">
            Title
          </div>
        </Link>
        <Link href="" className="border-2 border-color-darkblue">
          <Image src="" alt="" width={300} height={300} className="w-full" />
          <div className="flex items-center justify-center w-full bg-blue-700 text-white py-1">
            Title
          </div>
        </Link>
        <Link href="" className="border-2 border-color-darkblue">
          <Image src="" alt="" width={300} height={300} className="w-full" />
          <div className="flex items-center justify-center w-full bg-blue-700 text-white py-1">
            Title
          </div>
        </Link>
        <Link href="" className="border-2 border-color-darkblue">
          <Image src="" alt="" width={300} height={300} className="w-full" />
          <div className="flex items-center justify-center w-full bg-blue-700 text-white py-1">
            Title
          </div>
        </Link>
      </div>
    </section>
  );
}
