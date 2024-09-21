
document.getElementById('calculate').addEventListener('click',function(){
   
    document.getElementById('total-expenses').innerText = totalExpences().toFixed(2);
    document.getElementById('balance').innerText = balance().toFixed(2);

    const div = document.createElement('div');
    div.classList.add('bg-white','p-3','border-l-2','border-indigo-500')
    div.innerHTML = `
    <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-500">Income: $${getInputFieldById('income')}</p>
    <p class="text-xs text-gray-500">Expenses: $${totalExpences()}</p>
    <p class="text-xs text-gray-500">Balance: $${balance()}</p>
    `
    document.getElementById('history-list').prepend(div);
 
})

document.getElementById('calculate-savings').addEventListener('click',function(){

    document.getElementById('savings-amount').innerText = savings().toFixed(2);
    document.getElementById('remaining-balance').innerText = remainingBalance().toFixed(2);

})
