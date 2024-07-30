// Activity 5 :  Memorization

// Task 7: Write a function that memorizes the result of another function. Use a closure to store the result of previous computation

function memorize() {
  let arrSquares = []; // array to store results

  // save result in array for memorization
  return function savePreviousResult(num) {
    let result = getSquare(num); // find square of the num parameter

    arrSquares.push({ Number: num, Result: result });
    console.log("Previous Computation results:");
    arrSquares.forEach((x) => {
      console.log(`${x.Number}: ${x.Result}`);
    });
  };
}

// function to calculate square of a number
function getSquare(num) {
  return num ** 2;
}

console.log("*** Activity 5 :  Memorization ***");
console.log("Calculating squares...");
const memo = memorize();

console.log(memo(4));
console.log(memo(10));
console.log(memo(3));
console.log(memo(12));
console.log(memo(25));

// Task 8: Create a memorize version of a function that calculates factorial of a number.

function memorizeFactorial() {
  const arrFactorial = [];

  return function factorial(num) {
    let result = getFactorial(num);
    if (result) {
      arrFactorial.push({ Number: num, Factorial: result });
      console.log("Stored Values -");
      arrFactorial.forEach((x) => console.log(x));
    }
  };
}

function getFactorial(num) {
  let fact = 1;

  if (num < 0) {
    console.log("Number should be positive!");
    fact = -1;
  } else {
    for (let i = num; i > 1; i--) {
      fact *= i;
    }
  }
  return fact;
}

console.log("Factorial of a number:");
const calcFactorial = memorizeFactorial();
calcFactorial(6);
console.log("******************");
calcFactorial(3);
console.log("******************");
calcFactorial(5);
console.log("******************");
calcFactorial(9);
