//@ts-nocheck
"use client";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/utils/HeaderMenu";
import Pagination from "@/components/utils/Pagination";
import React, { useEffect, useState } from "react";
import { getAnimeResponse } from "../../libs/api-libs";

export default function Popular() {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  async function fetchData() {
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`
    // );
    // const data = await response.json();
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(popularAnime);
  }
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <HeaderMenu title={`Most Popular Anime #${page}`} />
      <AnimeList api={topAnime} />
      <Pagination
        page={page}
        lastPage={topAnime.pagination?.last_visible_page}
        setPage={setPage}
      />
    </>
  );
}
