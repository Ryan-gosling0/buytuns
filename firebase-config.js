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

// Enable Offline Persistence with Fallback
import { enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

async function initPersistence() {
    try {
        await enableMultiTabIndexedDbPersistence(db);
        console.log("Firestore multi-tab persistence enabled.");
    } catch (err) {
        if (err.code === 'failed-precondition') {
            // Probably multiple tabs open, we can try single-tab if needed but usually it's already active in one
            console.warn("Multiple tabs open, persistence active in another tab.");
        } else if (err.code === 'unimplemented') {
            // Browser doesn't support multi-tab, try single-tab
            try {
                await enableIndexedDbPersistence(db);
                console.log("Firestore single-tab persistence enabled.");
            } catch (innerErr) {
                console.error("Firestore persistence failed:", innerErr.message);
            }
        } else {
            console.error("Firestore persistence error:", err.message);
        }
    }
}

initPersistence();


export const ADMIN_EMAIL = "ahmedmidonajjar@gmail.com";
