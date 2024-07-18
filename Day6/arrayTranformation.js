function arrayTransformation() {
  // Activity 3: Array Methods (intermediate)

  // Activity 3: Task 7: Use the map method to create a new array where each number is doubled and log the new array.
  let myNumArray = [1, 2, 3, 4, 5];

  const arrMapped = myNumArray.map((element) => element * 2);
  console.log(
    `Using map method to double each element of the array ${myNumArray}.`
  );
  console.log(`The new array is - ${arrMapped}`);

  // Activity 3: Task 8: Use the filter method to create a new array with only even numbers and log the new array.
  const filterForEven = myNumArray.filter((element) => element % 2 === 0);
  console.log(
    `Using filter method to create a new array with only even numbers from the array : ${myNumArray}.`
  );
  console.log(`The new array is - ${filterForEven}`);

  // Activity 3: Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
  const sumVal = myNumArray.reduce((val1, val2) => val1 + val2, 0);
  console.log(
    `Using reduce method to calculate the sum of all numbers in the array ${myNumArray}.`
  );
  console.log(`The Sum is - ${sumVal}`);
}
