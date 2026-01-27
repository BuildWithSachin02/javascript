---------------------------------------------------------------------------------------------------

📘 Quiz App – JavaScript Based MCQ Test


A fully functional Quiz Application built using HTML, CSS, and JavaScript.
This project includes a timer-based MCQ test, score calculation, and a dynamic result page with PASS/FAIL status.

🚀 Features

User-friendly quiz interface

Timer for each question

Automatic question navigation

Score calculation based on correct answers

Result page with:

Total questions

Correct answers

Wrong answers

Percentage

PASS / FAIL status

Retry quiz and Home navigation

Fully responsive and clean UI

Uses localStorage for data transfer between pages

🛠️ Technologies Used

HTML5 – Structure of the application

CSS3 – Styling and responsive UI

JavaScript (ES6) – Quiz logic, timer, score calculation



quiz-app/
│
├── sign.html        # Login page
├── sign.css
├── sign.js
│
├── quiz.html        # Quiz page
├── quiz.css
├── quiz.js
│
├── result.html      # Result page
├── result.css
├── result.js
│
└── README.md





⚙️ How the App Works

User logs in from sign.html

Quiz starts with a timer for each question

User selects an option or timer moves to next question

Score is calculated dynamically

On quiz completion:

Score and total questions are saved in localStorage

result.html fetches data and displays:

Score

Percentage

PASS / FAIL status



🧠 Core Logic Explained
Dynamic Total Questions
localStorage.setItem("total", quizData.length);
Automatically calculates total questions from the array length.

Score Calculation

if (radio_A.checked && q.answer === q.options[0]) {
    score++;
}


Percentage Calculation (Safe)

let percentage = 0;
if (total > 0) {
    percentage = Math.round((score / total) * 100);
}


PASS / FAIL Decision

if (percentage >= 50) {
    statusBox.classList.add("pass");
} else {
    statusBox.classList.add("fail");
}

✅ PASS / FAIL Criteria

PASS → Percentage ≥ 50%

FAIL → Percentage < 50%

🔁 Retry & Navigation

Retry Quiz → Clears previous data and restarts quiz

Home → Redirects to login page

📌 Future Enhancements

Progress bar animation

Review wrong answers

Store quiz history

Admin panel for adding questions

Timer customization

👨‍💻 Author

Sachin Yadav
Web Developer (HTML, CSS, JavaScript, WordPress)

📄 License
** OUTPUT VIEW ***//
https://drive.google.com/file/d/1gdIWe5Dl8tYZ3j1AUGhOtyDowfEVjmTB/view?usp=drive_link

This project is open-source and free to use for learning and personal projects.
