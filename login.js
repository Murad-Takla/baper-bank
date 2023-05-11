document.getElementById('submit-btn').addEventListener('click' , function(){
    const emailField = document.getElementById('email-login').value
    const pass = document.getElementById('password').value
    
    if (emailField==='irfan@gmail.com' && pass==='secret')
    {
        window.location.href = "bank.html";
    }
    else{
        alert('Your email or password is not correct')
    }
})
// console.log('THIS IS YOU MAIN PART')