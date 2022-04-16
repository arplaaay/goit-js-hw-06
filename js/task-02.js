const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

ingredients.forEach(elem => {
  const createItem = document.createElement("li");
  createItem.classList.add("item");
  createItem.textContent = elem;
  listEl.append(createItem);
})
