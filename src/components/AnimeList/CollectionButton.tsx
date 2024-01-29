//@ts-nocheck
"use client";

import React from "react";

export default function CollectionButton({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) {
  const handleCollection = async (e: any) => {
    e.preventDefault();

    const data = {
      anime_mal_id,
      user_email,
      anime_image,
      anime_title,
    };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    console.log({ collection });
  };

  return (
    <button
      onClick={handleCollection}
      className="px-2 py-1 bg-darkblue text-white rounded-lg"
    >
      add Collection
    </button>
  );
}
