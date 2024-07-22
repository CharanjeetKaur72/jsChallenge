
// Activity 4: Modifying attributes and clsses
  // Task 7:Select an HTML element and change one of its attributes (e.g. src of aan img tag)
function changeAttribute() {
  const img = document.getElementById("attrib");
  img.setAttribute("src", "https://images.pexels.com/photos/27243744/pexels-photo-27243744/free-photo-of-a-red-and-yellow-flower-in-the-grass.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load");
  
}


 // Task 8: Add and remove a CSS class to/from an HTML element
function addImgClass() {
  const img = document.getElementById("attrib");
  img.classList.add("imgclass");
}

function removeImgClass() {
  const img = document.getElementById("attrib");

  if (img.classList.length > 0) {
   img.classList.remove("imgclass")
  }

}
