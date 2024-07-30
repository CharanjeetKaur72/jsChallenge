// Activity 1 : Understanding Closures

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function myCounter() {
  let counter = 0;

  function incrementCounter() {
    counter++;
  }

  function getCounter() {
    return counter;
  }

  console.log("Private Counter :");
  return { incrementCounter, getCounter };
}

const count = myCounter();
console.log(`Counter Value: ${count.getCounter()}`);

count.incrementCounter();
count.incrementCounter();
count.incrementCounter();

console.log(`Counter Value now: ${count.getCounter()}`);
