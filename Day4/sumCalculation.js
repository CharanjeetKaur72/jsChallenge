// Calculate the sum of numbers from 1 to 10 using while loop

function calculateSum() {
  let num = 1;
  let sum = 0;
  while (num <= 10) {
    sum += num;
    num++;
  }

  console.log(`Sum of numbers frm 1 to 10 using while loop = ${sum}`);
}
