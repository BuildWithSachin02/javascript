# Advanced Price Range Slider (Min–Max Filter)

This project is an **Advanced Price Range Slider UI component** built using **HTML, CSS, and Vanilla JavaScript**.  
It allows users to select a **minimum and maximum price range** using synchronized **range sliders** and **number inputs**, with validation and a modern UI.

---

## 🚀 Features

- Dual range slider (Min & Max)
- Synchronized number inputs and sliders
- Minimum price gap enforcement
- Live selected price display
- Smooth animated progress bar
- Modern glassmorphism UI
- Responsive layout
- Pure JavaScript (no libraries)

---

## 🛠️ Technologies Used

- HTML5  
- CSS3 (Flexbox, Gradients, Glassmorphism)  
- JavaScript (DOM manipulation & events)

---

## 📁 Project Structure

Price-Range-Slider
│
├── index.html
├── style.css
└── script.js

yaml
Copy code

---

## ⚙️ How It Works

- Users can change values using:
  - Range sliders
  - Number input fields
- A fixed **minimum price gap (500)** is enforced between min and max.
- JavaScript ensures:
  - Values stay within 0 – 10000
  - Inputs and sliders remain synchronized
- The highlighted bar visually represents the selected range.

---

## 🧠 JavaScript Logic Overview

- Listens to input events on sliders and number fields
- Prevents overlap using `priceGap`
- Updates:
  - Slider progress bar
  - Input values
  - Live selected price text

---

## 📏 Validation Rules

- Minimum price ≥ 0
- Maximum price ≤ 10000
- Minimum gap of 500 between prices

---

## ▶️ How to Run the Project

1. Download or clone this repository
2. Make sure all files are in the same folder
3. Open `index.html` in a modern browser
4. Adjust the sliders or inputs to see real-time updates

---

## 💡 Use Cases

- E-commerce price filtering
- Budget selection tools
- Product range filters
- Booking & pricing systems

---

## 🔮 Future Improvements

- Currency selector
- Dynamic min/max values
- Light / Dark mode toggle
- React / Tailwind version
- Backend filter integration

---

## 👤 Author

**Sachin Yadav**  
Frontend / Full Stack Web Developer

---

## 📜 License

This project is open-source and free to use for learning and personal projects.
**OUTPUT**



https://github.com/user-attachments/assets/ba2516ac-dc09-4b61-ac0a-eb8c082147fc
