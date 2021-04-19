const numKeys = document.querySelectorAll('.num-key');
numKeys.forEach((numKey) => {
  numKey.addEventListener('click', () => {
    const defaultDisplay = document.querySelector(".default-display");
    if(defaultDisplay) defaultDisplay.textContent = "";
    const display = document.querySelector('.screen');
    display.textContent += numKey.textContent;
  });
});

function operate(operator, a, b) {
    if(operator === "+") return add(a, b);
    if(operator === "-") return subtract(a, b);
    if(operator === "*") return multiply(a, b);
    if(operator === "/") return divide(a, b);
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

/*
1. user click button -> what clicked button?

*/