# ShopEase - E-Commerce Platform

A modern, fully responsive e-commerce platform built with vanilla HTML, CSS, and JavaScript. Features dynamic product loading from DummyJSON API, real-time cart management, and persistent localStorage functionality.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-Active-brightgreen)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [LocalStorage Implementation](#localstorage-implementation)
- [Core Functionalities](#core-functionalities)
- [Browser Support](#browser-support)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Homepage Features
- **Dynamic Product Loading**: Fetches products from DummyJSON API in real-time
- **Real-time Search**: Filter products instantly as you type
- **Product Cards**: Beautiful grid layout with product images, titles, brands, prices, and ratings
- **Responsive Navigation**: Sticky navbar with hamburger menu for mobile devices
- **Modern UI**: Dark theme with gradient accents and smooth animations
- **Add to Cart**: One-click product addition with automatic quantity increment

### Cart Features
- **Cart Management**: Add, remove, and modify product quantities
- **Order Summary**: Real-time calculation of total items and price
- **Persistent Storage**: Cart data saved in localStorage
- **Responsive Layout**: Grid layout that adapts to screen size
- **Quantity Controls**: Increase/decrease buttons with validation
- **Empty Cart Handling**: User-friendly message for empty cart

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: DummyJSON REST API
- **Storage**: Browser LocalStorage
- **Styling**: CSS Flexbox & Grid
- **State Management**: Client-side JavaScript

## 📁 Project Structure

```
ShopEase/
├── index.html          # Main homepage
├── cart.html           # Shopping cart page
├── style.css           # Homepage styling
├── cart.css            # Cart page styling
├── script.js           # Homepage logic & API integration
├── cart.js             # Cart functionality
├── README.md           # Documentation
└── .gitignore          # Git ignore file
```

### File Descriptions

| File | Purpose |
|------|---------|
| **index.html** | Main product listing page with navbar and hero section |
| **cart.html** | Shopping cart page with order summary |
| **style.css** | Complete styling for homepage (responsive design) |
| **cart.css** | Cart page styling with grid layout |
| **script.js** | Product fetching, filtering, and add-to-cart logic |
| **cart.js** | Cart operations (add, remove, update quantity) |

## 🚀 Installation

### Prerequisites
- Git installed on your system
- A modern web browser (Chrome, Firefox, Safari, or Edge)
- Internet connection (for API calls)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ShopEase.git
   cd ShopEase
   ```

2. **Open the project**
   ```bash
   # Using Python (Python 3)
   python -m http.server 8000
   
   # Using Node.js (if installed)
   npx http-server
   
   # Or simply open index.html in your browser
   ```

3. **Access the application**
   - Open `http://localhost:8000` in your browser
   - Or double-click `index.html` to open directly

## 📖 Usage

### Homepage
1. **Browse Products**: Products load automatically from the API
2. **Search Products**: Type in the search box to filter products
3. **View Details**: See product name, brand, price, and rating
4. **Add to Cart**: Click "Add to Cart" button to add products
5. **Navigate Cart**: Click the 🛒 icon to view your cart

### Shopping Cart
1. **View Items**: All added products with images and details
2. **Adjust Quantity**: 
   - Click `+` to increase quantity
   - Click `−` to decrease quantity
3. **Remove Items**: Click "Remove" to delete from cart
4. **View Summary**: Check total items and total price on the right
5. **Continue Shopping**: Click "← Continue Shopping" to go back

## 🔌 API Integration

### DummyJSON API Endpoints

**Base URL**: `https://dummyjson.com`

**Products Endpoint**:
```
GET /products
```

**Response Structure**:
```json
{
  "id": 1,
  "title": "Product Name",
  "brand": "Brand Name",
  "price": 99.99,
  "rating": 4.5,
  "thumbnail": "image-url"
}
```

### How It Works

```javascript
// Fetch all products
fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => Createproducts(data.products))
  .catch(error => console.log("Error:", error));
```

**Error Handling**: User-friendly message displays if API fails

## 💾 LocalStorage Implementation

### Data Structure
```javascript
// Cart item structure
{
  productimg: "image-url",
  id: 1,
  title: "Product Name",
  price: 99.99,
  qty: 2
}
```

### Core Functions

**1. addToCart(product)**
```javascript
// Adds product to cart or increments quantity
// Saves cart to localStorage as JSON string
```

**2. LoadCart()**
```javascript
// Retrieves cart from localStorage
// Returns empty array if no cart exists
```

**3. UpdateItems()**
```javascript
// Saves updated cart to localStorage
// Re-renders cart display
```

### LocalStorage Flow
```
User adds product
    ↓
Check if product exists in cart
    ↓
If exists: increment qty
If not: create new entry
    ↓
Save to localStorage
    ↓
Display cart items
```

## 🔧 Core Functionalities

### 1. Product Fetching (script.js)
```javascript
fetchProducts()     // Loads all products from API
Createproducts()    // Renders product cards
```

### 2. Product Search (script.js)
```javascript
searchbox.addEventListener("input", () => {
  // Filters products by title in real-time
  // Uses Array.filter() method
})
```

### 3. Add to Cart (script.js)
```javascript
addToCart(product)
// - Checks if product already in cart
// - Increments qty or creates new entry
// - Saves to localStorage
// - Shows confirmation alert
```

### 4. Cart Management (cart.js)

**ShowCartitems()**: Displays all cart items
**increseQty(id)**: Increases product quantity
**decreseQty(id)**: Decreases product quantity (removes if qty = 1)
**removeitem(id)**: Removes product from cart
**UpdateItems()**: Saves changes and re-renders

## 📊 JavaScript Concepts Used

| Concept | Usage |
|---------|-------|
| **Fetch API** | Load products from DummyJSON |
| **Array Methods** | filter(), forEach(), find(), push(), splice() |
| **String Methods** | toLowerCase(), includes() |
| **DOM Manipulation** | createElement(), appendChild(), innerHTML |
| **Event Listeners** | addEventListener(), onclick |
| **LocalStorage** | getItem(), setItem() |
| **JSON Methods** | parse(), stringify() |
| **Arrow Functions** | Modern function syntax |
| **Template Literals** | Dynamic HTML generation |
| **Ternary Operators** | Conditional rendering |

## 🎨 Design System

### Color Scheme
```
Primary Background: #0f1220 (Dark Navy)
Secondary Background: #12162a (Darker Navy)
Primary Accent: #7f5cff (Purple)
Secondary Accent: #00d4ff (Cyan)
Text Primary: #fff (White)
Text Secondary: #ccc, #aaa (Gray)
```

### Responsive Breakpoints
```
Desktop: > 900px (Full layout)
Tablet: 768px - 900px (Adjusted grid)
Mobile: < 768px (Hamburger menu, single column)
```

## 🖥️ Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Supported |
| Firefox | Latest | ✅ Supported |
| Safari | Latest | ✅ Supported |
| Edge | Latest | ✅ Supported |
| Mobile Chrome | Latest | ✅ Supported |
| Mobile Safari | Latest | ✅ Supported |

## 🌐 Deployment

### GitHub Pages Deployment

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ShopEase.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to "GitHub Pages" section
   - Select `main` branch as source
   - Click Save

3. **Access Your Site**
   - Your site will be available at: `https://yourusername.github.io/ShopEase/`

### Alternative Hosting Options

- **Netlify**: Drag and drop folder or connect GitHub
- **Vercel**: Connect GitHub repository
- **Firebase Hosting**: Google's hosting platform
- **AWS S3**: Static website hosting

## 📝 Code Examples

### Adding a Product
```javascript
const productData = {
  productimg: "https://example.com/image.jpg",
  id: 1,
  title: "Amazing Product",
  price: 99.99,
  qty: 1
};
addToCart(productData);
```

### Searching Products
```javascript
const searchTerm = "iphone";
const results = allProducts.filter(product => 
  product.title.toLowerCase().includes(searchTerm.toLowerCase())
);
```

### Updating Cart Quantity
```javascript
// Increase quantity
increseQty(productId);

// Decrease quantity
decreseQty(productId);

// Remove entirely
removeitem(productId);
```

## 🐛 Troubleshooting

### Products Not Loading
- Check internet connection
- Verify DummyJSON API is accessible
- Check browser console (F12) for error messages
- Try refreshing the page

### Cart Data Not Persisting
- Ensure localStorage is enabled in browser
- Check if using private/incognito mode
- Try clearing browser cache
- Verify localStorage quota isn't exceeded

### Search Not Working
- Check if typing in correct search box
- Verify product titles match search term
- Try different search keywords
- Clear search box and try again

### Mobile Menu Not Showing
- Refresh the page
- Check if CSS file is loaded properly
- Try different mobile device/browser

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Product detail pages
- [ ] Wishlist functionality
- [ ] Order history tracking
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Product reviews and ratings
- [ ] Multiple product categories
- [ ] Sorting options (price, rating, newest)
- [ ] Dark/Light theme toggle
- [ ] PWA capabilities for offline access
- [ ] Admin dashboard for inventory management
- [ ] Email notifications

## 📚 Learning Resources

- [MDN Web Docs - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [LocalStorage Guide](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [CSS Grid & Flexbox](https://css-tricks.com/)
- [DummyJSON API Documentation](https://dummyjson.com/)

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- DummyJSON API for product data
- Inspiration from modern e-commerce platforms
- Community feedback and contributions

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check existing documentation
- Review troubleshooting section

---

**Made with ❤️ by ShopEase Team**

Last Updated: 2024
