// Activity 3: Custom error objects

// Task 4: Create a custom error class that extends the built in error class. Throw an instance of the custom error in a function and handle it using try-catch block.
class myCustomError extends Error {
  constructor(msg) {
    let errMsg = "";

    switch (msg) {
      case "1":
        errMsg = "Database not found.";
        break;

      case "2":
        errMsg = "Database cannot open.";
        break;

      default:
        errMsg = msg;
        break;
    }

    super(msg);
    this.name = "Custom Error";
    this.message = errMsg;
  }
}

function showCustomError() {
  try {
    console.log("Custom Error Handling:");
    throw new myCustomError("1");
  } catch (err) {
    console.error(err.name, err.message);
  }
}

showCustomError();

// Task 5: Write a function that validates user input (e.g. checking if a string is not empty) and throws a cutom error if the validation fails. Handle the custome error using a try-catch block.

function ValidateUserInput(inputVal) {
  try {
    if (!inputVal || inputVal.trim() === "") {
      throw new myCustomError("Input cannot be empty.");
    } else {
      console.log("Valid input.");
    }
  } catch (err) {
    console.error(err.name, err.message);
  }
}

ValidateUserInput(" ");
