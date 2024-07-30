import { itemsCollection as myListMain } from "./modulePattern.js";

console.log("*** Activity 4: Module Pattern ***");
console.log("Module to manage collection of items :");

const myList = myListMain();

myList.listItems();
myList.addItem("Thick Register");
myList.addItem("Note Book");
myList.addItem("Ball Pen");
myList.addItem("Gel Pen");

myList.listItems();
myList.removeItem("Thick Register");

myList.addItem("Ivory Sheet");
myList.addItem("Handmade Sheet");
myList.listItems();
myList.removeItem("Ball Pen");
myList.listItems();
