// Activity 3: Static Methods and Properties

console.log(" *** Actvitiy 3: Static methods and Properties ***");

// Task 5: Add a static method to the PersonNew class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message

class PersonNew {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static genericGreet() {
    return "Welcome here !";
  }

  greet() {
    return `Hello! ${this.name}. Your age is ${this.age}, right!`;
  }

  updateAge(age) {
    const prevAge = this.age;
    this.age = age;
    console.log(`The age is updated from ${prevAge} to ${this.age}`);
  }
}

console.log("Calling static method of PersonNew class...");
console.log(PersonNew.genericGreet());

// Task 6: Add a static property to the studentNew class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class StudentNew extends PersonNew {
  // static property to count number of students
  static count = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    StudentNew.count++; // increment count of students
  }

  getStudentId() {
    return this.studentId;
  }

  greet() {
    const greetMsg = `\nYour Student Id is : ${this.studentId}`;
    return super.greet() + greetMsg; // calling parent class method
  }
}

console.log(
  `Using static property in StudentNew class : initial count of students: ${StudentNew.count} `
);
const studentOne = new StudentNew("Charu", 19, "C4848");
const studentTwo = new StudentNew("Hetal", 23, "C9839");
const studentThree = new StudentNew("Meena", 18, "C2928");

console.log(`Student count now: ${StudentNew.count}`);
