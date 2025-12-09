
const mobileBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});


const successAlert = document.getElementById("successAlert");
const errorAlert = document.getElementById("errorAlert");

function showAlert(alertElement) {
    alertElement.style.display = "flex";
    setTimeout(() => {
        alertElement.style.display = "none";
    }, 3000);
}

let incomeTotal = 0;
let expenseTotal = 0;

const incomeDisplay = document.getElementById("totalIncome");
const expenseDisplay = document.getElementById("totalExpense");
const balanceDisplay = document.getElementById("totalBalance");

function updateDisplay() {
    incomeDisplay.textContent = `R$ ${incomeTotal.toFixed(2)}`;
    expenseDisplay.textContent = `R$ ${expenseTotal.toFixed(2)}`;
    balanceDisplay.textContent = `R$ ${(incomeTotal - expenseTotal).toFixed(2)}`;
}


const form = document.getElementById("transactionForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const type = document.getElementById("type").value;
    const description = document.getElementById("description").value;
    const value = parseFloat(document.getElementById("value").value);

    if (!description || !value || value <= 0) {
        showAlert(errorAlert);
        return;
    }

    if (type === "income") {
        incomeTotal += value;
    } else {
        expenseTotal += value;
    }

    updateDisplay();
    showAlert(successAlert);

    form.reset();
});
