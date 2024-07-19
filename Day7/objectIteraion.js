function objectIteration() {
  // Activity 5

  const book = {
    title: "Pre-suasion",
    auther: "Robert Cialdini",
    year: 2016,
  };

  // Task 8: Use for ...in loop to iterate over properties of book object

  console.log(
    "Using for ... in loop to iterate over properties of book object -"
  );
  for (x in book) {
    console.log(`${x} : ${book[x]}`);
  }
  // Task 9: Use Object.keys and Object.values methods to log all keys and values of book object
  const bookKeysArr = Object.keys(book);
  const bookValuesArr = Object.values(book);

  console.log(" Book Object Keys -");
  for (x of bookKeysArr) {
    console.log(`${x}`);
  }

  console.log(" Book Object Values -");
  bookValuesArr.forEach((x) => console.log(`${x}`));
}
