import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getAuth,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const auth = getAuth(app);

window.login = function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

signInWithEmailAndPassword(auth,email,password)

.then(() => {

window.location.href="admin.html";

})

.catch(() => {

alert("Access denied");

});

}