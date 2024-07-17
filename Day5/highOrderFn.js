// **** Activity 5 : High Order Functions ***********

// Activity 5: Task 9: Take a function and a number as parameters. Call the function that many times

function highOrderM(childFunction1, num) {
  for (let i = 0; i < num; i++) {
    childFunction1();
  }
}

const childFunction1 = () => {
  console.log("Parent calling me !");
};
