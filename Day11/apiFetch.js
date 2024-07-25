// Activity 4: Fetching data from an API

// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promise

fetch("https://api.github.com/users/charanjeetkaur72")
  .then((response) => {
    return response.json();
  })
  .then((userData) => {
    console.log("API Data using fetch with Promise :");
    console.log(userData);
  })
  .catch((error) => {
    console.log(error);
  });

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await

async function getAPIData() {
  try {
    const respone = await fetch(
      "https://api.github.com/users/charanjeetkaur72"
    );
    const data = await respone.json();
    console.log("API Data using fetch with Async/wait :");
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

getAPIData();
