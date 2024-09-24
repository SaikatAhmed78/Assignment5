


const modalSec = document.getElementById('section-modal');

const donateBtn = document.getElementsByClassName('donate-now-btn');

for (let donate of donateBtn) {
    donate.addEventListener('click', function (event) {

        const myBalance = getTextElementValueById('account');
        const donateAmaount = parseFloat(event.target.parentNode.parentNode.childNodes[1].childNodes[3].innerText)
        const inputAmount = parseFloat(event.target.parentNode.parentNode.childNodes[5].childNodes[1].value)
       
        if(isNaN(inputAmount) || myBalance < inputAmount || inputAmount <= 0 ){
            alert('Invalid Amount')
            return;
        }
        event.target.parentNode.parentNode.childNodes[1].childNodes[3].innerText = donateAmaount + inputAmount;

        
        document.getElementById('account').innerText = myBalance - inputAmount;

        const donatePlace = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText 
        modalSec.showModal()

        event.target.parentNode.parentNode.childNodes[5].childNodes[1].value = ''
        creatHistory(inputAmount, donatePlace)

    })
}




   document.getElementById('donation-button').addEventListener('click', function(){

    document.getElementById('donation-button').classList.add('bg-[#B4F461]');
    document.getElementById('history-button').classList.remove('bg-[#B4F461]');
    
   })
 
   document.getElementById('history-button').addEventListener('click', function(){

    document.getElementById('donation-button').classList.remove('bg-[#B4F461]');
    document.getElementById('history-button').classList.add('bg-[#B4F461]');
    
   })

   document.getElementById('donation-button').addEventListener('click', function(){
       showElement('donation-section')
   })
   
   document.getElementById('history-button').addEventListener('click', function(){
       showElement('history-container')
   })



