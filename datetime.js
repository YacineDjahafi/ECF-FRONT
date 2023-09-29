let date = new Date();
let heure = date.getHours();
let minute = date.getMinutes();


// setInterval(daytime(), 10000)
// function daytime(){
let timeH = document.querySelector(".heure");
timeH.innerText = heure
let timeM = document.querySelector(".minute");
timeM.innerText = minute
// }