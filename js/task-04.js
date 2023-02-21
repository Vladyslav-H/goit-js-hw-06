const counterValue = {
  value: 0,
  decrement() {
    this.value--;
  },
  increment() {
    this.value++;
  },
};

const btnDecrementEl = document.querySelector('[data-action="decrement"]');
const btnIncrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

btnDecrementEl.addEventListener("click", function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});
btnIncrementEl.addEventListener("click", function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
