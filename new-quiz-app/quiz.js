const timerDisplay = document.getElementById("timer");
const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const option4 = document.getElementById("option4");
const next_btn = document.getElementById("next-btn");
const radio_A = document.getElementById("option-a");
const radio_B = document.getElementById("option-b");
const radio_C = document.getElementById("option-c");
const radio_D = document.getElementById("option-d");

//1.pehle hmne timer set krdiya h 
let timerSecond;
function startimer(){
    clearInterval(timerSecond);
    // console.log(score);
   let timerLeft = 5;
   timerDisplay.textContent = timerLeft;
    timerSecond = setInterval(()=>{
        timerLeft--;
        if(timerLeft<0){
            clearInterval(timerSecond);
            CallculateResult();
            gotoNextQuestion();
            return;
        }
          timerDisplay.textContent = timerLeft;
    },1000);
}
//2. abb mujhe timer complete hone ke baad new questions pe aa jaou esa kuch krna 
//usske liye mujhe functions aur question lene honge
const quizData = [
    {
        question: "1. Which HTML tag is used to create a hyperlink?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "2. Which attribute specifies the URL in an anchor tag?",
        options: ["src", "href", "link", "url"],
        answer: "href"
    },
    {
        question: "3. Which HTML tag is used to display an image?",
        options: ["<img>", "<image>", "<pic>", "<src>"],
        answer: "<img>"
    },
    {
        question: "4. Which CSS property changes text color?",
        options: ["font-color", "color", "text-color", "background"],
        answer: "color"
    },
    {
        question: "5. Which CSS property controls text size?",
        options: ["text-size", "font-style", "font-size", "size"],
        answer: "font-size"
    },
    // {
    //     question: "6. Which CSS property is used to make elements flexible?",
    //     options: ["flexbox", "display: flex", "position: flex", "float"],
    //     answer: "display: flex"
    // },
    // {
    //     question: "7. Which symbol is used for ID selector in CSS?",
    //     options: [".", "#", "*", "&"],
    //     answer: "#"
    // },
    // {
    //     question: "8. Which symbol is used for class selector in CSS?",
    //     options: ["#", ".", "*", "%"],
    //     answer: "."
    // },
    // {
    //     question: "9. Which HTML tag is used to create a form?",
    //     options: ["<input>", "<form>", "<button>", "<fieldset>"],
    //     answer: "<form>"
    // },
    // {
    //     question: "10. Which input type hides entered text?",
    //     options: ["text", "password", "hidden", "secure"],
    //     answer: "password"
    // },
    // {
    //     question: "11. Which JavaScript keyword is used to declare a variable?",
    //     options: ["var", "let", "const", "All of these"],
    //     answer: "All of these"
    // },
    // {
    //     question: "12. Which function prints output in JavaScript console?",
    //     options: ["print()", "console.log()", "log()", "write()"],
    //     answer: "console.log()"
    // },
    // {
    //     question: "13. Which operator is used for strict equality?",
    //     options: ["==", "=", "===", "!="],
    //     answer: "==="
    // },
    // {
    //     question: "14. What is the default value of an uninitialized variable?",
    //     options: ["null", "0", "undefined", "false"],
    //     answer: "undefined"
    // },
    // {
    //     question: "15. Which loop executes at least once?",
    //     options: ["for", "while", "do...while", "foreach"],
    //     answer: "do...while"
    // },
    // {
    //     question: "16. Which JavaScript method converts string to integer?",
    //     options: ["Number()", "parseInt()", "toInt()", "stringToInt()"],
    //     answer: "parseInt()"
    // },
    // {
    //     question: "17. Which array method removes the last element?",
    //     options: ["pop()", "push()", "shift()", "unshift()"],
    //     answer: "pop()"
    // },
    // {
    //     question: "18. Which event occurs when a button is clicked?",
    //     options: ["onload", "onchange", "onclick", "onhover"],
    //     answer: "onclick"
    // },
    // {
    //     question: "19. Which keyword is used to define a function?",
    //     options: ["func", "method", "function", "define"],
    //     answer: "function"
    // },
    // {
    //     question: "20. Which JavaScript object stores data in browser?",
    //     options: ["cookie", "localStorage", "session", "cache"],
    //     answer: "localStorage"
    // },
    // {
    //     question: "21. Which HTML tag is used for unordered list?",
    //     options: ["<ol>", "<ul>", "<li>", "<list>"],
    //     answer: "<ul>"
    // },
    // {
    //     question: "22. Which CSS property adds space inside an element?",
    //     options: ["margin", "padding", "border", "gap"],
    //     answer: "padding"
    // },
    // {
    //     question: "23. Which CSS property adds space outside an element?",
    //     options: ["margin", "padding", "spacing", "border"],
    //     answer: "margin"
    // },
    // {
    //     question: "24. Which JavaScript method selects element by ID?",
    //     options: ["getElement()", "querySelector()", "getElementById()", "getById()"],
    //     answer: "getElementById()"
    // },
    // {
    //     question: "25. Which HTML tag is used to include JavaScript?",
    //     options: ["<js>", "<javascript>", "<script>", "<code>"],
    //     answer: "<script>"
    // },
    // {
    //     question: "26. Which CSS property is used to hide an element?",
    //     options: ["display: none", "visibility: hide", "opacity: 0", "All"],
    //     answer: "display: none"
    // },
    // {
    //     question: "27. Which JavaScript keyword stops a loop?",
    //     options: ["exit", "stop", "break", "return"],
    //     answer: "break"
    // },
    // {
    //     question: "28. Which function is used to delay execution?",
    //     options: ["setTimeout()", "setInterval()", "delay()", "wait()"],
    //     answer: "setTimeout()"
    // },
    // {
    //     question: "29. Which CSS unit is relative to screen size?",
    //     options: ["px", "em", "rem", "vh"],
    //     answer: "vh"
    // },
    // {
    //     question: "30. Which HTML attribute is required for input field?",
    //     options: ["value", "placeholder", "name", "type"],
    //     answer: "type"
    // }
];
let index = 0;
//abb mujhe questions ke liye load bhi krna hogaa jise questions load honge 
function loadQuestion(){
    radio_A.checked = false;
    radio_B.checked = false;
    radio_C.checked = false;
    radio_D.checked = false;
    // console.log(score);
    const q = quizData[index];
    question.textContent = q.question;
    option1.textContent = q.options[0];
    option2.textContent = q.options[1];
    option3.textContent = q.options[2];
    option4.textContent = q.options[3];

    //abb me jab lst question pe au toh mujhe submit krnaa h
    if(index === quizData.length-1){
        next_btn.textContent = "Submit";
    }else{
        next_btn.textContent = "Next";
    }
}

function gotoNextQuestion(){
    clearInterval(timerSecond);
    CallculateResult();
    index++;
    if(index<quizData.length){
        // index++;
        loadQuestion();
        startimer();
    }else{
        localStorage.setItem("score", score);
        localStorage.setItem("total",quizData.length);
        window.location.href = "result.html";
        // alert("Quiz Finished " + score + "/" + quizData.length);
    }
}
//abb mujhe jab me pehle question pe huu usse mujhe right question ko check krna h mujhe aur usse 
//callcullate bhi krnah  mujhe usse 
let score = 0;
function CallculateResult() {
    const q = quizData[index];

    if(radio_A.checked && q.answer === q.options[0]){
        score++;
    }
    else if(radio_B.checked && q.answer === q.options[1]){
        score++;
    }
    else if(radio_C.checked && q.answer === q.options[2]){
        score++;
    }
    else if(radio_D.checked && q.answer === q.options[3]){
        score++;   
    }
    // console.log("current score ", score);
};







// next_qs.addEventListener("click",gotoNextQuestion);
next_btn.addEventListener("click", gotoNextQuestion);
loadQuestion();
startimer();
