// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  setDoc,
  query, collection, onSnapshot
} from "firebase/firestore";

import {v4 as uuidv4} from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyDdjMBTH7XgW07JJhOseHaYCVsp25HHoSY",
  authDomain: "garden-analytics.firebaseapp.com",
  projectId: "garden-analytics",
  storageBucket: "garden-analytics.appspot.com",
  messagingSenderId: "943328492400",
  appId: "1:943328492400:web:51421f7ca6be68246c6db5",
  measurementId: "G-2HC2RF6XZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();


export const createSalesData = async (salesData) => {
  const salesDocRef = doc(db, 'vegetables', `${salesData.vegetableName}/sales/${uuidv4()}`);

  await setDoc(salesDocRef, salesData)
  .catch((e) => {
    console.error(e.code)
  })
}

export const onSalesChangedListener = (vegetable, callback) => {
  onSnapshot(collection(db, `vegetables/${vegetable}/sales`), callback);
}