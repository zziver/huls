let isButtonMod = true;
const screen = document.querySelector('.screen__input');
const toggle = document.querySelector('.button-toggle');
toggle.addEventListener('click', () => {
  isButtonMod = !isButtonMod;
  const calcWithButton = document.querySelector('.button-view');
  const calcWithInput = document.querySelector('.input-view');
  if (isButtonMod) {
    calcWithButton.classList.remove('hidden');
    calcWithInput.classList.add('hidden');
    toggle.innerText = 'Переключить на режим ввода';
            screen.value = '';
  } else {
    calcWithButton.classList.add('hidden');
    calcWithInput.classList.remove('hidden');
    toggle.innerText = 'Переключить на режим кнопок';
    screen.value = '';
  }
});
const clearBtn = document.querySelector('.clear-btn');
clearBtn.addEventListener('click', () => {
  screen.value = '';
});
const operatorBtns = document.querySelectorAll('.operator-btn');
operatorBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    screen.value += event.target.textContent;
  });
});
const calculation = (num1, oper, num2) => {
  let result;
  switch (oper) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      console.error('Неизвестный оператор');
            return;
  }
  return result;
};
const numberBtns = document.querySelectorAll('.numberBtn');
numberBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    screen.value += event.target.textContent;
  });
});
const resultBtn = document.querySelector('.result-btn');
resultBtn.addEventListener('click', () => {
  let result;
  let firstNumber;
  let secondNumber;
  let operator;
  if (isButtonMod) {
    const expression = screen.value;
    const operands = expression.split(/[-+*\/]/);
    firstNumber = operands[0];
    secondNumber = operands[1];
    operator = expression.match(/[-+*\/]/)[0];
  } else {
    firstNumber = document.querySelector('.first-number').value;
    secondNumber = document.querySelector('.second-number').value;
    operator = document.querySelector('.operator').value;
  }
  result = calculation(+firstNumber, operator, +secondNumber);
  screen.value = result;
});