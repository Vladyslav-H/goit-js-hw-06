const itemEl = document.querySelectorAll("li.item");

const counetrOfCategories = (categoriesArray) =>
  console.log(`Number of categories: ${categoriesArray.length}`);
counetrOfCategories(itemEl);

const showedTitleTextAndCountedQuantityElements = (array) =>
  array.forEach((element) =>
    console.log(`Category: ${element.firstElementChild.textContent}\n
Elements: ${element.lastElementChild.children.length}`)
  );
showedTitleTextAndCountedQuantityElements(itemEl);
