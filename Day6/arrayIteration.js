function arrayIteration() {
  // Activity 4: Array Iteration

  // Activity 4: Task 10: Use a for loop to iterate over the array and log each element to the console.
  let myArray = ["Hello!", 2024, "World", "Welcome", "India"];

  console.log(`Using for loop to iterate over the array - ${myArray}`);
  for (let i = 0; i < myArray.length; i++) {
    console.log(`Element ${i} of the array is : ${myArray[i]}`);
  }

  // Activity 4: Task 11: Use the foreach method to iterate over the array and log each element to the console.
  console.log(`Using foreach method to iterate over the array - ${myArray}`);
  myArray.forEach((val, i) =>
    console.log(`Element ${i} of the array is : ${val}`)
  );
}
