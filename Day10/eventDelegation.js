// Activity 5: Event delegation
// Task 9: Add a click event listener to a list that logs the text content of the current list item using event delegation
const myList = document.getElementById("plist");

myList.addEventListener("click", (e) => {
  console.log(`current item: ${e.target.innerHTML}`);
});

// Task 10: Add an event listener to parent element that listens for events from dynamically added child element.

const parentList = document.getElementById("parentlist");
const addButton = document.getElementById("addToList");

addButton.addEventListener("click", (e) => {
  const newListItem = document.createElement("LI");
  newListItem.innerHTML = "List Item " + Number(parentlist.children.length + 1);
  parentlist.appendChild(newListItem);
});

parentlist.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.innerHTML);
  }
});
