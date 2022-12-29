// import * as firebase from "firebase/app";
// import "firebase/storage";
// import { getStorage } from "firebase/storage";
// import { initializeApp } from 'firebase/app'
// import {getStorage} from 'firebase/storage'

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCBcDW_pYL6wfsGEAHSMQRkCR21v0vkDNc",
//   authDomain: "image-upload-e2ad7.firebaseapp.com",
//   databaseURL: "gs://image-upload-e2ad7.appspot.com",
//   projectId: "image-upload-e2ad7",
//   storageBucket: "image-upload-e2ad7.appspot.com",
//   messagingSenderId: "222907914478",
//   appId: "1:222907914478:web:efb87f12eb680e900d7bff",
//   measurementId: "G-EM18779YHF",
// };

// const app = initializeApp(firebaseConfig);

// const storage = getStorage(app)
// export { storage};

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBcDW_pYL6wfsGEAHSMQRkCR21v0vkDNc",
  authDomain: "image-upload-e2ad7.firebaseapp.com",
  projectId: "image-upload-e2ad7",
  storageBucket: "image-upload-e2ad7.appspot.com",
  messagingSenderId: "222907914478",
  appId: "1:222907914478:web:efb87f12eb680e900d7bff",
  measurementId: "G-EM18779YHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
