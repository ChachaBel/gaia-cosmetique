import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCNjSShwk3OTLgb5AZ4KhD3L1yDEMwDams",
  authDomain: "gaia-cosmeti.firebaseapp.com",
  projectId: "gaia-cosmeti",
  storageBucket: "gaia-cosmeti.firebasestorage.app",
  messagingSenderId: "795239138362",
  appId: "1:795239138362:web:87db3860228819400a6103",
  measurementId: "G-ZMBDK3NWTJ"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);