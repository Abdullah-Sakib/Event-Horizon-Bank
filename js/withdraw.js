document.getElementById('withdraw-btn').addEventListener('click', function(){
  // get the new withdraw value 
  const withdrawFeild = document.getElementById('withdraw-input');
  const withdrawValueString = withdrawFeild.value ;
  const newWithdraw = parseFloat(withdrawValueString);

  // set the input feild empty 
  const empty = withdrawFeild.value = '';

  if(isNaN(newWithdraw)){
    alert('Plese provide a valid number');
    return;
  }

  // get the previus withdraw value
  const previsuWithdraw = document.getElementById('previus-withdraw');
  const previsuWithdrawString = previsuWithdraw.innerText;
  const previsuWithdrawValue = parseFloat(previsuWithdrawString);

  
  // get the previus total balance 
  const previusBalance = document.getElementById('previus-balance');
  const previusBalanceString = previusBalance.innerText;
  const previusTotalBalance = parseFloat(previusBalanceString);

  if(newWithdraw > previusTotalBalance){
    alert("You don't have enough Money on your account");
    return;
  }

   // set the total withdraw value
   const calculateWithdraw = previsuWithdrawValue + newWithdraw;
   const totalWithdraw = previsuWithdraw.innerText = calculateWithdraw;

  // set the total balance
  const calculateBalance = previusTotalBalance - newWithdraw;
  const totalBalance = previusBalance.innerText = calculateBalance;

})