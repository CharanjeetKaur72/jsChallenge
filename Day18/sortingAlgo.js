// Activity 1: Sorting Algorithms

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array

// Iterate through the array repeatedly, comparing adjacent pairs of elements and swapping them if they are in the wrong order. Repeat until the array is fully sorted.
function bubbleSort(arr) {
  const arrLength = arr.length;
  let swapped;

  for (let i = 0; i < arrLength - 1; i++) {
    swapped = false;
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let tempVal = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempVal;
        swapped = true;
      }
    }

    // in case there is no swapping in the inner loop
    if (!swapped) {
      break;
    }
  }

  return arr;
}

console.log("*** Activity 1: Sorting Algorithms ***");
console.log("BUBBLE SORT: [66,45, 90, 22, 50, 80, 1, 20, 80]:");
console.log(bubbleSort([66, 45, 90, 22, 50, 80, 1, 20, 80]));

console.log("BUBBLE SORT: [20, 50, 56, 77, 103]:");
console.log(bubbleSort([20, 50, 56, 77, 103]));

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array

//Find the minimum element in the unsorted portion of the array and swap it with the first unsorted element. Repeat until the array is fully sorted.
function selectionSort(arr) {
  const arrLength = arr.length;
  let minIndexOfUnsortedArr;

  for (let i = 0; i < arrLength - 1; i++) {
    minIndexOfUnsortedArr = i;

    for (let j = i + 1; j < arrLength; j++) {
      if (arr[j] < arr[minIndexOfUnsortedArr]) {
        minIndexOfUnsortedArr = j;
      }
    }
    // Swap arr[i] and arr[minIndexOfUnsortedArr]
    let temp = arr[minIndexOfUnsortedArr];
    arr[minIndexOfUnsortedArr] = arr[i];
    arr[i] = temp;
  }

  return arr;
}

// calling selectionSort() function
console.log("SELECTION SORT: [23, 60, 94, 11, 55, 15]:");
console.log(selectionSort([23, 60, 94, 11, 55, 15]));

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array

// QUICK SORT -> Divide and conquer algorithm

// Function to partition the array and return the partition index to implement quick sort
function partition(arr, low, high) {
  let pivot = arr[low]; // pick a pivot and place it at its correct place. It may be any element in the array.
  let i = low;
  let j = high;

  // smmaller elements go on the left and larger on the right of pivot element.
  while (i < j) {
    // keep on incrementing i if element value is lesser than pivot.
    while (arr[i] <= pivot) {
      i++;
    }

    // keep on decrementing j, if element values is greater than the pivot.
    while (arr[j] > pivot) {
      j--;
    }

    // swap the values of arr[i] and arr[j] to keep lesser values at pivot's left and greater values at pivot's right
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  // swap pivot element with arr[j] as i and j has crossed. Pivot is placed at its correct position now
  let temp = pivot;
  arr[low] = arr[j];
  arr[j] = temp;
  return j; // returning partition index
}

// function to implement QuickSort
function quickSort(arr, low, high) {
  if (low < high) {
    // get partitioning index, arr[pIndex] is now at the right place
    let pIndex = partition(arr, low, high);

    // Separately sort elements before partition and after partition
    quickSort(arr, low, pIndex);
    quickSort(arr, pIndex + 1, high);
  }
}

// calling quickSort() function
let arrQ = [90, 40, 32, 12, 23, 67, 2];
let arrQLength = arrQ.length - 1;

console.log(`QUICK SORT [${arrQ}]:`);
quickSort(arrQ, 0, arrQLength);
console.log(`Sorted Array: ${arrQ}`);
