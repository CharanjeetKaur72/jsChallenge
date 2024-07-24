// Activity 1: Basic event handling
// Task1: Add a click event listener to a button that changes the text content of a paragraph
const button1 = document.getElementById("clickE");

button1.addEventListener("click", (e) => {
  document.getElementById("textE").innerHTML = "This is the changed text!";
});

// Task 2: add a double click event listener to an image that toggles its visibility
const img1 = document.querySelector("#toggleview");
img1.addEventListener("dblclick", function (e) {
  if (img1.style.visibility === "hidden") {
    img1.style.visibility = "visible";
  } else {
    img1.style.visibility = "hidden";
  }
});
