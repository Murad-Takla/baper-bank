document.getElementById('deposite-btn').addEventListener('click' , function(){
     
    const depositeField = document.getElementById('deposite');
    const depositeAmount = parseFloat ( depositeField.value );
    
    const totalDeposite = document.getElementById('total-deposite');
    const totalDepositeAmount = parseFloat (totalDeposite.innerText) ;

    totalDeposite.innerText = totalDepositeAmount + depositeAmount 
     
    const totalBalance =document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat ( totalBalance.innerText);

    totalBalance.innerText = parseFloat(totalBalanceAmount)  + depositeAmount 


    depositeField.value = '';
})


document.getElementById('withdraw-btn').addEventListener('click' , function(){
   
    const withdrawField = document.getElementById('withdraw') ; 
    const withdrawAmount =   parseFloat (withdrawField.value);

    const totalBalance =document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat ( totalBalance.innerText);

     withdrawField.value = '';

    if(totalBalanceAmount < withdrawAmount){
        alert('Tomar Baaper Banker taka sesh kore felso');
        return;
    }
    
    const totalWithdarw = document.getElementById('total-withdraw');
    const totalWithdarwAmount = parseFloat(totalWithdarw.innerText);

    totalWithdarw.innerText= withdrawAmount + totalWithdarwAmount ; 

    totalBalance.innerText = totalBalanceAmount -  withdrawAmount ;
    
})