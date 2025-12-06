const button = document.getElementById("btn");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

const addtodo = ()=>{
    const value = input.value;
    const div = document.createElement("div"); // ek khali div hmne create krwaya h uss hum div naa ke variable me store krenge
    div.className = "todo"; // isshmne uss khali div kaa class deke usspe hmne jo perform krqwana h boh hoga
    div.textContent = value;//<div>Value</div>
    todos.appendChild(div);
};

button.addEventListener("click",addtodo);