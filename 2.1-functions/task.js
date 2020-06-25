'use strict';

function getSolutions(a,b,c){
	let d = Math.pow(b, 2) - (4 * a * c);
	let x;
    if (d === 0) {
    	let x1 = (-b) / (2 * a);
    	x = {
    		D: d, 
    		roots: [x1],
    	};
    } else if (d > 0) {
    	let x1 = ((-b) + Math.sqrt(d)) / (2 * a);
    	let x2 = ((-b) - Math.sqrt(d)) / (2 * a);
    	x = {
    		D: d, 
    		roots: [x1, x2],
    	};
    } else {
    	x = {
    		D: d, 
    		roots: [],
    	};
    }

    return x;
}

function showSolutionsMessage(a,b,c){
	let result = getSolutions(a,b,c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.D < 0) {
		console.log('Уравнение не имеет вещественных корней');
	} else if (result.D === 0) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
	} else if (result.D > 0) {
		console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}

function getAverageScore(data){
	if (!data) {
		return {average: 0};
	};

	function getAverageMark(marks){
		let sum = 0;
		for (let i = 0; i < marks.length; i++) {
			sum += marks[i];
		};
		if (marks.length === 0) {
			return 0;
		};

		return sum / marks.length;
	};
	let result = {};
	
	for (let lesson in data) {
		result[lesson] = getAverageMark(data[lesson]);
	};
	let averageSum = 0;
	for (let average in result) {
		averageSum += result[average];
	};
	
	result.average = averageSum / Object.keys(result).length;
		
	return result;
}

console.log(getAverageScore({
algebra : [4, 5, 5, 4],
geometry : [2, 5],
russian : [3, 3, 4, 5],
physics : [5, 5],
music : [ 2, 2, 5],
english : [4, 4, 3, 3],
poetry : [5, 3, 4],
chemistry : [2],
french : [4, 4] 
}));

function getPersonData(secretData){
	function getDecodedValue(secret){
		let name;
		if (secret === 0) {
			name = 'Родриго';
		} else if (secret === 1) {
			name = 'Эмильо';
		};
		return name;
	};

	return { 
		firstName: getDecodedValue(secretData['aaa']), 
		lastName: getDecodedValue(secretData['bbb'])
	};
};

console.log(getPersonData({
	aaa: 0,
	bbb: 0,
}));
console.log(getPersonData({
	aaa: 1,
	bbb: 0,
}));
console.log(getPersonData({
	aaa: 0,
	bbb: 1,
}));
console.log(getPersonData({
	aaa: 1,
	bbb: 1,
}));
