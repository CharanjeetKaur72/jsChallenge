// Calculate factorial of a number using a do... while loop

function calculateFactorial(numf = 7) {
  if (isNaN(numf)) {
    console.log("Not a number!");
    return;
  }

  numf = Math.round(numf);

  let counter = numf;
  let factorial = numf;

  do {
    factorial = factorial * (counter - 1);
    counter--;
  } while (counter > 1);

  console.log(`Factorial of number ${numf} is ${factorial}`);
}
