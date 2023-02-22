function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
 
const bodyEl = document.body;
const spanEl = document.querySelector("span.color");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", onChangeBodyColor);

function onChangeBodyColor(event) {
 
  spanEl.textContent =  bodyEl.style.backgroundColor = getRandomHexColor();
  
}
