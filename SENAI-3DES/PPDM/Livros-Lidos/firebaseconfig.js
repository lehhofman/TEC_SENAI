// firebaseconfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBiIOekQ40eHkmCluV-rxWbcmnqzv_i3BQ",
  authDomain: "livros-books.firebaseapp.com",
  projectId: "livros-books",
  storageBucket: "livros-books.appspot.com",
  messagingSenderId: "141140102643",
  appId: "1:141140102643:web:7162b30470fbca60eb5686"
};

// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Inicializar os serviços do Firebase
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
