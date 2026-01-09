# Notes App (CRUD + LocalStorage)-

This is a ***simple Notes App***  built using **HTML, CSS, and JavaScript**.  
The project is designed for **beginners** to understand **DOM manipulation**, **arrays**, and **LocalStorage** step by step.

The app allows users to:-
- Add notes
- Edit notes
- Delete notes
- Save notes permanently using LocalStorage

----

## ✨ Features

- Add new notes with title and description
- Edit existing notes using the same Add button
- Delete notes using index-based logic
- Notes remain saved even after page refresh
- Beginner-friendly JavaScript logic
- Clean and simple UI

---

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)
- Browser LocalStorage

---

## 📁 Project Structure

notes-app
│
├── index.html
├── style.css
└── script.js

yaml
Copy code

---

## 🧠 How the App Works (Easy Explanation)

### 1. Notes Storage
- All notes are stored in an **array** called `notes`.
- Each note is an object:
```js
{ title: "...", description: "..." }
2. LocalStorage Logic
Notes array is saved using:

js
Copy code
localStorage.setItem("notes", JSON.stringify(notes));
On page load, notes are retrieved using:

js
Copy code
JSON.parse(localStorage.getItem("notes"));
3. Add Note
User enters title and description

Clicks Add Note

Data is pushed into the notes array

UI is re-rendered

4. Edit Note
Clicking Edit fills the input boxes

The index of the note is stored in editIndex

Clicking Add / Update replaces the old note

5. Delete Note
Each note has a Delete button

The note is removed using splice(index, 1)

LocalStorage and UI are updated

🔑 Important Concepts Used
getElementById

addEventListener

Arrays & Objects

forEach loop

JSON.stringify() and JSON.parse()

LocalStorage

DOM creation using createElement()

🧪 How to Run the Project
Download or clone the repository

Open index.html in any browser

Start adding, editing, and deleting notes

Refresh the page to see LocalStorage working

🎓 Learning Outcome
By building this project, you will understand:

How data flows between UI and JavaScript

Difference between array and object

How to debug duplicate data issues

How LocalStorage works internally

How real-world CRUD apps are structured

🚀 Future Improvements
Read more / Read less for long notes

Search notes feature

Dark / Light mode

Confirmation before delete

Mobile swipe actions

👤 Author
Sachin Yadav
Frontend / Full Stack Web Developer

