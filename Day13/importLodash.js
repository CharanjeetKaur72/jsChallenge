// Activity 4: Using third party modules

// Task 6: Install a third party module (e.g. lodash) using npm. Import and use a function from this module in a script

// Requiring the lodash library
// let lodashLib = require("lodash");
import lodashLib from "lodash";

// Original array to be concatenated
let array = [1, 2, 3];

// Values to be added to original array
let values = [0, 7, 5, "and", "because"];

console.log("lodash library import -");
let newArray = lodashLib.concat(array, values);
console.log("Before concat: " + array);

// Printing newArray
console.log("After concat: " + newArray);
