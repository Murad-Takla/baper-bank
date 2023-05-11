document.getElementById('submit-btn').addEventListener('click' , function(){
    const emailField = document.getElementById('email-login')
    const emailText = emailField.value
    
    emailField.value = '';

    const pass = document.getElementById('password') ; 
    const passText = pass.value;
    pass.value ='';
    
    if (emailText==='irfan@gmail.com' && passText==='secret')
    {
        window.location.href = "bank.html";
    }
    else{
        alert('Your email or password is not correct')
        

    }
})
// console.log('THIS IS YOU MAIN PART')