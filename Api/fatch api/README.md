# 📮 API Post Card

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**A modern, responsive post card application that fetches and displays posts from JSONPlaceholder API with stunning glassmorphism design**

[View Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📖 Description

**API Post Card** is a sleek, vanilla JavaScript application that demonstrates real-world API integration and modern CSS design patterns. The project fetches data from the JSONPlaceholder API and dynamically renders beautiful post cards in a responsive grid layout. Each card features a glassmorphism design with backdrop blur effects, gradient accents, and smooth hover animations.

This project is perfect for learning:
- Asynchronous JavaScript (Fetch API)
- Dynamic DOM manipulation
- Modern CSS Grid layouts
- Glassmorphism design techniques
- Responsive web design principles

---

## ✨ Features

✅ **Real API Integration** - Fetches 100 posts from [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)  
✅ **Responsive Grid Layout** - Auto-fit grid system that adapts to any screen size  
✅ **Glassmorphism Design** - Modern frosted glass effect with backdrop blur  
✅ **Smooth Animations** - Hover effects with transform and box-shadow transitions  
✅ **Dark Gradient Background** - Eye-catching gradient from `#1e1e2f` to `#111118`  
✅ **Badge System** - Stylish gradient badges for post numbering  
✅ **Zero Dependencies** - Pure vanilla JavaScript, no frameworks or libraries  
✅ **Clean Code Structure** - Well-organized HTML, CSS, and JavaScript files  
✅ **User ID Display** - Shows which user created each post  
✅ **Source Attribution** - Clear API source labeling on each card  

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling, Grid layout, Flexbox, animations |
| **Vanilla JavaScript** | API calls and DOM manipulation |
| **CSS Grid** | Responsive card layout with `auto-fit` and `minmax()` |
| **Backdrop Filter** | Glassmorphism blur effect |
| **Linear Gradients** | Background and badge styling |
| **Fetch API** | Asynchronous data fetching |
| **JSONPlaceholder API** | Fake REST API for testing |

---

## 📁 Project Structure

```
fatch api/
├── index.html      # Main HTML structure
├── style.css       # Glassmorphism styling and grid layout
├── script.js       # API fetching and DOM rendering logic
└── README.md       # Project documentation
```

### File Breakdown

**`index.html`**
- Minimal HTML structure with a single container div
- Post cards are dynamically generated via JavaScript
- Links to external CSS and JavaScript files

**`style.css`**
- CSS Grid layout with `repeat(auto-fit, minmax(320px, 1fr))`
- Glassmorphism card styling with `backdrop-filter: blur(12px)`
- Dark gradient background and hover animations
- Responsive design with proper spacing and typography

**`script.js`**
- Fetches posts from JSONPlaceholder API
- Creates post card elements dynamically using `innerHTML`
- Appends cards to the container using DOM manipulation

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (to fetch data from the API)

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/buildwithsachin02/your-repo-name.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd "Api/fatch api"
   ```

3. **Open the project**
   - **Option 1:** Double-click `index.html` to open in your default browser
   - **Option 2:** Use a local server (recommended)
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using VS Code Live Server extension
     Right-click on index.html → Open with Live Server
     ```

4. **View in browser**
   ```
   http://localhost:8000
   ```

---

## 🧠 How It Works

### 1. API Fetching Process

The application uses the native **Fetch API** to retrieve posts asynchronously:

```javascript
const fatchNotes = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        CreateNotes(data);
    })
};

fatchNotes();
```

**Workflow:**
1. `fetch()` sends a GET request to JSONPlaceholder API
2. `.then(res => res.json())` converts the response to JSON
3. `.then(data => CreateNotes(data))` passes the data to the rendering function
4. Function is invoked immediately when the page loads

---

### 2. Dynamic Card Creation

The `CreateNotes` function dynamically generates HTML for each post:

```javascript
const CreateNotes = (notes) => {
    notes.forEach((note) => {
        const card = document.createElement("div");
        card.classList.add("post-card");
        card.innerHTML = `
            <span class="badge">POST #${note.id}</span>
            <h2 class="post-title">${note.title}</h2>
            <p class="post-body">${note.body}</p>
            <div class="post-footer">
                <span class="user">User ID: ${note.userId}</span>
                <span class="source">JSON Placeholder API</span>
            </div>
        `;
        container.appendChild(card);
    });
}
```

**Process:**
1. Loop through all posts using `forEach()`
2. Create a `div` element for each post
3. Add the `post-card` class for styling
4. Populate with data using template literals
5. Append to the main container

---

### 3. Responsive Grid Layout

The CSS Grid system automatically adjusts to screen sizes:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}
```

**How it works:**
- `auto-fit`: Creates as many columns as can fit
- `minmax(320px, 1fr)`: Each card is minimum 320px, maximum 1 fraction of available space
- `gap: 24px`: Consistent spacing between cards
- Result: **Automatically responsive** without media queries!

---

### 4. Glassmorphism Effect

The frosted glass effect is achieved with:

```css
.post-card {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}
```

---

## 🌐 API Used

### JSONPlaceholder API

- **Endpoint:** `https://jsonplaceholder.typicode.com/posts`
- **Documentation:** [jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com/)
- **Type:** Free fake REST API for testing and prototyping
- **Data Returned:** 100 posts with `userId`, `id`, `title`, and `body` fields
- **No Authentication Required:** Perfect for learning and testing

