"use client";
import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import "./slider.scss";

import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import slide5 from "../assets/slide5.png";
import slide6 from "../assets/slide6.png";
import slide7 from "../assets/slide7.png";
import slide8 from "../assets/slide8.png";
import slide9 from "../assets/slide9.png";
import slide10 from "../assets/slide10.png";
import CardItem from "./CardItem";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { useThemeContext } from "@/context/ThemeContext";
import { CircularProgress } from "@mui/material";

export const newsArray=[
    { 
      title: "Ukrayna Başbakanı Shmyhal, Kanada’da",
      id:"1",
      image: slide1,
    },
    { 
      title: "Putin’nin Casus Uçağını İHA…",
      id: "2",
      image: slide2,
    },
    { 
        title: "New York borsası haftaya düşüşle…",
        id:"03",
        image: slide3,
    },
    { 
        title: "Sanayi üretiminde deprem etkisi",
        id: "04",
        image: slide4,
    },
    { 
        title: "Dokuz Eylül’de“Aşık Veysel”…",
        id:"05",
        image: slide5,
    },
    { 
        title: "Ukrayna Başbakanı Shmyhal, Kanada’da",
        id: "06",
        image: slide6,
    },
    { 
        title: "Putin’nin Casus Uçağını İHA…",
        id:"07",
        image: slide7,
    },
    { 
        title: "New York borsası haftaya düşüşle…",
        id:"08",
        image: slide8,
    },
    { 
        title: "Sanayi üretiminde deprem etkisi",
        id: "09",
        image: slide9,
    },
    { 
        title: "Dokuz Eylül’de“Aşık Veysel”…",
        id: "10",
        image: slide10,
    },
];

const Sliderr = () => {

  const { mode, news, loading } = useThemeContext();
  const modeStatus = mode === "dark";

// console.log(news);

  const settings = {
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    prevArrow: <GrPrevious />,
    nextArrow: <GrNext />
  };

  if (loading) {
    return <CircularProgress />
  }

  return (
    <div className="sliderContainer">
      <Slider {...settings}>
        {news?.map((item) => {
            return <CardItem item={item} key={item.id} modeStatus={modeStatus} />
        })}
      </Slider>
    </div>
  );
};

export default Sliderr;
