"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./homePage.scss";
import pic3 from "./assets/pic3.png";
import { useThemeContext } from "@/context/ThemeContext";
import { handleShort } from "@/context/utils";
import BannerNext from "../ads/adsComponents/BannerNext";

const HomePage = () => {

  const { mode, news, handleReadIncrement } = useThemeContext();
  const modeStatus = mode === "dark";

  const mainNews = news[0];
  const secondNews = news[1];

  // console.log(news);

  return (
    <div className={`homeContainer ${modeStatus ? "dark" : ""}`}>
      <MainNewsComponent handleReadIncrement={handleReadIncrement} mainNews={mainNews} />
      <div className="right">
        <div className="right-top">
          <SecondNews handleReadIncrement={handleReadIncrement} secondNews={secondNews} />
          {/* <AdsComponent /> */}
          <BannerNext />
        </div>
        <div className="right-bottom">
          {news.slice(2, 5).map((news) => {
            return (
            <SingleNewsComponent 
            handleReadIncrement={handleReadIncrement}
            key={news.id} news={news} />
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

const MainNewsComponent = ({ mainNews = {}, handleReadIncrement }) => {
  const { category, eng, id, image, title } = mainNews;
  return (
    <Link 
    onClick={()=>handleReadIncrement(category,id)}
    className="left" href={`/${category}/${eng}-${id}`} target="_blank">
      <img src={image} alt="news" />
      <h5>{title}</h5>
    </Link>
  );
};

const SecondNews = ({ secondNews = {}, handleReadIncrement }) => {
  const { category, eng, id, image, title="" } = secondNews;
  return (
    <Link 
    onClick={()=>handleReadIncrement(category,id)}
    className="right-top-left-pic" href={`/${category}/${eng}-${id}`}
    target="_blank">
      <img src={image} alt="news" />
      <p>{`${handleShort(title,6)}`}</p>
    </Link>
  );
};

const SingleNewsComponent = ({ news, handleReadIncrement }) => {
  const { category, id, eng, image, title="" } = news;
  return (
    <Link
      onClick={()=>handleReadIncrement(category,id)}
      href={`/${category}/${eng}-${id}`}
      className="news-pic"
      target="_blank"
    >
      <img src={image} alt="news" className="img" />
      <p>{`${handleShort(title,6)}`}</p>
    </Link>
  );
};

const AdsComponent = () => {
  return (
    <div className="right-top-right-pic">
      <Image src={pic3} alt="news" />
    </div>
  );
};
