// Activity 4:Error handling in Promises

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log appropriate message to the console

function randomPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 11 + 1);
      if (randomNum >= 5) {
        resolve("Promise resolved.");
      } else {
        reject(new Error("Promise rejected!"));
      }
    }, 1000);
  });
}

randomPromise()
  .then((resolution) => console.log(resolution))
  .catch((error) => console.error(error.message));

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects and log the error message.
async function randomPromiseAsync() {
  try {
    const response = await randomPromise();
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
}
randomPromiseAsync();
