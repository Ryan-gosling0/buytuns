const products = [
  // WATCHES - Add new watches here
  { id: 1, name: "Luxury Watch", price: 250, category: "Watches", img: "assets/watches/rose.jpg", link: "#" },
  { id: 101, name: "Classic Silver Watch", price: 180, category: "Watches", img: "assets/watches/rose.jpg", link: "#" },
  
  // JEWELRY - Add new jewelry here
  { id: 2, name: "Gold Ring", price: 500, category: "Jewelry", img: "assets/img/detecteur.jpg", link: "#" },
  { id: 102, name: "Classy Jewelry Set", price: 300, category: "Jewelry", img: "assets/img/detecteur.jpg", link: "#" },
  
  // ELECTRONICS - Add new electronics here
  { id: 3, name: "Smartphone", price: 800, category: "Electronics", img: "assets/img/art.jpg", link: "#" },
  
  // GAMES - Add new games here
  { id: 4, name: "Gaming Console", price: 400, category: "Games", img: "assets/img/kit.jpg", link: "#" },
  
  // HOT STUFF - Add hot items here
  { id: 5, name: "Camera imou solaire", price: 645, category: "Hot Stuff", img: "assets/img/imou.jpg", link: "https://ryan-gosling0.github.io/CAMERA-IMOU-SOLAIRE-4G-WIFI-5MP-ROTATIF/" },
  { id: 77, name: "plombier", price: 150, category: "Hot Stuff", img: "assets/img/install.jpg", link: "https://ryan-gosling0.github.io/CAMERA-IMOU-SOLAIRE-4G-WIFI-5MP-ROTATIF/" },
  { id: 78, name: "imooi", price: 150, category: "Hot Stuff", img: "assets/img/install.jpg", link: "https://ryan-gosling0.github.io/CAMERA-IMOU-SOLAIRE-4G-WIFI-5MP-ROTATIF/" },
  { id: 201, name: "Face Mask Pack", price: 42, category: "Hot Stuff", img: "assets/makeup/mask9.jpg", link: "https://ryan-gosling0.github.io/CAMERA-IMOU-SOLAIRE-4G-WIFI-5MP-ROTATIF/" },
  
  // MAKEUP - Add new makeup products here
  { id: 6, name: "Elegant Makeup Set", price: 120, category: "Makeup", img: "assets/makeup/creme.jpg", link: "#" },
  { id: 7, name: "Professional Makeup Kit", price: 95, category: "Makeup", img: "assets/makeup/pack.jpg", link: "#" },
  { id: 103, name: "Luxury Foundation", price: 65, category: "Makeup", img: "assets/makeup/creme2.jpg", link: "#" },
  { id: 104, name: "Matte Lipstick Palette", price: 45, category: "Makeup", img: "assets/makeup/gloss.jpg", link: "#" },
  { id: 105, name: "HD Powder Compact", price: 35, category: "Makeup", img: "assets/makeup/eye20.jpg", link: "#" },
  { id: 106, name: "Eyeshadow Brush Set", price: 28, category: "Makeup", img: "assets/makeup/gloss1.jpg", link: "#" },
  { id: 107, name: "Face Mask Sheet", price: 18, category: "Makeup", img: "assets/makeup/mask9.jpg", link: "#" }
];

let cart = [];

const productsCarousel = document.getElementById("products-carousel");
const cartItemsDiv = document.getElementById("cart-items");
const cartCountDiv = document.getElementById("cart-count");
const totalDiv = document.getElementById("total");
const whatsappLink = document.getElementById("whatsapp-link");

let currentProductIndex = 0;
let productsPerView = 3;
let productWidth = 367.73;

// Update carousel dimensions based on screen size
function updateCarouselDimensions() {
  if (window.innerWidth <= 480) {
    productWidth = 280;
    productsPerView = 1;
  } else if (window.innerWidth <= 768) {
    productWidth = 250;
    productsPerView = 2;
  } else {
    productWidth = 367.73;
    productsPerView = 3;
  }
}

