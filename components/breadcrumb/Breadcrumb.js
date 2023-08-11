import React from "react";
import "./breadcrumb.scss";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";

const Breadcrumb = ({links}) => {

  return (
    <div className="breadcrumb-container">
      <ul className="breadcrumb">
        <li>
          <Link href="/">
            <AiFillHome />
            <span> Anasayfa </span>
          </Link>
        </li>

        {links?.map((item) => (
          <BreadcrumbItem key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumb;

function BreadcrumbItem({ title, link }) {
  return (
    <li>
      <Link href={link}>{title}</Link>
    </li>
  );
};
