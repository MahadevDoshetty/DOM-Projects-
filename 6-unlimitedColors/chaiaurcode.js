console.log("Welcome to Dev's Dev tools");
let timeoutFn;
let startButton = document.getElementById("start").addEventListener('click', () => {
    timeoutFn = setInterval(() => {
        let hexColorCode = "#" + (Math.floor(Math.random() * 100000 + 100000));
        document.body.style.backgroundColor = hexColorCode;
    }, 500);
});
let stopButton = document.getElementById('stop').addEventListener('click', () => {
    clearInterval(timeoutFn);
});