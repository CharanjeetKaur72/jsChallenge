function enhancedObject() {
  // Activity 5

  // Task 8: Use an enhanced object literals to create an object with methods and properties

  let firstName = "Charanjeet";
  let lastName = "Kaur";
  function fullName() {
    return this.firstName + " " + this.lastName;
  }

  // object created using enhanced literals
  const person = {
    firstName,
    lastName,
    fullName,
  };

  console.log("Enhanced Object : person");
  console.log(`First Name: ${person.firstName}`);
  console.log(`Last Name: ${person.lastName}`);
  console.log(`Full Name: ${person.fullName()}`);

  // Task 9: Create an object with computed property names based on variables

  // computing property of object
  const propOne = "ID";
  const propTwo = "Name";
  const propThree = "Course";

  const student = {
    [propOne]: 123333,
    [propTwo]: "Geet",
    [propThree]: "Science",
  };

  console.log("object with computed property names -");
  console.log(student);
}
