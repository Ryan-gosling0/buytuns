// Firebase Configuration for NaggyStore (Project: buytuns)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, enableMultiTabIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBHN_I3NsFfw3xryVH1SImTjfMayYCm7hA",
    authDomain: "naggystore-d3697.firebaseapp.com",
    projectId: "naggystore-d3697",
    storageBucket: "naggystore-d3697.firebasestorage.app",
    messagingSenderId: "1083270919985",
    appId: "1:1083270919985:web:83a9d2db42ad2458eae210"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Enable Offline Persistence
enableMultiTabIndexedDbPersistence(db).catch((err) => {
    if (err.code == 'failed-precondition') {
        console.warn("Multiple tabs open, persistence can only be enabled in one tab at a time.");
    } else if (err.code == 'unimplemented') {
        console.warn("The current browser does not support all of the features required to enable persistence.");
    }
});

export const ADMIN_EMAIL = "ahmedmidonajjar@gmail.com";
