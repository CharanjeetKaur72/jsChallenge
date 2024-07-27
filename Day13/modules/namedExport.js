// Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

function getProduct(num1, num2) {
  return num1 * num2;
}

function getDivision(num1, num2) {
  return num1 / num2;
}

function isEven(num1) {
  return num1 % 2 === 0 ? true : false;
}

export { getProduct, getDivision, isEven };
