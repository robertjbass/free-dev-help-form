import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlandwgzB7bYoOEgsOqBQna6s_KUWuQaY",
  authDomain: "one-on-one-6f61a.firebaseapp.com",
  projectId: "one-on-one-6f61a",
  storageBucket: "one-on-one-6f61a.appspot.com",
  messagingSenderId: "868389842943",
  appId: "1:868389842943:web:32cb834dd074db442d81ca",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export type ResponseDoc = {
  name: string;
  contact: string;
  learn: string;
  experience: string;
  availability: string;
};

export const addResponse = async (
  response: ResponseDoc
): Promise<string | void> => {
  try {
    const docRef = await addDoc(collection(db, "response"), response);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
