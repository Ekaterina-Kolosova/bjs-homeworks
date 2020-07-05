const errorNumber = new Error ("Невалидное значение");

function parseCount(a) {
	if(isNaN(Number.parseInt(a))) {
		throw errorNumber;
	};
	return Number.parseInt(a);
};

function validateCount(b) {
	try {
		return parseCount(b);
	} catch(e) {
		return errorNumber;
	};
};

const errorTriangle = new Error ("Треугольник с такими сторонами не существует");
class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if(((this.a + this.b) <= this.c) || ((this.a + this.c) <= this.b) || ((this.c + this.b) <= this.a)) {
			throw errorTriangle;
		};
		
	};


	getPerimeter(a, b, c) {
		return this.a + this.b + this.c;
	};

	getArea(a, b, c) {
		let p = this.getPerimeter() / 2;
		return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
	};
};

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch(e) {
		throw e = new Error ("Ошибка! Треугольник не существует");
	};
}
