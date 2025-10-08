console.log("Welcome to Dev's Dev tools");
const form = document.getElementsByTagName('form')[0];
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const calculate = document.getElementById("calculate");
const result = document.getElementById("results");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const resultValue = document.createElement('p');
    resultValue.style.fontSize = "18px"
    result.textContent = "";
    result.appendChild(resultValue);
    if (height.value.trim() && weight.value.trim()) {
            let bmi = (weight.value / (height.value * height.value)).toFixed(3);
            resultValue.textContent = `Your BMI is ${bmi}`;
        if (resultValue.textContent < 18.6) {
            resultValue.style.color = "red"
        } else if (resultValue.textContent > 24.9) {
            resultValue.style.color = "red"
        } else if (resultValue.textContent > 18.6 || resultValue.textContent < 24.9) {
            resultValue.style.color = "green"
        }
    } else {
        result.textContent = "Incorrect Format";
    }
});
// BMI = weight (kg) / height (m)2
// BMI Categories:
// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
