// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

const myInput = document.querySelector("#myKey");

myInput.addEventListener("keydown", (e) => {
  console.log(`Key Pressed: ${e.key}`);
});

// Task 6: Add a keyup event listener to an nput field that displays the current value in a paragraph

myInput.addEventListener("keyup", (e) => {
  console.log(`Key up: ${e.key}`);
  document.getElementById("pKey").innerHTML = myInput.value;
});
