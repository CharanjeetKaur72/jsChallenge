function bookObject() {
  // Activity 1: Object creation and access

  // Task 1: Create an object representing a book with properties like tilte, author and year

  const book = {
    title: "Pre-suasion",
    auther: "Robert Cialdini",
    year: 2016,
  };

  // Task 2: Access properties - title and author of the book object
  console.log("Object : book");
  console.log("Object Proprties -");
  console.log(`Title : ${book.title}`);
  console.log(`Author : ${book.auther}`);

  // Activity 2: Object Methods

  // Task 3: Add a method to the book object that returns a string with book's title and author
  book.getTitleAndAuthor = function () {
    return this.title + "," + this.auther;
  };

  const bookProps = book.getTitleAndAuthor().split(",");
  console.log("Book Object method returning string with : title,author");
  console.log(`Book Title: ${bookProps[0]}`);
  console.log(`Book Author: ${bookProps[1]}`);

  // Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property

  console.log(`The year of book publication : ${book.year}`);
  book.setYear = function (year) {
    this.year = year;
  };

  book.setYear(2024);
  console.log(`Updated Year: ${book.year}`);

  // Activity 4: Task 7

  // use this keyword in a method to return book title and year
  book.getTitleAndYear = function () {
    return this.title + " " + this.year;
  };

  const bookTitleAndYear = book.getTitleAndYear().split(" ");
  console.log("Using this keyword - ");
  console.log(`Book Title : ${bookTitleAndYear[0]}`);
  console.log(`Book Year : ${bookTitleAndYear[1]}`);
}
