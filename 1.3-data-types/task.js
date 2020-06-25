'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
	if (isNaN(percent)) {
    	return `Параметр <Процентная ставка> содержит неправильное значение <${percent}>`;
	};

	if (isNaN(contribution)) {
		return `Параметр <Начальный взнос> содержит неправильное значение <${contribution}>`;
	};
	
	if (isNaN(amount)) {
		return `Параметр <Общая стоимость> содержит неправильное значение <${amount}>`;
	};
	

    let creditAmount = amount - contribution; 
    let creditMonth = Math.round((date - new Date()) / (30 * 24 * 1000 * 3600)); 
    let p = (1 / 12) * (percent / 100);
    let paymentMonth = creditAmount * (p + p / (Math.pow((1 + p), creditMonth) - 1));
    let totalAmount = paymentMonth * creditMonth;
    totalAmount = Number(totalAmount.toFixed(2));
    console.log(totalAmount);

    return totalAmount;
}

function getGreeting(name) {
    console.log(`Привет, мир! Меня зовут ${name || 'Аноним'}`);
    return (`Привет, мир! Меня зовут ${name || 'Аноним'}`);
}
