function spreadNRest() {
  // Activity 3: Spread and rest operators

  // Task 5: Use spread operator to create a new array that includes all the elements of an already existing array plus additional elements.
  const arr = [20, 40, 60, 80];
  const newArr = [arr, 90, 100, 120];

  console.log(
    `New Array created using spread operator, where existing array is ${arr} and additional elements are 90, 100 and 120. The new array is -`
  );
  console.log(`${newArr}`);

  // Task 6: Use rest operator in a function to accept an arbitary number of arguments, sum them and return the result
  console.log(`Sum using rest operator:`);
  console.log(`Arguments: 21, 23. Sum: ${sumUsingRestOperator(21, 23)}`);
  console.log(
    `Arguments: 11 ,57 , 43, 100. Sum: ${sumUsingRestOperator(11, 57, 43, 100)}`
  );
}

function sumUsingRestOperator(...args) {
  return args.reduce((a, b) => a + b, 0);
}
