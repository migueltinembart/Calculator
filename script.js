// Define Variables
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let resetScreenNeeded = false;

const clearBtn = document.getElementById('clearBtn');
const deleteBtn = document.getElementById('deleteBtn');
const numberButtons = document.querySelectorAll('button[data-number]')
const operatorButtons = document.querySelectorAll('button[data-operator]')
const pointBtn = document.getElementById('calc-buttons-point')
const evalBtn = document.getElementById('calc-buttons-eval')
const operandDisplay = document.getElementById('display-First-Operand')
const mainDisplay = document.getElementById('display-main')

//Running Block
clearBtn.addEventListener('click', clear)
deleteBtn.addEventListener('click', deleteNumber)
pointBtn.addEventListener('click', appendPoint)
evalBtn.addEventListener('click', evaluate)

operatorButtons.forEach((button) => {
    button.addEventListener('click', () =>setOperator(button.textContent))
})

numberButtons.forEach((button) => {
    button.addEventListener('click', () => appendNumber(button.textContent))
})


//Function Block

//using switch case to handle output on display
//if clear is pressed it passes clear in plaintext
//if delete is handled the last number will be deleted
//else if number append number to textcontent of div
function clear() {
        mainDisplay.textContent = '0';
        operandDisplay.textContent = '';
        firstOperand = '';
        secondOperand = '';
        currentOperation = null
}

function resetScreen() {
    mainDisplay.textContent = ''
    resetScreenNeeded = false;
}

function deleteNumber() {
    if(mainDisplay.textContent === '0') return
    mainDisplay.textContent = mainDisplay.textContent.slice(0,-1)
}

function appendPoint() {
    if (resetScreenNeeded) resetScreen()
    if (mainDisplay.textContent === '')
      mainDisplay.textContent = '0'
    if (mainDisplay.textContent.includes('.')) return
    mainDisplay.textContent += '.'
}

function evaluate() {
    if (currentOperation === null || resetScreenNeeded) return
    if (currentOperation === '/' && mainDisplay.textContent ==='0') {
        alert('you cannot divide by 0')
        return
    }
    secondOperand = mainDisplay.textContent
    mainDisplay.textContent = operate(currentOperation, firstOperand, secondOperand)
    operandDisplay.textContent = `${firstOperand} ${currentOperation} ${secondOperand} =`
    currentOperation = null
}

function operatorhandler {
    
}

function setOperator(operator) {
    if (currentOperation !== null) evaluate()
    firstOperand = mainDisplay.textContent;
    currentOperation = operator;
    operandDisplay.textContent = `${firstOperand} ${currentOperation}`;
    resetScreenNeeded = true;
}

function operate(operation, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operation) {
        case '+':
          return add(a, b)
        case '−':
          return substract(a, b)
        case '×':
          return multiply(a, b)
        case '÷':
          if (b === 0) return null
          else return divide(a, b)
        default:
          return null
    }
}

function appendNumber(number) {
    if (mainDisplay.textContent === '0' || resetScreenNeeded) 
    resetScreen()
    mainDisplay.textContent += number
}

function add(x,y) {
    return x + y
}

function substract(x,y) {
    return x - y
}

function multiply(x,y) {
    return x * y
}

function divide(x,y) {
    return x / y
}