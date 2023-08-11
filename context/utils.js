export const categories = [
  "gundem",
  "siyaset",
  "ekonomi",
  "dunya",
  "magazin",
  "egitim",
  "asayis",
  "saglik",
  "yasam",
  "spor",
  "teknoloji",
];

export const editLink = (link) => {
  if (link === "saglik") return "sağlık";
  if (link === "yasam") return "yaşam";
  if (link === "asayis") return "asayiş";
  if (link === "egitim") return "eğitim";
  return link.replace("u", "ü");
};

export const shortNewsTitle = (word) => `${word.substring(0, 50)}...`;

export const handleShort = (text, number) => {
  const res = text.split(" ");
  if (res.length <= number) return res.join(" ");
  return res.slice(0,number).join(" ").concat(" ...");
};


export const navigateCategory = (category) => {
  if (category === "gelisim") return "/";
  if (category === "otomobil") return "/";
  if (category === "gastro") return "/";
  if (category === "seyahat") return "/";
  return `/${category}`;
};

export const transformCategory = (category) => {
  if (category === "magazin") return "MAGAZİN";
  if (category === "dunya") return "DÜNYA";
  if (category === "gundem") return "GÜNDEM";
  if (category === "gelisim") return "GELİŞİM";
  if (category === "siyaset") return "SİYASET";
  if (category === "ekonomi") return "EKONOMİ";
  if (category === "saglik") return "SAĞLIK";
  if (category === "video") return "VİDEO";
  if (category === "teknoloji") return "TEKNOLOJİ";
  if (category === "otomobil") return "OTOMOBİL";
  return category.toUpperCase();
};

export const categoryConvertor = {
  asayis: "asayiş",
  gundem: "gündem",
  dunya: "dünya",
  yasam: "yaşam",
  saglik: "sağlık",
  sonDakika: "son dakika",
  arastirma: "araştırma",
  egitim: "eğitim",
  kultursanat: "kültür sanat",
  inanc: "inanç",
  roportaj: "röportaj",
  ekonomi: "ekonomi",
  spor: "spor",
  siyaset: "siyaset",
  magazin: "magazin",
};

