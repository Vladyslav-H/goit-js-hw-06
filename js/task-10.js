function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divBoxesEl = document.querySelector('#boxes');
const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
console.log(divBoxesEl.attributes);

buttonCreateEl.addEventListener('click', createBoxes);

function divSizesCounter(amount) {
let value = 30;
  for (let i = 0; i <= amount; i ++){
  
  value += 10;}
}


console.log(divSizesCounter(5));
function createBoxes(amount) {
  const counter = '10px';
  
  for (let i = 1; i <= amount; i++){
    const div = document.createElement('div');
    div.style.width = `${counter} + 5px`;
    div.style.height =  `${divSizesCounter()}`;
div.style.backgroundColor = `${getRandomHexColor()}`
    
    console.log(div);
  }
   
  divBoxesEl
}
console.log(createBoxes(5));