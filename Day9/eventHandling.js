function eventHandling() {
  const button = document.getElementById("testEvent");

  // Activity 5: Event handling
  // Task9:Add a click event listener to a button that changes the text content of a paaragraph.

  button.addEventListener("click", (e)=> {
    const para = document.getElementById("testPara");
    para.textContent = "THIS IS CHANGED TEXT!";
  });

  // Task 10: Add a mouse event listener to an element that changes its border color.

  button.addEventListener("mouseover", (e) => {
    button.style.borderColor = "red";
  });

  button.addEventListener("mouseout", (e) => {
    button.style.border = none;
  });

}

