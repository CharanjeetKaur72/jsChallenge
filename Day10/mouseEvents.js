// Activity 2: Mouse Events

// Task 3: Add a mouseover evenlistener to an element that changes its background color
const para1 = document.getElementById("changebg");

let prevBackground = "";
para1.addEventListener("mouseover", (e) => {
  prevBackground = para1.style.backgroundColor;
  para1.style.backgroundColor = "green";
});

// Task 4: Add a mouseout event listener to an element that resets its background color
para1.addEventListener("mouseout", (e) => {
  if (prevBackground != "") {
    para1.style.backgroundColor = prevBackground;
  }
});
