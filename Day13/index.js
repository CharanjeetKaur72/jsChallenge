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

// *********************************************************************************
// Activity 4: Using third party modules
// Task 7: Install a third party module (e.g. axios) using npm. Import and use this module to make a network request in a script
// const axios = require('axios');
import axiosLib from "axios";

console.log("Making a GET request to JSONPlaceholder API...\n");
axiosLib
  .get("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    const user = response.data;
    console.log("User Information:");
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    console.log(`Address: ${user.address.city}, ${user.address.street}`);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
