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
