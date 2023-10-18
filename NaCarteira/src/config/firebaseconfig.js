import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyAYjI4-4OKQNQ4vEIzSZpDbVtXOa3GQSSs",
  authDomain: "nacarteira-425b1.firebaseapp.com",
  projectId: "nacarteira-425b1",
  storageBucket: "nacarteira-425b1.appspot.com",
  messagingSenderId: "605634398313",
  appId: "1:605634398313:web:28cea333ed8fb1b1af3af8"
};

// Inicialize o Firebase App
const app = initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Inicialize o Firestore
const db = getFirestore(app);

// Inicialize o módulo de autenticação
const auth = getAuth(app);

export { db, auth };
