// Activity 2: Recursion eith Arrays

// Task 3:  Write a recursive function to find the sum of all elements in a an array. Log th result for a few test cases.
function getSum(arr) {
  if (arr.length == 0) return 0;
  if (arr.length == 1) return arr[0];

  return arr[0] + getSum(arr.slice(1));
}

console.log("***  Activity 2: Recursion eith Arrays ***");

console.log("Sum of elements in the array [2,14,5]:", getSum([2, 14, 5]));
console.log("Sum of elements in the array []:", getSum([]));
console.log("Sum of elements in the array [5]:", getSum([5]));
console.log(
  "Sum of elements in the array [5, 89, 10, 45]:",
  getSum([5, 89, 10, 45])
);

// Task 4: Write a recursive function to find the maximum element in an array. Log th result for a few test cases.
function findMax(arr) {
  if (arr.length == 0) {
    console.log("Empty array!");
    return;
  }

  if (arr.length == 1) return arr[0];
  return Math.max(arr[0], findMax(arr.slice(1)));
}

console.log("Max element in the array [2,14,5]:", findMax([2, 14, 5]));
console.log("Max element in the array []:", findMax([]));
console.log("Max element in the array [5]:", findMax([5]));
console.log(
  "Max element in the array [5, 89, 10, 45]:",
  findMax([5, 89, 10, 45])
);
console.log(
  "Max element in the array [95, 89, 1050, 545, 1051]:",
  findMax([95, 89, 1050, 545, 1051])
);
