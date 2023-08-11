"use client";
import React, { useState } from "react";
import "./nobetci.scss";
import axios from "axios";
import { cities, regions } from "../../context/districts";
import eczane from "../homePage/assets/eczane.jpg";
import home from "../homePage/assets/adres.png";
import Image from "next/image";

import { AiOutlineMenu } from "react-icons/ai";
import PlaceIcon from '@mui/icons-material/Place';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

const eczaneInfo = [
  {
    id: 1,
    name: "Orhan Eczanesi",
    phone: "02243986742",
    district: "Nilüfer",
    address: "Orhan Mahallesi, Dr. İbrahim Öktem Caddesi, No:35 Nilüfer/Bursa",
  },
  {
    id: 1,
    name: "Yeliz Eczanesi",
    phone: "02243986742",
    district: "Osmangazi",
    address: "Orhan Mahallesi, Dr. İbrahim Öktem Caddesi, No:35 Nilüfer/Bursa",
  },
  {
    id: 1,
    name: " Eczanesi",
    phone: "02243986742",
    district: "Nilüfer",
    address: "Orhan Mahallesi, Dr. İbrahim Öktem Caddesi, No:35 Nilüfer/Bursa",
  },
  {
    id: 1,
    name: "Orhan Eczanesi",
    phone: "02243986742",
    district: "Nilüfer",
    address: "Orhan Mahallesi, Dr. İbrahim Öktem Caddesi, No:35 Nilüfer/Bursa",
  },
];

const NobetciEczaneComp = () => {
  const [info, setInfo] = useState({
    city: "",
    region: "",
  });

  const [regionList, setRegionList] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "city") {
      setInfo((pre) => ({ ...pre, [name]: value }));
      setRegionList(regions[value]);
    } else {
      setInfo((pre) => ({ ...pre, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchEczaneInfo();
    // fetchApi();
    // alert("submitted");
  };

  const fetchEczaneInfo = async () => {
    try {
      const res = await axios.get(
        "https://api.collectapi.com/health/dutyPharmacy?&il=Ankara",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "apikey 5bEMEXwCqtxYkxuJPA2Xxy:2cblCG2r0k0oNNLP6eXqQC",
          },
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(regions);

  return (
    <div className="form-wrapper">
      <form className="city-form" onSubmit={handleSubmit}>
        <select
          onChange={handleChange}
          className="city-form-select"
          name="city"
          required
          value={info.city}
        >
          <option value="" selected hidden disabled>
            --İl seçiniz--
          </option>
          {cities.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
        <select
          onChange={handleChange}
          className="city-form-select"
          name="region"
          required
          value={info.region}
        >
          <option value="" selected hidden disabled>
            --İlçe seçiniz--
          </option>

          {regionList?.map((i, idx) => {
            return (
              <option key={idx} value={i}>
                {i}
              </option>
            );
          })}
        </select>
        <input type="submit" value="Eczane Bul" />
      </form>
      <h4>10 Ağustos Perşembe Bursa Nöbetçi Eczaneleri</h4>
      <div className="info-wrapper">
        <div className="item">
          <div className="upside">
            <div className="upside-left">
              <Image src={eczane} alt="" />
              <h5>Erik Eczanesi</h5>
              <div><FmdGoodOutlinedIcon /></div>
            </div>
            <p className="upside-center">02241584126</p>
            <div className="upside-right">Yıldırım</div>
          </div>
          <div className="downside">
            <Image src={home} />
            <p>Orhan Mahallesi, Dr. İbrahim Öktem Caddesi, No:35 Nilüfer/Bursa</p>
          </div>
        </div>
        <div className="item">
          <div className="upside">
            <div className="upside-left">
              <Image src={eczane} alt="" />
              <h5>Erik Eczanesi</h5>
              <div><FmdGoodOutlinedIcon /></div>
            </div>
            <p className="upside-center">02241584126</p>
            <div className="upside-right">Yıldırım</div>
          </div>
          <div className="downside">
            <Image src={home} />
            <p>Orhan Mahallesi, Dr. İbrahim Öktem Caddesi, No:35 Nilüfer/Bursa</p>
          </div>
        </div>
        <div className="item">
          <div className="upside">
            <div className="upside-left">
              <Image src={eczane} alt="" />
              <h5>Erik Eczanesi</h5>
              <div><FmdGoodOutlinedIcon /></div>
            </div>
            <p className="upside-center">02241584126</p>
            <div className="upside-right">Yıldırım</div>
          </div>
          <div className="downside">
            <Image src={home} />
            <p>Orhan Mahallesi, Dr. İbrahim Öktem Caddesi, No:35 Nilüfer/Bursa</p>
          </div>
        </div>
        <div className="item">
          <div className="upside">
            <div className="upside-left">
              <Image src={eczane} alt="" />
              <h5>Erik Eczanesi</h5>
              <div><FmdGoodOutlinedIcon /></div>
            </div>
            <p className="upside-center">02241584126</p>
            <div className="upside-right">Yıldırım</div>
          </div>
          <div className="downside">
            <Image src={home} />
            <p>Orhan Mahallesi, Dr. İbrahim Öktem Caddesi, No:35 Nilüfer/Bursa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NobetciEczaneComp;
