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
        if (operator) {
            if (!secondUserInput) display.textContent = "";
            if (!secondUserInput && numKey.textContent === ".") {       //when user input . first
                display.textContent = "0.";
                secondUserInput = "0";
            } else {
                display.textContent += numKey.textContent;
                secondUserInput = parseFloat(display.textContent);
                console.log(`secondUserInput:${secondUserInput}`);
            }
        } else {
            if (!userInput && numKey.textContent === ".") {       //when user input . first
                display.textContent = "0.";
                userInput = "0"
            } else {
                if(display.textContent === "0") display.textContent = "";
                display.textContent += numKey.textContent;
                userInput = parseFloat(display.textContent);
                console.log(`userInput:${userInput}`);
            }
        }
    });
});

const opeKeys = document.querySelectorAll('.ope-key');
opeKeys.forEach((opeKey) => {
    opeKey.addEventListener('click', () => {
        if (operator && !result) {
            const display = document.querySelector('.screen');
            result = operate(operator, firstUserInput, secondUserInput)
            display.textContent = result;
            firstUserInput = result;
            result = "";
            secondUserInput = "";
            operator = opeKey.textContent;
        } else {
            operator = opeKey.textContent;
            if (!result) {
                firstUserInput = userInput;
            } else {
                if (result !== userInput) {
                    firstUserInput = userInput;
                    result = "";
                } else {
                    firstUserInput = result;
                    result = "";
                }
            }
        }
    }
    )
});

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => {
    if (operator) {
        const display = document.querySelector('.screen');
        result = operate(operator, firstUserInput, secondUserInput)
        display.textContent = result;
        firstUserInput = "";
        secondUserInput = "";
        operator = "";
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

