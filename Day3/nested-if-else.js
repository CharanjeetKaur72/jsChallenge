// Find largest of three numbers usinf nested if-else
function findLargest() {
  checkLargest(13, 1, 89);
  checkLargest(70, 13, 1);
  checkLargest(12, 30, 9);
}

function checkLargest(num1, num2, num3) {
  let largest;

  if (num1 > num2) {
    if (num1 > num3) {
      largest = num1;
    } else {
      largest = num3;
    }
  } else if (num2 > num3) {
    largest = num2;
  } else {
    largest = num3;
  }

  console.log(`The largest of ${num1}, ${num2} and ${num3} is ${largest}`);
}
