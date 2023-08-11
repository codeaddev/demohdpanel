import React from "react";
import "./singleSliderItem.scss";
import Image from "next/image";

const SingleSliderItem = ({ content, image, title, mode }) => {
  return (
    <div className="category-headlines-slider-single">
      <Image src={image} alt={title} />
      <h5 className={mode && "dark"}>{title}</h5>
      <p className={`slide-content ${mode ? "dark" : ""}`}>{content}</p>
    </div>
  );
};

export default SingleSliderItem;
