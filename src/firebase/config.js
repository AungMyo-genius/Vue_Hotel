import { initializeApp } from "firebase/app";
import { getFirestore,
         collection,
         onSnapshot,
         orderBy,
         query,
         limit,
         startAt,
         serverTimestamp,
         addDoc,
         doc,
         getDoc,
         deleteDoc,
         updateDoc,
         where  } from "firebase/firestore";
import { getAuth,
         createUserWithEmailAndPassword,
         updateProfile,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged } from "firebase/auth";
import { getStorage,
         ref,
         uploadBytes,
         getDownloadURL,
         deleteObject } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDZnziL165XPf8GhutcOvqoiO5lDFWhzbk",
  authDomain: "amhotel-da211.firebaseapp.com",
  projectId: "amhotel-da211",
  storageBucket: "amhotel-da211.appspot.com",
  messagingSenderId: "53867000448",
  appId: "1:53867000448:web:2d120bcae8ccfc0f9d2c65"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

const authFun = {
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
}

const dbFun = {
    collection,
    onSnapshot,
    orderBy,
    query,
    limit,
    startAt,
    addDoc,
    doc,
    getDoc,
    deleteDoc,
    updateDoc,
    where
}

const storageFun = {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
}

export { db, 
         auth, 
         storage, 
         app, 
         authFun, 
         onAuthStateChanged, 
         dbFun, 
         storageFun,
         serverTimestamp}