//@ts-nocheck
import getAnimeResponse from "@/libs/api-libs";
import VideoPlayer from "@/components/utils/VideoPlayer";
import Image from "next/image";
import React from "react";

export default async function Detail({ params: { id } }) {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <>
      <div className="pt-4 px-4">
        <h3 className="text-xl text-color-primary ">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>

      <div className="pt-4 px-4 flex  gap-2 text-color-primary overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border">
          <h3>Rank</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border">
          <h3>Score</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border">
          <h3>Member</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border">
          <h3>Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>

      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={200}
          height={200}
          className="w-full rounded object-cover"
        />
        <p className="text-justify text-xl">{anime.data.synopsis}</p>
      </div>
      <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
}
