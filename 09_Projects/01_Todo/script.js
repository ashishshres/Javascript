document.addEventListener("DOMContentLoaded", () => {
  let todoInput = document.getElementById("todo-input");
  let addTaskBtn = document.getElementById("add-task-btn");
  let todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => {
    renderTask(task);
  });

  // Create task
  addTaskBtn.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskText,
      isCompleted: false,
    };

    tasks.push(newTask);
    saveTasks();
    renderTask(newTask);
    todoInput.value = "";
    console.log(tasks);
  });

  // Display task
  function renderTask(task) {
    let li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.isCompleted) {
      li.classList.add("completed");
    }
    li.innerHTML = `
    <span>${task.text}</span>
    <button>delete</button> 
    `;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        return;
      } else {
        task.isCompleted = !task.isCompleted;
        li.classList.toggle("completed");
        saveTasks();
      }
    });

    // Remove task
    li.querySelector("button").addEventListener("click", (e) => {
      e.stopPropagation(); // prevent toggle from firing
      tasks = tasks.filter((t) => {
        return t.id !== task.id;
      });
      li.remove();
      saveTasks();
    });

    todoList.appendChild(li);
  }

  // Save task
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
