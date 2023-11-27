import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArTmr3Gmmcv4A6mZhIy-sncce1PJ9k12E",
    authDomain: "fir-app-5ac3b.firebaseapp.com",
    projectId: "fir-app-5ac3b",
    storageBucket: "fir-app-5ac3b.appspot.com",
    messagingSenderId: "1024310122832",
    appId: "1:1024310122832:web:a087bd4e4199650cb53455",
    measurementId: "G-ME3NQ5CGFX"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)