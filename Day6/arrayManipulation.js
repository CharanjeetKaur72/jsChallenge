
function arrayManipulation() {
// Activity 1: Array Creation and access

  // Activity 1: Task 1: Create an array of numbers from 1 to 5 and log the array to console.
  let myNumArray = [1, 2, 3, 4, 5];
  console.log("Array of numbers from 1 to 5 - ", myNumArray);

  // Activity 1: Task 2: Access the first and last element of the array and log them to console.
  console.log(`Firts element of the array is: ${myNumArray[0]} `);
  console.log(
    `Last element of the array is: ${myNumArray[myNumArray.length - 1]} `
  );

  // Activity 2: Array Methods (basic)

  // Activity 2: Task 3: Use the push method to add a new number to the end of the array and log the updated array.
  myNumArray.push(20);
  console.log(
    `Using push() added a new number to the end of the array. Now the array is - ${myNumArray}`
  );

  // Activity 2: Task 4: Use the pop method to remove the last element from the array and log the updated array.
  const removedNum = myNumArray.pop();
  console.log(
    `Using pop() removed the last element ${removedNum} from the array.  Now the array is - ${myNumArray}`
  );

  // Activity 2: Task 5: Use shift method to remove the first element from the array and log the updated array.
  const removedNumShift = myNumArray.shift();
  console.log(
    `Using shift() removed the first element ${removedNumShift} from the array.  Now the array is - ${myNumArray}`
  );

  // Activity 2: Task 6: Use unshift method to add a new number to the beginning of the array and log the updated array.
  myNumArray.unshift(30);
  console.log(
    `Using unshift() added a new number to the beginning of the array. Now the array is - ${myNumArray}`
  );
}