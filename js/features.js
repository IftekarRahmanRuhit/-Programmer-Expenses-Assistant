
document.getElementById('calculate').addEventListener('click',function(){
    document.getElementById('results').classList.remove('hidden');
})

document.getElementById('history-tab').addEventListener('click',function(){
    document.getElementById('history-tab').classList.add(
        'text-white','bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

        document.getElementById('assistant-tab').classList.remove( 
            'text-white','bg-gradient-to-r', 'from-blue-500', 'to-purple-600'
        );
        document.getElementById('expense-form').classList.add('hidden');
        document.getElementById('results').classList.remove('hidden');
        document.getElementById('history-section').classList.remove('hidden');
        document.getElementById('history-list').classList.remove('hidden');

})

document.getElementById('assistant-tab').addEventListener('click',function(){
    document.getElementById('assistant-tab').classList.add(
        'text-white','bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

        document.getElementById('history-tab').classList.remove( 
            'text-white','bg-gradient-to-r', 'from-blue-500', 'to-purple-600'
        );
        
        document.getElementById('expense-form').classList.remove('hidden');
        document.getElementById('results').classList.add('hidden');
        document.getElementById('history-section').classList.add('hidden');
        document.getElementById('history-list').classList.add('hidden');
})