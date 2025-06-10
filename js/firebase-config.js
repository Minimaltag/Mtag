// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnPcxbJaG3kwBjU7QRmTwOYM6amuAjx1o",
  authDomain: "teste-eff5e.firebaseapp.com",
  projectId: "teste-eff5e",
  storageBucket: "teste-eff5e.firebasestorage.app",
  messagingSenderId: "272404465161",
  appId: "1:272404465161:web:260b0242408081a17c9ad8"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 👇 ADICIONE ESTA LINHA
export { auth };