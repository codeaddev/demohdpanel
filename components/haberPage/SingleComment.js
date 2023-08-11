import React, { useEffect, useState } from "react";
import { db } from "@/firebase/firebase.config";
import { Avatar, CircularProgress } from "@mui/material";
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
import member1 from "../homePage/assets/member1.png";
import Image from "next/image";
import { GoClock } from "react-icons/go";
import { TiArrowForward } from "react-icons/ti";
import { GiCancel } from "react-icons/gi";
import "./singleComment.scss";

const SingleComment = ({ thisPage, item, modeStatus, showAnswers, setShowAnswers }) => {

  const [answers, setAnswers] = useState([]);
  const [answersLoading, setAnswersLoading] = useState(true);
  const [answer, setAnswer] = useState({ author: "", comment: "" });
  const [adding, setAdding] = useState(false);

  // console.log(answers)
  // console.log(item)

  const handleChange = (e) => {
    const { value, name } = e.target;
    setAnswer((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    let controller = new AbortController();
    var referance = collection(
      db,
      thisPage.category,
      thisPage.id,
      "comments",
      item.doc,
      "answers"
    );

    (async () => {
      const q = query(referance, orderBy("createdAt", "asc"));
      const jobgetting = onSnapshot(q, (snap) => {
        var thisComments = [];

        snap.forEach((doc) => {
          thisComments.unshift({ ...doc.data(), doc: doc.id });
        });
        setAnswers(thisComments);
        setAnswersLoading(false);
      });
      return () => jobgetting();
    })();

    return () => controller?.abort();
  }, [adding]);

  if (answersLoading) {
    return <CircularProgress />;
  };

  const handleShowAnswers = () => {
    if (showAnswers === item.id) {
      setShowAnswers(null);
    }
    else {
      setShowAnswers(item.id);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var referancefirst = doc(db, thisPage.category, thisPage.id);
    var referance = collection(
      db,
      thisPage.category,
      thisPage.id,
      "comments",
      item.doc,
      "answers"
    );
    setAdding(true);
    var createdAt = new Date();
    let a;

    try {
      a = await addDoc(referance, {
        ...answer,
        id: new Date().valueOf().toString().substring(6),
        createdAt: createdAt,
        confirmed: false,
      });
      await updateDoc(referancefirst, {
        comments: increment(1),
      });
      setAdding(false);
      window.alert("Yorum yüklendi");
      setAnswer({
        author: "",
        comment: "",
      });
      setShowAnswers(false);
    } catch (error) {
      setAdding(false);
      window.alert("Bir hata meydana geldi", error);
      console.log(error);
    }
    return a;
  };

  const confirmedAnswers = answers.filter((answer) => answer.confirmed);

  return (
    <div className="comments-box" key={item.id}>
      <div className="comments-box-frame">
       {/* <img src={member1} className="member-img" alt="a" /> */}
        {/* <Image src={member1} className="member-img" alt={item.author}/> */}
        <Avatar>{item.author.charAt(0).toUpperCase()}</Avatar> 
        <div className={`comments-box-frame-info ${modeStatus ? "dark" : ""}`}>
          <h6>{item.author}</h6>
          <p className={`time-info ${modeStatus && "dark"}`}>
            <GoClock />
            <span>
              {new Date(item.createdAt.seconds * 1000).toLocaleString()}
            </span>
          </p>
        </div>
      </div>
      <p className={`personal-comment ${modeStatus ? "dark" : ""}`}>
        {item.comment}
      </p>
      <div className="likes-dislikes">
        <div className={`like ${modeStatus ? "dark" : ""}`}></div>
        <div className={`dislike ${modeStatus && "dark"}`}></div>
        <div className={`reply ${modeStatus && "dark"}`} onClick={handleShowAnswers}>
          {showAnswers === item.id ? (
            <>
              <GiCancel className="cancel"/>
              <span>Vazgeç</span>
            </>
          ) : (
            <>
              <TiArrowForward className="respond"/>
              <span>Yanıtla</span>
            </>
          )}
        </div>
      </div>
      {(showAnswers === item.id) && (
        <form onSubmit={handleSubmit} className="comments-adds">
          <h4 className={modeStatus ? "dark" : ""}>Habere Yorum Ekle</h4>
          <input
            type="text"
            placeholder="Adınız Soyadınız"
            required
            name="author"
            onChange={handleChange}
          />
          <textarea
            placeholder="Yorumunuz"
            rows={"3"}
            name="comment"
            required
            onChange={handleChange}
          ></textarea>
          <p className={`informative ${modeStatus ? "dark" : ""}`}>
            Gönderilen yorumların küfür, hakaret ve suç unsuru içermemesi
            gerektiğini okurlarımıza önemle hatırlatırız!
          </p>
          <button
            type="submit"
            className={`submit-btn single ${modeStatus ? "dark" : ""}`}
          >
            Gönder
          </button>
        </form>
      )}
      {confirmedAnswers.length > 0 &&
        confirmedAnswers.map((i) => {
          return (
            <div className="comments-box answer" key={i.id}>
              <div className="comments-box-frame">
                {/* <img src={member1} className="member-img" /> */}
                <Image src={member1} className="member-img" />
                <div
                  className={`comments-box-frame-info ${
                    modeStatus ? "dark" : ""
                  }`}
                >
                  <h6>{i.author}</h6>
                  <p className={`time-info ${modeStatus ? "dark" : ""}`}>
                    <GoClock />
                    <span>
                      {new Date(item.createdAt.seconds * 1000).toLocaleString()}
                    </span>
                  </p>
                </div>
              </div>
              <p className={`personal-comment ${modeStatus ? "dark" : ""}`}>
                {i.comment}
              </p>
              <div className="likes-dislikes">
                <div className={`like ${modeStatus ? "dark" : ""}`}></div>
                <div className={`dislike ${modeStatus && "dark"}`}></div>
              </div>
            </div>
          );
        })}
      {/* {(showAnswers === item.id) && (
        <form onSubmit={handleSubmit} className="comments-adds">
          <h4 className={modeStatus ? "dark" : ""}>Habere Yorum Ekle</h4>
          <input
            type="text"
            placeholder="Adınız Soyadınız"
            required
            name="author"
            onChange={handleChange}
          />
          <textarea
            placeholder="Yorumunuz"
            rows={"3"}
            name="comment"
            required
            onChange={handleChange}
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
      )} */}
    </div>
  );
};

export default SingleComment;
