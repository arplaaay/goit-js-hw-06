const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");

const makeItemImageMarkup = elem => {
  return `
  <li class="item">${elem}</li>`
}

const makeMarkup = ingredients.map(makeItemImageMarkup).join("");
listEl.insertAdjacentHTML("afterbegin", makeMarkup);



