"use client";
import React, { useEffect, useState } from "react";
import "./relatedNews.scss";
import bank from "../homePage/assets/bank.png";
import car from "../homePage/assets/car.png";
import news from "../homePage/assets/news.png";
import SingleRelatedNews from "./SingleRelatedNews";
import { useThemeContext } from "@/context/ThemeContext";

// const relatedNewsArray = [
//     {
//       id: 1,
//       image: car,
//       content:
//         "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
//       time: "HAZİRAN 10, 2023",
//       view: 12,
//     },
//     {
//       id: 2,
//       image: news,
//       content:
//         "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
//       time: "HAZİRAN 12, 2023",
//       view: 26,
//     },
//     {
//       id: 3,
//       image: bank,
//       content:
//         "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
//       time: "TEMMUZ 18, 2023",
//       view: 34,
//     },
//   ];

const RelatedNews = ({ subCategories, category, id }) => {

  const { mode, news } = useThemeContext();
  const modeStatus = mode === "dark";
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    const arr = [];
    subCategories?.forEach((cat) => {
      const subCategoryNews = news.find((item) => item.category === cat);
      arr.push(subCategoryNews);
    });
    setRelatedNews(arr);
  }, []);

  const categoryNews = news.filter((i) => i.category === category && i.id !== id);

  categoryNews.forEach((item) => {
    if (!relatedNews.includes(item)) {
      setRelatedNews([...relatedNews, item]);
    };
  });

  console.log(relatedNews);

  return (
    <div className="related-news">
      <h3 className={modeStatus && "dark"}>
        İlgili <span className={modeStatus && "dark"}> Haberler </span>
      </h3>
      <div className="related-news-container">
        {relatedNews.slice(0,3).map((item) => {
          return (
             <SingleRelatedNews key={item.id} item={item} mode={modeStatus} />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedNews;
