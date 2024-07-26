// Activity 1: Basic error handling with Try-Catch

// Task1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log the appropriate message to the console
function basicError() {
  try {
    console.log("****** Basic error handling *******");
    throw "Intentionally thrown error!";
  } catch (err) {
    console.error(err);
  }
}

basicError();

// Task 2: Create a function that devides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideNum(num1, num2) {
  try {
    console.log(`Dividing number ${num1} by number ${num2}`);
    if (num2 === 0) {
      throw "Error: Denominator is zero";
    } else {
      return num1 / num2;
    }
  } catch (e) {
    console.error(e);
  }
}

divideNum(25, 0);

// Activity 2: Finally block

// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch and finally block to observe the execution flow.
try {
  console.log("In the Try block");
  let error = true;
  if (error) {
    throw "Error!";
  }
} catch (e) {
  console.log("In the Catch block");
  console.log(e);
} finally {
  console.log("In the Finally block");
}
