// Activity 1: Basic Recursion

// Task 1: Write a recursive function to calculate the factorial of a number. Log th result for a few test cases.

function factorial(num) {
  if (num < 0) return "Only positive number is allowed.";

  if (num === 1 || num === 0) {
    return 1;
  }

  return num * factorial(num - 1);
}

console.log("*** Activity 1: Basic Recursion ***");
console.log("Factorial of 4 : ", factorial(4));
console.log("Factorial of 6 : ", factorial(6));
console.log("Factorial of 8 : ", factorial(8));
console.log("Factorial of 9 : ", factorial(9));

// Task 2: Write a recursive function to calculate the nth fibonacci number. Log th result for a few test cases.

function fibonacci(nthNum) {
  if (nthNum <= 1) return nthNum;
  return fibonacci(nthNum - 1) + fibonacci(nthNum - 2);
}

console.log("Fibonacci - find 2nd number:", fibonacci(1));
console.log("Fibonacci - find 4th number:", fibonacci(4));
console.log("Fibonacci - find 10th number:", fibonacci(10));
console.log("Fibonacci - find 15th number:", fibonacci(15));
