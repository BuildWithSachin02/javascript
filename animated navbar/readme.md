# Animated Navigation Menu--

This project demonstrates a clean and interactive **Animated Navigation Menu** built using **HTML, CSS, and JavaScript**.  
The navigation bar smoothly expands and collapses with a rotating menu animation when the toggle button is clicked.

--

## 🔹 Features

- Animated expandable navigation bar
- Smooth width transition using CSS
- Rotating menu items animation
- Hamburger menu transforms into close icon
- Responsive and modern UI
- Pure HTML, CSS & JavaScript (no libraries)

---

## 🔹 Technologies Used

- HTML5  
- CSS3 (Transitions & Transforms)  
- JavaScript (DOM Manipulation)

---//

## 🔹 Project Structure

📁 Animated-Navigation
│
├── index.html
├── style.css
└── script.js

yaml
Copy code

---

## 🔹 How It Works

- Initially, the navigation bar is in a collapsed state.
- Clicking the menu icon toggles the `active` class on the `<nav>` element.
- CSS handles:
  - Width expansion
  - Menu item rotation
  - Icon animation
- JavaScript only controls class toggling for better performance.

---

## 🔹 JavaScript Logic

```js
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => nav.classList.toggle("active"));
🔹 How to Use
Download or clone this repository

Open index.html in any modern browser

Click on the menu icon to see the animation

🔹 Future Improvements
Add mobile responsiveness

Add active link highlighting

Convert to React / Vue component

Add keyboard accessibility

🔹 Author
Sachin Yadav
Frontend / Full Stack Web Developer

🔹 License
https://github.com/user-attachments/assets/351002a6-ba91-4860-97b7-bc24967b8e0c
This project is open-source and free to use for learning and personal projects.

**OUTPUT VIEW**




https://github.com/user-attachments/assets/c552f803-698d-41ec-b213-9a8c9e050fb4




