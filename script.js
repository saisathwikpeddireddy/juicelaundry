// Menu Data
const smoothies = [
  {
    id: "smoothie1",
    title: "Green Machine",
    ingredients: "Kale, Spinach, Banana, Pineapple, Ginger, Lemon, Apple",
    tags: ["Green", "Energizing", "Detox"],
    price: 8.95,
    image: "./images/green-juice.jpg"
  },
  {
    id: "smoothie2",
    title: "Berry Blast",
    ingredients: "Strawberry, Blueberry, Raspberry, Banana, Almond Milk, Dates",
    tags: ["Antioxidant", "Immunity"],
    price: 8.95,
    image: "./images/smoothie.jpg"
  },
  {
    id: "smoothie3",
    title: "Tropical Paradise",
    ingredients: "Mango, Pineapple, Banana, Coconut Water, Lime",
    tags: ["Hydrating", "Refreshing"],
    price: 8.95,
    image: "./images/smoothie.jpg"
  },
  {
    id: "smoothie4",
    title: "Protein Power",
    ingredients: "Banana, Almond Butter, Plant Protein, Cinnamon, Almond Milk, Dates",
    tags: ["Protein", "Post-Workout"],
    price: 9.95,
    image: "./images/smoothie.jpg"
  },
  {
    id: "smoothie5",
    title: "Chocolate Dream",
    ingredients: "Banana, Cacao, Almond Butter, Almond Milk, Dates",
    tags: ["Indulgent", "Energizing"],
    price: 9.50,
    image: "./images/smoothie.jpg"
  },
  {
    id: "smoothie6",
    title: "Immune Booster",
    ingredients: "Orange, Carrot, Turmeric, Ginger, Cinnamon, Lemon, Banana",
    tags: ["Immunity", "Anti-Inflammatory"],
    price: 9.50,
    image: "./images/green-juice.jpg"
  }
];

const boosters = [
  {
    id: "booster1",
    title: "Ginger Shot",
    description: "Concentrated ginger and lemon shot for immunity and digestion",
    icon: "fa-solid fa-bolt",
    price: 3.50
  },
  {
    id: "booster2",
    title: "Turmeric Tonic",
    description: "Anti-inflammatory blend with turmeric, black pepper, and lemon",
    icon: "fa-solid fa-fire",
    price: 3.50
  },
  {
    id: "booster3",
    title: "Wheatgrass Shot",
    description: "Nutrient-dense shot packed with essential vitamins and minerals",
    icon: "fa-solid fa-seedling",
    price: 3.95
  },
  {
    id: "booster4",
    title: "Immunity Shot",
    description: "Ginger, turmeric, black pepper, lemon, and cayenne",
    icon: "fa-solid fa-shield-virus",
    price: 3.95
  }
];

const bowls = [
  {
    id: "bowl1",
    title: "Classic Açaí Bowl",
    description: "Organic açaí blended with banana, topped with granola, fresh fruit, and honey",
    tags: ["Best Seller", "Energizing"],
    featured: true,
    price: 10.95,
    image: "./images/acai-bowl.jpg"
  },
  {
    id: "bowl2",
    title: "Green Bowl",
    description: "Spinach, banana, mango, and spirulina base topped with granola, kiwi, and coconut flakes",
    tags: ["Detox", "Nutrient-Dense"],
    price: 11.95,
    image: "./images/acai-bowl.jpg"
  },
  {
    id: "bowl3",
    title: "Protein Bowl",
    description: "Açaí, banana, plant protein, and almond butter topped with granola, banana, and cacao nibs",
    tags: ["Protein", "Post-Workout"],
    price: 12.95,
    image: "./images/acai-bowl.jpg"
  },
  {
    id: "bowl4",
    title: "Dragon Fruit Bowl",
    description: "Pitaya, banana, and pineapple blend topped with granola, berries, and chia seeds",
    tags: ["Antioxidant", "Colorful"],
    featured: true,
    price: 12.95,
    image: "./images/dragon-fruit-bowl.jpg"
  }
];

// Cart Functionality
let cart = [];

// Load cart from localStorage on page load
document.addEventListener('DOMContentLoaded', function() {
  loadCart();
  displayMenu();
  setupEventListeners();
  initScrollReveal();
  initNavbarScroll();
});

