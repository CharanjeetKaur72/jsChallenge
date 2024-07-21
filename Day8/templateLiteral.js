function templateLiterals() {
  // Activity 1
  // Task 1: Use template literals to create a string that includes variable for a person's name and age. Log the result
  let personName = "Virat Kohli";
  let personAge = 35;

  console.log("Using template literals-");
  console.log(`Person Name: ${personName},  Persons Age: ${personAge}`);

  // Task 2: Create multiline string using template literals. Log the cresult.
  let line1 = `The chaicode.com has offered "30- days-javascripts challenge".`;
  let line2 = `Many students have joined this course.`;
  let line3 = `The course is quite helpful in preparation of Javascript interviews.`;

  let multiLineStr = `${line1}\n${line2}\n${line3}`;
  console.log(`Multiline string: ${multiLineStr}`);
}
