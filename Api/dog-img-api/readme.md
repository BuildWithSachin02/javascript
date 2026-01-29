-----------------------------------------------------------------------------------------------------------
# Random Dog Viewer 🐕

A simple and fun web application that displays random dog images. This project is built for **API integration practice**

![Status](https://img.shields.io/badge/status-Learning%20Project-yellow)
![API](https://img.shields.io/badge/API-Dog.CEO-blue)
![HTML](https://img.shields.io/badge/HTML5-✓-green)
![CSS](https://img.shields.io/badge/CSS3-✓-green)
![JavaScript](https://img.shields.io/badge/JavaScript-✓-green)

---

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [How It Works](#how-it-works)
- [API Details](#api-details)
- [Code Explanation](#code-explanation)
- [Project Structure](#project-structure)
- [Browser Support](#browser-support)
- [Learning Outcomes](#learning-outcomes)
- [Creator Info](#creator-info)

---

## 📚 About

**Random Dog Viewer** is an educational project built for learning purposes. It demonstrates:
- How to fetch data from REST APIs
- How to manipulate the DOM
- How to show loading states
- How to apply modern CSS styling

This project uses the **Dog.CEO API**, which is free and provides unlimited dog images. 🐶

---

## ✨ Features

- 🎲 **Random Dog Images**: Displays a new dog image every time
- 🔘 **Simple Button**: Get new images with the "Get New Dog" button
- ⏳ **Loading Effect**: Shows opacity effect while image is loading
- 🎨 **Beautiful UI**: Modern dark theme with gradient background
- 📱 **Responsive Design**: Works on mobile, tablet, and desktop
- 🚀 **Fast Loading**: Instant response from the API
- 🔗 **Free API**: Dog.CEO API is completely free

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Page structure |
| **CSS3** | Styling & animations |
| **JavaScript (ES6+)** | API calls & DOM manipulation |
| **Dog.CEO API** | Dog images |
| **Fetch API** | HTTP requests |

---

## 🚀 Installation

### Quick Start

**Step 1: Clone or Download**
```bash
git clone https://github.com/BuildWithSachin02/random-dog-viewer.git
cd random-dog-viewer
```

**Step 2: Open in Browser**
```bash
# Simply open index.html
# Or use a local server (recommended)
python -m http.server 8000
```

**Step 3: Access**
- Open `http://localhost:8000` in your browser

---

## 🎯 How It Works

### Simple Workflow

```
1. Page loads
   ↓
2. Initial dog image displays
   ↓
3. User clicks "Get New Dog" button
   ↓
4. Image opacity changes to 0.3 (loading effect)
   ↓
5. Request sent to API
   ↓
6. Random dog image URL received
   ↓
7. Image updates
   ↓
8. After image loads, opacity returns to 1
```

---

## 🔌 API Details

### Dog.CEO API

**Base URL**: `https://dog.ceo/api`

**Endpoint we use**:
```
GET https://dog.ceo/api/breeds/image/random
```

**Response Example**:
```json
{
  "message": "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "status": "success"
}
```

### API Response Structure

| Field | Type | Description |
|-------|------|-------------|
| `message` | String | Dog image URL |
| `status` | String | "success" or "error" |

### How It Works

```javascript
// Calling the API
fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())           // Convert response to JSON
  .then(data => {
    // Update image URL
    doggiesApi.src = data.message;
  });
```

---

## 💻 Code Explanation

### HTML Structure

```html
<!-- Navbar -->
<header class="navbar">
  <h2 class="logo">Doggo🐶</h2>
</header>

<!-- Main Content -->
<main class="container">
  <h1 class="title">Random Dog Image</h1>
  
  <!-- Dog Card -->
  <div class="dog-card">
    <img src="..." alt="Random Dog" id="dog-img">
    <button id="dog-change-btn" class="btn">Get New Dog</button>
  </div>
</main>

<!-- Footer -->
<footer class="footer">
  <p>Built for API Practice</p>
</footer>
```

### JavaScript Logic

#### 1. Selecting DOM Elements
```javascript
const doggiesApi = document.getElementById("dog-img");      // Image element
const dogChngbtn = document.getElementById("dog-change-btn"); // Button
```

#### 2. Button Click Event
```javascript
dogChngbtn.addEventListener("click", () => {
  fetchApi();  // Call API when button is clicked
});
```

#### 3. Making API Call
```javascript
const fetchApi = () => {
  // Reduce opacity for loading effect
  doggiesApi.style.opacity = "0.3";
  
  // Call the API
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())                    // Convert to JSON
    .then(data => {
      doggiesApi.src = data.message;            // Update image URL
      
      // After image loads
      doggiesApi.onload = () => {
        doggiesApi.style.opacity = "1";         // Restore opacity
      };
    });
};

// Call API on page load
fetchApi();
```

### CSS Styling

#### Dark Theme
```css
body {
  background: linear-gradient(135deg, #0f1220, #1b1f3b);
  color: #fff;
}
```

#### Glassmorphism Card
```css
.dog-card {
  background: rgba(255,255,255,0.08);     /* Transparent background */
  border-radius: 20px;
  backdrop-filter: blur(12px);            /* Blur effect */
  box-shadow: 0 30px 60px rgba(0,0,0,0.55);
}
```

#### Gradient Button
```css
.btn {
  background: linear-gradient(90deg, #7f5cff, #00d4ff);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: scale(1.05);                 /* Button scales up */
  box-shadow: 0 10px 25px rgba(0,212,255,0.4);
}
```

---

## 📁 Project Structure

```
random-dog-viewer/
├── index.html         # Page structure
├── style.css          # Styling
├── script.js          # JavaScript logic
└── README.md          # Documentation
```

### File Descriptions

| File | Lines | Purpose |
|------|-------|---------|
| **index.html** | 42 | HTML structure |
| **style.css** | 150+ | CSS styling |
| **script.js** | 20+ | API & DOM logic |

---

## 🖥️ Browser Support

✅ Chrome (Latest)  
✅ Firefox (Latest)  
✅ Safari (Latest)  
✅ Edge (Latest)  
✅ Mobile browsers  

---

## 📊 JavaScript Concepts Used

| Concept | Where | Example |
|---------|-------|---------|
| **Fetch API** | script.js | `fetch("url").then()` |
| **Promise** | script.js | `.then().then()` chaining |
| **Arrow Functions** | script.js | `() => {}` |
| **DOM Methods** | script.js | `getElementById()` |
| **Event Listeners** | script.js | `addEventListener()` |
| **DOM Manipulation** | script.js | `.src`, `.style` |

---

## 🎨 Design Features

### Color Scheme
```
🎨 Dark Background: #0f1220
🎨 Card Background: rgba(255,255,255,0.08)
🎨 Purple Accent: #7f5cff
🎨 Cyan Accent: #00d4ff
⚪ White Text: #fff
```

### Responsive Breakpoints
```
📱 Mobile: < 600px
🖥️ Desktop: > 600px
```

---

## 🎓 Learning Outcomes

What you can learn from this project:

✅ How **REST APIs** work  
✅ How to use the **Fetch API**  
✅ How to do **Promise chaining**  
✅ How to perform **DOM manipulation**  
✅ **CSS styling** (gradients, backdrop-filter)  
✅ **Event handling** (click events)  
✅ How to show **loading states**  
✅ How to **parse JSON**  
✅ How to create **responsive design**  

---

## 🐛 Troubleshooting

### Images not loading?
**Solution**: Check your internet connection, verify API is live

### Button not working?
**Solution**: Check browser console (F12), look for errors

### CSS styles not applying?
**Solution**: Verify style.css file is properly linked

---

## 💡 Possible Improvements

- [ ] Add dog breed filter
- [ ] Add "Like" button functionality
- [ ] Create saved images list
- [ ] Add share button
- [ ] Add loading skeleton
- [ ] Improve error handling
- [ ] Add keyboard shortcuts
- [ ] Add dark/light theme toggle
- [ ] Add image counter

---

## 📚 Resources

- [Dog.CEO API Documentation](https://dog.ceo/dog-api/)
- [MDN - Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN - Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [CSS Tricks - Glassmorphism](https://css-tricks.com/glassmorphism/)

---

## 👤 Creator Information

**Sachin Yadav**

- 📧 **Email:** sachinyadav.webdev404@gmail.com
- 🐙 **GitHub:** [BuildWithSachin02](https://github.com/BuildWithSachin02)
- 💼 **LinkedIn:** [Sachin Yadav](https://www.linkedin.com/in/sachin-yadav-webdev/)
- 📍 **Location:** Surat, Gujarat
- 📱 **Phone:** 9054387845

**Status:** Learning Full Stack Web Development 🚀

---

## 📝 Notes

- This is a **practice project**
- API is completely **free**
- **No authentication** required
- There's **no guarantee** the API will always work

---

## 🎯 Quick Tips

1. Press **F12** to open DevTools
2. Check **Network tab** to see API calls
3. Check **Console tab** to see errors
4. Use **Inspect element** to modify HTML/CSS

---

**Last Updated:** January 2025

**Made with 💜 for Learning**

---

⭐ If you find this helpful, give it a **star** on GitHub! ⭐













