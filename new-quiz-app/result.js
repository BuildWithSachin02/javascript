//hmne jab quiz.js me hmne isse local storage me store kiya thaa isse toh hmme get krwnaa  h iss
const score = Number(localStorage.getItem("score")) || 0;
const total = Number(localStorage.getItem("total")) || 0;

//abb mujhe percentage nikalna hh mujhe 
let percentage = 0;
if(total>0){
    percentage = Math.round((score / total)*100);
}
//screen pe yeh sab dikhegaa 
document.getElementById("final-score").textContent = score;
document.getElementById("total-questions").textContent = total;
document.getElementById("total").textContent = total;
document.getElementById("correct").textContent = score;
document.getElementById("wrong").textContent = total - score;
document.getElementById("percentage").textContent = percentage;

//pass aur fail logic h 
const statusBox = document.getElementById("result-status");
 
if(percentage >= 50){
    statusBox.textContent = "PASS";
    statusBox.classList.add("pass");
}else{
    statusBox.textContent = "FAIL";
    statusBox.classList.add("fail");
}
function restartQuiz(){
    localStorage.clear();
    window.location.href = "quiz.html"; // firse quiz wle page jnaa hogaa firse examm do 
}
function goHome(){
    localStorage.clear();
    window.location.href = "sign.html";// home page pe leke jyga
}