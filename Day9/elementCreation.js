function elementCreation() {
  // Activity 2: Creating and appending elements

  // Task3: Create a new div element with some text content and append it to the body
  const newDiv = document.createElement("div");
  newDiv.innerText = "This is new div element appended to the document body";
  document.getElementById("testDay9").appendChild(newDiv);

  // Task 4: Create a new li element and add to an existing ul list
  const newLi = document.createElement("li");
  const newTtext = document.createTextNode("New text in the list");
  newLi.appendChild(newTtext);
  
  document.getElementById("testList").appendChild(newLi);
}
