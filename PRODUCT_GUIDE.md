# 📝 How to Add New Products to BuyTun E-Commerce Store

## Quick Guide: Where to Inject New Items

### 1️⃣ **Add Products to the Product Database**

**File:** [script.js](script.js)

**Location:** Lines 1-19 in the `const products = [...]` array

**How to Add:**
Simply add a new product object to the array with this format:

```javascript
{ 
  id: 107,                              // Unique number (must not repeat)
  name: "Your Product Name",            // Display name
  price: 50,                            // Price in DT (Dinars)
  category: "Makeup",                   // Category name (Watches, Jewelry, Electronics, Games, Hot Stuff, Makeup)
  img: "assets/img/yourimage.jpg"      // Path to product image
}
```

**Example - Adding a new Makeup product:**
```javascript
{ id: 107, name: "Hydrating Moisturizer", price: 55, category: "Makeup", img: "assets/makeup/moisturizer.jpg" }
```

---

### 2️⃣ **Product Image Management**

**Image Locations by Category:**
- **Makeup:** `assets/makeup/` - Place makeup images here
- **Watches:** `assets/img/` - Watch images here
- **Jewelry:** `assets/img/` - Jewelry images here
- **Electronics:** `assets/img/` - Electronics images here
- **Games:** `assets/img/` - Game images here
- **Hot Stuff:** `assets/img/` - Hot items here
- **Accessories:** `assets/acc/` - Accessories here

---

### 3️⃣ **Visible Product IDs by Category**

Keep track of your ID numbers:

| Category | Current IDs | Next ID to Use |
|----------|------------|----------------|
| Watches | 1, 101 | 201 |
| Jewelry | 2, 102 | 103 |
| Electronics | 3 | 200 |
| Games | 4 | 104 |
| Hot Stuff | 5 | 105 |
| Makeup | 6, 7, 103-106 | 107 |

---

### 4️⃣ **Product Categories Available**

These are the valid category names (must match exactly):
- `"Watches"`
- `"Jewelry"`
- `"Electronics"`
- `"Games"`
- `"Hot Stuff"`
- `"Makeup"`
- `"Accessories"` (if you want to add this)

---

## 🔍 **Search Functionality**

The website now has **full search capability**! Users can search by:
- ✅ Product name (e.g., "Watch", "Ring")
- ✅ Category name (e.g., "Makeup", "Electronics")
- ✅ Price (e.g., "50", "120")

**Search Bar Location:** [index.html](index.html) - Under the navigation menu

---

## 📱 **How the Site Works**

### Pages with Products:
1. **[index.html](index.html)** - Home page with all products + search bar
2. **[watches.html](watches.html)** - Shows only Watches category
3. **[jewelry.html](jewelry.html)** - Shows only Jewelry category
4. **[accesoires.html](accesoires.html)** - Shows accessories
5. **[electronics.html](electronics.html)** - Shows electronics
6. **[games.html](games.html)** - Shows games
7. **[hotstuff.html](hotstuff.html)** - Shows hot items
8. **[makeup.html](makeup.html)** - Shows makeup products ✨ **NEW**

---

## 🎯 **Step-by-Step Example: Add New Makeup Product**

### Step 1: Prepare Image
- Create or find an image for your product
- Save it to: `assets/makeup/` folder
- Example name: `luminous-highlighter.jpg`

### Step 2: Open script.js
- Find the products array (line 1)
- Look for the Makeup section (around line 21-27)

### Step 3: Add Your Product
```javascript
{ id: 107, name: "Luminous Highlighter", price: 42, category: "Makeup", img: "assets/makeup/luminous-highlighter.jpg" }
```

### Step 4: Save and Refresh
- Save the file (Ctrl+S)
- Refresh your website in browser
- Product appears automatically in:
  - Home page
  - Search results
  - [makeup.html](makeup.html) page
  - Cart system

---

## 🛠️ **Complete Example: Full Product Addition**

**Adding a new watch to the store:**

```javascript
// In script.js, in the products array, find the WATCHES section:
// WATCHES - Add new watches here
{ id: 1, name: "Luxury Watch", price: 250, category: "Watches", img: "assets/img/kit.jpg" },
{ id: 101, name: "Classic Silver Watch", price: 180, category: "Watches", img: "assets/img/kit.jpg" },

// Add your new watch:
{ id: 201, name: "Minimalist Black Watch", price: 220, category: "Watches", img: "assets/img/black-watch.jpg" },
```

---

## ✅ **Checklist When Adding Products**

- [ ] Image file exists in correct folder
- [ ] ID is unique (doesn't duplicate existing IDs)
- [ ] Product name is clear and descriptive
- [ ] Price is accurate (whole numbers or decimals)
- [ ] Category name matches exactly (case-sensitive)
- [ ] Image path is correct
- [ ] File is saved
- [ ] Test: Open website and verify product appears
- [ ] Test: Search for product by name
- [ ] Test: Add to cart

---

## 🚀 **Advanced: Add New Category**

If you want to add a completely new product category:

1. **Add products with new category** in [script.js](script.js):
   ```javascript
   { id: 300, name: "Item Name", price: 100, category: "NewCategory", img: "assets/path/image.jpg" }
   ```

2. **Create new HTML file** (e.g., `newcategory.html`) following the [makeup.html](makeup.html) template

3. **Update navigation** in [index.html](index.html) to add link to new page

4. **Update other pages** to include link in their nav menus

---

## 📞 **Contact Info**

Email: contact@buytun.com
Phone: +216 58885966
WhatsApp Orders: Integrated in cart system

---

**Version:** 1.0 (Updated January 2026)
**Site:** BuyTun E-Commerce Platform
