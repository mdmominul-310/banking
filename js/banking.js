function inputId(input) {
    const inputField = document.getElementById(input);
    const amount = parseFloat(inputField.value);
    inputField.value = '';
    return amount;
}

function updateAmount(input, updateValue) {
    const updateField = document.getElementById(input);
    const prevAmount = parseFloat(updateField.innerText);
    const newAmount = prevAmount + updateValue;
    updateField.innerText = newAmount;
}

function updateBalance(depositAmount, isAdd) {
    const accountBalance = document.getElementById('account-balance');
    const balanceAmount = parseFloat(accountBalance.innerText);

    if (isAdd == true) {
        accountBalance.innerText = balanceAmount + depositAmount;
    }
    else {
        const newBalance = balanceAmount - depositAmount;
        accountBalance.innerText = newBalance
    }
    ;


}

document.getElementById('deposit-btn').addEventListener('click', function () {
    // get deposit money
    const depositAmount = inputId('deposit-input');
    if (depositAmount > 0) {
        updateAmount('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    else {
        window.alert('please input currect amount');
    }

    // show the balance amount 
    // const accountBalance = document.getElementById('account-balance');
    // const balanceAmount = parseFloat(accountBalance.innerText);
    // console.log(balanceAmount);
    // const newBalance = balanceAmount + depositAmount;
    // accountBalance.innerText = newBalance;

})
// widraw amount 
document.getElementById('widrow-btn').addEventListener('click', function () {
    //    get the widraw balance 
    widrawAmount = inputId('widraw-input');


    if (widrawAmount > 0) {
        updateAmount('widraw-amount', widrawAmount);
        updateBalance(widrawAmount, false);
    }
    else {
        window.alert('please input correct amount');
    }


})