// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  collection,
  getDoc,
  setDoc,
  getDocs,
  query,
  onSnapshot,
  where,
  addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// 🟡 Config
const firebaseConfig = {
  apiKey: useRuntimeConfig.FIRE_API_KEY,
  authDomain: "mozza-ddb38.firebaseapp.com",
  projectId: "mozza-ddb38",
  storageBucket: "mozza-ddb38.appspot.com",
  messagingSenderId: "910586584356",
  appId: "1:910586584356:web:f2a38a6430a389ee3667b1Z",
};

// 🟡 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🟡 Functions
const useDoc = (path) => doc(db, path);
const useColl = (path) => collection(db, path);
const createDoc = async (collection, data) => {
  console.log("Firebase: createDoc()");
  try {
    await setDoc(doc(db, collection, "todo:uid"), data);
    console.log("Firebase: Documento Criado");
  } catch (error) {
    console.log("Firebase: Erro ao criar documento", error);
    throw error;
  }
};

// const queryFiltered = query(useColl(`products`), where("tipo", "==", "pizza"));
export { useDoc, useColl, query, onSnapshot, createDoc };
