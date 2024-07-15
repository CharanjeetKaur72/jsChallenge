// check whether a number is positive , negative or zero
function numberCheck() {

  checkNum(2);
  checkNum(0);
  checkNum(-9);
}

function checkNum(num) {
  if (num > 0) {
    console.log(`The number ${num} is Positive`);
  } else if (num < 0) {
    console.log(`The number ${num} is Negative`);
  } else {
    console.log(`The number ${num} is Zero`);
  }
}
