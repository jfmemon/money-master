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
    }else if(isNaN(totalExpenses)) {
        alert("Empty field not allow.");
    }
    else{
        totalExpenseAmount.innerText = totalExpenses;
    }
    // console.log(totalExpenses);
    const balanceAmount = document.getElementById('balance-text');
    const remainingBalance = inputValue - totalExpenses;
    if(remainingBalance < 0) {
        alert("Balance can't be negative");
    }else if(isNaN(remainingBalance)) {
        alert("Empty field can't be empty.");
    }
    else{
        balanceAmount.innerText = remainingBalance;
    }
})



document.getElementById('save-button').addEventListener('click', function() {
    const saveInputField = document.getElementById('save-input');
    const saveInputText = saveInputField.value;
    const saveInputInt = parseFloat(saveInputText);
    let saveInputPercentage;
    if(saveInputInt > 100) {
        alert("Saving rate can't be more than 100");
    }else if(saveInputField.value == '') {
        alert("Saving rate input field can't be empty.");
    }
    else{
        saveInputPercentage = saveInputInt / 100;
    }
    const incomeInputValue = getInputValue('income-input');
    let savingAmount = incomeInputValue * saveInputPercentage;
    const savingAmountField = document.getElementById('saving-amount');
    

    const totalExpenses = getTotalExpenses();
    const inputValue = getInputValue('income-input');
    let remainingBalance = inputValue - totalExpenses;
    const remainingBalanceAmount = remainingBalance - savingAmount;
    const remainingBalanceAfterSavings = document.getElementById('remaining-balance');
    if(savingAmount > remainingBalance){
        alert("Saving amount can't be more than remaining balance.");
    }else if(saveInputField.value == '') {
        alert("Saving rate input field can't be empty.");
    }else if(isNaN(savingAmount)){
        alert("Oops");
    }else if(isNaN(remainingBalanceAmount)) {
        alert("Oops");
    }
    else{
        savingAmountField.innerText = savingAmount;
        remainingBalanceAfterSavings.innerText = remainingBalanceAmount;
    }
    // console.log(savingAmount);
});