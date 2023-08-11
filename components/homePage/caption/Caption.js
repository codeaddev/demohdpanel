"use client";
import React from "react";
import { useRouter } from "next/navigation";
import "./caption.scss";
import { useThemeContext } from "@/context/ThemeContext";

const Caption = ({ title, link }) => {
  
  const router = useRouter();
  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className={`caption ${modeStatus ? "dark" : ""}`}>
      <h3>{title}</h3>
      <div className="line"></div>
      <p onClick={() => router.push(`/${link}`)}>Hepsini Gör</p>
    </div>
  );
};

export default Caption;
