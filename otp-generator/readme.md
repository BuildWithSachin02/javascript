------------------------------------------------------------------------
🔐 OTP Input UI (JavaScript)


A clean and user-friendly OTP (One-Time Password) input interface built using HTML, CSS, and JavaScript.
This project automatically moves focus between input fields, allows only numeric values, and handles backspace navigation smoothly.

✨ Features

📌 Four separate input boxes for OTP digits

🔢 Accepts only numeric input

➡️ Automatically moves to the next input on entry

⬅️ Backspace/Delete moves focus to the previous input

🎨 Clean and minimal UI design

📱 Mobile-friendly numeric keyboard (inputmode="numeric")

🛠️ Technologies Used

HTML5 – Structure of the OTP inputs

CSS3 – Styling and layout

JavaScript (Vanilla JS) – Input validation and focus control

📂 Project Structure
otp-input/
│
├── index.html
├── style.css
└── script.js

📄 How It Works (Simple Explanation)

Each input box allows only one digit (maxlength="1")

When the user types a number:

The cursor automatically moves to the next input

If the user presses Backspace/Delete:

The cursor moves back to the previous input

Non-numeric input is automatically cleared

▶️ How to Run the Project

Download or clone this repository

Open index.html in any modern browser

Start typing the OTP digits

No external libraries or setup required.

🧠 JavaScript Logic Highlights

input event → handles number validation and auto-focus

keyup event → handles backspace and delete navigation

nextElementSibling & previousElementSibling used for focus control

📌 Use Cases

Login OTP verification UI

Email / Mobile number verification

Two-factor authentication (2FA) front-end design

🚀 Future Improvements (Optional)

Auto-submit after last digit

Dynamic OTP length

Paste full OTP support

Error / success animations

👤 Author

Sachin Yadav

GitHub: BuildWithSachin02

📜 License

This project is open-source and free to use for learning and personal projects.
