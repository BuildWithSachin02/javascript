const user = document.getElementById("user");
const email = document.getElementById("email");
const mob = document.getElementById("mob");
const pass = document.getElementById("pass");
const submit = document.getElementById("submit");  // Fixed method name

const submitform = ()=>{
    const uservalue = user.value.toLowerCase(); //tolowercase yeh username me alphbets ko small me lega 
    const emailvalue = email.value;
    const passvalue = pass.value;
    const mobvalue = mob.value;
    let isvalidate = true;
    let errormessage = "";

    // all box have to fill 
    // username hme text me lowercase me dlawana hoga 
    // mail id me @.com hona chhiye 
    // password me hme ek toh uppercase aur lowercase,ek toh number123 hona chhiye, aur ek specialcharcter hona chhiaye 
    // yeh sab menadotary h 


    //1.all fields are required
    if(
        uservalue === ""||
        emailvalue ===""||
        passvalue === ""||
        mobvalue === ""
    ){
        isvalidate = false;
        errormessage = "All fields are required!!";
    }else{
        //2.email ke liye mujhe @ manadatory h 
        isvalidate = emailvalue.includes("@");
        if(isvalidate){
            // 3. password specialchar,lower,upper,numbers
            let upper = false;
            let lower = false;
            let digit = false;
            let special = false;

            const specialChars = [
                "!", "@", "#", "$", "%", "^", "&", "*",
                "(", ")", "-", "_", "=", "+", "{", "}",
                "[", "]", ":", ";", "'", "\"", "<", ">",
                ",", ".", "?", "/", "\\", "|", "~", "`"
            ];
            isvalidate = false;
            for(let i=0; i<passvalue.length; i++){
               let ch = passvalue[i];
               if(ch>="A" && ch<="Z"){
                upper = true;
               }
               else if(ch>="a" && ch<="z"){
                lower =true;
               }
               else if(ch>="0" && ch<="9"){
                digit = true;
               }
               else if(specialChars.includes(ch)){
                special = true;
               }
               isvalidate = true;
            }
            if(!(upper && lower && digit && special && passvalue.length>=8)){ // ! iss use kerne kaa mtlb yeh ki 5 consdion true hogi tab hii yeh usse true smjegaa inn mese koi ek bhi false hota usse yeh weak pass bolehgaa tab if wla condions true hoga 
                isvalidate = false; // agr upper se sari contions true h toh usse true hogaa uuse jne dega 
                errormessage = "weak password";
            }
            else{
                //4. mobile check numbers only numbers will be accept 
                let isvalidmob = true;
                if(mobvalue.length !== 10){
                    isvalidmob = false;
                }
                for(let i=0; i<mobvalue.length; i++){
                    // yeh check kregaa ki input box me numbers ke alwa koi alphabets yaa koi specialche toh nhi agr h yeh loop break ho jayegaa
                    if(mobvalue[i]<"0" || mobvalue[i]>"9"){
                        isvalidmob = false; // loop break ka mtb yeh ki false agr sahi rha toh next step pe jump hoga
                        break;
                    }
                }
                if(!isvalidmob){
                    isvalidate = false;
                    errormessage = "Mobile number must be 10-digits!!";
                }
            }
            

            
        }else{
            errormessage = "invalid email address!!";
            
        }
    }

    if(isvalidate){
        alert("successfull!");
    }else{
        alert(errormessage);
    }
}
submit.addEventListener("click", submitform); 