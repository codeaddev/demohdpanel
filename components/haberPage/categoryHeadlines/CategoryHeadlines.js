"use client";
import React, { useState } from "react";
import "./categoryHeadlines.scss";
import SingleSliderItem from "./SingleSliderItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import scooter from "../../homePage/assets/scooter.png";
import ayasofya from "../../homePage/assets/ayasofya.png";
import car1 from "../../homePage/assets/car1.png";
import anitkabir from "../../homePage/assets/anitkabir.png";
import nasa from "../../homePage/assets/nasa.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useThemeContext } from "@/context/ThemeContext";

const categoryNewsArray = [
    {
      id: 1,
      image: anitkabir,
      content: "Ukrayna Başbakanı Shmyhal,Anıtkabir'de",
      title: "Siyaset",
    },
    {
      id: 2,
      image: car1,
      content:
        "Uber is disputing a study that suggested its drivers were making less",
      title: "Gündem",
    },
    {
      id: 3,
      image: scooter,
      content: "How the War on Tipping Is Bad for CustomersJones",
      title: "Teknoloji",
    },
    {
      id: 4,
      image: ayasofya,
      content: "These 9 electric bikes are stylish and loaded with high voltage",
      title: "Politik",
    },
    {
      id: 5,
      image: nasa,
      content:
        "Here's how Amazon's and Apple's new smart speakers stack up with consumers",
      title: "Bilim",
    },
    {
      id: 6,
      image: anitkabir,
      content: "Ukrayna Başbakanı Shmyhal,Anıtkabir'de",
      title: "Siyaset",
    },
    {
      id: 7,
      image: nasa,
      content:
        "Uber is disputing a study that suggested its drivers were making less",
      title: "Gündem",
    },
    {
      id: 8,
      image: scooter,
      content: "How the War on Tipping Is Bad for CustomersJones",
      title: "Teknoloji",
    },
    {
      id: 9,
      image: ayasofya,
      content: "These 9 electric bikes are stylish and loaded with high voltage",
      title: "Politik",
    },
    {
      id: 10,
      image: car1,
      content:
        "Here's how Amazon's and Apple's new smart speakers stack up with consumers",
      title: "Bilim",
    },
  ];

const CategoryHeadlines = () => {

    const [sliderRef, setSliderRef] = useState(null);
    
    const { mode } = useThemeContext();
    const modeStatus = mode === "dark";

    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
  };

  return (
    <div className="category-headlines">
      <div className="category-headlines-title">
        <h2 className={modeStatus ? "dark" : ""}>Kategori Manşet Haberleri</h2>
        <div className="slider-buttons">
          <button onClick={sliderRef?.slickPrev}>
            <FaChevronLeft />
          </button>
          <button onClick={sliderRef?.slickNext}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className="category-headlines-slider">
        <Slider ref={setSliderRef} {...settings}>
          {categoryNewsArray.map((item) => {
            return <SingleSliderItem key={item.id} {...item} mode={modeStatus} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryHeadlines;
