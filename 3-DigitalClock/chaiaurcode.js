console.log("Welcome to Dev's Dev tools");
function updateClock(){
    let date = new Date();
    let clock = document.getElementById("clock");
    clock.innerHTML = date.toLocaleTimeString();
}
updateClock();
setInterval(updateClock,1000);