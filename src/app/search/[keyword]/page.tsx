//@ts-nocheck
"use client";
import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";

export default async function Page({ params }) {
  const { keyword } = params;

  // mendecode keyword untk menghilangkan persen "one%20piece"
  const decodeKeyword = decodeURI(keyword);
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKeyword}`
  // );
  // const searchResult = await response.json();

  const searchAnime = await getAnimeResponse("anime", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <Header
          title={`Search Result For ${decodeKeyword}...`}
          linkHref="/popular"
        />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
}
