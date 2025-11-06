// REST API Endpoint for product listing
const REST_API_ENDPOINT = "https://fakestoreapi.com/products";

// --- Global State ---
let products = [];
// Load cart data from local storage on startup
let cart = [];

// --- DOM Elements ---
const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const cartSidebar = document.getElementById("cart-sidebar");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const cartCountElement = document.getElementById("cart-count");
const checkoutBtn = document.getElementById("checkout-btn");
const emptyCartMessage = document.getElementById("empty-cart-message");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");

function debounce(func, delay) {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
const productDebounce = debounce(renderProducts, 500);
/**
 * Sorts and filters the global products array based on current search and sort criteria.
 */
function applyFiltersAndSort(filter) {
  let sortedProducts = [...products];
  switch (filter) {
    case "search":
      userInput = searchInput.value;
      sortedProducts = sortedProducts.filter((product) => {
        return product.title
          .trim()
          .toLowerCase()
          .includes(userInput.toLowerCase());
      });
      productDebounce(sortedProducts);
      break;
    case "name-asc":
      sortedProducts.sort((a, b) => {
        const nameA = a.title.toUpperCase(); // ignore upper and lowercase
        const nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      renderProducts(sortedProducts);
      break;
    case "price-asc":
      sortedProducts.sort((a, b) => {
        return a.price - b.price;
      });
      renderProducts(sortedProducts);
      break;
    case "price-desc":
      sortedProducts.sort((a, b) => {
        return b.price - a.price;
      });
      renderProducts(sortedProducts);
      break;
  }
}
// Initialize Stripe (client-side)
// const stripe = Stripe(STRIPE_PUBLIC_KEY);

// --- API Fetching (Using REST) ---

/**
 * Fetches products from the Fake Store REST endpoint.
 */
async function fetchProducts() {
  const response = await fetch(REST_API_ENDPOINT);
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }
  products = await response.json();

  renderProducts(products);
}

// --- Product Rendering ---

/**
 * Renders the products onto the main grid and attaches 'Add to Cart' listeners.
 */
function renderProducts(productList) {
  productGrid.innerHTML = ""; // clear previous products if needed

  productList.forEach((product) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    cardDiv.innerHTML = `<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="${product.image}" alt="${product.title}">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">${product.title}</div>
    <p class="text-gray-700 text-base">
    ${product.description}</p>
     <p class="text-gray-700 text-base">
    ${product.price}</p>
    <button class="mt-4 bg-green-500 text-white font-bold py-2 px-4 rounded-full" onclick="handleAddToCart(${product.id})">Add to Cart</button>
  </div>
</div>
    `;
    productGrid.appendChild(cardDiv);
  });
}

// --- Cart Logic ---

/**
 * Persists the global cart state to localStorage and triggers a re-render.
 */
function updateCart() {
  localStorage.setitem("cart", JSON.stringify(cart));
  renderCart();
}

/**
 * Adds a product to the cart or increments its quantity.
 */
function handleAddToCart(productId) {
  cart.push(productId);
  cartCount.textContent = cart.length;
  renderCart();
}

/**
 * Renders the cart items, total, and updates the cart count.
 */
function renderCart() {
  cartItems.innerHTML = "";

  // need a way to stop duplicates from being created
  // (had to look this section up)
  const cartReduce = cart.reduce((acc, itemId) => {
    const product = products.find((product) => product.id === itemId);
    if (product) {
      if (acc[product.id]) {
        acc[product.id].quantity++;
      } else {
        acc[product.id] = { ...product, quantity: 1 };
      }
      return acc;
    }
  }, {});

  const inCart = Object.values(cartReduce);
  inCart.forEach((item) => {
    itemDiv = document.createElement("div");
    itemDiv.innerHTML = `<div class="flex justify-between">
      <div class="flex">
        <img src="${item.image}" alt="${item.title}" class="w-10 h-10 rounded-full">
        <div class="ml-3">
          <p class="text-sm font-medium text-gray-900">${item.title}</p>
          <p class="text-sm font-medium text-gray-500">${item.price} x ${item.quantity}</p>
        </div>
      </div>`;
    const totalItemPrice = item.price * item.quantity;
    cartItems.appendChild(itemDiv);
  });
  const total = Object.values(cartReduce).reduce(
    (acc, item) => item.price * item.quantity + acc,
    0
  );
  cartTotalElement.textContent = `$${total.toFixed(2)}`;
}

/**
 * Handles quantity increase/decrease buttons in the cart.
 */
function handleCartQuantityChange(event) {}

/**
 * Toggles the cart sidebar visibility using the 'cart-open' class.
 */
function toggleCart(show) {
  cartSidebar.classList.toggle("cart-open", show);
  renderCart();
}

const openCart = () => toggleCart(true);
const closeCart = () => toggleCart(false);

// --- Stripe Checkout Integration (Client-Side Implementation) ---

/**
 * Initiates the Stripe checkout process.
 */
async function handleCheckout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  checkoutBtn.textContent = "Processing...";
  checkoutBtn.disabled = true;

  // --- CRITICAL SECURITY NOTE ---
  // The actual Stripe Checkout Session creation MUST happen on a secure server.
  // You CANNOT pass item details directly to the client-side Stripe object for Checkout Session creation.
  // The code below simulates the process and explains the required backend step.

  alert(
    "🚨 ACTION REQUIRED: A real, secure checkout requires a **backend server** to call the Stripe API and create a 'Checkout Session ID'. We will now simulate the final client-side redirect step."
  );

  try {
    // 1. Prepare Line Items for the *hypothetical* backend
    const lineItems = cart.map((item) => ({
      // This structure is what your backend would receive
      // and use to create the real Stripe Checkout Session line items.
      name: item.title,
      image: item.image,
      amount: Math.round(item.price * 100), // Stripe requires amount in cents
      quantity: item.quantity,
    }));

    // 2. MOCK: Call the hypothetical server endpoint

    /* // Example of what a real fetch call to your server would look like:
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ lineItems, currency: 'usd' }),
        });
        const session = await response.json();
        const sessionId = session.id; 
        
        // 3. Real Redirect with server-generated ID
        const { error } = await stripe.redirectToCheckout({
             sessionId: sessionId,
        });
        */

    // Since we don't have a backend, we just log and inform the user:
    console.log("Mock Line Items ready for backend:", lineItems);
    console.warn(
      "Stripe Checkout was initiated but requires a server-generated session ID to complete securely. The redirect step is simulated."
    );

    alert(
      "Mock checkout simulation complete. The next step is implementing a backend to generate the Checkout Session ID."
    );
  } catch (error) {
    console.error("Checkout error:", error);
    alert(
      "Checkout failed: " + error.message + ". Check console for security note."
    );
  } finally {
    checkoutBtn.textContent = "Proceed to Checkout";
    checkoutBtn.disabled = false;
  }
}

// --- Initialization ---

/**
 * Attaches all event listeners and starts the app.
 */
function init() {
  // Event Listeners
  sortSelect.addEventListener("change", () => {
    applyFiltersAndSort(sortSelect.value);

    //   switch (sortSelect.value) {
    //     case "name-asc":
    //       applyFiltersAndSort("name-asc");
    //       break;
    //     case "price-asc":
    //       applyFiltersAndSort("price-asc");
    //       break;
    //     case "price-desc":
    //       applyFiltersAndSort("price-desc");
    //       break;
    //     default:
    //       console.log("default");
    //   }
  });
  searchInput.addEventListener("input", () => {
    applyFiltersAndSort("search");
  });

  openCartBtn.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);
}

// Initial data load and render
fetchProducts(); // Load products and render the grid

// Start the application once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);
