console.log("Welcome to Dev's Dev tools");
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
document.addEventListener("DOMContentLoaded",colorChange);
function colorChange(){
  buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
      body.style.backgroundColor = e.target.id;
    })
  })
}
