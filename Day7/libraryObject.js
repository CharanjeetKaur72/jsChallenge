function libraryObject() {
  // Activity 3

  // Task 5: Create a nested object library with properties like name and books (an array of book objects)

  const library = {
    name: "Marketing and Psychology",
    books: [
        {
          title: "How to win friends and influence People",
          author: "Dale Carnegi",
          year: 1936
        },
      
        {
          title: "Influence",
          author: "Robert Cialdini",
          year: 1984
        },

        {
          title: "47 forbidden Psychological Tactics",
          author: "Dan Lok",
          year: 2017
        },

        {
        title: "Cashvertising",
        author: "Drew E. Whitman",
        year: 2008
        }
      ]
  };

  console.log("The library object -");
  console.log(library);

  // Task 6: Access and log the name of library and title of all the books in the library
  console.log(`Library Name: ${library.name}`);
  console.log("Books (title): ");

  for(book in library.books) {
    console.log(`${library.books[book].title}`);
  }

}