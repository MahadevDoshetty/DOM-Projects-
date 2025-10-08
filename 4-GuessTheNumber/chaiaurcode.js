console.log("Welcome to Dev's Dev tools");
let randomNumber = Math.floor(Math.random() * 100 + 1);
let guesses = document.getElementById("guesses");
let guessesRemaining = document.getElementById("lastResult");
let guessField = document.getElementById("guessField");
let guessSubmit = document.getElementById("guessSubmit");
let form = document.getElementById('form0');
let resultParas = document.getElementById('resultParas');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = document.createElement('p');
    result.textContent = "";
    resultParas.appendChild(result);

    // if (guessField.value != randomNumber && guessField.value) {
    //     guessSubmit.addEventListener('click', () => {
    //     })
    // } 
    if (guessField.value == randomNumber) {
        result.textContent = "Yes, correct guess!";
    }
});
console.log(randomNumber);