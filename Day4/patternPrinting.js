// Print pattern of stars using nested loops

 function printPattern() {

  let pattern = "";
  for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= row; col++) {
      pattern.length === 0 ? (pattern = "*") : (pattern += " " + "*");
    }
    console.log(`${pattern}`);

    pattern = "";
  }
}
