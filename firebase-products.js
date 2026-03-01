/**
 * Firebase Products Module
 * Loads products from Firestore and syncs them with the global products array
 * Must be loaded as a module BEFORE script.js is loaded
 */

import { db, persistenceReady } from "./firebase-config.js";
import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Wait for persistence before setting up listeners
await persistenceReady;

// Initialize global products array (fallback to empty)
window.firebaseProducts = [];

// Set up real-time listener for products from Firestore
let firestoreListener = null;

export function initFirebaseProducts() {
    return new Promise((resolve) => {
        // Listen for real-time updates from Firestore
        firestoreListener = onSnapshot(
            collection(db, "products"),
            (snapshot) => {
                window.firebaseProducts = [];
                snapshot.forEach((doc) => {
                    const data = doc.data();
                    // Normalize product structure
                    const product = {
                        id: data.id || doc.id,
                        name: data.name || "Unknown",
                        category: data.category || "General",
                        price: parseFloat(data.price) || 0,
                        stock: parseInt(data.stock) || 0,
                        img: data.image || data.img || "",
                        image: data.image || data.img || "",
                        colors: data.colors || [],
                        link: data.link || "#",
                        _docId: doc.id
                    };
                    window.firebaseProducts.push(product);
                });
                
                console.log("✅ Firebase products loaded:", window.firebaseProducts.length, "items");
                
                // Update the script.js products array if it exists
                if (window.products) {
                    // Merge: keep existing items, update with Firebase data
                    const firestoreIds = new Set(window.firebaseProducts.map(p => String(p.id)));
                    
                    // Keep local products that don't exist in Firestore
                    const localOnly = window.products.filter(p => !firestoreIds.has(String(p.id)));
                    
                    // Combine Firestore + local-only products
                    window.products = [...window.firebaseProducts, ...localOnly];
                    
                    console.log("📦 Updated products array with Firestore data");
                    
                    // Trigger UI updates if function exists
                    if (typeof window.renderStockTable === 'function') {
                        window.renderStockTable();
                    }
                    if (typeof window.initializeProducts === 'function' && !window.productsInitialized) {
                        window.initializeProducts();
                        window.productsInitialized = true;
                    }
                }
                
                resolve(window.firebaseProducts);
            },
            (error) => {
                console.warn("⚠️ Firebase products sync error (will use local cache):", error.message);
                // Fall back gracefully - the app will continue with cached data
                resolve(window.firebaseProducts);
            }
        );
    });
}

// Initialize on load
initFirebaseProducts().catch(err => console.error("Firebase products init failed:", err));

// Export for use in other modules
export default window.firebaseProducts;
