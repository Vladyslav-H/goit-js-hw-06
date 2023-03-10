function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const divBoxesEl = document.querySelector("#boxes");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const inputEl = document.querySelector("input");

buttonDestroyEl.addEventListener("click", () => (divBoxesEl.innerHTML = ""));
buttonCreateEl.addEventListener("click", createBoxes);

function createBoxes() {
  const amount = inputEl.value;
  let string = "";
  let size = 30;

  for (let i = 1; i <= amount; i++) {
    string += `<div 
        style='background-color: ${getRandomHexColor()}; 
        width:${size}px; height:${size}px' ></div>`;
    size += 10;
    }
  divBoxesEl.insertAdjacentHTML("beforeend", string);
}
