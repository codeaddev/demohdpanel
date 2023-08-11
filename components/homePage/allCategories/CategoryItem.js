import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./catItem.scss";
import { navigateCategory, transformCategory } from "@/context/utils";

const CategoryItem = ({ image, category, modeStatus }) => {
  return (
    <div className="item">
      <Link href={`/${category}`}>
        <Image src={image} alt={category} />
      </Link>
      <div className="info">
        <div className={`disc ${modeStatus ? "dark" : ""}`}></div>
        <p className={`title ${modeStatus ? "dark" : ""}`}>{transformCategory(category)}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
