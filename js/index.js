







// Validate the donation amount:
// If the donation amount is greater than the account balance.
// If the input field contains an invalid number.
// If the input field is empty.



       



    document.getElementById('donate-btn-1').addEventListener('click' ,function(){

        const donateInput1 = parseFloat(document.getElementById('donate-input-1').value);
        const donateBalance1 = document.getElementById('donate-balance-1');
        const coinDonateAmount = document.getElementById('donate-balance');
    
        let floatDonateBalance1 = parseFloat(donateBalance1.innerText);
        let totalDonate1 =  donateInput1 + floatDonateBalance1 ;
        donateBalance1.innerText = totalDonate1;

        
        let floatCoinDonateAmount = parseFloat(coinDonateAmount.innerText);
        let afterDonateAmount = floatCoinDonateAmount - donateInput1 ;

        coinDonateAmount.innerText = afterDonateAmount;

        
        
        if(donateInput1>coinDonateAmount.innerText){
            alert("Donation amount is greater than the account balance.");
        }

        else if()



    })


    document.getElementById('donate-btn-2').addEventListener('click' ,function(){

        const donateInput2 = parseFloat(document.getElementById('donate-input-2').value);
        const donateBalance2 = document.getElementById('donate-balance-2');
        const coinDonateAmount = document.getElementById('donate-balance');
    
        let floatDonateBalance2 = parseFloat(donateBalance2.innerText);
        let totalDonate2 =  donateInput2 + floatDonateBalance2 ;
        donateBalance2.innerText = totalDonate2;

        
        let floatCoinDonateAmount = parseFloat(coinDonateAmount.innerText);
        let afterDonateAmount = floatCoinDonateAmount - donateInput2 ;

        coinDonateAmount.innerText = afterDonateAmount;




    })





    document.getElementById('donate-btn-3').addEventListener('click' ,function(){

        const donateInput3 = parseFloat(document.getElementById('donate-input-3').value);
        const donateBalance3 = document.getElementById('donate-balance-3');
        const coinDonateAmount = document.getElementById('donate-balance');
    
        let floatDonateBalance3 = parseFloat(donateBalance3.innerText);
        let totalDonate3 =  donateInput3 + floatDonateBalance3 ;
        donateBalance3.innerText = totalDonate3;

        
        let floatCoinDonateAmount = parseFloat(coinDonateAmount.innerText);
        let afterDonateAmount = floatCoinDonateAmount - donateInput3 ;

        coinDonateAmount.innerText = afterDonateAmount;




    })











    

    