**Sample Response:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur..."
}
```

---

## 📸 Screenshots

> **Note:** Add your project screenshots here to showcase the design!

<div align="center">

### Desktop View
![Desktop Screenshot](./screenshots/desktop.png)

### Mobile View
![Mobile Screenshot](./screenshots/mobile.png)

### Hover Animation
![Hover Effect](./screenshots/hover.gif)

</div>

---

## 🎨 Design Features

### Color Palette
- **Background Gradient:** `#1e1e2f` → `#111118`
- **Card Background:** `rgba(255, 255, 255, 0.08)` with blur
- **Badge Gradient:** `#7f5cff` → `#00d4ff`
- **Text Colors:** `#fff` (titles), `#dcdcdc` (body), `#b5b5b5` (footer)

### Typography
- **Font Family:** Segoe UI, sans-serif
- **Title Size:** 20px, weight 600
- **Body Size:** 14px, line-height 1.6
- **Badge Size:** 12px, weight 600

### Animations
```css
.post-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
}
```
- Lift effect on hover (`translateY(-6px)`)
- Enhanced shadow for depth
- Smooth transition (0.3s ease)

---

## 💡 Learning Outcomes

By studying this project, you'll learn:

1. **Fetch API** - Making HTTP requests and handling promises
2. **Async/Await** - Asynchronous JavaScript patterns
3. **DOM Manipulation** - Creating and appending elements dynamically
4. **CSS Grid** - Modern layout techniques with `auto-fit` and `minmax()`
5. **Template Literals** - Using backticks and `${}` for dynamic strings
6. **Glassmorphism** - Creating modern frosted glass UI effects
7. **Responsive Design** - Building layouts that work on all devices
8. **Array Methods** - Using `forEach()` to iterate over data
9. **Event Handling** - Understanding how animations trigger on hover
10. **Project Organization** - Separating concerns (HTML, CSS, JS)

---

## 🔧 Customization Ideas

Want to enhance this project? Try these ideas:

- [ ] Add a loading spinner while fetching data
- [ ] Implement error handling for failed API requests
- [ ] Add a search/filter functionality for posts
- [ ] Create pagination or infinite scroll
- [ ] Add "Read More" toggle for long post bodies
- [ ] Implement dark/light theme toggle
- [ ] Add animation on card entry (fade-in, slide-up)
- [ ] Create a "Like" or "Bookmark" feature with localStorage
- [ ] Add skeleton loaders before data loads
- [ ] Implement modal to view full post details
- [ ] Add user avatars from another API
- [ ] Create category tags for posts
- [ ] Add sharing functionality (Twitter, Facebook)
- [ ] Implement sorting (by ID, user, title)
- [ ] Add a comment count feature

