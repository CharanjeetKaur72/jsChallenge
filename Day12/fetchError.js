// Activity 5: Graceful error handling in fetch

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.

fetch("https://apii.github.com/users/charanjeetkaur72")
  .then((response) => {
    console.log(
      "Error Handling using .catch(): fetch api to request data from an invalid URL"
    );
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message to the console.
async function fetchDataAsync() {
  try {
    console.log(
      "Error Handling in asunc function using try-catch block: fetch api to request data from an invalid URL"
    );

    const response = await fetch(
      "https://apii.github.com/users/charanjeetkaur72"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync();
