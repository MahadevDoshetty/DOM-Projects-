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
    const resultValue = document.createElement('p');
    resultValue.style.fontSize = "18px"
    result.appendChild(resultValue);
    if (height.value.trim() && weight.value.trim()) {
        function calculateBMI() {
            resultValue.textContent = weight.value / (height.value * height.value);
        }
        calculateBMI();
        if (resultValue.textContent < 18.6) {
            resultValue.style.color = "red"
        } else if (resultValue.textContent > 24.9) {
            resultValue.style.color = "red"
        }else if(resultValue.textContent > 18.6 && resultValue.textContent < 24.9){
            resultValue.style.color = "green"
        }
    }
    else {
        resultValue.textContent = 'Incorrect Format';
    }
}