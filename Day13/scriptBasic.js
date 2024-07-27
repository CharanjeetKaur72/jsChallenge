import { addTwoNumbers, person } from "./modules/basicModule.js";

// add two numbers

console.log("Basic Module -");
console.log("Adding two numbers : 56 and 44. Result:");
console.log(addTwoNumbers(56, 44));

// show person object details
console.log("Person object details: ");
console.log(`First Name: ${person.firstName}`);
console.log(`Last Name: ${person.lastName}`);
console.log(`Full Name: ${person.fullName()}`);
console.log(`Employed: ${person.employed}`);
console.log(`Company Name: ${person.companyName}`);

