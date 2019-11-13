'use strict';

let appData = {
    "money" : 0,
    "timeData" : '',
    "expenses": [],
    "optionalExpenses": [],
    "savings": true
};

function start(){
    let money;

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    
    do {
        money = +prompt("Set budget per month: ", "500");
    } while(money == '' || money == null || isNaN(money));

    appData.money = money;
    appData.timeData = prompt("Set time:" , today);
}

function chooseExpenses(){
    let expenses = [];
    for (let i = 0; i < 2; i++) { 
        let expenseName = prompt("Type expense: ", "f.e. Rent an appartment");
        let expenseValue;

        do {
            expenseValue = +prompt("What price?" , "100");
        } while(expenseValue == '' || expenseValue == null || isNaN(expenseValue));
        expenses.push({key: expenseName, value: expenseValue});
    }
    appData.expenses = expenses;
}

function checkSavings(){
    if (appData.savings){
        let save;
        let persent;
        do {
            save = +prompt('What value of deposit?', 10000);
            persent = +prompt('What persent for deposit?', 12);
        } while(save == '' || save == null || isNaN(save) || persent == '' || persent == null || isNaN(persent) || persent < 0 || persent > 100);
        
        appData.monthIncome = save/100/12*persent;
        console.log('Ammount of income form deposit per month is: ' + appData.monthIncome);
    }
}

function detectDayBudget(){
    let sum = 0;
    let budgetPerDay; 
    for (let i = 0; i<appData.expenses.length; i++){
        sum = sum + appData.expenses[i].value;
    }
    budgetPerDay = ((appData.money - sum)/30).toFixed(1);
    appData.budgetPerDay = budgetPerDay;
    if (budgetPerDay >= 0){
        console.log('Budget per day: ' + budgetPerDay);
    } else if (budgetPerDay<0){
        console.log('You spend to much money in this month' + budgetPerDay);
    }
}

function detectLevel(){
    if (appData.budgetPerDay < 100){
        console.log('Low level of income');
    }else if (appData.budgetPerDay >= 100 && appData.budgetPerDay < 2000){
        console.log('Medium level of income');
    }else if (appData.budgetPerDay >= 2000){
        console.log('High level of income');
    }else {
        console.log('Erorr of detecting level');
    }
}


function chooseOptExpenses(){
    let optionalExpenses = [];
    for (let i = 0; i < 3; i++) { 
        let expenseName = prompt("Type opt expense: ", "f.e. Opt expense 1");
        let expenseValue;

        do {
            expenseValue = +prompt("What price?" , "10");
        } while(expenseValue == '' || expenseValue == null || isNaN(expenseValue));
        optionalExpenses.push({key: expenseName, value: expenseValue});
    }
    appData.optionalExpenses = optionalExpenses;
}




start();
chooseExpenses();
checkSavings();
detectDayBudget();
detectLevel();
chooseOptExpenses();