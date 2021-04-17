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