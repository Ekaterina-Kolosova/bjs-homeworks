
String.prototype.isPalindrome;

function isPalindrome() {
	let lower = this.toLowerCase();
	if (lower === lower.split('').reverse().join('')) {
		return true;
	} else {
		return false;
	};
}


function getAverageMark(marks) {
    let sum = 0;
	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	};
	if (marks.length === 0) {
		return 0;
	};

	let average = sum / marks.length;
	let roundedAverage = Math.round(average);
	// код для задачи №2 писать здесь
    return roundedAverage;
}

function checkBirthday(birthday) {
	let now = new Date();
	birthday = new Date(birthday);
	let diff = now - birthday;
	console.log(diff);
	let age = diff / (365.25 * 24 * 1000 * 3600);
	console.log(age);
	if (age > 18) {
		return true;
	} else {
		return false;
	};
}
