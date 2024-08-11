// Activity 2: Searching Algorithms

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

function linearSearch(arr, targetVal) {
  for (let curIndex in arr) {
    if (arr[curIndex] === targetVal) {
      return curIndex;
    }
  }
  return -1;
}

console.log("*** Activity 2: Searching Algorithms *** ");
let lArr = [45, 67, 23, 5, 43, 3];
let targetVal = 5;

console.log(`Linear Search-> find index of ${targetVal} in [${lArr}]:`);
console.log(linearSearch(lArr, targetVal));

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

// Program to implement iterative Binary Search

function binarySearch(arr, targetVal) {
  let low = 0;
  let high = arr.length - 1;
  let mid;

  // iterate through the array to find index of target value
  while (high >= low) {
    mid = low + Math.floor((high - low) / 2);

    // target value found in the middle
    if (targetVal == arr[mid]) {
      return mid;
    }

    // If target value is smaller than mid, then
    // go through the left subarray otherwise go through the right subarray
    if (targetVal < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  // target value not found in the array
  return -1;
}

let arrB = [3, 7, 14, 19, 60, 63, 71, 99];
let bTarget = 63;
result = binarySearch(arrB, bTarget);

if (!result) {
  console.log("Target value not found!");
} else {
  console.log(`Binary Search-> find index of ${bTarget} in [${arrB}]:`);
  console.log(result);
}
