function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data is fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 4000);
  });
}

// let response = fetchData();
// console.log(response);

// Promise chaining
fetchData()
  .then((response) => {
    console.log(response);
    return response.toUpperCase();
  })
  .then((msg) => {
    console.log(msg);
  })
  .catch((error) => {
    console.log(error);
  });
