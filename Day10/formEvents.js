// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and  logs the form data to the console.
const form1 = document.getElementById("myForm");

form1.addEventListener("submit", (e) => {
  e.preventDefault;

  //log form data to console
  form1.childNodes.forEach((x) => {
    console.log(`type: ${x.nodeName}, value: ${x.value}`);
  });
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const myCourse = document.getElementById("course");

myCourse.addEventListener("change", (e) => {
  document.getElementById("selection").innerHTML =
    "Selected course: " + myCourse.value;
});
