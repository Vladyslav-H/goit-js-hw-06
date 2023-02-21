const sizeControlerEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
textEl.style.fontSize = `${sizeControlerEl.value}px`;
sizeControlerEl.addEventListener("input", onFontSizeChange);

function onFontSizeChange(event) {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
}
