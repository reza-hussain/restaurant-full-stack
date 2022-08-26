import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDPhF1ksXUK23OUf61gEzt2q6s4_OtGnAI",
    authDomain: "restaurant-full-stack.firebaseapp.com",
    databaseURL: "https://restaurant-full-stack-default-rtdb.firebaseio.com",
    projectId: "restaurant-full-stack",
    storageBucket: "restaurant-full-stack.appspot.com",
    messagingSenderId: "993728895341",
    appId: "1:993728895341:web:2f390eec7744027b8ea264"
  };
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app);

  export { app, firestore, storage};