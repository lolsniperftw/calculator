//get the buttons grid
const buttGrid = document.querySelector('.buttons-grid');



function operate (numbers, operator) {
    switch (operator) {
        case '+':
            add(numbers[0], numbers[1]);
            break;
        case '-':
            sub(numbers[0], numbers[1]);
            break;
        case '*':
            multiply(numbers[0], numbers[1]);
            break;
        case '/':
            divide(numbers[0], numbers[1]);
            break;
    }
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




//create the calculator

