const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");
const liElementsArray = ingredients.map((element, index) => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredients[index];
  return liEl;
});
ingredientsListEl.append(...liElementsArray);
