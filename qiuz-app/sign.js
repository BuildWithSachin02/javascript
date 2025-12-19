const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const Button_Sign = document.getElementById("sign-button");

// dumy user jise isi id se voh login hoga ;

const CurrentUser = {
    email: "sachin@gmail.com",
    password: "Sachin@123",
};

function UserSign(){
    const EmailValue = emailInput.value; 
    const PassValue = passwordInput.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if(emailPattern.test(EmailValue) && strongPasswordRegex.test(PassValue)){
        if(EmailValue === CurrentUser.email && PassValue === CurrentUser.password){
            Button_Sign.href = "quiz.html";
            alert("Login Successfully !");
            window.location.href = "quiz.html";
        }else{
            alert("invalid Email or Passwords !");
        }
    }else{
        alert("invalid Credential !");
    }

};
Button_Sign.addEventListener("click",UserSign);