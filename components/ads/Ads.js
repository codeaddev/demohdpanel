// "use client";
// import React, { useEffect, useState } from 'react';
// import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
// import { db } from "@/firebase/firebase.config";

// const Ads = () => {

//     const [breakingAds, setBreakingAds] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         let controller = new AbortController();
//         (async () => {
//           const q = query(
//             collection(db, "Ads"),         
//             orderBy("datePublished", "asc")
//           );
//           const sondakikaGetting = onSnapshot(q, (snap) => {
//             var breakingNewsList = [];
    
//             snap.forEach((doc) => {
//                 breakingNewsList.push(doc.data());   
//             });
    
//             setBreakingAds(breakingNewsList);
//             setLoading(false);
//           });
    
//           return () => sondakikaGetting();
    
//         })();
    
//         return () => controller?.abort();
//       }, []);

//       console.log(breakingAds)

//   return (
//     <div>Ads</div>
//   )
// }

// export default Ads