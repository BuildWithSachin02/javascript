// const body = document.body.getElementsByTagName("body");
// // const box = document.getElementById("box");
// const button = document.getElementById("btn");

// // abb mujhe esa project bnaa jise randomlly background ka color change ho jye aur
// // ussme hme button ki help se usser se click pe bg-change hogaa 
// // color-3 yeh tin color ke combination se pure color bnte h 
// // rgb= red,green,blue
// //in tino ki apni apni value h jese ki 
// // red = 0 se 255 tak
// //green = 0 se 255
// //blue = 0 se 255
// // point yeh ki issme mujhe abb jitne baar click kro toh bg change hogaa aur new new color ayenge
// // toh hmme random kaa use krnege aur 
// // rgb = r(255)*g(255)*b(255) = 1,65,81,375 h toh colors ke compinations h 
// // abb hme agr mujhr kuch esa kuch chiiye ki 
// const randomColorGenrator = ()=>{
//     const random = Math.floor(Math.random() * 16581375);
//     const color = random.toString(16); // num=1/+123=124 || string=123+a+1=123a1
//     button.style.color = "#" + color;
//     document.body.style.background = "#" +  color;
// };
// button.addEventListener("click",randomColorGenrator);
const body = document.body.getElementsByTagName("body");
const button = document.getElementById("btn");
const box = document.getElementById("box");

const randomColorGenrator = ()=>{
    const random = Math.floor(Math.random()*16581375);
    const color = random.toString(16);
    button.style.color = "#" + color; // isse string + # issko hm bolenge hexa decimal(#avs123)
    document.body.style.background = "#" + color;
    button.textContent = "#" + color;
    // alert(random);
};
button.addEventListener("click",randomColorGenrator);