function parseCount(a) {
	if(isNaN(Number.parseInt(a))) {
		throw new Error ("Невалидное значение");
	};
	return Number.parseInt(a);
};

function validateCount(b) {
	try {
		return parseCount(b);
	} catch(e) {
		return e;
	};
};

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;
		if(((a + b) <= c) || ((a + c) <= b) || ((c + b) <= a)) {
			throw new Error ("Треугольник с такими сторонами не существует");
		};
		
	};


	getPerimeter(a, b, c) {
		return (this.a + this.b + this.c);
	};

	getArea(a, b, c) {
		let p = this.getPerimeter() / 2;
		return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
	};
};

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	}catch(e){
		return {
			getPerimeter: "Ошибка! Треугольник не существует",
			getArea: "Ошибка! Треугольник не существует",
		};
	};
};
