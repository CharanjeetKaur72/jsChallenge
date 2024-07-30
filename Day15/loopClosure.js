// Activity 3: Closures in Loops

// task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

console.log("*** Activity 3: Closures in Loops ***");

function arrayOfFunctions(arrVals) {
  let arrFunc = [];

  for (let i = 0; i < arrVals; i++) {
    arrFunc[i] = function () {
      console.log(`MyIndex: ${i}`);
    };
  }

  return arrFunc;
}

console.log(" Array of functions: ");
const arr = arrayOfFunctions(15);
arr.forEach((fn) => fn());
