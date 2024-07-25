// Activity 3: Usin Async/Await

// Task 4: Write an async function that waits for a promise to resolve and then log the resolved value
const promiseAsync1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("***** Async Await ******");
    resolve({ userName: "Charan", password: "123" });
  }, 1000);
});

async function getData() {
  const response = await promiseAsync1;

  console.log("Response Data :");
  console.log(response);
}

getData();

// Task 5: Write an async function that handles a rejected promise using try catch and then log the error message.

const promiseAsync2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (!error) {
      resolve({ userName: "Charan", password: "123" });
    } else {
      reject("Error: Something went wrong!");
    }
  }, 1000);
});

async function getStudentData() {
  try {
    const response = await promiseAsync2;

    console.log("Response Data :");
    console.log(response);
  } catch (errMsg) {
    console.log(errMsg);
  }
}

getStudentData();
