// script.js

// Get references to the elements
const addToCartButton = document.getElementById('add-to-cart');

// Initialize the cart (you can use localStorage for persistence)
let cart = [];

// Event listener for adding items to the cart
addToCartButton.addEventListener('click', () => {
    // Simulate adding the product to the cart
    cart.push({
        name: 'Product Name',
        price: 99.99,
        // Add more details if needed
    });
    updateCartCount();
});

// Function to update the cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}