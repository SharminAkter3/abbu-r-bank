// 1. add event handler with the wjidthDraw input 
// 2. get the withdraw amount from the withdraw input field
// 2.5 also make sure to convert the input into a number by using prasefloat
//3. get previous withdraw total

//4. calculate total withdraw amount 
//4.5 => set total withdraw element

//5. => get the total previous balance

//6 => calculate total balace 
// 6.5 => set the total new balance 

//7. clear the input field


// step-1 => 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //step-2 =>
    const withdrawField = document.getElementById('widthdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);

    // step-3  
    const withdrawTotalElement = document.getElementById('total-withdraw');
    const previousWithdrawString = withdrawTotalElement.innerText;

    // const previousWithdrawString = withdrawtotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);


    //step-5 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalaceTotal = parseFloat(previousBalanceTotalString);

    // step -7 
    withdrawField.value = '';


    if (newWithDrawAmount > previousBalaceTotal) {
        alert('Abbu r bank e ottho taka naii');
        return;
    }


    //step-4 

    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step-6
    const newBalaceTotal = previousBalaceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalaceTotal;



})
