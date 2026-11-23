let shoppingList = [];

const itemInput = document.getElementById("itemInput");
const addItemBtn = document.getElementById("addItemBtn");
const removeLastItemBtn = document.getElementById("removeLastItemBtn");
const shoppingListDisplay = document.getElementById("shoppingListDisplay");

function addItem(item) {
  const normalizedItem = item.trim();
  if (!normalizedItem) return;

  const exists = shoppingList.some(
    (existing) => existing.toLowerCase() === normalizedItem.toLowerCase()
  );

  if (!exists) {
    shoppingList.push(normalizedItem);
  }
}

function removeLastItem() {
  shoppingList.pop();
}

function displayList() {
  console.log("Shopping List:", shoppingList);
}

function filterItems(searchTerm) {
  const term = searchTerm.toLowerCase();
  return shoppingList.filter((item) => item.toLowerCase().includes(term));
}

function renderList() {
  shoppingListDisplay.innerHTML = "";

  for (let i = 0; i < shoppingList.length; i++) {
    const li = document.createElement("li");
    li.textContent = shoppingList[i];
    shoppingListDisplay.appendChild(li);
  }

  displayList();
}

addItemBtn.addEventListener("click", function () {
  addItem(itemInput.value);
  renderList();
  itemInput.value = "";
});

removeLastItemBtn.addEventListener("click", function () {
  removeLastItem();
  renderList();
});