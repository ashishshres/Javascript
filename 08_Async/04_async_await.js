function fetchPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post fetched successfully");
    }, 2000);
  });
}

function fetchComment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment fetched successfully");
    }, 4000);
  });
}

async function fetchBlog() {
  try {
    // const post = await fetchPost()
    // const comment = await fetchComment()
    // console.log(post);
    // console.log(comment);
    const [post, comment] = await Promise.all([fetchPost(), fetchComment()]);
    console.log(post);
    console.log(comment);
  } catch (error) {
    console.log(error);
  }
}

fetchBlog();
