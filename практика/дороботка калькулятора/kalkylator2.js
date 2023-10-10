let firstNumber = prompt("Введите первое число:");
let secondNumber = prompt("Введите второе число:");
const operator = prompt("Введите оператор (+, -, *, /):");

firstNumber = +firstNumber;
secondNumber = +secondNumber;

let result;

if (operator === "+") {
result = firstNumber + secondNumber;
} else if(operator === "-") {
result = firstNumber - secondNumber;
} else if(operator === "*") {
result = firstNumber * secondNumber;
} else if(operator === "/") {
result = firstNumber / secondNumber;
} else {
    alert("Некорректный оператор!");
}

if (result !== undefined)
{
alert(`Результат: ${result}`);
}

