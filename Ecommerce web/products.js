// Products Page JavaScript

// Sample Product Data
const productsData = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 89.99,
        originalPrice: 129.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.2,
        category: "electronics",
        brand: "AudioPro",
        stock: 45,
        featured: true,
        description: "Premium wireless headphones with noise cancellation and 30-hour battery life."
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 199.99,
        originalPrice: 249.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        rating: 4.5,
        category: "electronics",
        brand: "FitTech",
        stock: 32,
        featured: true,
        description: "Advanced smartwatch with health monitoring and GPS tracking."
    },
    // Add more products...
];

document.addEventListener('DOMContentLoaded', function() {
    // Initialize products page
    if (window.location.pathname.includes('products.html')) {
        initializeProductsPage();
    }
});

function initializeProductsPage() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const search = urlParams.get('search');
    const sort = urlParams.get('sort');
    
    // Set active category
    setActiveCategory(category);
    
    // Initialize filter controls
    initializeFilters();
    
    // Initialize view toggle
    initializeViewToggle();
    
    // Initialize sorting
    initializeSorting();
    
    // Load and display products
    loadProducts(category, search, sort);
    
    // Initialize pagination
    initializePagination();
}

function setActiveCategory(category) {
    if (!category) return;
    
    const categoryLinks = document.querySelectorAll('.category-list a');
    categoryLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href')?.includes(category)) {
            link.classList.add('active');
        }
    });
}

function initializeFilters() {
    // Price slider
    const priceSlider = document.getElementById('priceSlider');
    const priceValue = document.getElementById('priceValue');
    
    if (priceSlider && priceValue) {
        priceSlider.addEventListener('input', function() {
            priceValue.textContent = `$${this.value}`;
        });
        
        // Apply price filter
        const applyPriceBtn = document.querySelector('.apply-price');
        if (applyPriceBtn) {
            applyPriceBtn.addEventListener('click', function() {
                applyPriceFilter(priceSlider.value);
            });
        }
    }
    
    // Brand filters
    const brandCheckboxes = document.querySelectorAll('.brand-filter input[type="checkbox"]');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            applyBrandFilters();
        });
    });
    
    // Rating filters
    const ratingRadios = document.querySelectorAll('.rating-filter input[type="radio"]');
    ratingRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            applyRatingFilter(this.value);
        });
    });
    
    // Apply all filters button
    const applyFiltersBtn = document.querySelector('.apply-filters');
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyAllFilters);
    }
    
    // Clear filters button
    const clearFiltersBtn = document.querySelector('.clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

function initializeViewToggle() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const productsGrid = document.getElementById('productsContainer');
    
    if (!viewBtns.length || !productsGrid) return;
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            viewBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update view
            const viewType = this.getAttribute('data-view');
            productsGrid.classList.remove('grid-view', 'list-view');
            productsGrid.classList.add(`${viewType}-view`);
            
            // Save preference to localStorage
            localStorage.setItem('productsView', viewType);
        });
    });
    
    // Load saved view preference
    const savedView = localStorage.getItem('productsView') || 'grid';
    const savedViewBtn = document.querySelector(`.view-btn[data-view="${savedView}"]`);
    if (savedViewBtn) {
        savedViewBtn.click();
    }
}

function initializeSorting() {
    const sortSelect = document.querySelector('.sort-select');
    if (!sortSelect) return;
    
    sortSelect.addEventListener('change', function() {
        sortProducts(this.value);
    });
}

