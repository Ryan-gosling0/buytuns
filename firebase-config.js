<<<<<<< HEAD
﻿// Firebase Configuration for NaggyStore (Project: buytuns)
=======
>>>>>>> 1cc9a063cf5f4ad4e2aef40abf4c33f0fb39c72e
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyBHN_I3NsFfw3xryVH1SImTjfMayYCm7hA",
      authDomain: "naggystore-d3697.firebaseapp.com",
      projectId: "naggystore-d3697",
      storageBucket: "naggystore-d3697.firebasestorage.app",
      messagingSenderId: "1083270919985",
      appId: "1:1083270919985:web:83a9d2db42ad2458eae210"
=======
    apiKey: "AIzaSyBHN_I3NsFfw3xryVH1SImTjfMayYCm7hA",
        authDomain: "naggystore-d3697.firebaseapp.com",
        projectId: "naggystore-d3697",
        storageBucket: "naggystore-d3697.firebasestorage.app",
        messagingSenderId: "1083270919985",
        appId: "1:1083270919985:web:83a9d2db42ad2458eae210"
>>>>>>> 1cc9a063cf5f4ad4e2aef40abf4c33f0fb39c72e
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const ADMIN_EMAIL = "ahmedmidonajjar@gmail.com";
