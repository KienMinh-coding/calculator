let userInput = 0;
let firstUserInput;
let secondUserInput;
let operator;
let result;

let numpad = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
let opepad = ['+', '-', '*', '/']

//keyboard supporting
window.addEventListener('keydown', (event) => {
    switch (true) {
        case event.key === '=':
            equalIsPressed();
            break;
        case event.key === 'Escape':
            clearIsPressed();
            break;
        case event.key === 'Backspace':
            deleteIsPressed();
            break;
        case numpad.includes(event.key):
            numberIsPressed(event.key);
            break;
        case opepad.includes(event.key):
            operatorIsPressed(event.key);
            break;
    }
});

const numKeys = document.querySelectorAll('.num-key');
numKeys.forEach((numKey) => {
    numKey.addEventListener('click', () => numberIsPressed(numKey.textContent));
});

const opeKeys = document.querySelectorAll('.ope-key');
opeKeys.forEach((opeKey) => {
    opeKey.addEventListener('click', () => operatorIsPressed(opeKey.textContent));
});

const equal = document.querySelector('#equal');
equal.addEventListener('click', () => equalIsPressed());

const clearKey = document.querySelector('#clear-key');
clearKey.addEventListener('click', () => clearIsPressed());


const deleteKey = document.querySelector('#delete-key');
deleteKey.addEventListener('click', () => deleteIsPressed());

function numberIsPressed(param) {
    const defaultDisplay = document.querySelector(".default-display");
    if (defaultDisplay) defaultDisplay.textContent = "";
    const display = document.querySelector('.screen');
    if (operator) {
        if (!secondUserInput) display.textContent = "";
        if (!secondUserInput && param === ".") {       //when user input . first
            display.textContent = "0.";
            secondUserInput = "0";
        } else {
            if (param === "." && display.textContent.indexOf(".") >= 0) {
                //when user input more than one "."    
            } else {
                display.textContent += param;
                secondUserInput = parseFloat(display.textContent);
            }

        }
    } else {
        if (!userInput && param === ".") {       //when user input . first
            display.textContent = "0.";
            userInput = "0"
        } else {
            if (param === "." && display.textContent.indexOf(".") >= 0) {
                //when user input more than one "."    
            } else {
                if (display.textContent === "0") display.textContent = "";
                if (!userInput && param === "0") display.textContent = ""; // if user input "025" will print to "25"
                display.textContent += param;
                userInput = parseFloat(display.textContent);
                if (result) result = "";
            }

        }
    }
}

function operatorIsPressed(param) {
    if (operator && !result) {
        if (!secondUserInput) {
            operator = param;
        } else {
            const display = document.querySelector('.screen');
            result = operate(operator, firstUserInput, secondUserInput)
            display.textContent = result;
            firstUserInput = result;
            result = "";
            secondUserInput = "";
            operator = param;
        }
    } else {
        operator = param;
        if (!result) {
            firstUserInput = userInput;
            result = "";
        } else {
            firstUserInput = result;
            result = "";
        }
    }
}

function equalIsPressed() {
    if (operator) {
        const display = document.querySelector('.screen');
        result = operate(operator, firstUserInput, secondUserInput)
        display.textContent = result;
        firstUserInput = "";
        secondUserInput = "";
        operator = "";
    }
}

function clearIsPressed() {
    const display = document.querySelector('.screen');
    display.textContent = "0";
    firstUserInput = "";
    secondUserInput = "";
    operator = "";
    result = "";
    userInput = "";
}

function deleteIsPressed() {
    const display = document.querySelector('.screen');
    let displayStr = parseFloat(display.textContent).toString();
    display.textContent = displayStr.slice(0, -1);
    if (!display.textContent) display.textContent = "0";
    switch (true) {
        case (typeof result == "number"):
            result = parseFloat(display.textContent);
            break;
        case (typeof secondUserInput == "number"):
            secondUserInput = parseFloat(display.textContent);
            break;
        case ((typeof userInput == "number") && userInput !== 0):
            userInput = parseFloat(display.textContent);
            break;
    }
}

function operate(operator, a, b) {
    if (operator === "+") return add(a, b);
    if (operator === "-") return subtract(a, b);
    if (operator === "×" || operator === "*") return multiply(a, b);
    if (operator === "÷" || operator === "/") return divide(a, b);
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

