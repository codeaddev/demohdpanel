"use client";
import React, { useEffect, useState, useId, useRef } from "react";
import "./haber.scss";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { AiFillEye, AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaRegSave, FaComment } from "react-icons/fa";
import Image from "next/image";
import google from "../homePage/assets/googleNews.png";
import most1 from "../homePage/assets/most1.png";
import tech from "../homePage/assets/tech.png";
import tech2 from "../homePage/assets/tech2.png";
import politics from "../homePage/assets/politics.png";
import economy from "../homePage/assets/economy.png";
import gundem2 from "../homePage/assets/gundem2.png";
// import userImg from "../homePage/assets/user.png";
// import bank from "../homePage/assets/bank.png";
// import car from "../homePage/assets/car.png";
// import news from "../homePage/assets/news.png";
import video2 from "../homePage/assets/video2.png";
import moment from "moment";
import SingleHaber from "./SingleHaber";
// import SingleRelatedNews from "./SingleRelatedNews";
import SingleVideo from "./SingleVideo";
import DOMPurify from 'dompurify'
import Amblem from "./Amblem";
import CategoryHeadlines from "./categoryHeadlines/CategoryHeadlines";
import { useThemeContext } from "@/context/ThemeContext";
import {
  addDoc,
  collection,
  doc,
  increment,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import SingleComment from "./SingleComment";
import { categoryConvertor } from "@/context/utils";
import RelatedNews from "../relatedNews/RelatedNews";

const mostReadNewsArray = [
  {
    id: 1,
    image: tech,
    content:
      "One of Jeff Bezos' most famous quotes is a warning to Wall Street",
    title: "Teknoloji",
  },
  {
    id: 2,
    image: gundem2,
    content:
      "Uber is disputing a study that suggested its drivers were making less",
    title: "Gündem",
  },
  {
    id: 3,
    image: economy,
    content: "How the War on Tipping Is Bad for CustomersJones",
    title: "Ekonomi",
  },
  {
    id: 4,
    image: tech2,
    content: "These 9 electric bikes are stylish and loaded with",
    title: "Teknoloji",
  },
  {
    id: 5,
    image: politics,
    content:
      "Here's how Amazon's and Apple's new smart speakers stack up with consumers",
    title: "Siyaset",
  },
];

// const relatedNewsArray = [
//   {
//     id: 1,
//     image: car,
//     content:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
//     time: "HAZİRAN 10, 2023",
//     view: 12,
//   },
//   {
//     id: 2,
//     image: news,
//     content:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
//     time: "HAZİRAN 12, 2023",
//     view: 26,
//   },
//   {
//     id: 3,
//     image: bank,
//     content:
//       "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
//     time: "TEMMUZ 18, 2023",
//     view: 34,
//   },
// ];

const videoNewsArray = [
  {
    id: 1,
    image: tech,
    content: "İşletmelere 1 buçuk milyon liraya kadar faizsiz kredi…",
    author: "Hande Kara",
  },
  {
    id: 2,
    image: gundem2,
    content:
      "Uber is disputing a study that suggested its drivers were making less",
    author: "Melek Çelik",
  },
  {
    id: 3,
    image: economy,
    content: "One of Jeff Bezos most famous quotes is a warning to Wall Street",
    author: "Meriç Sığmaz",
  },
];

const Haber = ({ thisPageArticle, thisPage }) => {
  
  const { mode, news } = useThemeContext();
  const modeStatus = mode === "dark";
  const [loading, setLoading] = useState(true);
  const [loadingComments, setLoadingComments] = useState(true);
  const [comments, setComments] = useState([]);
  // const [like, setLike] = useState(0);
  // const [dislike, setDislike] = useState(0);
  const [showAnswers, setShowAnswers] = useState(null);

  const contentRef = useRef(null);

  const [comment, setComment] = useState({
    author: "",
    comment: "",
  });

  const styleTime = {
    display: "flex",
    gap: "1rem",
  };

  const router = useRouter();

  const { category, title, eng, id, datePublished, dateModified, read, comments: newsComments,
    author, likes, dislikes, description, image } = thisPage;

  const timePublished = new Date(datePublished.seconds * 1000);
  const publishedTime = moment(timePublished).format("DD.MM.YYYY - HH:mm");

  const timeModified = new Date(dateModified.seconds * 1000);
  const modifiedTime = moment(timeModified).format("DD.MM.YYYY - HH:mm");

  const existingCategory = categoryConvertor[category] || category;

  const navigateToCategory = (category) => router.push(`/${category}`);

  const categoryBreadcrumb = [
    {
      id: useId(),
      title: categoryConvertor[category] || category,
      link: `/${category}`,
    },
    {
      id: useId(),
      title,
      link: `/${category}/${eng}-${id}`,
    },
  ];

 console.log(thisPage);

  const { subCategories } = thisPage;
  
  // console.log(subCategories)

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    var referancefirst = doc(db, thisPage.category, thisPage.id);
    var referance = collection(db, thisPage.category, thisPage.id, "comments");
    setLoading(true);
    var createdAt = new Date();
    let a;

    try {
      a = await addDoc(referance, {
        ...comment,
        likes: 0,
        comments: 0,
        dislikes: 0,
        id: new Date().valueOf().toString().substring(6),
        createdAt: createdAt,
        confirmed: false,
      });
      await updateDoc(referancefirst, {
        comments: increment(1),
      });
      setLoading(false);
      window.alert("Yorum yüklendi");
      setComment({
        author: "",
        comment: "",
      });
    } catch (error) {
      setLoading(false);
      window.alert("Bir hata meydana geldi", error);
      console.log(error);
    }
    return a;
  };

  const onChange = (e) => {
    const { value, name } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const handleKeyPress = (e) => {
    if (!e.target.value.trim() && e.key === "Enter") return;
    else if (e.key === "Enter") {
      e.preventDefault();
      formSubmitHandler(e);
    }
  };

  useEffect(() => {
    let controller = new AbortController();
    var referance = collection(db, thisPage.category, thisPage.id, "comments");

    (async () => {
      const q = query(referance, orderBy("createdAt", "asc"));
      const jobgetting = onSnapshot(q, (snap) => {
        var thisComments = [];

        snap.forEach((doc) => {
          thisComments.unshift({ ...doc.data(), doc: doc.id });
        });
        setComments(thisComments);
        setLoadingComments(false);
      });
      return () => jobgetting();
    })();

    return () => controller?.abort();
  }, []);

  // console.log(comments);
  // console.log(showAnswers);
  // console.log(selectedComment);

  const confirmedComments = comments.filter((comment) => comment.confirmed);

  if (loading) {
    <CircularProgress>Loading</CircularProgress>;
  };

  return (
    <div className={`newss ${modeStatus ? "dark" : ""}`}>
      <Breadcrumb mode={mode} links={categoryBreadcrumb} />
      <div className="newss-container">
        <div className="newss-container-content">
          <div className="newss-container-content-category">
            <button type="button" onClick={() => navigateToCategory(category)}>
              {existingCategory}
            </button>
            <div className="icon-wrapper">
              <div className={`svg-wrapper ${modeStatus ? "dark" : ""}`}>
                <FaRegSave />
              </div>
              <div className="icons">
                <p>Abone Ol</p>
                <Image src={google} alt="google-news" />
              </div>
            </div>
          </div>
          <div className="newss-container-content-title">
            {/* <div className={`blue-line ${modeStatus ? "dark" : ""}`}></div> */}
            <h1 className={modeStatus ? "dark" : ""}> {title} </h1>
          </div>
          <p>{description}</p>
          <p className={modeStatus ? "dark" : ""} style={styleTime}>
            {dateModified && (
              <span>
                <strong>Güncellenme: </strong> {modifiedTime}
              </span>
            )}
            <span>
              <strong>Yayınlanma: </strong> {publishedTime}
            </span>
          </p>
          <img className="pic1" src={image} alt={title} />
          <div className={`user-info ${modeStatus ? "dark" : ""}`}>
            {/* <div className="user-info-img">
              <Image src={userImg} alt="google-news" fill />
            </div> */}
            <span className="user-info-name">{author}</span>
            <div className={`user-info-line ${modeStatus ? "dark" : ""}`}></div>
            <div className="user-info-icon">
              <AiFillEye /> <span> {read} </span>
            </div>
            <div className={`user-info-line ${modeStatus ? "dark" : ""}`}></div>
            <div className="user-info-comment">
              <FaComment /> <span> {newsComments} </span> Yorum
            </div>
            <div className={`user-info-line ${modeStatus ? "dark" : ""}`}></div>
            <div className="user-info-comment">
              <button className="user-info-comment-icon" type="button">
                <AiFillLike />
              </button>
              <span> {likes} </span>
            </div>
            <div className="user-info-comment">
              <button className="user-info-comment-icon" type="button">
                <AiFillDislike />
              </button>
              <span> {dislikes} </span>
            </div>
          </div>
          {thisPageArticle && (
          <p
          ref={contentRef}
            className={`content ${modeStatus ? "dark" : ""}`}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(thisPageArticle.body)}}>
            </p>
            )}
          <h3 className={`tags-title ${modeStatus ? "dark" : ""}`}>
            Etiketler
          </h3>
          <div className="buttons-wrapper">
            <button className={modeStatus ? "dark" : ""}>Nato</button>
            <button className={modeStatus ? "dark" : ""}>Dışişleri</button>
            <button className={modeStatus ? "dark" : ""}>Cumhurbaşkanlığı</button>
          </div>
          <Amblem />
          <CategoryHeadlines />
          <Amblem />
          <div className="comments">
            <h4 className={modeStatus ? "dark" : ""}>Yorumlar</h4>
            {confirmedComments.map((i) => {
              return (
                  <SingleComment key={i.id} thisPage={thisPage} item={i} modeStatus={modeStatus} setShowAnswers={setShowAnswers} showAnswers={showAnswers} />
              );
            })}
            {/* <Link href="/">
              <p className={`member-replys ${modeStatus ? "dark" : ""}`}>
                Tüm Yanıtları Gör (<span>7</span>)
              </p>
            </Link>
            <Link href="/">
              <p className={`member-comments ${modeStatus ? "dark" : ""}`}>
                Tüm Yorumları Gör (<span>18</span>)
              </p>
            </Link> */}
          </div>
          { !showAnswers ? (
                 <form className="comments-add" onSubmit={formSubmitHandler}>
                 <h4 className={modeStatus ? "dark" : ""}>Yorum Ekle</h4>
                 <input
                   type="text"
                   placeholder="Adınız Soyadınız"
                   value={comment.author}
                   name="author"
                   onChange={onChange}
                   required
                 />
                 <textarea
                   placeholder="Yorumunuz"
                   value={comment.comment}
                   onChange={onChange}
                   name="comment"
                   rows={"3"}
                   onKeyDown={handleKeyPress}
                   required
                 ></textarea>
                 <p className={`informative ${modeStatus ? "dark" : ""}`}>
                   Gönderilen yorumların küfür, hakaret ve suç unsuru içermemesi
                   gerektiğini okurlarımıza önemle hatırlatırız!
                 </p>
                 <button
                   type="submit"
                   className={`submit-btn ${modeStatus ? "dark" : ""}`}
                 >
                   Gönder
                 </button>
               </form> 
          ) : null 
          }
        </div>
        <div className="newss-container-adds">
          <div className="most">
            <Image src={most1} alt="google-news" fill />
          </div>
          <h3 className={`most-read-news-title ${modeStatus ? "dark" : ""}`}>
            En Çok Okunan{" "}
            <span className={modeStatus && "dark"}> Haberler </span>
          </h3>
          <div className="most-read">
            {mostReadNewsArray.map((item) => {
              return <SingleHaber key={item.id} {...item} mode={modeStatus} />;
            })}
          </div>
          <RelatedNews subCategories={subCategories} category={category} id={id} />
          <div className="video-gallery">
            <h3 className={modeStatus && "dark"}>
              Video <span className={modeStatus && "dark"}> Galeri </span>
            </h3>
            <div className="video-live">
              <Image src={video2} alt="google-news" fill />
            </div>
            <h4 className={modeStatus && "dark"}>
              Apple confirmed a longtime conspiracy theory
            </h4>
            <div className={`authors-info ${modeStatus ? "dark" : ""}`}>
              <p>YAZAR LEE MORAN</p>
              <div className={`circle ${modeStatus ? "dark" : ""}`}></div>
              <p>DECEMBER 20, 2012</p>
              <AiFillEye />
              <span>14</span>
            </div>
            <div className="most-read">
              {videoNewsArray.map((item) => {
                return (
                  <SingleVideo key={item.id} {...item} mode={modeStatus} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Haber;
