function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const spanEl = document.querySelector("span.color");
const buttonEl = document.querySelector("button");

buttonEl.addEventListener("click", onChangeBodyColor);

function onChangeBodyColor(event) {
  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  spanEl.textContent = `hex ${getRandomHexColor()}, ${
    bodyEl.style.backgroundColor
  }`;
}
