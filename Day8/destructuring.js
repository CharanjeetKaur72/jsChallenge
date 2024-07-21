function destructuring() {
  // Activity 2: destructuring

  // Task 3: Use array destructuring to extract first and second element from an array of numbers
  const arrNum = [23, 55, 34, 2, 88];
  const [element1, element2] = arrNum;
  console.log(`Destructuring Array of numbers: ${arrNum}`);
  console.log(`First Elelement: ${element1} and second element: ${element2} `);

  // Task 4: Use object destructuring to extract title and author from a book object

  const book = {
    title: "Gulliver's Travels",
    author: "Jonathan Swift",
    year: 1726,
  };
  let { title, author } = book;

  console.log(`Destructuring "book" object: ${book}`);
  console.log(`title: ${title} and author: ${author}`);
}
