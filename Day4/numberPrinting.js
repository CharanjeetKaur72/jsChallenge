// Print numbers from 1 to 10 using for loop and while loop

function printNumbers() {
  console.log("Pring numbers from 1 to 10 using for loop");
  for (let i = 1; i <= 10; i++) {
    console.log(`${i}`);
  }

  console.log("Pring numbers from 1 to 10 using while loop");

  let num = 1;
  numList = "";

  while (num <=10){
    numList += num + " ";
    num++;
  }
  console.log(`${numList}`);
}