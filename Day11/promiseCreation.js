//Activity 1: Understanding promise

// Task 1:Create a promise that resolve with a message after a 2 seconds timeout

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("****** Promise Creation *******");

    console.log("Resolving promise...");
    resolve();
  }, 2000);
});

promiseOne.then(function () {
  console.log("Promise resolved !");
});

// Task 2:Create a promise that rejects with an error message after 2-seconds timout. use catch to handle error.

new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve("Success: Promise Resolved.");
    } else {
      reject("Error: Something went wrong.");
    }
  }, 2000);
})
  .then((msg) => {
    // promise resolved
    console.log(msg);
  })
  .catch((errorMsg) => {
    // promise rejected
    console.log(errorMsg);
  });
