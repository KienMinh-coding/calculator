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
                if (numKey.textContent === "." && display.textContent.indexOf(".") >= 0) {
                    //when user input more than one "."    
                } else {
                    display.textContent += numKey.textContent;
                    secondUserInput = parseFloat(display.textContent);
                }

            }
        } else {
            if (!userInput && numKey.textContent === ".") {       //when user input . first
                display.textContent = "0.";
                userInput = "0"
            } else {
                if (numKey.textContent === "." && display.textContent.indexOf(".") >= 0) {
                    //when user input more than one "."    
                } else {
                    if (display.textContent === "0") display.textContent = "";
                    if (!userInput && numKey.textContent === "0") display.textContent = ""; // if user input "025" will print to "25"
                    display.textContent += numKey.textContent;
                    userInput = parseFloat(display.textContent);
                    if (result) result = "";
                }

            }
        }
    });
});

const opeKeys = document.querySelectorAll('.ope-key');
opeKeys.forEach((opeKey) => {
    opeKey.addEventListener('click', () => {
        if (operator && !result) {
            if (!secondUserInput) {
                operator = opeKey.textContent;
            } else {
                const display = document.querySelector('.screen');
                result = operate(operator, firstUserInput, secondUserInput)
                display.textContent = result;
                firstUserInput = result;
                result = "";
                secondUserInput = "";
                operator = opeKey.textContent;
            }
        } else {
            operator = opeKey.textContent;
            if (!result) {
                firstUserInput = userInput;
                result = "";
            } else {
                firstUserInput = result;
                result = "";
            }
        }
    }
    )
});

const clearKey = document.querySelector('#clear-key');
clearKey.addEventListener('click', () => {
    const display = document.querySelector('.screen');
    display.textContent = "0";
    firstUserInput = "";
    secondUserInput = "";
    operator = "";
    result = "";
    userInput = "";
})


const deleteKey = document.querySelector('#delete-key');
deleteKey.addEventListener('click', () => {
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
})

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

