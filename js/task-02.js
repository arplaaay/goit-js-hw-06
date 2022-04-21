const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");
const itemsArr = [];

ingredients.map(elem => {
  const createItem = document.createElement("li");
  createItem.classList.add("item");
  createItem.textContent = elem;
  itemsArr.push(createItem);
});

listEl.append(...itemsArr);