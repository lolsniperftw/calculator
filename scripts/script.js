//get the buttons grid
const buttGrid = document.querySelector('.buttons-grid');

//get the display
const display = document.querySelector('#display');

//get the numeric buttons
const numericButt = document.querySelectorAll('.number');

//get the operator buttons
const operatorButt = document.querySelectorAll('.operator');

//get equals
const equal = document.querySelector('.equals');

//get clear
const clear = document.querySelector('.clear');

//get backspace
const backspace = document.querySelector('.backspace');

//get dot button
const dot = document.querySelector('.dot');

let operator = '';
let numbers = [];
let canInsertSecondNumber = false;
let isDotPressed = false;

function operate(numbers, operator) {
    let result;
    switch (operator) {
        case '+':
            result = add(Number(numbers[0]), Number(numbers[1]));
            break;
        case '-':
            result = sub(numbers[0], numbers[1]);
            break;
        case '*':
            result = multiply(numbers[0], numbers[1]);
            break;
        case '/':
            result = divide(numbers[0], numbers[1]);
            result = Math.round(result * 100) / 100;
            break;
    }

    return result;
}
function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function addToDisplay(digit) {

    if (display.textContent === '0') {
        display.textContent = digit;
    }
    else if (display.textContent.length < 8) {
        display.textContent += digit;
    }

    if (canInsertSecondNumber) {
        canInsertSecondNumber = false;
        display.textContent = digit;
        isDotPressed = false;
    }

}



//add event listener to the numbers
numericButt.forEach(button => {
    button.addEventListener('click', (event) => {
        addToDisplay(event.target.textContent);
    })
});

operatorButt.forEach(button => {
    button.addEventListener('click', (event) => {
        if (!operator) {
            operator = event.target.textContent;
            canInsertSecondNumber = true;
            numbers.push(display.textContent);
        }
    })
});

equal.addEventListener('click', () => {
    
    if (operator === '/' && display.textContent === '0') {
        alert('Cannot divide by zero!');
    }
    else if (operator) {
        numbers.push(display.textContent);
        display.textContent = operate(numbers, operator);
        operator = '';
        numbers = [];
    }
    
});

clear.addEventListener('click', () => {
    display.textContent = '0';
    operator = '';
    numbers = [];
});

backspace.addEventListener('click', () => {
    let currentNumber;
    currentNumber = display.textContent;
    if (currentNumber.length === 1) {
        display.textContent = '0';
    }
    else {
        display.textContent = currentNumber.slice(0, currentNumber.length - 1);
    }
});

dot.addEventListener('click', (event) =>  {

    if (!isDotPressed) {
        display.textContent += event.target.textContent;
        isDotPressed = true;
    }

});

