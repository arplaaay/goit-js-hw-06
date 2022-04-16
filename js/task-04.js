const buttonDecrementEl = document.querySelector("button[data-action=decrement]");
const buttonIncrementEl = document.querySelector("button[data-action=increment]");
const spanEl = document.querySelector("#value");

let counterValue = 0;

const decrementEvent = (event) => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
}

const incrementEvent = (event) => {
    counterValue += 1;
    spanEl.textContent = counterValue;
}

buttonDecrementEl.addEventListener("click", decrementEvent);
buttonIncrementEl.addEventListener("click", incrementEvent);