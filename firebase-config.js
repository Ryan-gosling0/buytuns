// Firebase Configuration for NaggyStore (Project: buytuns)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, connectAuthEmulator } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, enableMultiTabIndexedDbPersistence, connectFirestoreEmulator } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

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

// Global offline flag
export let isOnline = navigator.onLine;
window.addEventListener('online', () => { isOnline = true; console.log('🟢 Online'); });
window.addEventListener('offline', () => { isOnline = false; console.log('🔴 Offline'); });

// Enable Offline Persistence with Fallback
import { enableIndexedDbPersistence } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

async function initPersistence() {
    try {
        await enableMultiTabIndexedDbPersistence(db);
        console.log("✅ Firestore multi-tab persistence enabled.");
    } catch (err) {
        if (err.code === 'failed-precondition') {
            console.warn("⚠️ Multiple tabs open, persistence active in another tab.");
        } else if (err.code === 'unimplemented') {
            try {
                await enableIndexedDbPersistence(db);
                console.log("✅ Firestore single-tab persistence enabled.");
            } catch (innerErr) {
                console.warn("⚠️ Firestore persistence not available:", innerErr.message);
            }
        } else {
            console.warn("⚠️ Firestore persistence error:", err.message);
        }
    }
}

// Initialize persistence and export a promise to wait on
export const persistenceReady = initPersistence();

export const ADMIN_EMAIL = "ahmedmidonajjar@gmail.com";

// Helper to check if database exists (safe query that won't throw in offline mode)
export async function checkDatabaseExists() {
    try {
        if (!isOnline) return false;
        const { getDocs, collection } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js");
        const snap = await getDocs(collection(db, "products"));
        return true;
    } catch (e) {
        return false;
    }
}
