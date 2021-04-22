let userInput = 0;
let FirstUserInput;
let SecondUserInput;
let operator;
const numKeys = document.querySelectorAll('.num-key');
numKeys.forEach((numKey) => {
    numKey.addEventListener('click', () => {
        const defaultDisplay = document.querySelector(".default-display");
        if (defaultDisplay) defaultDisplay.textContent = "";
        const display = document.querySelector('.screen');
        display.textContent += numKey.textContent;
        userInput = parseInt(display.textContent);
        if (operator) {
            display.textContent = "";
            
        }
    });
});

const opeKeys = document.querySelectorAll('.ope-key');
opeKeys.forEach((opeKey) => {
    opeKey.addEventListener('click', () => {
        operator = opeKey.textContent;
        if (!FirstUserInput) FirstUserInput = userInput;
    })
});

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {if (operator) {
        console.log("1");
        SecondUserInput = userInput;
        const display = document.querySelector('.screen');
        display.textContent = "";
        userInput = operate(operator, FirstUserInput, SecondUserInput)
        display.textContent = userInput;
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

