// Cart JavaScript - js/cart.js

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('cart.html')) {
        loadCart();
        setupCartEvents();
    }
});

// Load Cart
function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartSummaryContainer = document.getElementById('cart-summary');
    
    if (!cartItemsContainer || !cartSummaryContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-shopping-cart" style="font-size: 3rem; color: #ccc; margin-bottom: 20px;"></i>
                <h3>Your cart is empty</h3>
                <p>Add some products to get started</p>
                <a href="products.html" class="btn btn-primary mt-3">Continue Shopping</a>
            </div>
        `;
        cartSummaryContainer.style.display = 'none';
        return;
    }

    let subtotal = 0;
    let totalItems = 0;

    // Render cart items
    cartItemsContainer.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        totalItems += item.quantity;

        return `
            <tr>
                <td>
                    <div class="cart-item">
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-info">
                            <h3>${item.name}</h3>
                            <p class="text-muted">Item #${item.id}</p>
                        </div>
                    </div>
                </td>
                <td class="product-price">$${item.price.toFixed(2)}</td>
                <td>
                    <div class="cart-quantity">
                        <button class="quantity-btn decrease" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn increase" data-id="${item.id}">+</button>
                    </div>
                </td>
                <td class="product-price">$${itemTotal.toFixed(2)}</td>
                <td>
                    <button class="cart-remove" data-id="${item.id}">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    }).join('');

    // Calculate shipping (example: free shipping over $50)
    const shipping = subtotal >= 50 ? 0 : 9.99;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    // Render cart summary
    cartSummaryContainer.innerHTML = `
        <div class="cart-summary">
            <h3>Order Summary</h3>
            <div class="summary-row">
                <span>Subtotal (${totalItems} items)</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>${shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div class="summary-row">
                <span>Tax</span>
                <span>$${tax.toFixed(2)}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>$${total.toFixed(2)}</span>
            </div>
            <a href="checkout.html" class="btn btn-primary btn-lg w-100 mt-3">Proceed to Checkout</a>
            <a href="products.html" class="btn btn-outline w-100 mt-2">Continue Shopping</a>
        </div>
    `;
}

// Setup Cart Events
function setupCartEvents() {
    // Decrease quantity
    document.querySelectorAll('.quantity-btn.decrease').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, -1);
        });
    });

    // Increase quantity
    document.querySelectorAll('.quantity-btn.increase').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            updateCartItemQuantity(productId, 1);
        });
    });

    // Remove item
    document.querySelectorAll('.cart-remove').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeCartItem(productId);
        });
    });

    // Clear cart button
    const clearCartBtn = document.getElementById('clear-cart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear your cart?')) {
                clearCart();
            }
        });
    }
}

// Update Cart Item Quantity
function updateCartItemQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeCartItem(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            loadCart();
        }
    }
}

// Remove Cart Item
function removeCartItem(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index > -1) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        loadCart();
        showToast('Item removed from cart', 'warning');
    }
}

// Clear Cart
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    loadCart();
    showToast('Cart cleared', 'warning');
}