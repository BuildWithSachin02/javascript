// 1️⃣ HTML ke elements pakad rahe hain
let titleInput = document.getElementById("title");
let descInput = document.getElementById("description");
let addBtn = document.getElementById("addBtn");
let notesContainer = document.getElementById("notesContainer");

// 2️⃣ Button pe click hone ka wait
addBtn.onclick = function () {

  // 3️⃣ User ne kya likha wo le rahe hain
  let title = titleInput.value;
  let description = descInput.value;

  // 4️⃣ Agar kuch bhi khali ho to note add nahi hoga
  if (title === "" || description === "") {
    alert("Title aur Description dono likho");
    return;
  }

  // 5️⃣ Naya div (note box) bana rahe hain
  let note = document.createElement("div");
  note.className = "note-card";

  // 6️⃣ Note ke andar content daal rahe hain
  note.innerHTML =
    "<h3>" + title + "</h3>" +
    "<p>" + description + "</p>";

  // 7️⃣ Note ko page par show kar rahe hain
  notesContainer.appendChild(note);

  // 8️⃣ Input box empty kar rahe hain
  titleInput.value = "";
  descInput.value = "";
};
