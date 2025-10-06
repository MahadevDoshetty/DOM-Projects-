const form = document.getElementsByTagName('form')[0];
console.log("Welcome to Dev's Dev tools");
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calculate = document.getElementById("calculate");
const result = document.getElementById("results");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInput();
});
function validateInput() {
    let answer;
    if (height.value.trim() && weight.value.trim()) {
        function calculateBMI() {
            answer = weight.value / (height.value * height.value);
            resultValue.textContent = answer;
        }
        const resultValue = document.createElement('p');
        resultValue.textContent = "Correct format";
        resultValue.style.fontSize = "18px"
        result.appendChild(resultValue);
        calculateBMI();
    }
    else {
        const resultValue = document.createElement('p');
        resultValue.style.fontSize = "18px"
        resultValue.textContent = 'Incorrect Format';
        result.appendChild(resultValue);
    }
}
