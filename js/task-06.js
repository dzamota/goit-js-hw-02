'use strict';

let input;
const numbers = [];
let total = 0;

input = prompt('Введите любую последовательность чисел для их сложения');

while (input !== null && input !== NaN) {
  while (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    input = 0;
  }
  input = Number(input);
  numbers.push(input);
  input = prompt('Введите любую последовательность чисел для их сложения');
}

for (input of numbers) {
  total = total + input;
}

alert(`Общая сумма чисел равна ${total}`);
