// Activity 4: Getters and Setters

// Task 7: Add a getter method to the PersonG class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

// Task 8: Add a setter method to the PersonG class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.

class PersonG {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // getter method
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  // setter method
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

console.log("*** Activity 4: Getters and Setters ***");
console.log("Show full name of person using Getter: ");
const person_g = new PersonG("Charanjeet", "Kaur");
console.log(`Full name: ${person_g.fullName}`);

console.log("Updating firstName and lastName of person using Setter: ");
person_g.fullName = "Geet Oberoi";
console.log(`Full name now: ${person_g.fullName}`);
