import React from "react";
import "./singleHaber.scss";
import Image from "next/image";

const SingleHaber = ({ image, content, title, mode }) => {
  return (
    <div className="most-reads-single">
      <div className="most-reads-single-pic">
        <Image src={image} alt="google-news" fill />
      </div>
      <div className="most-reads-single-content">
        <p className={`content-title ${mode && "dark"}`}>{title}</p>
        <p className={`content-itself ${mode && "dark"}`}>
          {content}
        </p>
      </div>
    </div>
  );
};

export default SingleHaber;
