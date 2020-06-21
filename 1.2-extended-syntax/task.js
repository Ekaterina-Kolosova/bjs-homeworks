'use strict';

function getResult(a,b,c){
	let discriminant = Math.pow(b, 2) - (4 * a * c);
	let x = [];
    if (discriminant < 0) {
    	x = [];
    } else if (discriminant === 0) {
    	x = [(- 1 * b) / (2 * a)];
    } else if (discriminant > 0) {
    	x[0] = ((- 1 * b) + Math.sqrt(discriminant)) / (2 * a);
    	x[1] = ((- 1 * b) - Math.sqrt(discriminant)) / (2 * a);
    }

    return x;
}

function getAverageMark(marks){
	function sumMark(){
		let marksSum = 0;
		for(let i=0; i < marks.length; i++) {
			marksSum += marks[i];
		}
		return marksSum;
	}

	let averageMark;
	let marksSum = sumMark(marks);

	if ((0 < marks.length) && (5 >= marks.length)) {
		averageMark = marksSum / marks.length;
	} else if (5 < marks.length) {
		console.log('Введено более 5 оценок');
		marksSum = sumMark(marks.splice(5))
		averageMark = marksSum / 5;
	} else if (marks.length === 0) {
		averageMark = 0;
	}
	
    return averageMark;
}



function askDrink(name,dateOfBirthday){
    let userAge = dateOfBirthday.getFullYear();
    let year = new Date().getFullYear();
    let result;
    if ((year - userAge) > 18) {
    	result = `Не желаете ли олд-фэшн, ${name}?`;
	} else {
		result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	}

    return result;
}