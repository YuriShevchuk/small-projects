const balance = document.querySelector("#balance");
const money_plus = document.querySelector("#money-plus");
const money_minus = document.querySelector("#money-minus");
const list = document.querySelector("#list");
const text = document.querySelector("#text");
const amount = document.querySelector("#amount");

const dummyTransactions = [
	{ id: 1, text: "Flower", amount: -20 },
	{ id: 2, text: "Salary", amount: 300 },
	{ id: 3, text: "Book", amount: -10 },
	{ id: 4, text: "Camera", amount: -150 },
];

let transactions = dummyTransactions;

// Add transactions to DOM list
function addTransactionDOM(transaction) {
	const sign = transaction.amount < 0 ? "-" : "+";

    const item = document.createElement('li');
    //add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn">x</button>
    `;
    list.appendChild(item);
}

function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
}

init();