







// Validate the donation amount:
// If the donation amount is greater than the account balance.
// If the input field contains an invalid number.
// If the input field is empty.

// document.getElementById('donate-btn-1').addEventListener('click', function(e){
//     e.preventDefault();
//     const donateInput1 = parseFloat(document.getElementById('donate-input-1').value);
//     const donateBalance1 = document.getElementById('donate-balance-1');
//     const coinDonateAmount = document.getElementById('coin-balance');

//     if(donateInput1 <= 0 ){
//         alert('Please enter an amount greater than zero.');
//         document.getElementById('my_modal_1').close();
//     }

//     else if (isNaN(donateInput1)){
//         alert('Invalid Donation Amount');
//         document.getElementById('my_modal_1').close();
//     }

//     else if (coinDonateAmount.innerText < donateInput1) {
//         alert('donation amount is greater than the account balance');
//         document.getElementById('my_modal_1').close();
//     }
    
//     else {
//     // input section code
//     let floatDonateBalance = parseFloat(donateBalance1.innerText);
//     let totalDonate =  donateInput1 + floatDonateBalance ;
//     donateBalance1.innerText = totalDonate;

//     let floatCoinDonateAmount = parseFloat(coinDonateAmount.innerText);
//     let afterTotalDonate = floatCoinDonateAmount - donateInput1 ;
//     coinDonateAmount.innerText = afterTotalDonate;


//         // history section code 
//         const donationSubject = document.getElementById('donation-subject').innerText;
//         const historyItem = document.createElement("div");
    
//         historyItem.className ="bg-white rounded-lg border border-[#e8e8e8] p-6 border-2 shadow-sm ";
        
//         historyItem.innerHTML= `
//         <p class="font-bold px-3 py-2 "> ${donateInput1} Taka is donated for ${donationSubject}</p>
//         <p class="text-pText px-3 "> Date: ${new Date()}</p>`;
    
//         const historyContainer = document.getElementById("history-box");
//         historyContainer.insertBefore(historyItem, historyContainer.firstChild);
//         // history section code 
   
//     }



// })
// 1
document.getElementById('donate-btn-1').addEventListener('click', function(e) {
    e.preventDefault();
    const donateInput1 = parseFloat(document.getElementById('donate-input-1').value);
    const donateBalance1 = document.getElementById('donate-balance-1');
    const coinDonateAmount = document.getElementById('coin-balance');

    if (donateInput1 <= 0) {
        alert('Please enter an amount greater than zero.');
        document.getElementById('my_modal_1').close();
    } else if (isNaN(donateInput1)) {
        alert('Invalid Donation Amount');
        document.getElementById('my_modal_1').close();
    } else {
        // Convert innerText to float for comparison
        const floatCoinDonateAmount = parseFloat(coinDonateAmount.innerText);
        
        if (floatCoinDonateAmount < donateInput1) {
            alert('Donation amount is greater than the account balance');
            document.getElementById('my_modal_1').close();
        }
         else {
            // Input section code
            let floatDonateBalance = parseFloat(donateBalance1.innerText);
            let totalDonate = donateInput1 + floatDonateBalance;
            donateBalance1.innerText = totalDonate;

            let afterTotalDonate = floatCoinDonateAmount - donateInput1;
            coinDonateAmount.innerText = afterTotalDonate;



// history section code 
const donationSubject = document.getElementById('donation-subject-1').innerText;
const historyItem = document.createElement("div");

historyItem.className ="bg-white rounded-lg border border-[#e8e8e8] p-6 border-2 shadow-sm ";

historyItem.innerHTML= `
<p class="font-bold px-3 py-2 "> ${donateInput1} Taka is donated for ${donationSubject}</p>
<p class="text-pText px-3 "> Date: ${new Date()}</p>`;

const historyContainer = document.getElementById("history-box");
historyContainer.insertBefore(historyItem, historyContainer.firstChild);
// history section code 


        }
    }
});





// 2


document.getElementById('donate-btn-2').addEventListener('click', function(e){
    e.preventDefault();
    const donateInput2 = parseFloat(document.getElementById('donate-input-2').value);
    const donateBalance2 = document.getElementById('donate-balance-2');
    const coinDonateAmount = document.getElementById('coin-balance');

    if(donateInput2 <= 0 ){
        alert('Please enter an amount greater than zero.');
        document.getElementById('my_modal_2').close();
    }

    else if (isNaN(donateInput2)){
        alert('Invalid Donation Amount');
        document.getElementById('my_modal_2').close();
    }

    else if (coinDonateAmount.innerText < donateInput2) {
        alert('donation amount is greater than the account balance');
        document.getElementById('my_modal_2').close();
    }
    
    else {
    // input section code
    let floatDonateBalance = parseFloat(donateBalance2.innerText);
    let totalDonate =  donateInput2 + floatDonateBalance ;
    donateBalance2.innerText = totalDonate;

    let floatCoinDonateAmount = parseFloat(coinDonateAmount.innerText);
    let afterTotalDonate = floatCoinDonateAmount - donateInput2 ;
    coinDonateAmount.innerText = afterTotalDonate;


        // history section code 
        const donationSubject = document.getElementById('donation-subject-2').innerText;
        const historyItem = document.createElement("div");
    
        historyItem.className ="bg-white rounded-lg border border-[#e8e8e8] p-6 border-2 shadow-sm ";
        
        historyItem.innerHTML= `
        <p class="font-bold px-3 py-2 "> ${donateInput2} Taka is donated for ${donationSubject}</p>
        <p class="text-pText px-3 "> Date: ${new Date()}</p>`;
    
        const historyContainer = document.getElementById("history-box");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        // history section code 
   
    }



})



// 3

document.getElementById('donate-btn-3').addEventListener('click', function(e){
    e.preventDefault();
    const donateInput3 = parseFloat(document.getElementById('donate-input-3').value);
    const donateBalance3 = document.getElementById('donate-balance-3');
    const coinDonateAmount = document.getElementById('coin-balance');

    if(donateInput3 <= 0 ){
        alert('Please enter an amount greater than zero.');
        document.getElementById('my_modal_3').close();
    }

    else if (isNaN(donateInput3)){
        alert('Invalid Donation Amount');
        document.getElementById('my_modal_3').close();
    }

    else if (coinDonateAmount.innerText < donateInput3) {
        alert('donation amount is greater than the account balance');
        document.getElementById('my_modal_3').close();
    }
    
    else {
    // input section code
    let floatDonateBalance = parseFloat(donateBalance3.innerText);
    let totalDonate =  donateInput3 + floatDonateBalance ;
    donateBalance3.innerText = totalDonate;

    let floatCoinDonateAmount = parseFloat(coinDonateAmount.innerText);
    let afterTotalDonate = floatCoinDonateAmount - donateInput3 ;
    coinDonateAmount.innerText = afterTotalDonate;


        // history section code 
        const donationSubject = document.getElementById('donation-subject-3').innerText;
        const historyItem = document.createElement("div");
    
        historyItem.className ="bg-white rounded-lg border border-[#e8e8e8] p-6 border-2 shadow-sm ";
        
        historyItem.innerHTML= `
        <p class="font-bold px-3 py-2 "> ${donateInput3} Taka is donated for ${donationSubject}</p>
        <p class="text-pText px-3 "> Date: ${new Date()}</p>`;
    
        const historyContainer = document.getElementById("history-box");
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        // history section code 
   
    }



})


       



   












    

    