function loadProducts(category, search, sort) {
    const container = document.getElementById('productsContainer');
    const productsCount = document.querySelector('.products-count');
    
    if (!container) return;
    
    // Show loading state
    container.innerHTML = '<div class="spinner"></div>';
    
    // Filter products based on criteria
    let filteredProducts = [...productsData];
    
    if (category) {
        filteredProducts = filteredProducts.filter(product => 
            product.category === category
        );
    }
    
    if (search) {
        const searchLower = search.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower) ||
            product.category.toLowerCase().includes(searchLower) ||
            product.brand.toLowerCase().includes(searchLower)
        );
    }
    
    // Sort products
    if (sort) {
        filteredProducts = sortProductsList(filteredProducts, sort);
    }
    
    // Simulate API delay
    setTimeout(() => {
        if (filteredProducts.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-search"></i>
                    <h3>No products found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                    <a href="products.html" class="btn btn-primary">View All Products</a>
                </div>
            `;
        } else {
            renderProducts(filteredProducts, container);
            
            // Update products count
            if (productsCount) {
                productsCount.textContent = `Showing ${filteredProducts.length} products`;
            }
        }
    }, 500);
}

function renderProducts(products, container) {
    container.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.originalPrice ? '<span class="product-badge">Sale</span>' : ''}
                ${product.stock < 10 ? '<span class="product-badge bg-danger">Low Stock</span>' : ''}
                <button class="wishlist-btn" data-id="${product.id}">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-content">
                <p class="product-category">${product.category}</p>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">
                    <span class="current-price">$${product.price.toFixed(2)}</span>
                    ${product.originalPrice ? `<del class="original-price">$${product.originalPrice.toFixed(2)}</del>` : ''}
                </div>
                <div class="product-rating">
                    ${getRatingStars(product.rating)}
                    <span class="text-muted ml-2">(${product.rating})</span>
                </div>
                <div class="product-stock ${product.stock > 10 ? 'text-success' : 'text-danger'}">
                    ${product.stock > 10 ? 'In Stock' : `Only ${product.stock} left`}
                </div>
                <div class="product-actions">
                    <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                        Add to Cart
                    </button>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-outline">
                        View Details
                    </a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Add event listeners
    addProductEventListeners();
}

function getRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

function addProductEventListeners() {
    // Add to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            addToCart(productId);
        });
    });
    
    // Wishlist buttons
    document.querySelectorAll('.wishlist-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            toggleWishlist(productId);
            const icon = this.querySelector('i');
            icon.classList.toggle('far');
            icon.classList.toggle('fas');
        });
    });
}

function applyPriceFilter(maxPrice) {
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const priceElement = product.querySelector('.current-price');
        if (priceElement) {
            const price = parseFloat(priceElement.textContent.replace('$', ''));
            product.style.display = price <= maxPrice ? 'block' : 'none';
        }
    });
}

function applyBrandFilters() {
    const selectedBrands = Array.from(
        document.querySelectorAll('.brand-filter input[type="checkbox"]:checked')
    ).map(cb => cb.nextElementSibling.textContent.toLowerCase());
    
    if (selectedBrands.length === 0) {
        // Show all products if no brands selected
        document.querySelectorAll('.product-card').forEach(p => p.style.display = 'block');
        return;
    }
    
    document.querySelectorAll('.product-card').forEach(product => {
        const brand = product.querySelector('.product-category').textContent.toLowerCase();
        product.style.display = selectedBrands.includes(brand) ? 'block' : 'none';
    });
}

function applyRatingFilter(minRating) {
    document.querySelectorAll('.product-card').forEach(product => {
        const ratingText = product.querySelector('.product-rating .text-muted').textContent;
        const rating = parseFloat(ratingText.match(/[\d.]+/)[0]);
        product.style.display = rating >= minRating ? 'block' : 'none';
    });
}

function applyAllFilters() {
    // Get all filter values and apply them
    const maxPrice = document.getElementById('priceSlider')?.value || 1000;
    applyPriceFilter(maxPrice);
    applyBrandFilters();
    // Apply other filters as needed
    
    showToast('Filters applied successfully!');
}

function clearAllFilters() {
    // Reset all filter controls
    const priceSlider = document.getElementById('priceSlider');
    if (priceSlider) priceSlider.value = 500;
    
    const priceValue = document.getElementById('priceValue');
    if (priceValue) priceValue.textContent = '$500';
    
    // Uncheck all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
        cb.checked = cb.hasAttribute('checked');
    });
    
    // Reset radio buttons
    document.querySelectorAll('input[type="radio"]').forEach((radio, index) => {
        radio.checked = index === 0;
    });
    
    // Show all products
    document.querySelectorAll('.product-card').forEach(p => p.style.display = 'block');
    
    showToast('All filters cleared!');
}

function sortProducts(sortBy) {
    const container = document.getElementById('productsContainer');
    const products = Array.from(container.querySelectorAll('.product-card'));
    
    products.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return getProductPrice(a) - getProductPrice(b);
            case 'price-high':
                return getProductPrice(b) - getProductPrice(a);
            case 'rating':
                return getProductRating(b) - getProductRating(a);
            case 'newest':
                // For demo, sort by ID (higher ID = newer)
                return getProductId(b) - getProductId(a);
            default:
                return 0;
        }
    });
    
    // Re-append sorted products
    products.forEach(product => container.appendChild(product));
}

function sortProductsList(products, sortBy) {
    return [...products].sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'newest':
                return b.id - a.id;
            default:
                return 0;
        }
    });
}

function getProductPrice(productElement) {
    const priceText = productElement.querySelector('.current-price').textContent;
    return parseFloat(priceText.replace('$', ''));
}

function getProductRating(productElement) {
    const ratingText = productElement.querySelector('.product-rating .text-muted').textContent;
    return parseFloat(ratingText.match(/[\d.]+/)[0]);
}

function getProductId(productElement) {
    return parseInt(productElement.getAttribute('data-id'));
}

function initializePagination() {
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    const pageLinks = document.querySelectorAll('.pagination-numbers a');
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            // Previous page logic
            const currentPage = document.querySelector('.pagination-numbers a.active');
            const prevPage = currentPage?.previousElementSibling;
            if (prevPage && prevPage.tagName === 'A') {
                goToPage(parseInt(prevPage.textContent));
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            // Next page logic
            const currentPage = document.querySelector('.pagination-numbers a.active');
            const nextPage = currentPage?.nextElementSibling;
            if (nextPage && nextPage.tagName === 'A') {
                goToPage(parseInt(nextPage.textContent));
            }
        });
    }
    
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageNum = parseInt(this.textContent);
            goToPage(pageNum);
        });
    });
}

function goToPage(pageNum) {
    // Update active page
    document.querySelectorAll('.pagination-numbers a').forEach(link => {
        link.classList.remove('active');
        if (parseInt(link.textContent) === pageNum) {
            link.classList.add('active');
        }
    });
    
    // Update button states
    const prevBtn = document.querySelector('.pagination-btn.prev');
    const nextBtn = document.querySelector('.pagination-btn.next');
    
    if (prevBtn) {
        prevBtn.disabled = pageNum === 1;
    }
    
    if (nextBtn) {
        const totalPages = document.querySelectorAll('.pagination-numbers a').length;
        nextBtn.disabled = pageNum === totalPages;
    }
    
    // Load products for page
    loadPageProducts(pageNum);
}

function loadPageProducts(pageNum) {
    // In a real application, you would make an API call here
    // For demo, just show a message
    showToast(`Loading page ${pageNum}...`);
    
    // Simulate loading
    setTimeout(() => {
        // Update URL without reloading
        const url = new URL(window.location);
        url.searchParams.set('page', pageNum);
        window.history.pushState({}, '', url);
        
        showToast(`Page ${pageNum} loaded`);
    }, 500);
}

// Helper functions from main.js (assuming they exist)
function addToCart(productId) {
    console.log(`Adding product ${productId} to cart`);
    // Implement cart logic
    showToast('Product added to cart!');
}

function toggleWishlist(productId) {
    console.log(`Toggling wishlist for product ${productId}`);
    // Implement wishlist logic
    showToast('Wishlist updated!');
}

function showToast(message, type = 'success') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    // Add to page
    document.body.appendChild(toast);
    
    // Show with animation
    setTimeout(() => toast.classList.add('show'), 10);
    
    // Remove after delay
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}