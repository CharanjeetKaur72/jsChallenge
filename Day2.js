function arithmeticOperations() {
  console.log("Performing arithmetic operations -");
  addNumbers();
  subtractNumbers();
  multiplyNumbers();
  divideNumbers();
  findRemainder();
}

function addNumbers() {
  let num1, num2;

  num1 = 10;
  num2 = 205;
  result = num1 + num2;

  console.log("*** Task 1 ****");
  console.log(`Adding numbers ${num1} and ${num2}. Result= ${result}`);
}

function subtractNumbers() {
  let num1, num2;

  num1 = 10;
  num2 = 205;
  result = num2 - num1;

  console.log("*** Task 2 ****");
  console.log(`Subtracting  ${num1} from ${num2}. Result = ${result}`);
}

function multiplyNumbers() {
  let num1, num2;

  num1 = 10;
  num2 = 205;
  result = num1 * num2;

  console.log("*** Task 3 ****");
  console.log(`Multiplying numbers ${num1} and ${num2}. Result = ${result}`);
}

function divideNumbers() {
  let num1, num2;

  num1 = 10;
  num2 = 205;
  result = num2 / num1;

  console.log("*** Task 4 ****");
  console.log(`Dividing ${num2} by ${num1}. Result = ${result}`);
}

function findRemainder() {
  let num1, num2;

  num1 = 1237;
  num2 = 2;
  result = num1 % num2;

  console.log("*** Task 5 ****");
  console.log(
    `Finding remainder by dividing ${num1} by ${num2}. Remainder = ${result}`
  );
}

function assignmentOpeartions() {
  let num1;

  console.log("Performing assignment operations -");
  console.log("*** Task 6 ****");

  num1 = 10;
  num1 += 9;
  console.log(
    `Using assignment operator += to add 9 to variable with value 10. Result = ${num1}`
  );

  console.log("*** Task 7 ****");
  num1 = 100;
  num1 -= 8;
  console.log(
    `Using assignment operator -= to subtract 8 from variable with value 100. Result = ${num1}`
  );
}

function comparisonAndLogicalOperations() {
  // Comparison operators
  console.log("Performing comparison operations - ");

  console.log("*** Task 8 : comparing with < and > ****");

  let num1 = 10,
    num2 = 5;
  let result1, result2;

  result1 = num1 < num2;
  result2 = num1 > num2;

  console.log(`Is ${num1} < ${num2}. Result: ${result1}`);
  console.log(`Is ${num1} > ${num2}. Result: ${result2}`);

  console.log("*** Task 9  : comparing with <= and >= ****");

  num1 = 20;
  num2 = 5;
  result1 = num1 <= num2;

  console.log(`Is ${num1} <= ${num2}. Result: ${result1}`);

  result1 = num1 >= num2;
  console.log(`Is ${num1} >= ${num2}. Result: ${result1}`);

  num1 = 15;
  num2 = 15;

  result1 = num1 <= num2;
  console.log(`Is ${num1} <= ${num2}. Result: ${result1}`);

  result1 = num1 >= num2;
  console.log(`Is ${num1} >= ${num2}. Result: ${result1}`);

  console.log("*** Task 10  : comparing with == and === ****");

  num1 = 11;
  num2 = 11;
  result1 = num1 == num2;

  console.log(`Is ${num1} == ${num2}. Result: ${result1}`);

  num2 = 10;
  result1 = num1 == num2;
  console.log(`Is ${num1} == ${num2}. Result: ${result1}`);

  num2 = 11;
  result1 = num1 === num2;
  console.log(`Is ${num1} === ${num2}. Result: ${result1}`);
  console.log(
    `Here data type of first number is ${typeof num1} and data type of second number is ${typeof num2}`
  );

  num2 = "11";
  result1 = num1 === num2;
  console.log(`Is ${num1} === ${num2}. Result: ${result1}`);
  console.log(
    `Here data type of first number is ${typeof num1} and data type of second number is ${typeof num2}`
  );

  // Logical operators
  console.log("Performing Logical operations - ");

  console.log("*** Task 11 : Using && operator to combine two conditions ****");

  num1 = 2;
  num2 = 5;

  console.log("First number is 2 and second number is 5");

  result1 = num1 >= 10 && num2 < 10;
  console.log(`Is ${num1} >= 10 && ${num2} < 10. Result: ${result1}`);

  result1 = num1 <= 10 && num2 > 1;
  console.log(`Is ${num1} <= 10 && ${num2} > 1. Result: ${result1}`);

  result1 = num1 == 2 && num2 === 5;
  console.log(`Is ${num1} == 2 && ${num2} === 5. Result: ${result1}`);

  result1 = num1 == 2 && num2 === "5";
  console.log(`Is ${num1} == 2 && ${num2} === "5". Result: ${result1}`);

  console.log("*** Task 12: Using || operator to combine two conditions  ****");

  result1 = num1 >= 10 || num2 < 10;
  console.log(`Is ${num1} >= 10 || ${num2} < 10. Result: ${result1}`);

  result1 = num1 <= 10 || num2 > 1;
  console.log(`Is ${num1} <= 10 || ${num2} > 1. Result: ${result1}`);

  result1 = num1 == 2 || num2 === 5;
  console.log(`Is ${num1} == 2 || ${num2} === 5. Result: ${result1}`);

  result1 = num1 == 2 || num2 === "5";
  console.log(`Is ${num1} == 2 || ${num2} === "5". Result: ${result1}`);

  console.log("*** Task 13 : Using ! operator to negate a condition ****");

  result1 = !num1;
  console.log(`Is !${num1}. Result: ${result1}`);

  result1 = !(num1 >= 1 && num2 < 10);
  console.log(`Is !(${num1} >= 1 && ${num2} < 10). Result: ${result1}`);

  // combinded comarison and Logical operators
  console.log("Performing combined operation - ");
  result1 = (num1 >= 1 && num2 < 10) || (num1 == 3 && num2 > 0);
  console.log(
    `Is (${num1} >= 1 && ${num2} < 10) || (${num1} == 3 && ${num2} > 0). Result: ${result1}`
  );
}

function ternaryOperation() {
  let num1 = -5;
  let num2 = 5;
  let result1, result2;

  console.log("*** Task 14 ****");

  num1 >= 0 ? (result1 = "Positive") : (result1 = "Negative");
  num2 >= 0 ? (result2 = "Positive") : (result2 = "Negative");

  console.log(`If the number is ${num1}, the result is ${result1}`);
  console.log(`If the number is ${num2} and the result is ${result2}`);
}
