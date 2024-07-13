//  Activity 1: VARIABLE DECLERATION

//Task 1: Declare avariable using var, assign a number, and log the value to the console.
function task1() {
  var myNum;

  myNum = 5;

  console.log("*** Task 1 ***");
  console.log(`The number is ${myNum}`);
}

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
function task2() {
  let myName;

  console.log("*** Task 2 ***");
  myName = "Charanjeet Kaur";
  console.log(`Hello, I'm ${myName}`);
}

// Activity 2: CONSTANT DECLARATION

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
function task3() {
  const inspiringChellenge = true;

  console.log("*** Task 3 ***");
  console.log(`Is this challenge inspiring ? -  ${inspiringChellenge}`);
}

// Activity 3: DATA TYPES

// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variables type using the typeof operator.
function task4() {
  let challengeDay = 1; // number variable
  let greet = "Hello!"; // string variable
  let wantToLearnJs = true; // boolean

  // object type variable
  const book = {
    title: "30 Days of Java Script Challenge",
    publisher: "Chai Aur Code",
    price: 500,
  };

  // array type variable
  const courses = ["Java Script", "HTML", "CSS"];

  console.log("*** Task 4 ***");

  // using typeof operator to check type of variables
  console.log("Value and Type of variables ->");
  console.log(
    `<challengeDay> - ${challengeDay} , Type - ${typeof challengeDay}`
  );
  console.log(`<greet> - ${greet} , Type - ${typeof greet}`);
  console.log(
    `<wantToLearnJs> - ${wantToLearnJs} , Type - ${typeof wantToLearnJs}`
  );

  console.log("<book> - ");
  console.group(book);
  console.log(`Type - ${typeof book}`);

  console.log(`<courses> - ${courses} , Type - ${typeof courses}`);
}

// Activity 4: REASSIGNING VARIABLES

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
function task5() {
  let initialValue = 105;

  console.log("*** Task 5 ***");
  console.log("Varaible declared using let keyword");
  console.log(`Initial Value - ${initialValue}`);

  initialValue = 200; // value reassigned
  console.log(`Reassigned value - ${initialValue}`);
  console.log("Values declared with <let> can be reassigned");
}

// Activity 5: UNDERSTANDING CONST

// Task 6: Try reassigning a variable declared with const and obsereve the error.
function task6() {
  const fixValue = 10;

  console.log("*** Task 6 ***");

  console.log(`constant value - ${fixValue}`);
  console.log("changing constant value to 20 now...");

  // try - catch block helps to display customized error messages in case of error
  try {
    fixValue = 20; // changing value of constant variable
  } catch {
    console.log(
      "Error: constant value cannot be reassigned. Const variables must be assigned a value when they are declared."
    );

    console.log(
      "In case of array and object data types, only the values of element and properties can be changed"
    );
  }

  console.log(`constant value now is same as earlier - ${fixValue}`);
}
