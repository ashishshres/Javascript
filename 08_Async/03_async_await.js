// Async and Await
function fetchUserData() {
  return new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      setTimeout(() => {
        resolve({
          name: "user",
          profile: "https://user.profile.com",
        });
      }, 4000);
    } else {
      reject("Error fetching user data");
    }
  });
}

async function getUserData() {
  try {
    console.log("fetching user data...");
    let response = await fetchUserData();
    console.log("User data is fetched successfully");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

getUserData();
