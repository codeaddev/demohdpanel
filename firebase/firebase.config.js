import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyBvtlImhiBJhdPODz-TNYnhUppE-i1TFHs",
    authDomain: "hduysun-e47b3.firebaseapp.com",
    projectId: "hduysun-e47b3",
    storageBucket: "hduysun-e47b3.appspot.com",
    messagingSenderId: "967681901797",
    appId: "1:967681901797:web:664155647793fd1a33400c"
};


  const app=initializeApp(firebaseConfig);
  
  export const auth=getAuth(app)

  export const db=getFirestore()

  export const storage=getStorage(app)