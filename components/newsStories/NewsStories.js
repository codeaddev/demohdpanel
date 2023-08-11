"use client";
import { useThemeContext } from "@/context/ThemeContext";
import React from "react";
import "./newsStories.scss";
import StoryPage from "../story/StoryPage";

import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GrClose } from "react-icons/gr";
import { storiesInfo } from "@/context/storiesInfo";
import NewsStoriesItem from "./NewsStoriesItem";
import { useAdsContext } from "@/context/AdsContext";

const NewsStories = () => {
  // const { changeStoryModal, handleStories, category, stories, mode } = useThemeContext();
  const { mode } = useThemeContext();
  const { storyList, combineStories, changeStoryModall, singleStories } = useAdsContext();
  const modeStatus = mode === "dark";

  // console.log(storyList);

  return (
    <div className="main-fluid">
      <div className="cont">
        <div className="cats">
          {singleStories.map((item) => {
            return (
              <NewsStoriesItem
                key={item.id}
                item={item}
                combineStories={combineStories}
                modeStatus={modeStatus}
              />
            );
          })}
        </div>

        <div className="stors">
            <div className="close" onClick={changeStoryModall}>
              <GrClose />
            </div>
            <div className="icon prev">
              <GrPrevious />
            </div>
            <div className="icon next">
              <GrNext />
            </div>
            <StoryPage stories={storyList} />
          </div>
      </div>
    </div>
  );
};

export default NewsStories;