export const storiesArray = [
  {
    category: "dünya",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "dünya",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 500,
  },
  {
    category:"dünya",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"dünya",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"dünya",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category: "gezi",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"gezi",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category: "gezi",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category:"gezi",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"gezi",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category:"video",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"video",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"video",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },
  {
    category: "video",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "video",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },

  {
    category: "otomobil",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "otomobil",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"otomobil",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"otomobil",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"otomobil",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category: "aktüel",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"aktüel",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category: "aktüel",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category:"aktüel",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"aktüel",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category:"magazin",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"magazin",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"magazin",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },
  {
    category: "magazin",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "magazin",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },

  {
    category: "gündem",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "gündem",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"gündem",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"gündem",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"gündem",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category: "spor",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"spor",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category: "spor",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category:"spor",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"spor",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category:"sağlık",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"sağlık",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"sağlık",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },
  {
    category: "sağlık",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "sağlık",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },

  {
    category: "yazarlar",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"yazarlar",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category: "yazarlar",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category:"yazarlar",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"yazarlar",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category:"yaşam",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"yaşam",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"yaşam",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },
  {
    category: "yaşam",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "yaşam",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },

  {
    category: "teknoloji",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "teknoloji",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"teknoloji",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"teknoloji",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"teknoloji",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category: "aile",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
  {
    category:"aile",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category: "aile",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category:"aile",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"aile",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },

  {
    category:"tatil",
    url: "https://i.imgur.com/in5Jr1h.jpg",
    type: "image",
    duration: 2500,
  },
  {
    category:"tatil",
    url: "https://i.imgur.com/LBRXhIq.jpg",
    type: "image",
    duration: 2000,
  },
  {
    category:"tatil",
    url: "https://i.imgur.com/ARMxyC4.png",
    type: "image",
    duration: 3000,
  },
  {
    category: "tatil",
    url: "https://i.imgur.com/Zo5Kpnd.mp4",
    type: "video",
  },
  {
    category: "tatil",
    url: "https://i.imgur.com/QpUEcfi.jpg",
    type: "image",
    duration: 1500,
  },
];

// export const shortcut = (text) => {
//   const res = next.split(" ").slice(0,6);
// }

// --------------  SLIDER  -------------------

export const newsArray = [
  {
    id: "1",
    title: "Breaking News: Earthquake Strikes City X",
    // img: "https://example.com/images/earthquake.jpg",
    img: "https://picsum.photos/500/300",
    description:
      "A powerful earthquake measuring 7.2 on the Richter scale struck City X earlier today, causing widespread damage and panic.",
    datePublished: "2023-02-28T-12:00:00",
    dateModified: "2023-02-28T-12:03:20",
    category: "News",
    subCategory: "Disasters",
    read: 1234,
    url: "https://example.com/news/1",
    author: "user123",
    tags: ["earthquake", "disaster"],
    doc: 913201,
    path: "news/date/gundem/913201",
    comments: 56,
    likes: 321,
    dislikes: 45,
  },
  {
    id: "2",
    title: "Tech Giant Launches Revolutionary New Smartphone",
    // img: "https://example.com/images/smartphone.jpg",
    img: "https://picsum.photos/500/300",
    description:
      "Tech Giant unveiled its latest smartphone, featuring cutting-edge technology and innovative design, set to disrupt the market.",
    datePublished: "2023-03-01T-12:00:00",
    dateModified: "2023-03-01T-12:10:00",
    category: "Technology",
    subCategory: "Gadgets",
    read: 2456,
    url: "https://example.com/news/2",
    author: "user456",
    tags: ["tech", "smartphone"],
    doc: 913201,
    path: "news/date/gundem/913201",
    comments: 87,
    likes: 543,
    dislikes: 32,
  },
  {
    id: "3",
    title: "Sports Team Wins Championship in Thrilling Final",
    // img: "https://example.com/images/championship.jpg",
    img: "https://picsum.photos/500/300",
    description:
      "In an intense and action-packed match, the Sports Team emerged victorious in the championship, defeating their fierce rivals.",
    datePublished: "2023-03-16T-19:10:00",
    dateModified: "2023-03-16T-22:15:00",
    category: "Sports",
    subCategory: "Competitions",
    read: 1765,
    url: "https://example.com/news/3",
    author: "user789",
    tags: ["sports", "championship"],
    doc: 913201,
    path: "news/date/gundem/913201",
    comments: 32,
    likes: 432,
    dislikes: 21,
  },
  {
    id: "4",
    title: "Political Scandal Unveiled: High-ranking Official Implicated",
    // img: "https://example.com/images/political-scandal.jpg",
    img: "https://picsum.photos/500/300",
    description:
      "A major political scandal rocked the nation as evidence emerged implicating a high-ranking official in corruption and misconduct.",
    datePublished: "2023-03-25T-20:30:00",
    dateModified: "2023-03-25T-22:45:00",
    category: "Politics",
    subCategory: "Corruption",
    read: 3298,
    url: "https://example.com/news/4",
    author: "user101112",
    tags: ["politics", "scandal"],
    doc: 913201,
    path: "news/date/gundem/913201",
    comments: 120,
    likes: 987,
    dislikes: 54,
  },
  {
    id: "5",
    title: "New Study Reveals Alarming Climate Change Projections",
    // img: "https://example.com/images/climate-change.jpg",
    img: "https://picsum.photos/500/300",
    description:
      "A groundbreaking study highlights the devastating impact of climate change, predicting severe consequences for the planet and future generations.",
    datePublished: "2023-04-09T-15:30:00",
    dateModified: "2023-04-09T-17:50:00",
    category: "Environment",
    subCategory: "Climate Change",
    read: 4321,
    url: "https://example.com/news/5",
    author: "user131415",
    tags: ["climate change", "environment"],
    doc: 913201,
    path: "news/date/gundem/913201",
    comments: 76,
    likes: 876,
    dislikes: 23,
  },
];
