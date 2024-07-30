// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function generateId() {
  let id = 1;

  return function lastGeneratedId() {
    let idLastGenerated = id++;
    return idLastGenerated;
  };
}

console.log("*** Activity 2: Practical Closures  ***");
const myId = generateId();
console.log("Last generated ID : ", myId());
console.log("Last generated ID : ", myId());
console.log("Last generated ID : ", myId());
console.log("Last generated ID : ", myId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function greetUser(userName) {
  return function helloUser() {
    console.log(`Hello!, ${userName}`);
  };
}

console.log("Greet User: ");
let greet = greetUser("Charanjeet Kaur");
greet();

greet = greetUser("Rajani");
greet();
