let userInput = 0;
let firstUserInput;
let secondUserInput;
let operator;
let result;
const numKeys = document.querySelectorAll('.num-key');
numKeys.forEach((numKey) => {
    numKey.addEventListener('click', () => {
        const defaultDisplay = document.querySelector(".default-display");
        if (defaultDisplay) defaultDisplay.textContent = "";
        const display = document.querySelector('.screen');
        if ((!userInput && numKey.textContent === ".") || (!secondUserInput && numKey.textContent === ".")) {   //when user input "." first
            if (operator) {     
                if (!secondUserInput) display.textContent = "";
                display.textContent = "0.";
                secondUserInput = display.textContent;
            } else {
                display.textContent = "0.";
                userInput = parseFloat(display.textContent);
            }
        } else {        //when user don't input "." first
            if (operator) {
                if (!secondUserInput) display.textContent = "";
                display.textContent += numKey.textContent;
                secondUserInput = display.textContent;
            } else {
                display.textContent += numKey.textContent;
                userInput = parseFloat(display.textContent);
            }
        }
    });
});

const opeKeys = document.querySelectorAll('.ope-key');
opeKeys.forEach((opeKey) => {
    opeKey.addEventListener('click', () => {
        operator = opeKey.textContent;
        if (!result) {
            firstUserInput = userInput;
        } else {
            firstUserInput = result;
        }
    })
});

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    if (operator) {
        const display = document.querySelector('.screen');
        display.textContent = "";
        result = operate(operator, firstUserInput, secondUserInput)
        display.textContent = result;
        firstUserInput = "";
        secondUserInput = "";
    }
});


function operate(operator, a, b) {
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "×") return multiply(a, b);
    if (operator === "÷") return divide(a, b);
}

function add(a, b) {
    return Math.round((a + b) * 1000) / 1000;
}

function subtract(a, b) {
    return Math.round((a - b) * 1000) / 1000;
}

function multiply(a, b) {
    return Math.round((a * b) * 1000) / 1000;
}

function divide(a, b) {
    return Math.round((a / b) * 1000) / 1000;
}

