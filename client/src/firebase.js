import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBGZ9sZilj7TRj8PU5OfvH6kutyCS6pPlI",
    authDomain: "realtime-chat-applicatio-4a24d.firebaseapp.com",
    projectId: "realtime-chat-applicatio-4a24d",
    storageBucket: "realtime-chat-applicatio-4a24d.appspot.com",
    messagingSenderId: "80420017996",
    appId: "1:80420017996:web:0a42738712699bfb2061e9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();