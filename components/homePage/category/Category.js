"use client";
import React from "react";
import "./category.scss";
import CategoryItem from "./CategoryItem";
import { useThemeContext } from "@/context/ThemeContext";

const Category = ({category, big}) => {

  const { mode, news } = useThemeContext();
  const modeStatus = mode === "dark";

  // console.log(news);
  const filteredNews = news.filter((item) => item.category === category);

  return (
    <div className={`container ${big ? "big" : ""}`}>
      {filteredNews?.map((item) => {
            return <CategoryItem key={item.id} item={item} modeStatus={modeStatus} />
        })}
    </div>
  );
};

export default Category;
