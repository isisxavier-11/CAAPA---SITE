// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  onSnapshot,
  serverTimestamp,
  orderBy
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDbem6MIi903EgvPYPVT-KSeRvkmnDiGlY",
  authDomain: "chat-anonimo-e3a18.firebaseapp.com",
  projectId: "chat-anonimo-e3a18",
  storageBucket: "chat-anonimo-e3a18.firebasestorage.app",
  messagingSenderId: "343939874355",
  appId: "1:343939874355:web:8dc2fd49ffbec6c5f86d46",
  measurementId: "GLFCgBl0lwVNNxqo5qOy"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Re-exporta para facilitar import no index.html
export { db, collection, addDoc, query, onSnapshot, serverTimestamp, orderBy };
