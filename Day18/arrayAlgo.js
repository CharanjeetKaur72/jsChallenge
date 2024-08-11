// Activity 4: Array Algorithms

// Task 8: Write a function to rotate an array by k position. Log the rotated array.

function rotateArray(arr, k) {
  let n = arr.length;
  return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}

let myArr = [1, 2, 3, 4, 5];
let k = 3;
console.log("*** Activity 4: Array Algorithms ***");
console.log(
  `Rotated array : ${myArr} by ${k} position: ${rotateArray(myArr, k)}`
);

function rotateArrayOtherWay(arr, k) {
  let n = arr.length;
  k = n - k;

  reverseArray(arr, 0, k - 1); // reverse array from beginning to k-1
  reverseArray(arr, k, n - 1); // reverse array from k+1 position to n-1
  reverseArray(arr, 0, n - 1); // reverse entire array

  return arr;
}

function reverseArray(arr, start, end) {
  for (let i = start, j = end; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

console.log(
  `Rotated array - other way : ${myArr} by ${k} position: ${rotateArrayOtherWay(
    myArr,
    k
  )}`
);

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array

function mergeSortedArrays(arr1, arr2) {
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;
  let arrMerged = [];
  let i = 0,
    j = 0;

  while (i < arr1Length && j < arr2Length) {
    if (arr1[i] < arr2[j]) {
      arrMerged.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      arrMerged.push(arr2[j]);
      j++;
    } else {
      // elements is both arrays are equal
      arrMerged.push(arr1[i]);
      arrMerged.push(arr2[j]);
      i++;
      j++;
    }
  }

  // add remaining elements of arrays in the merged array
  while (i < arr1Length) {
    arrMerged.push(arr1[i]);
    i++;
  }

  while (j < arr2Length) {
    arrMerged.push(arr2[j]);
    j++;
  }

  return arrMerged;
}

let arr1 = [3, 4, 5, 9, 10, 19];
let arr2 = [1, 5, 20, 21];

console.log(`Merged Sorted Arrays:`);
console.log(`Array 1: ${arr1}`);
console.log(`Array 2: ${arr2}`);
console.log(mergeSortedArrays(arr1, arr2));
