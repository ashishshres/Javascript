// Promises
function fetchData() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let success = false;
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

fetchData()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
