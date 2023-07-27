// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
let firebaseConfig = {
  apiKey: "AIzaSyAVNMhQc4GWERqtIf8SXCFOj14MLhuJKpk",
  authDomain: "blogpost-2ab35.firebaseapp.com",
  projectId: "blogpost-2ab35",
  storageBucket: "blogpost-2ab35.appspot.com",
  messagingSenderId: "861877030247",
  appId: "1:861877030247:web:da59c6bde1f7ee51c033c2",
  measurementId: "G-77V0PJBQZM"
};

// Initialize Firebase
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth=firebase.auth();

const logoutUser=()=>{
  auth.signOut();
  location.reload();
}
