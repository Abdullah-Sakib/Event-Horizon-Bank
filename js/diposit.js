document.getElementById('deposit-btn').addEventListener('click', function(){
  // get the new deposit value
  const newDeposit = document.getElementById('deposit-input');
  const newDepositValueString = newDeposit.value ;
  const newDepositValue = parseFloat(newDepositValueString);

  // set the input feild empty
  const empty = newDeposit.value = '';

  if(isNaN(newDepositValue)){
    alert('Plese provide a valid number');
    return;
  }

  // get the previus deposit value 
  const previusDeposit = document.getElementById('previus-deposit');
  const previusDepositString = previusDeposit.innerText;
  const previusDepositValue = parseFloat(previusDepositString);

  //set the new deposit value
  const calculate = newDepositValue + previusDepositValue;
  const setvalue = previusDeposit.innerText = calculate;

  // get the total balance value
  const previusTotalBalance = document.getElementById('previus-balance');
  const previusBalanceString = previusTotalBalance.innerText;
  const previusBalanceValue = parseFloat(previusBalanceString);

  // set total balance value after diposit
  const calculateTotalBalance = previusBalanceValue + newDepositValue;
  const totalBalance = previusTotalBalance.innerText = calculateTotalBalance;

})