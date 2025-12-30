/*
<div class="image-box">
          <img src="https://via.placeholder.com/600/92c952" alt="photo">
        </div>

        <div class="photo-content">
          <h3 class="photo-title">
            accusamus beatae ad facilis cum similique qui sunt
          </h3>

          <div class="photo-footer">
            <span class="photo-id">#1</span>
            <span class="api-tag">JSON Placeholder</span>
          </div>
        </div>
*/ 






const container = document.getElementById("container");

const createAlbum = (pics)=>{
    pics.forEach((pic)=>{
        const photo = document.createElement("div");
        photo.classList.add("photo-card");
        photo.innerHTML = `
        
        <div class="photo-content">
          <h3 class="photo-title">
            ${pic.title}
          </h3>

          <div class="photo-footer">
            <span class="photo-id">#${pic.id}</span>
            <span class="api-tag">${pic.userId}</span>
          </div>
        </div>
        `
        container.appendChild(photo);
    });     
}

const fetchNotes = ()=>{
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res)=>res.json())
    .then((data)=>{
        createAlbum(data);
    });
};
fetchNotes();
