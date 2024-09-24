
function getTextElementValueById(id) {
    const elementValue = parseFloat(document.getElementById(id).innerText)
    return elementValue;
}


function creatHistory(amount, placeName) {
    const date = new Date();
    let text = date.toString();

    const historyContainer = document.getElementById('history-container');
    const div = document.createElement('div');
    div.innerHTML = `
    <div class="flex flex-col gap-5 items-start">
        <div class="w-full bg-white shadow-lg rounded-lg p-6 border mb-2">
          
          <h1 class="text-xl font-semibold text-gray-800">
              ${amount} Taka is ${placeName}
          </h1>
          <p class="text-sm text-gray-500 mt-3">
              Date: ${text}
          </p>
      </div>
      </div>
    `

    historyContainer.appendChild(div);

}



document.getElementById('donation-button').addEventListener('click', function(){
    console.log('hello')
       showElement('donation-section')
   })
   
   document.getElementById('history-button').addEventListener('click', function(){
    console.log('done')
       showElement('history-container')
   })

   function showElement(id){
    document.getElementById('history-container').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}