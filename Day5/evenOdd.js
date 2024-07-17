// **** Activity 1 : Function Declaration ***********

// Activity 1: Task 1: Check if a number is even or odd

function findEvenOdd(num = 0) {
  let result = "";
  num % 2 === 0 ? (result = "even") : (result = "odd");
  console.log(`The number ${num} is ${result}`);
}


