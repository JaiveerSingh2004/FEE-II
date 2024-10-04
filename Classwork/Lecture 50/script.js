let display = document.getElementById('display')
let currentOperation = ''
let firstOperand = ''
let secondOperand = ''

function appendNumber(number) {
    display.vale += number
}

function setOperation(operation) {
    if(display.value === '') return;

    firstOperand = display.value
    currentOperation = operation.value
    display.value = ''
}

function calculate() {
    if(display.value === '' || currentOperation === '') return;
    display.value = eval(firstOperand + currentOperation + secondOperand)
    
    currentOperation = ''
    firstOperand = ''
    secondOperand = ''
}

function clearDisplay() {
    display.value = ''
    currentOperation = ''
    firstOperand = ''
    secondOperand = ''
}