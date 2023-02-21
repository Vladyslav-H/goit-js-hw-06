const sizeControlerEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

sizeControlerEl.addEventListener("input", onFontSizeChange);

function onFontSizeChange(event) {
  console.log((textEl.style.fontSize = `${event.currentTarget.value}px`));
}
