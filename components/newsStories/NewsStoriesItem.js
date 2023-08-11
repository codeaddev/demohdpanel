import React from "react";
import "./newsStoriesItem.scss";
import Image from "next/image";
import { useAdsContext } from "@/context/AdsContext";
import { categoryConvertor } from "@/context/utils";

const NewsStoriesItem = ({combineStories, modeStatus, item}) => {

  const { category: cat} = useAdsContext();

const { category, image, time, media } = item;

  return (
    <div className={`story ${cat === category && "selected"} ${modeStatus && "dark"}`} onClick={() => combineStories(category)}>
      <img src={media} alt={category} />
      <div className={`story-content ${modeStatus ? "dark" : ""}`}>
        <h3>{categoryConvertor[category]}</h3>
        <p>{time}</p>     
      </div>
    </div>
  );
};

export default NewsStoriesItem;
