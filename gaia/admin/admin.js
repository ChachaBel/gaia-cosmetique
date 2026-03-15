import { db } from "./firebase.js";

import {
addDoc,
collection
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const form = document.getElementById("addProductForm");

if(form){

form.addEventListener("submit", async (e)=>{

e.preventDefault();

const name = document.getElementById("productName").value;
const price = document.getElementById("productPrice").value;
const image = document.getElementById("productImage").value;
const desc = document.getElementById("productDescription").value;
const stock = document.getElementById("productStock").value;

await addDoc(collection(db,"products"),{

name,
price,
image,
desc,
stock

});

alert("Produit ajouté");

form.reset();

});

}