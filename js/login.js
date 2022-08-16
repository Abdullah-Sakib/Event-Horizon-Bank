document.getElementById('submit-btn').addEventListener('click', function(){
  // get the email and password feild 
  const emailFeild = document.getElementById('email-feild').value;
  const passwordFeild = document.getElementById('password-feild').value;
  if(emailFeild === 'event@horizon.com' && passwordFeild === 'eventhorizon'){
    window.location.href = 'bank.html'
  }
  else{
    alert('Invalid User');
  }
})