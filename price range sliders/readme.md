----------------------------------------------------------------------------
# 💰 Premium Price Range Slider

<div align="center">

![Price Range Slider Banner](https://img.shields.io/badge/Price%20Range-Slider-blueviolet?style=for-the-badge&logo=html5)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**A modern, interactive price range slider with stunning UI/UX design**

[Live Demo](#) • [Report Bug](https://github.com/buildWithSachin02/price-range-slider/issues) • [Request Feature](https://github.com/buildWithSachin02/price-range-slider/issues)

</div>



## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [File Structure](#-file-structure)
- [Customization](#-customization)
- [Browser Support](#-browser-support)
- [Contributing](#-contributing)
- [License](#-license)
- [Author](#-author)

---

## 🎯 Overview

A beautiful and interactive price range slider component built with pure HTML, CSS, and JavaScript. Perfect for e-commerce websites, filtering systems, and any application requiring price range selection. Features a premium dark-themed UI with smooth animations and an intuitive user experience.

---

## ✨ Features

### 🎨 Design Features
- **Modern Dark Theme** - Stunning gradient background with animated floating orbs
- **Glassmorphism Effect** - Semi-transparent card with backdrop blur
- **Smooth Animations** - Butter-smooth transitions and hover effects
- **Premium Icons** - Custom SVG icons for enhanced visual appeal
- **Responsive Design** - Works flawlessly on desktop, tablet, and mobile devices

### ⚙️ Functional Features
- **Dual Input Methods** - Control via sliders or direct number input
- **Real-time Sync** - All inputs (sliders, number fields, display) stay synchronized
- **Smart Gap Control** - Maintains minimum ₹500 gap between min and max values
- **Indian Currency Format** - Displays prices with ₹ symbol and proper formatting
- **Visual Feedback** - Interactive hover states and active states for better UX
- **Range Scale** - Quick reference markers (₹0, ₹5k, ₹10k)

### 🔧 Technical Features
- **Pure Vanilla JS** - No frameworks or libraries required
- **Lightweight** - Fast loading with minimal dependencies
- **Clean Code** - Well-structured and commented codebase
- **Cross-browser Compatible** - Works on all modern browsers

---

## 📸 Screenshots

### Desktop View
```
┌─────────────────────────────────────────┐
│         Select Your Budget              │
│   Find products within your price range │
│                                         │
│  ┌─────────────┐ │ ┌─────────────┐    │
│  │ $ Minimum   │ │ │ $ Maximum   │    │
│  │   ₹2,000    │ │ │   ₹8,000    │    │
│  └─────────────┘ │ └─────────────┘    │
│                                         │
│  ●━━━━━━━━━━━━━━━━━━━━●               │
│  ₹0        ₹5k        ₹10k             │
│                                         │
│  Minimum Price    Maximum Price         │
│  ₹ [2000]         ₹ [8000]             │
│                                         │
│      [Apply Filter →]                   │
└─────────────────────────────────────────┘
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript (ES6+)** | Interactive functionality and DOM manipulation |
| **Google Fonts** | Inter font family for modern typography |

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic text editor or IDE
- (Optional) Local server for testing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/buildWithSachin02/price-range-slider.git
   ```

2. **Navigate to project directory**
   ```bash
   cd price-range-slider
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

### Quick Start

Just download and include the three files in your project:

```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Your HTML content -->
    <script src="script.js"></script>
</body>
</html>
```

---

## 🔍 How It Works

### Core Logic

```javascript
// 1. Element Selection
const minRange = document.getElementById("minRange");  // Min slider
const maxRange = document.getElementById("maxRange");  // Max slider
const minInput = document.getElementById("minInput");  // Min input box
const maxInput = document.getElementById("maxInput");  // Max input box
```

### Smart Gap Control
```javascript
const gap = 500;  // Minimum gap between min and max

// Prevents sliders from overlapping
if (maxRange.value - minRange.value < gap) {
    minRange.value = maxRange.value - gap;
}
```

### Real-time Synchronization
```javascript
// When slider moves → Update input box and display
minRange.addEventListener("input", () => {
    minInput.value = minRange.value;    // Sync input
    minDisplay.innerText = minRange.value;  // Sync display
});
```

### Event Flow Diagram
```
User Action → Event Listener → Validation → Update All Elements
     ↓              ↓              ↓              ↓
  Slider       addEventListener   Check Gap    Sync Display
  Input Box         →              →         & Input Fields
```

---

## 📁 File Structure

```
price-range-slider/
│
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── README.md           # Project documentation
└── LICENSE             # MIT License
```

### File Breakdown

**index.html** (125 lines)
- Semantic HTML5 structure
- SVG icons for currency symbols
- Accessibility-friendly markup

**style.css** (350+ lines)
- Custom CSS animations
- Gradient backgrounds
- Responsive media queries
- Cross-browser slider styling

**script.js** (50 lines)
- Event listeners for all inputs
- Gap validation logic
- Real-time synchronization
- Value formatting

---

## 🎨 Customization

### Change Color Scheme

```css
/* Primary Gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your colors */
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Adjust Price Range

```javascript
// In HTML or dynamically in JS
<input type="range" min="0" max="10000" value="2000">

// Change min/max/default values as needed
```

### Modify Gap Value

```javascript
const gap = 500;  // Change to any value (e.g., 1000, 200, etc.)
```

### Custom Currency

```javascript
// Replace ₹ symbol
minDisplay.innerText = `$${minRange.value}`;  // For USD
minDisplay.innerText = `€${minRange.value}`;  // For EUR
```

---

## 🌐 Browser Support

| Browser | Supported | Version |
|---------|-----------|---------|
| Chrome | ✅ | 90+ |
| Firefox | ✅ | 88+ |
| Safari | ✅ | 14+ |
| Edge | ✅ | 90+ |
| Opera | ✅ | 76+ |

### Notes:
- Tested on latest versions of all major browsers
- Fully responsive on mobile devices
- Supports touch interactions on tablets/phones

---

## 🤝 Contributing

Contributions are what make the open-source community amazing! Any contributions you make are **greatly appreciated**.

### Steps to Contribute:

1. **Fork the Project**
2. **Create your Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your Changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Ideas:
- 🎨 Additional color themes
- 🌍 Multi-currency support
- 📊 Analytics integration
- ♿ Enhanced accessibility features
- 🎯 Keyboard navigation improvements

---

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

```
MIT License - feel free to use this project for personal or commercial purposes
```

---

## 👨‍💻 Author

<div align="center">

### **Sachin Yadav**

[![GitHub](https://img.shields.io/badge/GitHub-buildWithSachin02-181717?style=for-the-badge&logo=github)](https://github.com/buildWithSachin02)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/your-handle)

**Full Stack Developer | UI/UX Enthusiast | Open Source Contributor**

*Building beautiful and functional web experiences* ✨

</div>

---

## 🙏 Acknowledgments

- Design inspiration from modern e-commerce platforms
- Icons from custom SVG designs
- Font: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- Color palette inspired by modern UI trends

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/buildWithSachin02/price-range-slider?style=social)
![GitHub forks](https://img.shields.io/github/forks/buildWithSachin02/price-range-slider?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/buildWithSachin02/price-range-slider?style=social)

---

## 💬 Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs via [Issues](https://github.com/buildWithSachin02/price-range-slider/issues)
- 💡 Suggesting new features
- 📢 Sharing with others

---

<div align="center">

**Made with ❤️ by Sachin Yadav**

*If you like this project, don't forget to

 give it a ⭐!*

</div>

**OUTPUT**

https://github.com/user-attachments/assets/198f5c28-1541-4b25-ba53-819629e6c735
