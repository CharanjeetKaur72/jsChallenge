// Activity 2: Chaining Promises

// Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const promiseChain = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("***** Promise Chaining *******");

    let error = false;
    if (!error) {
      resolve({
        Id: "12",
        Name: "Charanjeet Kaur",
        Course: "Javascript",
        channel: "Chai Aur Code",
      }); // calling resolve with simulated data from server
    } else {
      reject("Error!");
    }
  }, 1000);
})
  .then((student) => {
    console.log(`Student Data:`);
    console.log(student);
    return student.Name;
  })
  .then((studentName) => {
    console.log(`Student Name: ${studentName}`);
  })
  .catch((errorMsg) => {
    console.log(errorMsg);
  })
  .finally(() => {
    console.log("The promise either resolved or rejected.");
  });
