import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZR9Cuvj2t1cCLoEDV-rJ-e-XAaoAu5fU",
  authDomain: "petshop-31971.firebaseapp.com",
  projectId: "petshop-31971",
  storageBucket: "petshop-31971.appspot.com",
  messagingSenderId: "996790857108",
  appId: "1:996790857108:web:d20c6260d3e810cd297381"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
export const storage = getStorage();