// Load cart from localStorage
function loadCart() {
  const savedCart = localStorage.getItem('the-juice-laundry-cart');
  cart = savedCart ? JSON.parse(savedCart) : [];
  updateCartDisplay();
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('the-juice-laundry-cart', JSON.stringify(cart));
  updateCartDisplay();
}

// Display Menu Items
function displayMenu() {
  displaySmoothies();
  displayBoosters();
  displayBowls();
}

// Display Smoothies
function displaySmoothies() {
  const container = document.getElementById('smoothies-container');
  container.innerHTML = '';
  
  smoothies.forEach(smoothie => {
    const html = `
      <div class="col-md-6 col-lg-4">
        <div class="card menu-item border-0 shadow-sm h-100">
          <img src="${smoothie.image}" class="card-img-top" alt="${smoothie.title}" height="200" style="object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">${smoothie.title}</h5>
            <p class="card-text">${smoothie.ingredients}</p>
            <div class="mb-3">
              ${smoothie.tags.map(tag => `<span class="badge bg-light text-dark tag">${tag}</span>`).join('')}
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span class="item-price">$${smoothie.price.toFixed(2)}</span>
              <button class="btn btn-sm btn-primary add-to-cart" 
                data-id="${smoothie.id}" 
                data-name="${smoothie.title}" 
                data-price="${smoothie.price}"
                data-type="smoothie">
                <i class="fas fa-plus me-1"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}

// Display Boosters
function displayBoosters() {
  const container = document.getElementById('boosters-container');
  container.innerHTML = '';
  
  boosters.forEach(booster => {
    const html = `
      <div class="col-md-6 col-lg-3">
        <div class="card menu-item border-0 shadow-sm h-100">
          <div class="card-body text-center">
            <i class="${booster.icon} fa-2x text-primary mb-3"></i>
            <h5 class="card-title">${booster.title}</h5>
            <p class="card-text">${booster.description}</p>
            <div class="d-flex justify-content-between align-items-center">
              <span class="item-price">$${booster.price.toFixed(2)}</span>
              <button class="btn btn-sm btn-primary add-to-cart" 
                data-id="${booster.id}" 
                data-name="${booster.title}" 
                data-price="${booster.price}"
                data-type="booster">
                <i class="fas fa-plus me-1"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}

// Display Bowls
function displayBowls() {
  const container = document.getElementById('bowls-container');
  container.innerHTML = '';
  
  bowls.forEach(bowl => {
    const html = `
      <div class="col-md-6">
        <div class="card menu-item border-0 shadow-sm h-100 ${bowl.featured ? 'border-primary' : ''}">
          ${bowl.featured ? '<div class="card-header bg-primary text-white">Featured</div>' : ''}
          <img src="${bowl.image}" class="card-img-top" alt="${bowl.title}" height="200" style="object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title">${bowl.title}</h5>
            <p class="card-text">${bowl.description}</p>
            <div class="mb-3">
              ${bowl.tags.map(tag => `<span class="badge bg-light text-dark tag">${tag}</span>`).join('')}
            </div>
            <div class="d-flex justify-content-between align-items-center">
              <span class="item-price">$${bowl.price.toFixed(2)}</span>
              <button class="btn btn-sm btn-primary add-to-cart" 
                data-id="${bowl.id}" 
                data-name="${bowl.title}" 
                data-price="${bowl.price}"
                data-type="bowl">
                <i class="fas fa-plus me-1"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}

// Setup Event Listeners
function setupEventListeners() {
  // Add to cart buttons
  document.addEventListener('click', function(e) {
    // Find the button whether the click is on the button itself or its child icon
    const button = e.target.classList.contains('add-to-cart') 
      ? e.target 
      : e.target.closest('.add-to-cart');
      
    if (button) {
      const item = {
        id: button.getAttribute('data-id'),
        name: button.getAttribute('data-name'),
        price: parseFloat(button.getAttribute('data-price')),
        quantity: 1,
        type: button.getAttribute('data-type')
      };
      
      addToCart(item);
      
      // Show feedback
      const originalContent = button.innerHTML;
      button.innerHTML = '<i class="fas fa-check me-1"></i> Added!';
      
      // Apply a quick animation
      button.classList.add('btn-success');
      button.classList.remove('btn-primary');
      
      setTimeout(() => {
        button.innerHTML = originalContent;
        button.classList.remove('btn-success');
        button.classList.add('btn-primary');
      }, 1000);
    }
  });
  
  // Cart button
  document.getElementById('cart-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
  });
  
  // Checkout button
  document.getElementById('checkout-btn').addEventListener('click', function() {
    const cartModal = bootstrap.Modal.getInstance(document.getElementById('cartModal'));
    cartModal.hide();
    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();
  });
  
  // Place order button
  document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const checkoutModal = bootstrap.Modal.getInstance(document.getElementById('checkoutModal'));
    checkoutModal.hide();
    
    // Display order success with random order number
    const orderNumber = Math.floor(10000 + Math.random() * 90000);
    document.getElementById('order-number').textContent = orderNumber;
    document.getElementById('order-email').textContent = document.getElementById('email').value;
    
    const successModal = new bootstrap.Modal(document.getElementById('orderSuccessModal'));
    successModal.show();
    
    // Clear cart after successful order
    cart = [];
    saveCart();
    
    // Reset form
    document.getElementById('checkout-form').reset();
  });
  
  // Continue shopping after order success
  document.getElementById('orderSuccessModal').addEventListener('hidden.bs.modal', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') !== '#' && !this.getAttribute('id')) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const navbarCollapse = document.querySelector('.navbar-collapse');
          if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }
        }
      }
    });
  });
}

// Add item to cart
function addToCart(item) {
  const existingItem = cart.find(i => i.id === item.id);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push(item);
  }
  
  saveCart();
}

// Update cart display (count, items, total)
function updateCartDisplay() {
  // Update cart count
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById('cart-count').textContent = cartCount;
  
  // Update cart modal
  const cartItemsContainer = document.getElementById('cart-items');
  const cartEmptyMessage = document.getElementById('cart-empty');
  const cartTotalSection = document.getElementById('cart-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '';
    cartEmptyMessage.style.display = 'block';
    cartTotalSection.style.display = 'none';
    checkoutBtn.disabled = true;
  } else {
    cartEmptyMessage.style.display = 'none';
    cartTotalSection.style.display = 'flex';
    checkoutBtn.disabled = false;
    
    let cartHTML = '';
    let total = 0;
    
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      
      cartHTML += `
        <div class="cart-item">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h6 class="mb-0">${item.name}</h6>
              <span class="text-muted small">${item.type.charAt(0).toUpperCase() + item.type.slice(1)}</span>
            </div>
            <div class="col-md-3">
              <div class="quantity-control">
                <button class="quantity-btn decrease-quantity" data-id="${item.id}">-</button>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                <button class="quantity-btn increase-quantity" data-id="${item.id}">+</button>
              </div>
            </div>
            <div class="col-md-2 text-end">
              $${itemTotal.toFixed(2)}
            </div>
            <div class="col-md-1 text-end">
              <button class="btn btn-sm text-danger remove-item" data-id="${item.id}">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    document.getElementById('total-amount').textContent = total.toFixed(2);
    
    // Add event listeners for cart item controls
    document.querySelectorAll('.increase-quantity').forEach(btn => {
      btn.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const item = cart.find(i => i.id === id);
        if (item) {
          item.quantity += 1;
          saveCart();
        }
      });
    });
    
    document.querySelectorAll('.decrease-quantity').forEach(btn => {
      btn.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const item = cart.find(i => i.id === id);
        if (item && item.quantity > 1) {
          item.quantity -= 1;
          saveCart();
        } else if (item && item.quantity === 1) {
          removeFromCart(id);
        }
      });
    });
    
    document.querySelectorAll('.quantity-input').forEach(input => {
      input.addEventListener('change', function() {
        const id = this.getAttribute('data-id');
        const quantity = parseInt(this.value);
        if (quantity >= 1) {
          const item = cart.find(i => i.id === id);
          if (item) {
            item.quantity = quantity;
            saveCart();
          }
        } else {
          this.value = 1;
        }
      });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
      btn.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        removeFromCart(id);
      });
    });
  }
}

// Remove item from cart
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
}

// Navbar scrolling animation
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// Scroll reveal animation
function initScrollReveal() {
  // Add reveal class to all section elements
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('reveal');
  });
  
  // Add reveal class to menu items
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.classList.add('reveal');
  });
  
  // Activate elements when they come into view
  function revealElements() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    
    reveals.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  }
  
  // Initialize on page load
  revealElements();
  
  // Check on scroll
  window.addEventListener('scroll', revealElements);
}