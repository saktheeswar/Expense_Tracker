const transactionContainer = document.querySelector(".Transaction");
const viewTransactionsBtn = document.getElementById("viewTransactionsBtn"); // Optional button
const transactionForm = document.getElementById("transactionForm");

const transactions = []; // Replace with your existing logic for storing transactions


function addIncome() {
  // Get the input value
  const incomeInput = document.getElementById('incomeInput');
  const incomeValue = parseFloat(incomeInput.value);

  // Get the current total income
  const totalIncomeSpan = document.getElementById('Income');
  let currentTotal = parseFloat(totalIncomeSpan.textContent.replace('₹', ''));

  // Calculate the new total
  const newTotal = currentTotal + incomeValue;

  // Update the total income display
  totalIncomeSpan.textContent = '₹' + newTotal.toFixed(2);

  // Clear the input field
  incomeInput.value = '';
}

function displayTransactions() {
  const transactionList = document.getElementById("transactionList");
  transactionList.innerHTML = "";

  for (const transaction of transactions) {
    const transactionItem = document.createElement("div");
    transactionItem.classList.add("transaction-item");

    // Create elements for each transaction property (category, amount, date, description)
    const categoryElement = document.createElement("p");
    categoryElement.textContent = transaction.category;
    // ... similar code for amount, date, and description elements

    transactionItem.appendChild(categoryElement);
    // ... append other elements to transactionItem

    transactionList.appendChild(transactionItem);
  }
}






