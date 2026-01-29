/**
 * ==========================================
 * 📍 WHERE TO ADD NEW PRODUCTS
 * ==========================================
 * 
 * This file shows you EXACTLY where to inject new items into your BuyTun store
 */

// ✅ PRIMARY LOCATION: script.js (Lines 1-19)
// ============================================

const products = [
  // 🕐 WATCHES - Add new watches here
  { id: 1, name: "Luxury Watch", price: 250, category: "Watches", img: "assets/img/kit.jpg" },
  { id: 101, name: "Classic Silver Watch", price: 180, category: "Watches", img: "assets/img/kit.jpg" },
  // ← ADD YOUR NEW WATCH PRODUCTS HERE ↑

  // 💎 JEWELRY - Add new accessories here
  { id: 2, name: "Gold Ring", price: 500, category: "Jewelry", img: "assets/img/detecteur.jpg" },
  { id: 102, name: "Classy Jewelry Set", price: 300, category: "Jewelry", img: "assets/makeup/classy.jpg" },
  // ← ADD YOUR NEW JEWELRY PRODUCTS HERE ↑
  
  // 📱 ELECTRONICS - Add new electronics here
  { id: 3, name: "Smartphone", price: 800, category: "Electronics", img: "assets/img/art.jpg" },
  // ← ADD YOUR NEW ELECTRONICS PRODUCTS HERE ↑
  
  // 🎮 GAMES - Add new games here
  { id: 4, name: "Gaming Console", price: 400, category: "Games", img: "assets/img/kit.jpg" },
  // ← ADD YOUR NEW GAMES PRODUCTS HERE ↑
  
  // 🔥 HOT STUFF - Add hot items here
  { id: 5, name: "Hot Gadget", price: 150, category: "Hot Stuff", img: "assets/img/install.jpg" },
  // ← ADD YOUR NEW HOT STUFF PRODUCTS HERE ↑
  
  // 💄 MAKEUP - Add new makeup products here
  { id: 6, name: "Elegant Makeup Set", price: 120, category: "Makeup", img: "assets/makeup/elegant.jpg" },
  { id: 7, name: "Professional Makeup Kit", price: 95, category: "Makeup", img: "assets/makeup/classy.jpg" },
  { id: 103, name: "Luxury Foundation", price: 65, category: "Makeup", img: "assets/makeup/elegant.jpg" },
  { id: 104, name: "Matte Lipstick Palette", price: 45, category: "Makeup", img: "assets/makeup/classy.jpg" },
  { id: 105, name: "HD Powder Compact", price: 35, category: "Makeup", img: "assets/makeup/elegant.jpg" },
  { id: 106, name: "Eyeshadow Brush Set", price: 28, category: "Makeup", img: "assets/makeup/classy.jpg" },
  // ← ADD YOUR NEW MAKEUP PRODUCTS HERE ↑
];

/**
 * ==========================================
 * 📝 PRODUCT OBJECT TEMPLATE
 * ==========================================
 * 
 * Copy and paste this for every new product:
 */

{ 
  id: 999,                              // Unique ID (use next available number)
  name: "Product Display Name",         // What customers see
  price: 50,                            // Price in Dinars (DT)
  category: "CategoryName",             // Must be: Watches, Jewelry, Electronics, 
                                        // Games, Hot Stuff, Makeup
  img: "assets/folder/image.jpg"        // Image path
}

/**
 * ==========================================
 * 🎯 REAL EXAMPLES
 * ==========================================
 */

// Example 1: New Makeup Product
{ 
  id: 107, 
  name: "Nourishing Lip Balm", 
  price: 22, 
  category: "Makeup", 
  img: "assets/makeup/lip-balm.jpg" 
}

// Example 2: New Watch Product
{ 
  id: 201, 
  name: "Sports Digital Watch", 
  price: 95, 
  category: "Watches", 
  img: "assets/img/sports-watch.jpg" 
}

