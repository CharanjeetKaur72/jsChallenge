function textManipulation() {
  // Activity 1: Selecting and Manipulating Elements

  // Task 1: // Select an HTML element by its ID and change its text content.
  const para1 = document.getElementById("TextContent");
  para1.textContent = "This is the changed text!";
  // para1.innerHTML = "This is the changed <strong>text</strong>!";

  // Task 2: Select an HTML element by its class and change its background color
  const para = document.getElementsByClassName("bground");
  para[0].style.backgroundColor = "green";
  para[0].textContent = "My background color is changed!";
}
