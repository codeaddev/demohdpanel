"use client";
import React from "react";
import Image from "next/image";
import "./register.scss";
import mobile from "../assets/mobile.png";
import app from "../assets/app.png";
import appstore from "../assets/appstore.png";
import android from "../assets/android.png";
import trgoogle from "../assets/trgoogle.png";
import { useThemeContext } from "@/context/ThemeContext";

const Register = () => {

  const { mode } = useThemeContext();
  const modeStatus = mode === "dark";

  return (
    <div className="register">
      <div className="register-form">
        <h3 className={modeStatus ? "dark" : ""}>ÜYE OLUN</h3>
        <p className={modeStatus ? "dark" : ""}>
          Üyemiz olarak öncelikli haber bildirimlerine, haber takibi ve yorum
          yapabilirsiniz.
        </p>
        <input
          type="email"
          className="register-form-email"
          placeholder="E-mail"
        />
        <input
          type="password"
          className="register-form-password"
          placeholder="Şifre"
        />
        <div className="register-form-phones">
          <input type="text" className="first-phone" placeholder="0 5xxxxxx" />
          <input type="text" className="first-phone" placeholder="0 5xxxxxx" />
        </div>
        <button className={modeStatus ? "dark" : ""} type="submit">KAYIT OL</button>
      </div>
      <div className="register-store">
        <div className="mobile">
          <Image src={mobile} alt="mobile" fill />
        </div>
        <div className="information">
          <p className={modeStatus ? "dark" : ""}>
            Size özel haber kategorilerini seçip,keyifli okumanızı sağlayacak
            üyelik alanımızda web ve mobil entegre kolaylığı ile haberi duyan
            ilk siz olun.
          </p>
          <div className="apps">
            <Image src={appstore} alt="mobile" width={208} className="appStore"/>
            <Image src={trgoogle} alt="mobile" width={206} className="googlePlay"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
