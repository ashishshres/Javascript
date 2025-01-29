// example 1
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    // console.log(this); // button
    let paragraph = document.getElementById("myParagraph");
    // console.log(paragraph);
    paragraph.textContent = "The paragraph is changed";
  });

// document.getElementById("changeTextButton").addEventListener("click", () => {
//   console.log(this); // window object
// });

// example 2
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    // console.log(citiesList.firstElementChild);
    // console.log(citiesList.firstElementChild.classList);
    citiesList.firstElementChild.classList.add("highlight");
  });

// example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Expresso";
  coffeeType.style.backgroundColor = "Brown";
});

// example 4
document.getElementById("addNewItem").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  const shoppingList = document.getElementById("shoppingList");
  shoppingList.appendChild(newItem);
});

// example 5
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    const taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });
