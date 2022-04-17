const inputEl = document.getElementById("font-size-control");
const spanEl = document.getElementById("text");
const defaultInputVal = inputEl.value = 16;

inputEl.addEventListener("input", () => {
    spanEl.style.fontSize = `${inputEl.value}px`;
});