// Activity 1: Creating an exporting modules

// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.

export const addTwoNumbers = (num1, num2) => num1 + num2;

// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
export const person = {
  firstName: "Charanjeet",
  lastName: "Kaur",
  employed: false,
  companyName: "N/A",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