// Example 3: New Electronics Product
{ 
  id: 200, 
  name: "Wireless Headphones", 
  price: 120, 
  category: "Electronics", 
  img: "assets/img/headphones.jpg" 
}

/**
 * ==========================================
 * 📂 IMAGE FOLDER STRUCTURE
 * ==========================================
 * 
 * assets/
 * ├── img/                    ← For: Watches, Jewelry, Electronics, Games, Hot Stuff
 * │   ├── kit.jpg
 * │   ├── detecteur.jpg
 * │   ├── art.jpg
 * │   ├── install.jpg
 * │   ├── offre.jpg
 * │   ├── logo.png
 * │   └── (your new product images here)
 * │
 * ├── makeup/                 ← For: Makeup products only
 * │   ├── elegant.jpg
 * │   ├── classy.jpg
 * │   └── (your new makeup images here)
 * │
 * ├── acc/                    ← For: Accessories
 * │   └── (your accessory images here)
 * │
 * └── watches/                ← For: Watch images
 *     └── (your watch-specific images here)
 */

/**
 * ==========================================
 * 🔍 SEARCH FEATURE ADDED!
 * ==========================================
 * 
 * Users can now search by:
 * ✅ Product Name    → "watch", "makeup", "ring"
 * ✅ Category Name   → "Watches", "Makeup", "Electronics"
 * ✅ Price           → "50", "120"
 * 
 * Location: index.html (under navigation)
 * Function: searchProducts(query) in script.js
 * 
 * Products are automatically indexed!
 */

/**
 * ==========================================
 * 📱 PAGE ASSIGNMENTS
 * ==========================================
 * 
 * Each category has its own dedicated page:
 * 
 * index.html         → Shows ALL products + Search bar
 * watches.html       → Shows only "Watches" category
 * jewelry.html       → Shows only "Jewelry" category
 * accesoires.html    → Shows only "Accessories" category
 * electronics.html   → Shows only "Electronics" category
 * games.html         → Shows only "Games" category
 * hotstuff.html      → Shows only "Hot Stuff" category
 * makeup.html        → Shows only "Makeup" category ✨ NEW
 * 
 * Filtering happens AUTOMATICALLY when products are added!
 */

/**
 * ==========================================
 * 🎨 QUICK INJECTION CHECKLIST
 * ==========================================
 * 
 * Before Adding New Products:
 * 
 * 1. ☐ Prepare product image (JPG or PNG)
 * 2. ☐ Save image to correct folder:
 *        - Makeup → assets/makeup/
 *        - Others → assets/img/
 * 3. ☐ Choose unique ID number
 * 4. ☐ Write product name
 * 5. ☐ Set price
 * 6. ☐ Select correct category
 * 7. ☐ Add to products[] array in script.js
 * 8. ☐ Save file (Ctrl+S)
 * 9. ☐ Refresh website (F5)
 * 10.☐ Test: Search for product
 * 11.☐ Test: Add to cart
 * 12.☐ Test: View on category page
 */

/**
 * ==========================================
 * 🆘 ID TRACKING
 * ==========================================
 * 
 * Keep your IDs organized by category:
 * 
 * Watches:      1, 101, 201, 301...
 * Jewelry:      2, 102, 202, 302...
 * Electronics:  3, 103, 203, 303...
 * Games:        4, 104, 204, 304...
 * Hot Stuff:    5, 105, 205, 305...
 * Makeup:       6, 7, 106, 206, 306...
 * Accessories:  8, 108, 208, 308...
 * 
 * Pattern: (Base ID) + (00, 100, 200, 300...)
 */

/**
 * ==========================================
 * 💾 SAVE & REFRESH
 * ==========================================
 * 
 * After adding products:
 * 1. Save: Ctrl+S (Windows) or Cmd+S (Mac)
 * 2. Refresh: F5 or Ctrl+F5 (hard refresh)
 * 3. Your products appear INSTANTLY!
 * 
 * No database, no backend setup needed!
 * Changes are live immediately.
 */
