import React from "react";
import "./singleVideo.scss";
import Image from "next/image";

const SingleVideo = ({ image, content, author, mode }) => {
  return (
    <div className="most-reads-single-video">
      <div className="most-reads-single-video-pic">
        <Image src={image} alt="google-news" fill />
      </div>
      <div className="most-reads-single-video-content">
        <p className={`content-news ${mode ? "dark" : ""}`}> {content} </p>
        <p className={`content-author ${mode ? "dark" : ""}`}>YAZAR: {author}</p>
      </div>
    </div>
  );
};

export default SingleVideo;