const container = document.getElementById("container");

const CreateNotes = (cmmts)=>{
    cmmts.forEach(cmmt => {
        const card = document.createElement("div");
        card.classList.add("comment-card");
       card.innerHTML = `
          <div class="card-header">
            <h2 class="comment-name">${cmmt.postId}</h2>
            <span class="comment-id">#${cmmt.id}</span>
          </div>
            
          <p class="comment-body">
            ${cmmt.name}
          </p>
            
          <p class="comment-text">
            ${cmmt.body}
          </p>
            
          <div class="card-footer">
            <span class="email">✉ ${cmmt.email}</span>
            <span class="api">JSON Placeholder</span>
          </div>
        `;

        container.appendChild(card);
    });
};

const fatchNotes = ()=>{
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then((res)=>res.json())
    .then((data)=>{
        CreateNotes(data);
    });
}
fatchNotes();