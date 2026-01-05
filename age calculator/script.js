const birth = document.getElementById("birthday ");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", function(){
    const birthdayValue = birth.value;
    if(birthdayValue === ""){
        result.textContent = "Please enter your birthdate!";
        return;
    }
    const today = new Date();
    const birthdate = new Date(birthdayValue);
    let age = today.getFullYear() - birthdate.getFullYear();
    result.textContent = "Your age is " + age + " year old";

});
