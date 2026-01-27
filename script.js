const products = [
  { id: 1, name: "Luxury Watch", price: 250, category: "Watches", img: "assets/img/kit.jpg" },
  { id: 2, name: "Gold Ring", price: 500, category: "Jewelry", img: "assets/img/detecteur.jpg" },
  { id: 3, name: "Smartphone", price: 800, category: "Electronics", img: "assets/img/art.jpg" },
  { id: 4, name: "Gaming Console", price: 400, category: "Games", img: "assets/img/kit.jpg" },
  { id: 5, name: "Hot Gadget", price: 150, category: "Hot Stuff", img: "assets/img/install.jpg" },
];

let cart = [];

const productsCarousel = document.getElementById("products-carousel");
const cartItemsDiv = document.getElementById("cart-items");
const cartCountDiv = document.getElementById("cart-count");
const totalDiv = document.getElementById("total");
const whatsappLink = document.getElementById("whatsapp-link");

let currentProductIndex = 0;
const productsPerView = 3;
const productWidth = 367.73;

// Display all products in carousel
function initializeProducts() {
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
  const categoryProducts = products.filter(p => p.category === categoryName);
  
  productsCarousel.innerHTML = "";
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

// Initialize products for index.html
initializeProducts();