// Display all products in carousel
function initializeProducts() {
  updateCarouselDimensions();
  productsCarousel.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-item";
    div.innerHTML = `
      <div class="product-pad">
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} dt</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    productsCarousel.appendChild(div);
  });
  updateCarouselPosition();
  loadCart();
}

// Display products filtered by category
function initializeCategory(categoryName) {
  updateCarouselDimensions();
  const categoryProducts = products.filter(p => p.category === categoryName);
  
  productsCarousel.innerHTML = "";
  categoryProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-item";
    const productLink = product.link || getCategoryPageLink(product.category);
    div.innerHTML = `
      <div class="product-pad">
        <img src="${product.img}" alt="${product.name}">
        <h3><a href="${productLink}" style="text-decoration: none; color: #1e3a8a; cursor: pointer;">${product.name}</a></h3>
        <p>${product.price} dt</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    productsCarousel.appendChild(div);
  });
  updateCarouselPosition();
  loadCart();
}

function updateCarouselPosition() {
  const items = document.querySelectorAll('.product-item');
  const maxScroll = Math.max(0, items.length - productsPerView);
  currentProductIndex = Math.max(0, Math.min(currentProductIndex, maxScroll));
  
  const translateValue = -currentProductIndex * productWidth;
  productsCarousel.style.transform = `translateX(${translateValue}px)`;
}

function slideProducts(direction) {
  const items = document.querySelectorAll('.product-item');
  const maxScroll = Math.max(0, items.length - productsPerView);
  currentProductIndex += direction;
  currentProductIndex = Math.max(0, Math.min(currentProductIndex, maxScroll));
  updateCarouselPosition();
}

// Store carousel state for each category
const carouselState = {
  watches: 0,
  jewelry: 0,
  electronics: 0,
  games: 0,
  hotstuff: 0,
  makeup: 0
};

// Function to display products by category on home page
function displayCategoryCarousel(categoryName, carouselId) {
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;
  
  const categoryProducts = products.filter(p => p.category === categoryName);
  
  carousel.innerHTML = "";
  categoryProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product-item";
    const productLink = product.link || getCategoryPageLink(product.category);
    div.innerHTML = `
      <div class="product-pad">
        <img src="${product.img}" alt="${product.name}">
        <h3><a href="${productLink}" style="text-decoration: none; color: #1e3a8a; cursor: pointer;">${product.name}</a></h3>
        <p>${product.price} dt</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
    carousel.appendChild(div);
  });
}

// Slide products in category carousel
function slideCategoryProducts(category, direction) {
  const carouselId = `carousel-${category}`;
  const carousel = document.getElementById(carouselId);
  if (!carousel) return;
  
  const items = carousel.querySelectorAll('.product-item');
  const maxScroll = Math.max(0, items.length - productsPerView);
  
  carouselState[category] += direction;
  carouselState[category] = Math.max(0, Math.min(carouselState[category], maxScroll));
  
  const translateValue = -carouselState[category] * productWidth;
  carousel.style.transform = `translateX(${translateValue}px)`;
}

// Initialize all category carousels on home page
function initializeCategoryCarousels() {
  displayCategoryCarousel('Watches', 'carousel-watches');
  displayCategoryCarousel('Jewelry', 'carousel-jewelry');
  displayCategoryCarousel('Electronics', 'carousel-electronics');
  displayCategoryCarousel('Games', 'carousel-games');
  displayCategoryCarousel('Hot Stuff', 'carousel-hotstuff');
  displayCategoryCarousel('Makeup', 'carousel-makeup');
}

// Search products in category pages
function searchCategoryProducts(categoryName, query) {
  const carousel = document.getElementById('products-carousel');
  if (!carousel) return;
  
  if (!query || query.trim() === "") {
    // Show all products from category
    initializeCategory(categoryName);
    return;
  }

  const lowerQuery = query.toLowerCase();
  const categoryProducts = products.filter(p => 
    p.category === categoryName &&
    (p.name.toLowerCase().includes(lowerQuery) || 
     p.price.toString().includes(lowerQuery))
  );
  
  carousel.innerHTML = "";
  
  if (categoryProducts.length === 0) {
    carousel.innerHTML = '<p style="text-align: center; color: #999; padding: 20px; grid-column: 1/-1;">No products found</p>';
  } else {
    categoryProducts.forEach(product => {
      const div = document.createElement("div");
      div.className = "product-item";
      div.innerHTML = `
        <div class="product-pad">
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price} dt</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
      carousel.appendChild(div);
    });
  }
}

