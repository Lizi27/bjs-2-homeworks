// Задание 1
"use strict";
function getArrayParams(arr) {
  let min, max, sum = 0, avg = 0;
  min = Infinity;
  max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (el < min) {
      min = el;
    }
    if (el > max) {
      max = el;
    }
    sum += el;
  }
  avg = sum / arr.length;
  avg = parseFloat(parseFloat(avg).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    sum += el;
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    let el = func(arrOfArr[i]);
    if (el > max) {
      max = el;
    }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (el < min) {
      min = el;
    }
    if (el > max) {
      max = el;
    }
  }

  return max - min;
}
