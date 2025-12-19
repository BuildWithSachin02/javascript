const score = localStorage.getItem("score");
const total = localStorage.getItem("total");

document.getElementById("score-text").textContent = `${score} / ${total}`;
document.getElementById("total-q").textContent = total;
document.getElementById("correct").textContent = score;
document.getElementById("wrong").textContent = total - score;

const status = document.getElementById("status");

if(score >= total / 2){
    status.textContent = "PASS";
    status.classList.add("pass");
}else{
    status.textContent = "FAIL";
    status.classList.add("fail");
}

function restartQuiz(){
    localStorage.clear();
    window.location.href = "quiz.html";
}
