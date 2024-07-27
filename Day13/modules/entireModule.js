// Activity 3: Importing Entire module

// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.

const numHere = 18;
const arrHere = [66, 33, 55, "test"];
const strHere = "My name Charanjeet Kaur";
const courseHere = {
  name: "Javascript",
  durationInDays: 30,
  channelName: "Chai aur Code",
};

const greetings = (name) => {
  return `Hello! ${name}`;
};

export * from "./entireModule.js";
