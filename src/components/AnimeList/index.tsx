//@ts-nocheck
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AnimeList({ api }) {
  return (
    <>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-3 grid-cols-2 gap-4 px-4">
        {/* tanda tanya berarti klo ada datanya maka lakukan render, jika tidak maka loading */}
        {api.data?.map((anime, index) => {
          return (
            <Link
              href={`/detailAnime/${anime.mal_id}`}
              className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
              key={index}
            >
              <Image
                src={anime.images.webp.image_url}
                width={350}
                height={350}
                alt=""
                className="w-full max-h-80 object-cover"
              />
              <h3 className="font-bold md:text-xl text-md p-4">
                {anime.title}
              </h3>
            </Link>
          );
        })}
      </div>
    </>
  );
}
