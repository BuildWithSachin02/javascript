const title_Input = document.getElementById("title");
const des_Input = document.getElementById("description");
const AddNotes_btn = document.getElementById("addBtn");
const NotesContainer = document.getElementById("notesContainer");


let notes = []; //empty array bnya
const SavedNotes = localStorage.getItem("notes");
if(SavedNotes){
    notes = JSON.parse(SavedNotes);
    Startnotes(); 
}


//2.abb mujhe validation check krna h 
AddNotes_btn.addEventListener("click", ()=> {
    
    const title = title_Input.value.trim(); 
    const description = des_Input.value.trim();
    //abb hum if ka use krenge 
    if(title === "" || description === ""){
        alert("Please enter the title and descriptions!");
        return;
    }

    const notesObj = {
        title: title,
        description: description,
    }

    // editIndex ko upar global banaya hota hai
    // let editIndex = null;

    if (editIndex === null) {
     
      notes.push(notesObj);
    //   AddNotes_btn.innerText = "Add notes";
    } else {

      notes[editIndex] = notesObj;
      editIndex = null; // edit mode off
      AddNotes_btn.innerText = "Add notes";
    }

    SaveToTheLocalStorage();
    Startnotes();
    title_Input.value = "";
    des_Input.value = "";
    
});

function Startnotes(){
    NotesContainer.innerHTML = ""
   notes.forEach((note,index)=>{
     const NotesDiv = document.createElement("div"); 
    NotesDiv.className = "note-card";
    NotesDiv.innerHTML = 
    `<h3>${note.title}</h3>
        <p>${note.description}</p>
        <div class="btn-box">
          <button class="btn" onclick = "editNote(${index})">Edit</button>
        <button class="btn del" onclick = "deleteNote(${index})">Delete</button>
        </div>
    `;
    NotesContainer.appendChild(NotesDiv);
   });

}
function deleteNote(index){
    notes.splice(index,1);// array se note hata diya
    SaveToTheLocalStorage();//localStorage update
    Startnotes(); // screen refresh
}
let editIndex = null;
function editNote(index){
    title_Input.value = notes[index].title;
    des_Input.value = notes[index].description;
    editIndex = index;
    AddNotes_btn.textContent = "Update notes";
}

function SaveToTheLocalStorage(){
    localStorage.setItem("notes",JSON.stringify(notes));
}