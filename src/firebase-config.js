import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY1,
    authDomain: "myinsure-9b6d0.firebaseapp.com",
    projectId: "myinsure-9b6d0",
    storageBucket: "myinsure-9b6d0.appspot.com",
    messagingSenderId: "151346107333",
    appId: process.env.REACT_APP_FIREBASE_APPID1,
    measurementId: "G-HD5M5X82C7"
  };

  // const firebaseConfig2 = {
  //   apiKey: process.env.REACT_APP_FIREBASE_KEY2,
  //   authDomain: "client-dashboard-myinsure.firebaseapp.com",
  //   projectId: "client-dashboard-myinsure",
  //   storageBucket: "client-dashboard-myinsure.appspot.com",
  //   messagingSenderId: "192959490114",
  //   appId: process.env.REACT_APP_FIREBASE_APPID2,
  //   measurementId: "G-02JZ5XTRDV"
  // };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // export const app2 = initializeApp(firebaseConfig2);
  // const analytics = getAnalytics(app);
  export const db = getFirestore(app);
  // export const db2 = getFirestore(app2);

  export const auth = getAuth(app);
  // export const auth2 = getAuth(app2);
  export const storage = getStorage(app);
  // export const storage2 = getStorage(app2);

  export default app;

