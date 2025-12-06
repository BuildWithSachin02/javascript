const input = document.getElementById("input");//input ko hmne ek variable bnya h 
const button = document.getElementById("btn");// button naam ke valriable me hmne btn ko store 
const output_col = document.getElementsByClassName("output-col");//output naam ke variable me hmne output col ko store kiya h 
const p1 = document.getElementById("p1");// paragraph h yeh


button.addEventListener("click", ()=>{
    const d = input.value;// fetch value input hoga issme 
    // p1.textContent = value;
    // // alert("button tapped !");
    // // alert("this is sachin");\
    const p = document.createElement("h1");
    p.textContent = d;
    // // console.log(p.txtContent);
    // // document.writeln(p.textcontent);
    output_col[0].appendChild(p);// yeh key add krta h 
    // output_col[0].textContent=Math.floor(Math.random()*100);
});
