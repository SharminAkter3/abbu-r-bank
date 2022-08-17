//step-1 add event lisener to the deposite button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposite button click')

    //step : 2 => get the deposit amount from the deposit input field
    //for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposite-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // console.log(depositAmount);

    //step -3 => get the current deposite total
    // for non-input (element other than input, textarea) use innerText to get the text 
    const depositTotalElement = document.getElementById('total-deposit');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // console.log(depositTotal);
    //step -4 => add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //step - 5 => get balance total

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalaceTotalString = balanceTotalElement.innerText;
    const previousBalaceTotal = parseFloat(previousBalaceTotalString);

    //step -6 => calculate current balance 
    const currentBalace = previousBalaceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalace;
    //step-4 => clear the deposite field
    depositField.value


})