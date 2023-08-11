"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import navLogo from "./navLogo.svg";
import darkLogo from "./darkLogo.svg";
import { useThemeContext } from "@/context/ThemeContext";

const NavbarLogo = ({wrapper}) => {

  const { mode } = useThemeContext();
  const modeStatus = mode === 'light';
  const logo = modeStatus ? navLogo : darkLogo;
  
  return (
    <Link href="/" className={wrapper}>
      <Image src={logo} alt="navbarLogo" priority />
    </Link>
  );
};

export default NavbarLogo;
