import { setDoc, doc } from "firebase/firestore"
import { firestore } from "../firebase/firebase.config"

//Saving a new item

export const saveItem = async(data) => {
    await setDoc(
        doc(firestore, 'foodItems', `${Date.now()}`), data, {merge: true }
    );
};