---

## 📝 Code Quality

This project follows best practices:

✅ **Clean Code** - Descriptive variable names and proper formatting  
✅ **Separation of Concerns** - HTML, CSS, and JavaScript in separate files  
✅ **Semantic HTML** - Proper use of HTML5 elements  
✅ **Responsive Design** - Works on all screen sizes  
✅ **Modern CSS** - Uses Grid, Flexbox, and backdrop-filter  
✅ **Vanilla JavaScript** - No unnecessary dependencies  
✅ **API Integration** - Real-world data fetching example  
✅ **Comments** - Code includes helpful comments for learning  

---

## 🐛 Known Issues

- No error handling for API failures (fetch may fail without notification)
- No loading state while data is being fetched
- Posts with very long titles may overflow on small screens
- No accessibility features (ARIA labels, keyboard navigation)

**Contributions to fix these are welcome!**

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

<div align="center">

### **Sachin Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-buildwithsachin02-181717?style=for-the-badge&logo=github)](https://github.com/buildwithsachin02)
[![Portfolio](https://img.shields.io/badge/Portfolio-buildwithsachin02-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](#)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/buildwithsachin02)

**Passionate JavaScript Developer | Building Projects to Master Web Development**

</div>

---

### About the Developer

Hi! I'm **Sachin** ([@buildwithsachin02](https://github.com/buildwithsachin02)), a dedicated web developer passionate about creating clean, modern, and functional web applications. This project is part of my journey to master vanilla JavaScript and modern web development practices.

I believe in **learning by building**, and this repository showcases various JavaScript projects that demonstrate core web development concepts.

**🔗 Connect with me:**
- **GitHub:** [@buildwithsachin02](https://github.com/buildwithsachin02)
- **Twitter:** [@buildwithsachin02](#)
- **Email:** buildwithsachin02@gmail.com

**💼 Other Projects:**
- Check out my [GitHub profile](https://github.com/buildwithsachin02) for more JavaScript projects
- Explore ShopEasy, Quiz App, Notes App, and many more!

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### MIT License Summary
```
Copyright (c) 2024 Sachin Kumar (buildwithsachin02)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 📞 Contact & Support

### Need Help?

If you have questions about this project or want to collaborate:

- 📧 **Email:** buildwithsachin02@gmail.com
- 💬 **GitHub Issues:** [Create an issue](https://github.com/buildwithsachin02/your-repo/issues)
- 🐛 **Bug Reports:** Use the issue tracker
- 💡 **Feature Requests:** Open an issue with the "enhancement" label

### Follow for More Projects

Stay updated with my latest projects and learning journey:

- ⭐ **Star this repo** if you found it helpful
- 👁️ **Watch** for updates and improvements
- 🔔 **Follow** [@buildwithsachin02](https://github.com/buildwithsachin02) on GitHub

---

## 🙏 Acknowledgments

- **JSONPlaceholder** - For providing a free, reliable API for testing
- **Google Fonts** - For Segoe UI fallback and web font inspiration
- **CSS Tricks** - For CSS Grid and Flexbox tutorials
- **MDN Web Docs** - For comprehensive JavaScript documentation
- **The Web Dev Community** - For constant inspiration and support

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/buildwithsachin02/your-repo?style=social)
![GitHub forks](https://img.shields.io/github/forks/buildwithsachin02/your-repo?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/buildwithsachin02/your-repo?style=social)

---

<div align="center">

### ⭐ Don't forget to star this repository if you found it helpful! ⭐

**Made with ❤️ by [buildwithsachin02](https://github.com/buildwithsachin02)**

---

**Happy Coding! 🚀**

</div>
