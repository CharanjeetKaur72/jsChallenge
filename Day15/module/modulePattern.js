// Activity 4: Module Pattern

// Task 6: use closure to create simple module for managing a collection of items. Implement methods to add, remove and list items

export function itemsCollection() {
  // items collection array
  let items = [];

  // add new item to collection
  function addItem(name) {
    // chack for already existence of item in the list
    if (items.includes(name)) {
      console.log(`The item  ${name} already exists!`);
    } else {
      items.push(name);
    }
  }

  // remove items from the collection
  function removeItem(name) {
    let itemIndex = items.indexOf(name);
    if (itemIndex == -1) {
      console.log(`Cannot remove item. The item "${name}" doesn't exists`);
    } else {
      items.splice(itemIndex, 1);
    }
  }

  // showmlist of all items
  function listItems() {
    console.log("*** Items List ***");
    items.forEach((item, index) => console.log(item));
    console.log("**************");
  }

  return { addItem, removeItem, listItems };
}

// console.log("*** Activity 4: Module Pattern ***");
// console.log("Module to manage collection of items :");
// const myList = itemsCollection();

// myList.listItems();
// myList.addItem("Thick Register");
// myList.addItem("Note Book");
// myList.addItem("Ball Pen");
// myList.addItem("Gel Pen");

// myList.listItems();
// myList.removeItem("Thick Register");

// myList.addItem("Ivory Sheet");
// myList.addItem("Handmade Sheet");
// myList.listItems();
// myList.removeItem("Ball Pen");
// myList.listItems();
