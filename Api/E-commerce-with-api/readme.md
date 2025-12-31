# ShopEase - E-Commerce Platform

A modern, fully responsive e-commerce platform built with vanilla HTML, CSS, and JavaScript. Features dynamic product loading from API, shopping cart functionality, and a sleek dark UI.

## 🚀 Features

- **Dynamic Product Loading**: Fetches products from DummyJSON API in real-time
- **Shopping Cart System**: Add products to cart with localStorage persistence
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Dark UI**: Professional gradient design with smooth animations
- **Product Cards**: Display product images, titles, brands, prices, and ratings
- **Mobile Navigation**: Hamburger menu for smaller screens
- **Order Summary**: View total items and price before checkout
- **Search Bar**: Quick access to search functionality (UI ready)
- **Cart Management**: Quantity controls and remove item functionality

## 📁 Project Structure

```
shopease/
├── index.html          # Main product listing page
├── cart.html           # Shopping cart page
├── style.css           # Main styling
├── cart.css            # Cart page styling
├── script.js           # Main JavaScript logic
├── cart.js             # Cart page JavaScript
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Flexbox, Grid, Gradients, Animations, Media Queries
- **JavaScript (ES6+)**: Fetch API, Array Methods, DOM Manipulation
- **LocalStorage**: Client-side cart persistence
- **DummyJSON API**: Product data source

## 📋 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API and external resources)

### Steps
1. Clone or download the project files
2. Ensure all files are in the same directory:
   - index.html
   - cart.html
   - style.css
   - cart.css
   - script.js
   - cart.js
3. Open `index.html` in your web browser
4. No build process or dependencies required!

## 🎯 How to Use

### Main Page (index.html)
1. Browse products from the DummyJSON API
2. View product details (title, brand, price, rating)
3. Click "Add to Cart" button to add items to your shopping cart
4. Use the search bar (optional feature for filtering)
5. Navigate using the top navbar

### Shopping Cart (cart.html)
1. Click the 🛒 cart icon in the navbar to visit your cart
2. View all items in your cart
3. Adjust quantity using +/- buttons
4. Remove items with the "Remove" button
5. See order summary on the right side
6. Click "Proceed to Checkout" to complete purchase
7. Use "← Continue Shopping" to return to products

## 📱 Responsive Breakpoints

- **Desktop**: Full layout with sidebar summary
- **Tablet (≤900px)**: Single column cart layout
- **Mobile (≤768px)**: Hamburger menu, stacked navigation, full-width images
- **Small Mobile (≤500px)**: Vertical item cards, optimized spacing

## 🔌 API Integration

### DummyJSON Products API
```
Endpoint: https://dummyjson.com/products
Method: GET
Returns: Array of products with:
- id: Product identifier
- title: Product name
- brand: Brand name
- price: Product price
- rating: User rating (0-5)
- thumbnail: Product image URL
```

### Data Flow
1. `fetchProducts()` calls the API on page load
2. `Createproducts()` generates HTML cards for each product
3. Cards are appended to the product grid
4. Click handlers add items to cart via localStorage

## 💾 LocalStorage Implementation

### Cart Storage Structure
```javascript
// Stored as JSON string
{
  "cart": [
    {
      "id": 1,
      "title": "Product Name",
      "price": 999,
      "thumbnail": "image-url",
      "quantity": 1
    },
    // More items...
  ]
}
```

### Functions
- `loadCart()`: Retrieves cart from localStorage
- `getCart()`: Gets current cart array
- `addToCart(product)`: Adds product to cart and saves to localStorage
- `showCartItems()`: Displays cart items on cart.html

## 🎨 Color Scheme

| Element | Color | Hex |
|---------|-------|-----|
| Background | Dark Navy | #0f1220 |
| Navbar/Cards | Darker Navy | #12162a |
| Primary Accent | Purple | #7f5cff |
| Secondary Accent | Cyan | #00d4ff |
| Text Primary | White | #fff |
| Text Secondary | Gray | #ccc/#aaa |
| Success/Price | Cyan | #00d4ff |
| Error/Remove | Red | #ff6b6b |

## 🎬 Animations & Interactions

- **Product Cards**: Hover lift effect (translateY -8px)
- **Buttons**: Gradient backgrounds with smooth transitions
- **Navigation**: Smooth mobile menu toggle
- **Cart Items**: Quantity controls with circular buttons
- **Responsive**: Adaptive layout changes without reloads

## 🐛 Troubleshooting

### Products not loading?
- Check internet connection
- Verify DummyJSON API is accessible
- Check browser console for errors (F12 → Console)
- API might be temporarily unavailable

### Cart data not persisting?
- Ensure localStorage is enabled in browser
- Try clearing browser cache and reloading
- Check if using private/incognito mode (some browsers restrict localStorage)

### Mobile menu not working?
- Verify CSS checkbox hack is properly linked
- Ensure menu-toggle element has correct id

### Images not showing?
- Check image URLs in API response
- Verify DummyJSON thumbnail field is accessible

## 📝 Code Snippets

### Add to Cart Functionality
```javascript
function addToCart(product) {
    let cart = getCart();
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart!");
}
```

### Fetch Products from API
```javascript
fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => Createproducts(data.products))
    .catch((error) => console.log("Error:", error));
```

### Create Product Card
```javascript
const items = document.createElement("div");
items.classList.add("product-card");
items.innerHTML = `
    <img src="${product.thumbnail}" alt="${product.title}">
    <div class="product-info">
        <h3>${product.title}</h3>
        <p class="brand">${product.brand}</p>
        <button onclick="addToCart()">Add to Cart</button>
    </div>
`;
```

## 🚀 Future Enhancements

- **Product Filtering**: By category, price range, rating
- **Search Functionality**: Real-time product search
- **Product Details Page**: Click product to see full details
- **Quantity Management**: Update cart item quantities
- **User Authentication**: Login/signup system
- **Payment Integration**: Stripe or PayPal integration
- **Order History**: Track previous purchases
- **Wishlist Feature**: Save favorite products
- **Product Reviews**: User ratings and comments
- **Stock Management**: Real inventory tracking

## 🔒 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 File Details

### index.html
- Main product listing page
- Navigation bar with logo and search
- Hero section with branding
- Product grid container
- Footer with links and social media

### cart.html
- Shopping cart page
- Cart items container
- Order summary sidebar
- Quantity controls
- Checkout button

### style.css
- Global styles (800+ lines)
- Navbar styling and responsive menu
- Hero section design
- Product grid and card styling
- Footer layout
- Mobile responsive breakpoints

### cart.css
- Cart page specific styles
- Cart items layout
- Order summary styling
- Quantity control buttons
- Checkout button design
- Responsive adjustments

### script.js
- Fetch products from API
- Create product cards dynamically
- Add to cart functionality
- LocalStorage cart management
- Error handling for API failures

### cart.js
- Load cart from localStorage
- Display cart items
- Empty cart handling
- Cart item rendering



For issues, suggestions, or improvements:
- Check browser console for error messages (F12)
- Verify all files are in the same directory
- Ensure internet connection for API calls
- Test in a different browser

## 📄 License

This project is free to use and modify for personal and educational purposes.

## 🙏 Credits

- **API**: DummyJSON (https://dummyjson.com)
- **Design**: Modern gradient dark theme
- **Icons**: Unicode symbols
- **Fonts**: Segoe UI system font

---

**Happy Shopping! 🛍️**