// Add event listener for window resize to update carousel on orientation change
window.addEventListener('resize', () => {
  updateCarouselDimensions();
  updateCarouselPosition();
});

function addToCart(id) {
  const product = products.find(p => p.id === id);
  const existing = cart.find(p => p.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart();
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  updateCart();
}

function updateCart() {
  cartCountDiv.textContent = "Cart: " + cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartBadge = document.getElementById('cart-badge');
  cartBadge.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

  cartItemsDiv.innerHTML = "";
  let total = 0;
  
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = '<p style="text-align: center; color: #999;">Your cart is empty</p>';
    totalDiv.textContent = "Total: 0 dt";
  } else {
    cart.forEach(item => {
      total += item.price * item.quantity;
      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <div>
          <strong>${item.name}</strong><br>
          ${item.price} dt × ${item.quantity} = ${item.price * item.quantity} dt
        </div>
        <button onclick="removeFromCart(${item.id})" class="remove-btn">Remove</button>
      `;
      cartItemsDiv.appendChild(div);
    });
    totalDiv.textContent = "Total: " + total + " dt";
  }

  const phone = "21658885966";
  if (cart.length > 0) {
    const message = `🛒 New Order\n\n${cart.map(i => `• ${i.name} × ${i.quantity} = ${i.price * i.quantity} TND`).join("\n")}\n\nTotal: ${total} TND`;
    whatsappLink.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  } else {
    whatsappLink.href = "#";
  }
}

function toggleCart() {
  const cartModal = document.getElementById('cart-modal');
  cartModal.classList.toggle('active');
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem('cart');
  if (saved) {
    cart = JSON.parse(saved);
  }
  updateCart();
}

// Display all categories as grids on home page
function displayHomePageCategories() {
  const categories = ['Watches', 'Jewelry', 'Electronics', 'Games', 'Makeup'];
  
  categories.forEach(category => {
    const gridId = `grid-${category.toLowerCase()}`;
    const grid = document.getElementById(gridId);
    if (!grid) return;
    
    const categoryProducts = products.filter(p => p.category === category);
    grid.innerHTML = "";
    
    categoryProducts.forEach(product => {
      const div = document.createElement("div");
      div.className = "product-item";
      div.innerHTML = `
        <div class="product-pad">
          <img src="${product.img}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price} dt</p>
          <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      `;
      grid.appendChild(div);
    });
  });
}

// Search functionality - filter categories on home page
function searchProducts(query) {
  const categories = ['Watches', 'Jewelry', 'Electronics', 'Games', 'Makeup'];
  
  if (!query || query.trim() === "") {
    // Show all categories
    displayHomePageCategories();
    categories.forEach(category => {
      const sectionId = `category-${category.toLowerCase()}`;
      const section = document.getElementById(sectionId);
      if (section) section.style.display = 'block';
    });
    return;
  }

  const lowerQuery = query.toLowerCase();
  
  // Find which categories have matching products
  const matchingCategories = new Set();
  products.forEach(p => {
    if (p.name.toLowerCase().includes(lowerQuery) || 
        p.price.toString().includes(lowerQuery)) {
      matchingCategories.add(p.category);
    }
  });

  // Hide/show categories and filter their products
  categories.forEach(category => {
    const sectionId = `category-${category.toLowerCase()}`;
    const section = document.getElementById(sectionId);
    const gridId = `grid-${category.toLowerCase()}`;
    const grid = document.getElementById(gridId);
    
    if (matchingCategories.has(category)) {
      section.style.display = 'block';
      
      // Filter products in this category
      const filteredProducts = products.filter(p => 
        p.category === category &&
        (p.name.toLowerCase().includes(lowerQuery) || 
         p.price.toString().includes(lowerQuery))
      );
      
      grid.innerHTML = "";
      filteredProducts.forEach(product => {
        const div = document.createElement("div");
        div.className = "product-item";
        div.innerHTML = `
          <div class="product-pad">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price} dt</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        `;
        grid.appendChild(div);
      });
    } else {
      section.style.display = 'none';
    }
  });
}

// Initialize products for index.html
displayHomePageCategories();
initializeCategoryCarousels();
loadCart();