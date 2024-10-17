import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAXoMjidvObHiglzOE50M7tt4mms_SG318",
  authDomain: "chatapp-b8958.firebaseapp.com",
  projectId: "chatapp-b8958",
  storageBucket: "chatapp-b8958.appspot.com",
  messagingSenderId: "484438330865",
  appId: "1:484438330865:web:1fc437cf144f556f81c850"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };