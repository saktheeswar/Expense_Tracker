const transactionContainer = document.querySelector(".Transaction");
const viewTransactionsBtn = document.getElementById("viewTransactionsBtn"); // Optional button
const transactionForm = document.getElementById("transactionForm");

const transactions = []; // Replace with your existing logic for storing transactions


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





