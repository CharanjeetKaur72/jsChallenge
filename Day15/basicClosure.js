// Activity 1 : Understanding Closures

console.log("*** Activity 1 : Understanding Closures ***");
// Task 1: Wite a function that returns another function, where the inner function access a variable from the outer function's scope. Call the inner function and log the result.

function outer() {
  let userName = "Charanjeet";

  // the lexical scope of inner function is returned along with outer function's lexical scope
  return function inner() {
    return (userName += " Kaur");
  };
}

console.log("Calling the inner function...");
const func = outer(); // this will return inner() function
console.log(func());
