// example 1
// document.getElementById("clickMeButton").addEventListener("click", function () {
//   alert("hello");
// });

// document
//   .getElementById("clickMeButton")
//   .addEventListener("dblclick", function () {
//     alert("hello");
//   });

document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("hello");
  });

// example 2
document.getElementById("teaList").addEventListener("click", function (event) {
  // console.log(event);
  // console.log(event.target);
  if (event.target && event.target.matches(".teaItem")) {
    console.log(`You selected ${event.target.textContent}`);
  }
});

// example 3
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput");
    // console.log(feedback);
    // console.log(feedback.value);
    // let label = document.getElementsByTagName("label");
    // console.log(label);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback: ${feedback.value}`;
  });

// example 4
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM fully loaded";
});

// example 5
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });
