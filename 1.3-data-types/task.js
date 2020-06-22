'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
	
    let creditAmount = amount - contribution; 
    let creditMonth = Math.round((date - new Date()) / (30 * 24 * 1000 * 3600)); 
    let p = (1 / 12) * (percent / 100);
    let paymentMonth = creditAmount * (p + p / (Math.pow((1 + p), creditMonth) - 1));
    let totalAmount = paymentMonth * creditMonth;
    totalAmount = Number(totalAmount.toFixed(2));
    console.log(totalAmount)

    return totalAmount;
}

function getGreeting(name) {
    let greeting 
    if (name) {
    	greeting = `Привет, мир! Меня зовут ${name}`;
    } else {
    	greeting = 'Привет, мир! Меня зовут Аноним';
    }

    console.log(greeting);
    return greeting;
}