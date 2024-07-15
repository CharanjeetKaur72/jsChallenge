// find day of week
function dayOfWeek() {
  checkWeek(1);
  checkWeek(2);
  checkWeek(3);
  checkWeek(4);
  checkWeek(5);
  checkWeek(6);
  checkWeek(7);
}

function checkWeek(day) {
  let result = "";

  switch (day) {
    case 1:
      result = "Monday";
      break;
    case 2:
      result = "Tuesday";
      break;
    case 3:
      result = "Wednesday";
      break;
    case 4:
      result = "Thursday";
      break;
    case 5:
      result = "Friday";
      break;
    case 6:
      result = "Saturday";
      break;
    case 7:
      result = "Sunday";
      break;
    default:
      console.log("Not a valid week day");
      break;
  }

  console.log(`The ${day} is ${result}.`);
}
