import React from "react";
import "./singleWeather.scss";
import { getSuitableIcon } from "@/lib/getIcon";

const SingleWeather = ({ temperature, weatherCode, maxTemp, country,  cityName, modeStatus}) => {

  return (
    <div className="singleWeather">
      <div className="topInfo">
        <p className={`city ${modeStatus ? "dark" : ""}`}>{cityName}</p>
        <p className="temperature">
        {temperature} <span>/ {maxTemp}</span>
        </p>
        <span className={`weatherIcon ${modeStatus ? "dark" : ""}`}>{getSuitableIcon(weatherCode)}</span>
      </div>
      <span className={`country ${modeStatus ? "dark" : ""}`}>{country}</span>
    </div>
  );
};

export default SingleWeather;
// { currentTemperature, dailyMinTemp, country, weatherCode, city, modeStatus }
//{`/newsDetails/${mainNews?.id}`}
