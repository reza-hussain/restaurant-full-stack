import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAX_wKDU_XLk95ycyMGGeEEG8KHIC1gRis",
    authDomain: "restaurant-full--stack.firebaseapp.com",
    databaseURL: "https://restaurant-full--stack-default-rtdb.firebaseio.com",
    projectId: "restaurant-full--stack",
    storageBucket: "restaurant-full--stack.appspot.com",
    messagingSenderId: "266513686464",
    appId: "1:266513686464:web:4721beaad2a6dab898f225"
  };
  
  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app);

  export { app, firestore, storage};