// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, "three");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("four");
  }, 100);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("five");
  }, 300);
});

// all promises are resolved
Promise.all([promise1, promise2, promise3, promise4])
  .then((data) => {
    console.log("**** Using promise.all() *******");
    console.log("Promises resolved:", data);
  })
  .catch((err) => {
    console.log("**** Using promise.all() *******");
    console.log("Error: Promise not resolved:", err);
  });

// all promises are not resolved
Promise.all([promise1, promise2, promise3, promise4, promise5])
  .then((data) => {
    console.log("**** Using promise.all() *******");
    console.log("Promises resolved:", data);
  })
  .catch((err) => {
    console.log("**** Using promise.all() *******");
    console.log("Error: Promise not resolved:", err);
  });

// Task 9: Use Promise.race to log the value of the first promise and resolves among multiple promises
Promise.race([promise1, promise2, promise3, promise4])
  .then((data) => {
    console.log("**** Using promise.race() *******");
    console.log("Faster promise settles:", data);
  })
  .catch((err) => {
    console.log("**** Using promise.race() *******");
    console.log("Error:Promise not resolved", err);
  });
