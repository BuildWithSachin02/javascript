/*
explaination: 
       1. timeLeft = Number(inputValue); =>
            User jo input likhta hai → TEXT hota hai.
            Timer ko text samajh nahi aata.
            Number(inputValue) → Text ko number me convert karta hai.
            Phir timer number ko countdown karta hai.
       
            

*/
let timer; // timer ko stop krne ke liye
let timeleft = 0; // timer ko decrement aur fresh start ke liye hme 0 se start krna hoga

//1.find the formulla hme user se input mile usse for ex:5600 yeh toh hme yeh krna h li isse hour/min/second me convert krna h 
function Format(time){
    let h = Math.floor(time / 3600); // 1 hour = in hour total second 3600 ?? 60min*60sec=3600second
    let m = Math.floor((time % 3600)/60); // abb hme milega reminder usse hmne min find ke liye 60 se division kiya 
    let s = Math.floor(time % 60);

    // step.2 ternary oparator use krna krna hogaa hme
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    //step.3 abb mujhe isse return krna h toh mujhe backtic ka use krna hogaa jiska kaam h return string yaa convert into string
    return `${h}: ${m} : ${s}`;
}
//2. abb hme engine start krna hoga jo iska core h 
function startTimer(){
    //step.1 me hme user se input lena usse ek variable me store krna h usse 
    const input = document.getElementById("input").value;
    // abb hmne ek variable me store kr liya but ab hme isko vlaidation check krwna h issko 
    if(input === ""||// validation check krega yeh 
        Number(input) <= 0||
        isNaN(input)
    ){
        alert("Enter the valid seconds!"); // if condion false so this line will show on top 
        return;// fir mene isse return kr diya h 
    }
    timeleft = Number(input);//yeh Number in buil-js function jiska kaam yeh ki string ko  return into numbers 
    clearInterval(timer);// iska mltb yeh ki timer naam ke variable ko zero se start kna h 

    // step.3 nested functions 
    timer = setInterval(()=>{
        document.getElementById("display").innerText = Format(timeleft);
        if(timeleft === 0){
            clearInterval(timer);
            alert("Timer Finished.");
            return;
        }
        timeleft--;
    },1000);// 1 second pe yeh call back hota rhega yeh 
}
function stopTimer(){// iss function hmne kiya ki clearinteval yeh in-built-js-function ka use krne timer ko hme zero mtlb ki frsh start krnege 
    clearInterval(timer);//yeh kiya 00
}
function resetTimer(){// yeh fuction kaam h ki reset to all things 
    clearInterval(timer);// timer ko zero-zero krna
    timeleft = 0;// zero rkhna fresh start
    document.getElementById("display").innerText = "00:00:00";//innertext kaam h ki html me jo hmne id di jisko hmne bulya h ussme updatekrne kaam voh innertext krnta h
    document.getElementById("input").value = "";// input wle box ko hum kyy krnge ki usse khali reset sab htna h hmme
}
document.getElementById("start").onclick = startTimer;//button pe click krne se call hoga functions ko
document.getElementById("stop").onclick = stopTimer;//button pe click krne se call hoga functions ko
document.getElementById("reset").onclick = resetTimer;// button pe click krne se call hoga functions ko

// let timer;
// let timeLeft = 0;

// // Seconds ko HH:MM:SS me convert
// function format(time) {
//     let h = Math.floor(time / 3600);
//     let m = Math.floor((time % 3600) / 60);
//     let s = time % 60;

//     h = h < 10 ? "0" + h : h;
//     m = m < 10 ? "0" + m : m;
//     s = s < 10 ? "0" + s : s;

//     return `${h} : ${m} : ${s}`;
// }

// function startTimer() {
//     let input = document.getElementById("input").value;

//     if (input === "" || isNaN(input) || Number(input) <= 0) {
//         alert("Enter valid seconds!");
//         return;
//     }

//     timeLeft = Number(input);

//     clearInterval(timer);

//     timer = setInterval(() => {

//         document.getElementById("display").innerText = format(timeLeft);

//         if (timeLeft === 0) {
//             clearInterval(timer);
//             alert("Timer Finished!");
//             return;
//         }

//         timeLeft--;

//     }, 1000);
// }

// function stopTimer() {
//     clearInterval(timer);
// }

// function resetTimer() {
//     clearInterval(timer);
//     timeLeft = 0;

//     document.getElementById("display").innerText = "00 : 00 : 00";
//     document.getElementById("input").value = "";
// }

// document.getElementById("start").onclick = startTimer;
// document.getElementById("stop").onclick = stopTimer;
// document.getElementById("reset").onclick = resetTimer;
