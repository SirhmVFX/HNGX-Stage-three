import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAv_lhnX3tAbJMGlArl8BZZhWMBa_LfXts",
  authDomain: "hngx-stage-three-image-gallery.firebaseapp.com",
  projectId: "hngx-stage-three-image-gallery",
  storageBucket: "hngx-stage-three-image-gallery.appspot.com",
  messagingSenderId: "770979804721",
  appId: "1:770979804721:web:3b7d9e25d1d12aa17d0710",
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
