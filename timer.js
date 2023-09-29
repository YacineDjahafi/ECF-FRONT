// CREER TIMER
const minutesTimer = document.querySelector('.minutes');
const secondesTimer = document.querySelector(".secondes");
secondesTimer.innerText = sec;
minutesTimer.innerText = mn;


function timer(){
    sec--
}

setInterval(timerSec, 1000)
if(secondesTimer = 0){
    mn--;
    sec = 60;
}