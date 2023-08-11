"use client";
import React from "react";
import "./video.scss";
import SingleVideo from "./SingleVideo";
import { useThemeContext } from "@/context/ThemeContext";

const videosArray = [
    {
        id: 1,
        url: "https://www.youtube.com/embed/VbGM_hbMTw4?controls=0",
        time: "09:12",
    },
    {
        id: 2,
        url: "https://www.youtube.com/embed/-U4t8CwgSzM?controls=0",
        time: "10:36",
    },
    {
        id: 3,
        url: "https://www.youtube.com/embed/1rMM_37FqnM?controls=0",
        time: "12:29",
    },
    {
        id: 4,
        url: "https://www.youtube.com/embed/6RIB5wGJyiU?controls=0",
        time: "14:34",
    },
    {
        id: 5,
        url: "https://www.youtube.com/embed/xrn95GXe9pw?controls=0",
        time: "17:51",
    },
];

const Video = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="video">
      <div className="video-main">
        <iframe src="https://www.youtube.com/embed/ybScozy6Bl4" />
      </div>
      <div className="video-others">
        <h4 className={modeStatus ? "dark" : ""}>Diğer Haber Videoları</h4>
        {videosArray.map((item) => (
            <SingleVideo key={item.id} {...item} modeStatus={modeStatus} />
        ))}
      </div>
    </div>
  );
};

export default Video;
