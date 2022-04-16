const inputEl = document.querySelector("input[type=number]");
const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy");
const divBoxesEl = document.querySelector("#boxes");

inputEl.addEventListener("input", onInputValue);
buttonCreateEl.addEventListener("click", onButtonCreate);
buttonDestroyEl.addEventListener("click", onButtonDestroy);

function onInputValue() {
  return inputEl.value;
}

function onButtonCreate() {
  const numberOfBoxes = onInputValue();
  const boxesArr = [];

  for (let i = 0, j = 30; i <= numberOfBoxes; i += 1, j += 10){
    let createBoxEl = document.createElement("div");
    createBoxEl.classList.add("div__box");
    createBoxEl.style.width = `${j}px`;
    createBoxEl.style.height = `${j}px`;
    createBoxEl.style.border = "1px solid black";
    createBoxEl.style.backgroundColor = getRandomHexColor();
    boxesArr.push(createBoxEl);
  }

  divBoxesEl.append(...boxesArr);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonDestroy() {
  while (divBoxesEl.firstChild) {
    divBoxesEl.removeChild(divBoxesEl.firstChild);
  }
};


