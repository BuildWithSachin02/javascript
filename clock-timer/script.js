const hr = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

/*
1.Every hour = 30° => circle clock hoti h toh usme hum bolenge 360 degree circle => 360/12?=30,  why 12 qki analogs clocks me count 12 hota h 
2.Every minute = 0.5°, => every hour hme pta chla ki 12,1,2,3 me hour hand wla sui 30 degree pe rotate krega toh hmne abb pta krna hoga ki mitues me kitne rotattion krega 
toh hours me kitne mintues hote h 60 min hote ok and hmre pss 30 degree jise hme mila per hour pe boh 30 degree rotate krega yeh toh 
hmra formulaa kuch esa bnta h ki per min = 30/min = 30/60=0.5 mila jise hum bo lskte h 1/2 ok
*/
function displaytime(){
    let date = new Date();// hmne ek date naam ka variable bnya h aur iske under hmne = new Date(object bnya h)jiske under hme built in function milte jise second,mintues aur day,sare milte h time aur year related

    // abb hum lenge hours aur mintues aur second
    let hour = date.getHours();
    let mins = date.getMinutes();
    let ss = date.getSeconds();

    // abb isme formulaa denge kese clock abb per min aur per second kese rottation kregaa 
    // 360/12 = 30degree
    //abb per min pe kitna rotation pe ??? => 30/60=>0.5
    // min ke liuye => 360/60min => 6 degree pe rotation kregaa yeh 
    // second pe => 360/60second =>6 degree per second pe yeh 6 degree pe roration krega 
    //1.abb mujhe hour ka formulaa dena  =>  hr = hour*30 + mintues/2 abb yeh socho jab clock run hota h toh jab mintues wli sui chli gi toh hour wli bhi sui bhi thodi moov hogi jo 5 degree pe moov hogi per mintues jo hmne pehle nikala thaa hmne 
    //2.abb hmne mintues kaa formulaa => min = 6/mintues
    //3. sec = 6/secondrottion
    
    let HourRotation = (hour*30)+(mins/2);
    let MintuesRotation = 6*mins;
    let SecondRotation = 6*ss;

    //abb hmne yeh formulaa dd diyaa abb hme isse me elementt lena h jo jiske hmne mintues aur hour aur second kaa sui chhiye hme mtlb ki hands lene 
    hr.style.transform = "rotate(" + HourRotation +"deg)";
    min.style.transform = "rotate("+ MintuesRotation +"deg)";
    sec.style.transform = "rotate("+ SecondRotation +"deg)";
}
setInterval(displaytime,1000);
// function displaytime(){
//     let date = new Date();

//     //abb hme hour aur min aur ss lena h 
//     let hh = date.getHours();
//     let mm = date.getMinutes();
//     let ss = date.getSeconds();
//     //for example 3:58 => 
//     let hrRotaion = (hh*30)+(mm/2);//30*3 + 58/2 = 90+29=119 itne degree pe yeh rotate krega 
//     let mRotation = 6*mm;
//     let sRotation = 6*ss;

//     hr.style.transform = `rotate(${hrRotaion}deg)`;
//     min.style.transform = `rotate(${mRotation}deg)`;
//     sec.style.transform = `rotate(${sRotation}deg)`;
// }
// setInterval(displaytime,1000);
