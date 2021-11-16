"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let D = Math.pow(b, 2) - 4 * a * c;
  if (D > 0) {
    let x1 = (-b + Math.sqrt(D)) / (2 * a);
    let x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1, x2);
  } else if (D == 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }
  return arr; // array
}


function monthDiff(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  if (isNaN(percent)) {
    totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  } else if (isNaN(contribution)) {
    totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  } else if (isNaN(amount)) {
    totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  } else {

    let creditBody = amount - contribution;
    let currentDate = new Date();
    let period = monthDiff(currentDate, date);
    let monthlyPayment = creditBody * ((percent / (12 * 100)) + (percent / (12 * 100)) / (((1 + (percent / (12 * 100))) ** period) - 1));
    totalAmount = parseFloat(parseFloat(monthlyPayment * period).toFixed(2));
  }
  return totalAmount
}

