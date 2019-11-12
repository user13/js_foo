'use strict';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

let money = prompt("Set budget per month: ", "500");
let time = prompt("Set time:" , today);
let expenses = [];

for (let i = 0; i < 2; i++) { 
    let expenseName = prompt("Type expense: ", "f.e. Rent an appartment");
    let expenseValue = prompt("What price?" , "100");
    expenses.push({key: expenseName, value: expenseValue});
}

let appData = {
    "money" : money,
    "timeData" : time,
    "expenses": expenses,
    "optionalExpenses": {},
    "income": {},
    "savings": false
};

let sum = 0;
for (let i = 0; i<appData.expenses.length; i++){
    sum = sum + parseInt(appData.expenses[i].value);
}
let budgetPerDay = (money - sum)/30;
if (budgetPerDay >= 0){
    alert('Budget per day: ' + budgetPerDay);
} else if (budgetPerDay<0){
    alert('You spend to much money in this month');
}
