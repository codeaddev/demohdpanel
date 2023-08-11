"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { storiesArray } from "./utils";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { doc, increment, updateDoc } from "firebase/firestore";
import axios from "axios";

export const categoryList = [
  { id: "01", label: "Son Dakika", collection: "sonDakika" },
  { id: "02", label: "Gündem", collection: "gundem" },
  { id: "03", label: "Magazin", collection: "magazin" },
  { id: "04", label: "Ekonomi", collection: "ekonomi" },
  { id: "05", label: "Spor", collection: "spor" },
  { id: "06", label: "Siyaset", collection: "siyaset" },
  { id: "07", label: "Dünya", collection: "dunya" },
  { id: "08", label: "Yazarlar", collection: "yazarlar" },
  { id: "09", label: "Asayiş", collection: "asayis" },
  { id: "10", label: "Eğitim", collection: "egitim" },
  { id: "11", label: "Teknoloji", collection: "teknoloji" },
  { id: "12", label: "Yaşam", collection: "yasam" },
  { id: "13", label: "Sinema", collection: "sinema" },
  { id: "14", label: "Araştırma", collection: "arastirma" },
  { id: "15", label: "Gezi", collection: "gezi" },
  { id: "16", label: "Kültür Sanat", collection: "kultursanat" },
  { id: "17", label: "Sağlık", collection: "saglik" },
  { id: "18", label: "İnanç", collection: "inanc" },
  { id: "19", label: "Emlak", collection: "emlak" },
  { id: "20", label: "Astroloji", collection: "astroloji" },
];

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [mode, setMode] = useState("light");
  const [storyModal, setStoryModal] = useState(false);

  const [stories, setStories] = useState([]);
  const [category, setCategory] = useState("dünya");

  const [fetching, setFetching] = useState(true);
  const [total, setTotal] = useState({
    league: [],
    league1: [],
    league2: [],
  });

  const [news, setNews] = useState([])
  const [loading, setLoading] = useState([]);

  const handleReadIncrement = async (category,id) => {
    var referance=doc(db,category,id)
    try {
      await updateDoc(referance, {
        read: increment(1)
      });
    } catch (error) {
      console.log(error)
    }
  };

  const fetchPoints = async () => {
  
    try {
     const res = await axios.get(`https://payment.onlinekesif.com/puan-durumu`);
     const res1 = await axios.get(`https://payment.onlinekesif.com/puan-durumu-1`);
     const res2 = await axios.get(`https://payment.onlinekesif.com/puan-durumu-2`);
     setTotal({league: res.data.result, league1: res1.data.result, league2: res2.data.result});
     setFetching(false);
   
    } catch (error) {
     setFetching(false);
     console.log(error)
    }
   };

  useEffect(() => {
    let controller = new AbortController();
    var newsList = [];

    for (let i = 0; i < categoryList.length; i++) {
      (async () => {
        const q = query(
          collection(db, categoryList[i].collection),
          orderBy("datePublished", "asc")
        );
        const newsGetting = onSnapshot(q, (snap) => {
          snap.forEach((doc) => {
            if (doc.data().active) {
              newsList.unshift({ ...doc.data(), doc: doc.id });
            }
          });
          setNews(newsList);
          setLoading(false);
        });
        return () => newsGetting();
      })();
    }
    return () => controller?.abort();
  }, []);

  useEffect(() => {
    fetchPoints();
  }, []);

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const changeStoryModal = () => setStoryModal((prevState) => !prevState);
  const closeStoryModal = () => setStoryModal(false);

  const handleStories= (cat) =>{
    const newList = storiesArray.filter((item) => item.category === cat);
    const newCategory = storiesArray.find((item) => item.category === cat).category;
    setCategory(newCategory);
    setStories(newList);
};

const navigateStory = (cat) => {
  changeStoryModal();
  handleStories(cat);
};

  const values = { toggle, mode, storyModal, changeStoryModal, navigateStory, stories, category, handleStories, closeStoryModal, news, loading, handleReadIncrement, total, fetching };

  return (
    <ThemeContext.Provider value={values}>
       {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
