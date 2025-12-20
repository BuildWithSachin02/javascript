const email = document.getElementById("email");
const password = document.getElementById("password");
const login_btn = document.getElementById("login-btn");
const togglePassword = document.getElementById("togglePassword");


//abb mene ek fix dummy user bna diya h toh yeh login krke hum kr skte h isse use krneke
const currentUser = {
    email:"admin@gmail.com",
    password:"Admin@123",
}
//abb mujhe ek function bnaa h jiiseme user ne jo input kiya kyy boh sahi h ki nhi usse check krna h mujhe 
function UserLogin(){
    emailValue = email.value;
    passValue = password.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!emailRegex.test(emailValue)){
        alert("Invalid Email address !");
        return;
    }
    if(!passwordRegex.test(passValue)){
        alert("Invalid Password !");
        return;
    }

    if(
       emailRegex.test(emailValue) && passwordRegex.test(passValue) 
    ){
        if(
            emailValue === currentUser.email && passValue === currentUser.password
        ){
            window.location.href = "quiz.html";
        }
    }else{
        alert("invalid crendial !");
    }
};
togglePassword.addEventListener("click", function () {

    if(password.type === "password"){
        password.type = "text";
        togglePassword.textContent = "🤫"
    }else{
        password.type = "password";
        togglePassword.textContent = "👁";
    }
});
login_btn.addEventListener("click", UserLogin);

