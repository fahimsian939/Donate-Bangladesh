

const historyPage = document.getElementById('history-btn')
const donationPage = document.getElementById('donation-btn')

document.getElementById('history-btn').addEventListener('click' ,function(){
    document.getElementById('donate-box').classList.add('hidden')
    document.getElementById('history-box').classList.remove('hidden')


    historyPage.classList.add('bg-[#B4F461]');
    donationPage.classList.remove('bg-[#B4F461]');

 
})

document.getElementById('donation-btn').addEventListener('click' , function(){

    document.getElementById('donate-box').classList.remove('hidden')
    document.getElementById('history-box').classList.add('hidden')


    historyPage.classList.remove('bg-[#B4F461]');
    donationPage.classList.add('bg-[#B4F461]');
})

