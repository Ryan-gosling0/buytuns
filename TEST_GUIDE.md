# 🧪 NaggyStore System - Quick Test Guide

## Quick Start Testing

### 1. Check System Status
Visit: `status.html`
- Should show ✅ Firebase Config: Loaded
- Should show ✅ Persistence: Ready
- Should show connection status (🟢 Online or 🟡 Offline)

---

## Admin Panel Tests

### Test 1: Stock Management
**Purpose:** Verify admin can save and update stock

1. Go to: `admin.html` → Stock tab
2. Look for status indicator (should show 🟢 Online or 🟡 Offline)
3. Enter your admin credentials
4. Click on a product row
5. Change the stock number
6. Click "Enregistrer les stocks" (Save Stocks)
7. **Expected:** Status changes to ✅ Saved
8. Wait 2 seconds, refresh page
9. **Expected:** Stock value persists

**Console Check:**
- Open DevTools (F12) → Console
- Look for: `✅ Products loaded from Firestore: X items`
- Look for: `✅ Products saved to Firebase: X items`

---

### Test 2: Export CSV
**Purpose:** Verify CSV export works

1. Stay on Stock tab
2. Click "Exporter (CSV)"
3. **Expected:** Browser downloads `products_export.csv`
4. Open file in text editor
5. **Expected:** CSV contains products with ID, Name, Category, Price, Stock

---

### Test 3: Create Invoice
**Purpose:** Verify invoice creation works

1. Click "Ajouter une facture" (Add Invoice)
2. Invoice editor panel appears on right side
3. Select products from stock list (checkboxes)
4. Click "Ajouter une facture" button
5. Fill in client details:
   - Client Name
   - Phone
   - Address
   - Payment Mode
6. Click "Validate & Save"
7. **Expected:** 
   - Alert: "Invoice Saved to Cloud Successfully! ☁️"
   - Invoice appears in "Historique des factures" tab
   - Stock levels decrease

**Console Check:**
- Look for: `✅ Invoices loaded from Firestore: X items`

---

### Test 4: Edit Invoice
**Purpose:** Verify invoice editing works

1. Go to "Historique des factures" (Invoice History) tab
2. Click "Edit" on an invoice
3. Change quantity or client details
4. Click "Validate & Save"
5. **Expected:** Invoice updates successfully

---

### Test 5: Delete Product
**Purpose:** Verify product deletion works

1. Go to Stock tab
2. Find a product row
3. Click the red "Suppr" (Delete) button
4. Enter password: `1234`
5. Confirm deletion
6. **Expected:** Product disappears from table

---

## Store Client Tests

### Test 6: View Products on Front Page
**Purpose:** Verify clients see Firestore products

1. Go to: `index.html`
2. **Expected:** 
   - Hot Stuff carousel displays products
   - Products come from Firestore (not hardcoded data)
3. Open DevTools Console
4. **Expected:** Look for: `✅ Firebase products loaded: X items`

---

### Test 7: Category Pages
**Purpose:** Verify category pages sync with Firestore

1. Go to `watches.html`
2. **Expected:** Displays watches from Firestore
3. Go to `makeup.html`
4. **Expected:** Displays makeup from Firestore
5. Go back to admin, add a new product to "Watches" category
6. Go back to `watches.html` and refresh
7. **Expected:** New product appears immediately

---

### Test 8: Search Products
**Purpose:** Verify search functionality

1. On any category page, use search box
2. Type product name or price
3. **Expected:** Only matching products display

---

## Offline Mode Tests

### Test 9: Offline Functionality
**Purpose:** Verify system works without internet

1. Open `admin.html`
2. Open DevTools (F12) → Network tab
3. Check: "Offline" checkbox to simulate offline mode
4. **Expected:** 
   - Status shows 🟡 Offline
   - Can still see products (from cache)
   - Can still save locally
   - Text says "(Local Cache)"

5. Try to add/edit a product
6. Click Save
7. **Expected:** Works with local cache

8. Uncheck "Offline"
9. Wait 3-5 seconds
10. **Expected:** Status changes back to 🟢 Online, data syncs

