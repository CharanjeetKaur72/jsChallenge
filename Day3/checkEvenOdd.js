// using ternary operatot to check whether a number is even or odd
function checkeEvenOdd() {
  check(4);
  check(13);
  check(55);
  check(100);
}

function check(num) {
  // a number divisible by 2 is even
  num % 2 == 0 ? (result = "Even") : (result = "Odd");
  console.log(`The ${num} is an ${result} number`);
}
