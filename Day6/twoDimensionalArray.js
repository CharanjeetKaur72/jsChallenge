function twoDimensionalArray() {
  // Activity 5: Multidimensional Array

  // Activity 5: Task 12: Create a two dimensional array matrix and log the entire array to the console.
  const arrMatrix = [
    [2, 4, 6],
    [3, 5, 7],
    [8, 10, 12],
    [11, 13, 17],
  ];

  console.log(`The two dimensionsional array elements - ${arrMatrix}`);

  console.log(`The two dimensionsional array matrix -`);

  for (let row = 0; row < arrMatrix.length; row++) {
    let rowVal = "";
    for (let col = 0; col < arrMatrix[row].length; col++) {
      rowVal += arrMatrix[row][col] + " ";
    }
    console.log(`${rowVal}`);
  }

  // Activity 5: Task 13: Access and log a specific element from the two dimensional array.
  console.log(
    "Accessing a specific element like <Second row, third column> from the two-dimensional array matrix -"
  );
  console.log(`${arrMatrix[1][2]}`);
}
