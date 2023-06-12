// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getAuth} from 'firebase/auth'
import {getAnalytics} from 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyC5FWsfPZ_A_lVewuNvpGCeJ1NijDaeV8Q",
  authDomain: "thesearchfilmorseries.firebaseapp.com",
  projectId: "thesearchfilmorseries",
  storageBucket: "thesearchfilmorseries.appspot.com",
  messagingSenderId: "382311242272",
  appId: "1:382311242272:web:2ec8a80a36b2a00c607a45",
  measurementId: "G-V5DQ2D6ENW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const authAnalytics = analytics;