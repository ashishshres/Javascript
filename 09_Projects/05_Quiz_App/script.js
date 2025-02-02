document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  let currentQuestion = 0;
  let score = 0;

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questionText.textContent = questions[currentQuestion].question;
    choicesList.innerHTML = "";
    questions[currentQuestion].choices.forEach((choice) => {
      let li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => {
        let list = document.getElementsByTagName("li");
        for (let i = 0; i < list.length; i++) {
          list[i].classList.remove("active");
        }
        li.classList.add("active");
        selectAnswer(choice);
      });
      choicesList.appendChild(li);
    });
  }

  let count = 0;
  function selectAnswer(choice) {
    let correctAnswer = questions[currentQuestion].answer;
    if (choice === correctAnswer) {
      count = 1;
    } else {
      count = 0;
    }
    nextBtn.classList.remove("hidden");
  }

  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    score += count;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  function showResult() {
    resultContainer.classList.remove("hidden");
    questionContainer.classList.add("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }

  restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    startBtn.classList.remove("hidden");
    resultContainer.classList.add("hidden");
  });

  startBtn.addEventListener("click", startQuiz);
});
