const amount = document.getElementById("amount");
const tip_Amt = document.getElementById("tip");
const Cal_btn = document.getElementById("cal-btn");
const total_Amt = document.getElementById("total-amt");

//maan lo mera me restrorant gyaa mera bill total 500 hua h but mujhe tip bhi pay krni h 
//toh me 500+50 dena chhta huu mtlb ki 50 tip h ke add h bill ke sath 

function CallculateAmt(){
    let amt = Number(amount.value);//issme hnne srting ko number me convert kiya h 
    let tip = Number(tip_Amt.value);

    let tipValue = (amt * tip)/100; // pehle hnmne tip value ko count kiya 
    let BillAmt = tipValue + amt;
    total_Amt.textContent = BillAmt;
};
Cal_btn.addEventListener("click",CallculateAmt);