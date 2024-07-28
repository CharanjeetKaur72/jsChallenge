// Activity 1 : Class Definition

// Task 1: Define a class Person with properties name and age and a method to return a greeting message. Create an instance of the class and log the greeting message

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello! ${this.name}. Your age is ${this.age}, right!`;
  }

  // Task 2: Add a method to the Person class that updates the age property and logs the updated age
  updateAge(age) {
    const prevAge = this.age;
    this.age = age;
    console.log(`The age is updated from ${prevAge} to ${this.age}`);
  }
}

console.log(" *** Actvitiy 1: Class Definition ***");

const person1 = new Person("Puneet", 24);
console.log(`${person1.greet()}`);

person1.updateAge(22);

// *******************************************************************

// Activity 2 : Class Inheritance

// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the studentID. Create an instance of the Student class and log the studentID
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }

  // Task 4: Override the greeting method in the Student class to include the studentId in the message. Log the overridden greeting message.
  greet() {
    const greetMsg = `\nYour Student Id is : ${this.studentId}`;
    return super.greet() + greetMsg; // calling parent class method
  }
}

console.log(" *** Actvitiy 2: Inheritance ***");
const student1 = new Student("Charanjeet", 51, "C1234");
console.log(`Student Id : ${student1.getStudentId()}`);

console.log(student1.greet());