---

## Real-Time Sync Tests

### Test 10: Real-Time Product Sync
**Purpose:** Verify products update instantly across all pages

**Setup:**
1. Open TWO browser windows:
   - Window A: `admin.html` on Stock tab
   - Window B: `index.html` showing Hot Stuff carousel

2. In Window A:
   - Find a "Hot Stuff" product
   - In the status bar at bottom, fill in Stock value
   - Click Save Stocks

3. Watch Window B:
   - **Expected:** Product list updates within 2 seconds
   - New products may appear, removed products disappear

---

## Invoice Tests

### Test 11: Invoice Workflow
**Purpose:** Complete end-to-end invoice process

1. Login to admin as admin
2. Go to: `client.html`
3. **Expected:** See your invoices dashboard
4. Go back to `admin.html` Stock tab
5. Create a new invoice (add products, fill details)
6. Save invoice
7. Go back to `client.html`
8. **Expected:** New invoice appears in client dashboard

---

## Error Recovery Tests

### Test 12: Offline Persistence
**Purpose:** Test data survives offline mode

1. Open `admin.html`
2. Add a product to an invoice (don't save)
3. Go Offline (DevTools Network)
4. Continue editing invoice  
5. Click Save
6. **Expected:** Invoice saves to local cache
7. Go Online
8. **Expected:** Status shows syncing, then ✅ Synced

---

## Browser Console Monitoring

All the following should appear in Console (F12):

### On Admin Load:
```
🚀 Admin panel initialization started...
📡 Loading data from Firestore...
✅ Firestore listeners set up
✅ Admin panel ready!
✅ Products loaded from Firestore: X items
✅ Invoices loaded from Firestore: X items
```

### On Save:
```
✅ Products saved to Firebase: X items
```

### On Stock Updated:
```
🟢 Online
(or 🟡 Offline (Local Cache) if disconnected)
```

### On Category Page Load:
```
✅ Firebase products loaded: X items
📦 Updated products array with Firestore data
```

---

## Troubleshooting

### "Synced" never appears
- Check Firebase auth is working (try login.html)
- Check browser console for errors
- Verify Firestore rules allow read/write

### Products don't appear on client pages
- Check browser console for Firebase errors
- Verify products collection exists in Firestore
- Try clearing browser cache
- Check DevTools Application → Storage → IndexedDB

### Buttons don't work in admin
- Verify JavaScript errors in console
- Check that onclick handlers can find functions
- Try refreshing page

### Offline mode not working
- Verify browser supports IndexedDB
- Check Firefox/Chrome settings allow storage
- Try different browser

---

## Performance Metrics

Measure these for performance baseline:

1. **Page Load Time**
   - Store homepage: Should load < 2 seconds
   - Admin panel: Should load < 3 seconds (with data)

2. **Sync Time**
   - Product updates: Should appear within 1-2 seconds
   - Invoice creation: Should appear within 2-3 seconds

3. **Search Performance**
   - Search should respond instantly (< 100ms)

---

## Success Criteria

✅ All tests pass when:

- [ ] Admin can create products
- [ ] Admin can edit products  
- [ ] Admin can delete products
- [ ] Admin can save stock levels
- [ ] Admin can create invoices
- [ ] Admin can export to CSV
- [ ] Clients see products from Firestore
- [ ] Products update in real-time across pages
- [ ] Works offline with local cache
- [ ] Syncs when connection restored
- [ ] Console shows no errors
- [ ] Status indicator shows connection state

---

## Testing Commands

### Test Data Population
If your Firestore products collection is empty:

1. Go to admin.html
2. Use CSV import:
   - Create a CSV with headers: `id,name,category,price,stock,colors,image`
   - Add sample products
   - Click upload
   - Wait for ✅ confirmation

### Check IndexedDB Cache
1. Open DevTools → Application
2. Left sidebar → Storage → IndexedDB
3. Click on database: `_firebaseLocalStorageDb`
4. Should contain product data

---

**Last Updated:** March 1, 2026  
**Version:** 2.0 - Firebase Integrated  
**Status:** Ready for Testing ✅
