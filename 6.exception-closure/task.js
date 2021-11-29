//Задача 1
function parseCount(val) {
    let number = Number.parseInt(val, 10);
    if (number) {
        return number;
    } else {
        throw new Error("Невалидное значение");
    }
}

function validateCount(val) {
    try {
        return parseCount(val);
    } catch(error) {
        return error;
    }
}

//Задача 2

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return (this.a + this.b + this.c);
    }

    getArea() {
        let p = (this.a + this.b + this.c) / 2;
        return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);  
    } catch(err) {
        let objTriangle = new Object();
        objTriangle.getArea = function() {return "Ошибка! Треугольник не существует";};
        objTriangle.getPerimeter = function() {return "Ошибка! Треугольник не существует";};
        return objTriangle;
    }
}