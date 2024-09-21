
function getInputFieldById(id){
    const inputValue = parseFloat(document.getElementById(id).value);
    return inputValue;
}

function totalExpences(){
    const income = getInputFieldById('income');
    const software = getInputFieldById('software');
    const courses = getInputFieldById('courses');
    const internet = getInputFieldById('internet');
    const totalExpences = software + courses +internet;
    return totalExpences;
}

function balance(){
    const income = getInputFieldById('income');
    const expenses = totalExpences();
    const balance = income -expenses;
    return balance;
}

function savings(){
    const savingsPercentage = getInputFieldById('savings');
    const accountBalance = balance();
    const savingsAmount = (savingsPercentage * accountBalance) / 100;
    return savingsAmount;
}

function remainingBalance(){
    const currentBalance = balance();
    const savingsAmount = savings();
    const output = currentBalance - savingsAmount;
    return output;
}