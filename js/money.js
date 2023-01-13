function getInputValue(inputId) {
    const incomeInputField = document.getElementById(inputId);
    const incomeInputText =  incomeInputField.value;
    const incomeInputInt = parseInt(incomeInputText);
    if(incomeInputInt < 0) {
        alert('Negative number not allow.');
    }else if(incomeInputText == ''){
        alert('You have to fill up all the input field.');
    }
    else{
        return incomeInputInt;
    }
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
    const inputValue = getInputValue('income-input');
    const totalExpenseAmount = document.getElementById('total-expenses');
    if(totalExpenses > inputValue) {
        alert("Total expenses can't be more than income.");
    }else{
        totalExpenseAmount.innerText = totalExpenses;
    }
    // console.log(totalExpenses);
    const balanceAmount = document.getElementById('balance-text');
    const remainingBalance = inputValue - totalExpenses;
    if(remainingBalance < 0) {
        alert("Balance can't be negative");
    }else{
        balanceAmount.innerText = remainingBalance;
    }
})



document.getElementById('save-button').addEventListener('click', function() {
    const saveInputField = document.getElementById('save-input');
    const saveInputText = saveInputField.value;
    const saveInputInt = parseFloat(saveInputText);
    const saveInputPercentage = saveInputInt / 100;
    const incomeInputValue = getInputValue('income-input');
    const savingAmount = incomeInputValue * saveInputPercentage;
    const savingAmountField = document.getElementById('saving-amount');
    savingAmountField.innerText = savingAmount;

    const totalExpenses = getTotalExpenses();
    const balanceAmount = document.getElementById('balance-text');
    const inputValue = getInputValue('income-input');
    const remainingBalance = inputValue - totalExpenses;
    const remainingBalanceAmount = remainingBalance - savingAmount;
    const remainingBalanceAfterSavings = document.getElementById('remaining-balance');
    remainingBalanceAfterSavings.innerText = remainingBalanceAmount;
    // console.log(savingAmount);
});