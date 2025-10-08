console.log("Welcome to Dev's Dev tools");
let previousGuessArray = [];
let randomNumber = Math.floor(Math.random() * 100 + 1);
let guesses = document.getElementById("guesses");
let guessesRemaining = document.getElementById("lastResult");
let guessField = document.getElementById("guessField");
let guessSubmit = document.getElementById("guessSubmit");
let form = document.getElementById('form0');
let resultParas = document.getElementById('resultParas');
let result = document.getElementById('res');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const resultReal = document.createElement('p');
    result.style.fontSize = "18px";
    result.textContent = "";
    result.appendChild(resultReal);
    if (guessField.value == randomNumber) {
        result.textContent = "Hurray! your guess was perfect";
        guessField.disabled = true;
    }
    if (guessField.value && guessField.value != randomNumber) {
        previousGuessArray.push(guessField.value);
        guesses.textContent = previousGuessArray.join(",");
        result.textContent = "Try Again!";
        guessesRemaining.innerHTML = 10 - previousGuessArray.length;
        if (previousGuessArray.length == 10 || previousGuessArray.length > 10) {
            guessField.disabled = true;
            result.textContent = "You have reached maximum permissable trials !";
        }
        if (guessField.value > randomNumber) {
            result.textContent = "Too High!";
        } if (guessField.value < randomNumber) {
            result.textContent = "Too Low!";
        }
    }
});