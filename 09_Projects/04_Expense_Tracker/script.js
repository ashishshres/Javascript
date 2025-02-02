document.addEventListener("DOMContentLoaded", () => {
  let expenseForm = document.getElementById("expense-form");
  let expenseNameInput = document.getElementById("expense-name");
  let expenseAmountInput = document.getElementById("expense-amount");
  let expenseList = document.getElementById("expense-list");
  let totalAmountDisplay = document.getElementById("total-amount");

  let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  let totalAmount = calculateTotal();
  renderExpenses();

  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let expenseName = expenseNameInput.value.trim();
    let expenseAmount = parseFloat(expenseAmountInput.value);

    if (expenseName !== "" && !isNaN(expenseAmount) && expenseAmount > 0) {
      let newExpense = {
        id: Date.now(),
        name: expenseName,
        amount: expenseAmount,
      };
      expenses.push(newExpense);
      console.log(expenses);
      saveExpenses();
      renderExpenses();
      updateTotal();
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  function updateTotal() {
    totalAmount = calculateTotal();
    totalAmountDisplay.textContent = totalAmount.toFixed(2);
  }

  function renderExpenses() {
    expenseList.innerHTML = "";
    expenses.forEach((expense) => {
      let li = document.createElement("li");
      li.innerHTML = `
        ${expense.name} -$${expense.amount}
        <button data-id="${expense.id}">Remove</button>
      `;
      expenseList.appendChild(li);
    });
  }

  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let expenseId = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== expenseId);
      saveExpenses();
      renderExpenses();
      updateTotal();
    }
  });

  function saveExpenses() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }
});
