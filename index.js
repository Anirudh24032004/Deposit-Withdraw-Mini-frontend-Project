let amount = 0;
const balanceDisplay = document.getElementById('current-balance-display');

if(balanceDisplay){
    balanceDisplay.innerHTML = '₹'+amount.toFixed(2);
}

function deposit(){
    const depositInput = document.getElementById('deposit-amount');
    const depositAmount = parseFloat(depositInput.value);

    if(isNaN(depositAmount) || depositAmount<=0){
        alert("Please enter a valid deposit amount.")
        return;
    }

    amount = amount + depositAmount;

    document.getElementById('current-balance-display').innerHTML = '₹'+ amount.toFixed(2);

    depositInput.value="";
}

function withdraw(){
    const withdrawInput = document.getElementById('withdraw-amount');
    const withdrawAmount = parseFloat(withdrawInput.value);

    if(isNaN(withdrawAmount) || withdrawAmount<=0){
        alert("Please enter a valid withdrawal amount.")
        return;
    }

    if(withdrawAmount>amount){
        alert("Insufficient balance !! Do hardWork Earn Money")
        return;
    }

    amount = amount - withdrawAmount;
    document.getElementById('current-balance-display').innerHTML = '₹'+amount.toFixed(2);

    withdrawInput.value="";
}   