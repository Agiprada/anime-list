//@ts-nocheck
"use client";

import AnimeList from "../components/AnimeList";
import Header from "@/components/AnimeList/header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/libs/api-libs";

export default async function Home() {
  const topAnime = await getAnimeResponse("top/anime", "limit=10");
  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime", "entry"
  );
  recomendedAnime = reproduce(recomendedAnime, 10)
  //console.log(recomendedAnime);
  return (
    <>
      <section>
        <Header
          title="Most Popular Anime"
          linkTitle="Show All"
          linkHref="/popular"
        />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Recomendation" />
        <AnimeList api={recomendedAnime} />
      </section>
    </>
  );
}
