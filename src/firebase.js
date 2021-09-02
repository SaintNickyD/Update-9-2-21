import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBYiSayArVayyPGqbNnbks0BUH4O80byd8",
    authDomain: "snd-main.firebaseapp.com",
    databaseURL: "https://snd-main-default-rtdb.firebaseio.com",
    projectId: "snd-main",
    storageBucket: "snd-main.appspot.com",
    messagingSenderId: "209562562884",
    appId: "1:209562562884:web:d02f4d7f5e2be298522711",
    measurementId: "G-Y6QBFQB6MS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export default app