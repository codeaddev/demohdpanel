"use client";
import React from "react";
import { useAdsContext } from "@/context/AdsContext";
import Link from "next/link";

const BannerNext = () => {

  const { adsList, loading, handleReadIncrementAds } = useAdsContext();

  const relatedAds = adsList?.filter((i) => i.location.includes("Manşet yanı"));

  const width = relatedAds[0]?.en;
  const height = relatedAds[0]?.boy;
  const url = relatedAds[0]?.url;
  const image = relatedAds[0]?.image;
  const id = relatedAds[0]?.id;

//   console.log(width, height);

  const style = {
    objectFit: "cover",
    width: "100%",
    height: "100%",
  };
  
  const y = {
    width: "384px",
    height:"220px",
    // border: "1px solid red",
  };

  if (loading) return null;

  return (
    <Link href={url} target="_blank" onClick={() => handleReadIncrementAds(id)} style={y}>
      <img
        src={image}
        alt={url}
        width={"384"}
        height={"220"}
        style={style}
      />
    </Link>
  );
};

export default BannerNext;
