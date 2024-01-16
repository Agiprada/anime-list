//@ts-nocheck
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AnimeList({ api }) {
  return (
    <>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-2 py-2">
        {/* tanda tanya berarti klo ada datanya maka lakukan render, jika tidak maka loading */}
        {api.data?.map((anime, index) => {
          return (
            <Link href={`/detailAnime/${anime.mal_id}`} key={index}>
              <div className="flex flex-col items-center ">
                <Image
                  src={anime.images.webp.image_url}
                  width={200}
                  height={250}
                  alt=""
                  className="rounded-lg border border-indigo-500 max-h-64 object-cover shadow-lg"
                />
                <h3 className="md:text-md text-center text-sm p-4 overflow-hidden line-clamp-2">
                  {anime.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
