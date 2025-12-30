/*
<div class="post-card">

      <span class="badge">POST #1</span>

      <h2 class="post-title">
        Post Title Will Come Here
      </h2>

      <p class="post-body">
        This is the post description. API se aane wala content yahan
        dynamically inject hoga using JavaScript.
      </p>

      <div class="post-footer">
        <span class="user">User ID: 1</span>
        <span class="source">JSON Placeholder API</span>
      </div>

    </div>
*/


const container = document.getElementById("container");

const CreateNotes = (notes)=>{
    notes.forEach((note)=>{
        const card = document.createElement("div");
        card.classList.add("post-card");
       card.innerHTML = 
       `
       <span class="badge">POST #${note.id}</span>

      <h2 class="post-title">
        ${note.title}
      </h2>

      <p class="post-body">
        ${note.body}
      </p>

      <div class="post-footer">
        <span class="user">User ID: ${note.userId}</span>
        <span class="source">JSON Placeholder API</span>
      </div>
       `
        
        container.appendChild(card);
    });
}
const fatchNotes = ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>{
        CreateNotes(data);
    })
};

fatchNotes();