function getInputValue(inputId) {
    const incomeInputField = document.getElementById(inputId);
    const incomeInputText =  incomeInputField.value;
    const incomeInputInt = parseInt(incomeInputText);
    return incomeInputInt;
}

function getTotalExpenses() {
    const foodInput = getInputValue('food-input');
    const foodInputInt = parseInt(foodInput);
    const rentInput = getInputValue('rent-input');
    const rentInputInt = parseInt(rentInput);
    const clothsInput = getInputValue('cloths-input');
    const clothsInputInt = parseInt(clothsInput);
    const totalExpenses = foodInputInt + rentInputInt + clothsInputInt;
    const totalExpensesInt = parseInt(totalExpenses);
    return totalExpensesInt;
}

document.getElementById('calculate-button').addEventListener('click', function() {
    const totalExpenses = getTotalExpenses();
    const totalExpenseAmount = document.getElementById('total-expenses');
    totalExpenseAmount.innerText = totalExpenses;
    // console.log(totalExpenses);
    const balanceAmount = document.getElementById('balance-text');
    const inputValue = getInputValue('income-input');
    const remainingBalance = inputValue - totalExpenses;
    balanceAmount.innerText = remainingBalance;
})


document.getElementById('save-button').addEventListener('click', function() {
    console.log('Save button clicked');
});