// Day 5 activities
function activitiesDay5() {
  evenOdd(5);
  evenOdd(20);

  let sq = findSquare(12);
  console.log(`The square of 12 is ${sq}`);

  findMax(23, 77);
  findMax(45, 12);
  findMax(99, 99);

  let cStr1 = "Chai aur ";
  let cStr2 = "Code";
  let c = concatStr(cStr1, cStr2);
  console.log(`The concatenated string of (
  "${cStr1}" and "${cStr2}" is "${c}"`);

  let s = sum(2, 3);
  console.log(`The sum of 2 and 3 is ${s}`);

  s = sum(92, 43);
  console.log(`The sum of 92 and 43 is ${s}`);

  let str1 = "Great Course!";
  let ch = "G";
  let contain = isCharExists(str1, ch);
  console.log(
    `Is the string "${str1}" contains the character '${ch}' : ${contain}`
  );

  ch = "z";
  contain = isCharExists(str1, ch);
  console.log(
    `Is the string "${str1}" contains the character '${ch}' : ${contain}`
  );

  let p = product(5);
  console.log(`Product of 5 and default value of second number is ${p}`);

  p = product(30, 8);
  console.log(`Product of 30 and 8 is ${p}`);

  let nm = greet("Geet", 16);
  console.log(`${nm}`);

  nm = greet("Puneet", 24);
  console.log(`${nm}`);

  highOrder1(childFunction, 3);

  highOrder2(childParam1, childParam2, 6);
}

// **************************************************

// **** Activity 1 : Function Declaration ***********

// Activity 1: Task 1: Check if a number is even or odd

function evenOdd(num = 0) {
  let result = "";
  num % 2 === 0 ? (result = "even") : (result = "odd");
  console.log(`The number ${num} is ${result}`);
}

// Activity 1: Task 2: Calculate square of a number and return the result

function findSquare(num = 1) {
  num = Math.round(num);
  return Math.pow(num, 2);
  // return num ** 2;       // other method to get square of a number
}

// **** Activity 2 : Function Expression ***********

// Activity 2: Task 3: Find maximum of two numbers

function findMax(num1, num2) {
  if (num1 > num2) {
    console.log(
      `The first number ${num1} is greater than the second number ${num2}`
    );
  } else if (num1 < num2) {
    console.log(
      `The second number ${num2} is greater than the first number ${num1}`
    );
  } else {
    console.log(`Both the numbers ${num1} and ${num2} are equal.`);
  }
}

// Activity 2: Task 4: concatinate two strings and return the result

function concatStr(str1, str2) {
  return str1.concat(str2);
}

// **** Activity 3 : Arrow functions ***********

// Activity 3: Task 5: Calculate sum of two numbers and return the result
const sum = (num1, num2) => num1 + num2;

// Activity 3: Task 6: Check if a string contains a specific character and return a boolean value.
const isCharExists = (str, ch) => str.includes(ch);

// **** Activity 4: Function Parameters and default values ***********

// Activity 4: Task 7: Take two parameters and return their product. Provide a default value for second parameter
const product = (num1, num2 = 2) => num1 * num2;

// Activity 4: Task 8: Take a person's name and age as parameters and return a greeting message. Provide default value for age.

const greet = (name, age = 18) =>
  `Hello ! ${name}. We welcome all with age ${age}.`;

// **** Activity 5 : High Order Functions ***********

// Activity 5: Task 9: Take a function and a number as parameters. Call the function that many times

function highOrder1(childFunction, num) {
  for (let i = 0; i < num; i++) {
    childFunction();
  }
}

const childFunction = () => {
  console.log("Parent calling me !");
};

// Activity 5: Task 10: Take two functions and a value as parameters. Apply first function to the value then apply second function to the result

const highOrder2 = (childParam1, childParam2, val) => {
  const result1 = childParam1(val);
  const result2 = childParam2(result1);
  console.log(
    `The value ${val} applied to first parameter function- The result is a squared value ${result1}`
  );
  console.log(
    `This result is applied to second parameter function. Now the result with addition of 10 is  ${result2}`
  );
};

const childParam1 = (val) => val ** 2;

const childParam2 = (val) => val + 10;

//********************************
