


function digitaclock(){
    const days = document.getElementById("day");
    const hr = document.getElementById("hours");
    const min = document.getElementById("minutes");
    const sec = document.getElementById("seconds");

    let now = new Date();
    //AB HUM EK VALIRABLE store krke usse get krnege hum
    let day = ["SUN","MON","TUE","WED","THUR","FRI","SAT"];
    let Dayname = day[now.getDay()];
    let hrs = now.getHours();
    let mins = now.getMinutes();
    let secs = now.getSeconds();

    // if ternary oprator
    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins  = mins < 10 ? "0" + mins : mins;
    secs  = secs < 10 ? "0" + secs : secs;

    days.innerText = Dayname;
    hr.innerText = hrs;
    min.innerText = mins;
    sec.innerText = secs;
}
setInterval(digitaclock,1000);
digitaclock();