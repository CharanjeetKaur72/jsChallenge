// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases

function binaryRecursiveSearch(arr, low, high, searchVal) {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);

    if (searchVal == arr[mid]) {
      return mid;
    }
    if (searchVal < arr[mid]) {
      // if target element is less than mid element of array, search in left side elements of the mid element
      return binaryRecursiveSearch(arr, low, mid - 1, searchVal);
    } else {
      // if target element is greater than mid element of array, serch in right side elements of the mid element
      return binaryRecursiveSearch(arr, mid + 1, high, searchVal);
    }
  } else {
    return -1;
  }
}

console.log("*** Activity 4: Recursive Search ***");
console.log(
  "Binary Recursive Search for element '78' in [9,11, 45, 67, 78, 90,112]:",
  binaryRecursiveSearch([9, 11, 45, 67, 78, 90, 112], 0, 6, 78)
);

console.log(
  "Binary Recursive Search for element '89' in [19, 10, 46, 167, 88]:",
  binaryRecursiveSearch([19, 10, 46, 167, 88], 0, 4, 89)
);

console.log(
  "Binary Recursive Search for element 'o' in ['i', 'l', 'n', 'o', 'x', 'z']:",
  binaryRecursiveSearch(["i", "l", "n", "o", "x", "z"], 0, 5, "o")
);

console.log(
  "Binary Recursive Search for element 'x' in ['a', 'b', 'c', 'd', 'e', 'f', 'g']:",
  binaryRecursiveSearch(["a", "b", "c", "d", "e", "f", "g"], 0, 6, "x")
);

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function targetCount(arr, target, count = 0) {
  if (arr.length == 0) return 0;

  if (arr[0] == target) count++;

  if (arr.length > 1) {
    return targetCount(arr.slice(1), target, count);
  }
  return count;
}

console.log(
  'Occurrences of "x" in ["d", "a", "x", "k", "x", "d", "k", "x", "x", "d"]:',
  targetCount(["d", "a", "x", "k", "x", "d", "k", "x", "x", "d"], "x")
);

console.log(
  'Occurrences of "H" in ["I", "n" , "d", "i" ,"a"]:',
  targetCount(["I", "n", "d", "i", "a"], "H")
);

console.log(
  'Occurrences of "2" in [4, 33, 7, 2, 76, 2, 22]:',
  targetCount([4, 33, 7, 2, 76, 2, 22], 2)
);

console.log(
  'Occurrences of "90" in [4, 33, 7, 2, 76, 2, 22]:',
  targetCount([4, 33, 7, 2, 76, 2, 22], 90)
);
