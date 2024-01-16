"use client";

import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/header";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "@/libs/api-libs";

export default async function Home() {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recomendedAnime = reproduce(recomendedAnime, 10);
  //console.log(recomendedAnime);
  return (
    <>
      <section className="py-5 mx-2 mt-16 flex justify-center items-center">
        <div className="border border-blue-600 border-1 rounded-lg w-full lg:w-3/4">
          <Header
            title="Most Popular Anime"
            linkTitle="Show All"
            linkHref="/popular"
          />
          <AnimeList api={topAnime} />
        </div>
      </section>
      <section className="py-5 mx-2 flex justify-center items-center">
        <div className="border border-blue-600 border-1 rounded-lg w-full lg:w-3/4">
          <Header title="Recomendation" />
          <AnimeList api={recomendedAnime} />
        </div>
      </section>
    </>
  );
}
