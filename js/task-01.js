const listEl = document.querySelector("#categories");
const itemsEl = listEl.querySelectorAll(".item");

console.log(`Number of categories: ${listEl.children.length}`);
console.log("\n");

itemsEl.forEach(elem => {
    const itemHeaderEl = elem.querySelector("h2");
    console.log(`Category: ${itemHeaderEl.textContent}`);

    const itemCategoriesEl = elem.querySelectorAll("li");
    console.log(`Elements: ${itemCategoriesEl.length}`);
    console.log("\n");
})