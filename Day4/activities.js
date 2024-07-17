function activitiesDay4() {
  // Activity 1: for loop

  // Task 1
  // pring numbers from 1 to 10 using for loop
  console.log(
    "Activity 1: Task 1 -  printing numbers from 1 to 10 using for loop "
  );
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} `);
  }

  // Task 2
  // print multiplication table of 5 using for loop
  console.log(
    "Activity 1: Task 2 -  print multiplication table of 5 using for loop"
  );
  for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
  }

  // *********************************************************
  // Activity 2: While loop

  // Task 3
  // Calculate sum of numbers from 1 to 10 using while loop
  console.log(
    "Activity 2: Task 3 -  Calculate sum of numbers from 1 to 10 using while loop"
  );

  let num = 1;
  let sum = 0;
  while (num <= 10) {
    sum += num;
    num++;
  }

  console.log(`SUM = ${sum}`);

  // Task 4
  //  Print numbers 10 to 1 using while loop
  console.log("Activity 2: Task 4 -  Print numbers 10 to 1 using while loop");

  let numw = 10;

  while (numw >= 1) {
    console.log(`${numw} `);
    numw--;
  }

  // *********************************************************
  // Activity 3: Do ... While loop

  // Task 5
  // pring number from 1 to 5 using do ... while loop
  console.log(
    "Activity 3: Task 5 -  print number from 1 to 5 using do ... while loop"
  );

  let numd = 1;
  do {
    console.log(`${numd} `);
    numd++;
  } while (numd <= 5);

  // Task 6
  // calculate factorial of a number using do ... while loop
  console.log(
    "Activity 3: Task 6 - calculate factorial of a number using do ... while loop"
  );

  let numf = 6;
  let counter = numf;
  let factorial = numf;

  do {
    factorial = factorial * (counter - 1);
    counter--;
  } while (counter > 1);

  console.log(`Factorial of number ${numf} is ${factorial}`);

  // +++++++++++++++++++++++++++++++++++++++++++
  // Activity 4: Nested loops

  // Task 7
  // print a pattern using nested for loops
  console.log("Activity 4: Task 7 - print a pattern using nested for loops");

  let pattern = "";
  for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= row; col++) {
      pattern.length === 0 ? (pattern = "*") : (pattern += " " + "*");
    }
    console.log(`${pattern}`);

    pattern = "";
  }

  // +++++++++++++++++++++++++++++++++++++++++++
  // Activity 5: Loop control statements

  // Task 8
  // pring numbers from 1 to 10 but skip number 5 using  continue statement
  console.log(
    "Activity 5: Task 8 - pring numbers from 1 to 10 but skip number 5 using  continue statement"
  );

  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    }

    console.log(`${i} `);
  }

  // Task 9
  //  pring numbers from 1 to 10 but stop the loop when number is 7 using  break statement
  console.log(
    "Activity 5: Task 9 - pring numbers from 1 to 10 but stop the loop when number is 7 using break statement"
  );
  for (let i = 1; i <= 10; i++) {
    if (i === 7) {
      break;
    }

    console.log(`${i} `);
  }

  // +++++++++++++++++++++++++++++++++++++++++++
}
