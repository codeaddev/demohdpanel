import React, { useEffect, useState } from "react";
import "./breakingNews.scss";
import Slider from "react-slick";
import Link from "next/link";
import { GoClock } from "react-icons/go";
import { useThemeContext } from "@/context/ThemeContext";
import { CircularProgress } from "@mui/material";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { handleShort } from "@/context/utils";

const BreakingNews = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";
  const [breakingNews, setBreakingNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  //  console.log(breakingNews);

  useEffect(() => {
    let controller = new AbortController();
    (async () => {
      const q = query(
        collection(db, "sonDakika"),
        
        orderBy("datePublished", "asc")
      );
      const sondakikaGetting = onSnapshot(q, (snap) => {
        var breakingNewsList = [];

        snap.forEach((doc) => {
          var now = new Date();
          var nowHour = now.getHours();
          var docDate = new Date(doc.data().datePublished.seconds*1000);
          var docHour = docDate.getHours();
          var nowDay = now.getDate();
          var docDay = docDate.getDate();
          var nowMonth = now.getMonth();
          var docMonth = docDate.getMonth();
          var isSixHoursPassed = docMonth === nowMonth && nowDay === docDay && (nowHour-docHour <= 6);

          if (isSixHoursPassed) {
            breakingNewsList.unshift(doc.data());
          };   
        });

        setBreakingNews(breakingNewsList);
        setLoading(false);
      });

      return () => sondakikaGetting();

    })();

    return () => controller?.abort();
  }, []);

  if (loading) {
    return (
      <div className={`navbar-sub-header ${modeStatus ? "dark" : ""}`}>
        <CircularProgress style={{ height: "100%", color: "#fff" }} />
      </div>
    );
  }

  return (
    <div className={`navbar-sub-header ${modeStatus ? "dark" : ""}`}>
      <div className="sub-header-wrapper">
        <Link href="/sonDakika" className="title" target="_blank">SON DAKİKA</Link>
        <ul className="stories">
          <Slider {...settings}>
            {breakingNews.map((item) => {
              return <SingleBreakingNews key={item.id} {...item} />
            })}
          </Slider>
        </ul>
      </div>
    </div>
  );
};

export default BreakingNews;

const SingleBreakingNews = ({ title, datePublished, eng, id }) => {

  const time = new Date(datePublished.seconds * 1000).toLocaleTimeString().substring(0, 5);

  return (
      <Link
      href={`/sonDakika/${eng}-${id}`} target="_blank">
        <GoClock />
        <div className="news">
          <span className="news-time">{time}</span>
          <span className="news-info">{`${handleShort(title,4)}`}</span>
        </div>
        {/* <div className="disc"></div> */}
      </Link>

  );
};
