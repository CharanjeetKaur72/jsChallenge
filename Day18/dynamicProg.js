// Activity 5: Dynamic Programming

// Task 9: Write a function to solve the fibonnaci sequence using the dynamic programming. Log the fibonnaci numbers.

function fibonnaci(n) {

  if (n <= 0 ) return 0;

  let fib = []; //array to store Fibonacci numbers
  let i;

  fib.push(0); // fibonacci number at position 0
  fib.push(1); // fibonacci number at position 1

  for (i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log("*** Activity 5: Dynamic Programming ***");

let n = 9;
console.log(`Fibonnaci sequence for number ${n}: ${fibonnaci(n)}`);

// Task 10: Write a function to solve the knapsack roblem using dynamic programming. Log the maximum value that can be obtained.

