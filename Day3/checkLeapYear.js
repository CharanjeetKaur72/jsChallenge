// Check if year is leap year or not
function checkeLeapYear() {

  checkYear(2024);
  checkYear(2023);
  checkYear(1900);
}

function checkYear(year) {

  if (year % 4 == 0) {
    console.log(`The year ${year} is a leap year.`);
  } else {
    if (year % 100 == 0 && year % 400 == 0) {
      console.log(`The year ${year} is a leap year.`);
    } else {
      console.log(`The year ${year} is not a leap year.`);
    }
  }
}

