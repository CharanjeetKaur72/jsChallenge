// Activity 4: Default Parameters

function defaultParameters() {
  console.log(
    "Getting product of 2 numbers where second parameter passed to the function has default value of 1:"
  );

  let p = getProduct(25, 5);
  console.log(`calling ... getProduct(25, 5), result: ${p}`);
  p = getProduct(31);
  console.log(`Calling ... getProduct(31), result: ${p}`);
}

function getProduct(param1, param2 = 1) {
  return param1 * param2;
}
