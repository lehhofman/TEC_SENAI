// firebaseconfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAVSUi3-YrQgYpcE7tzl_BITGbDrKAjJdA",
  authDomain: "livros-lidos-b2c08.firebaseapp.com",
  projectId: "livros-lidos-b2c08",
  storageBucket: "livros-lidos-b2c08.appspot.com",
  messagingSenderId: "803261087640",
  appId: "1:803261087640:web:0e797957c5e1a7f9f9f5ed"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar os serviços do Firebase
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
