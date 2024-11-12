/*-------------------------------- Constants --------------------------------*/
const performCalculation = {
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
}
/*-------------------------------- Variables --------------------------------*/
let displayValue = '0'
let firstOperand = null   
let secondOperand = false
let opertor = null
/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator')   
const display = document.querySelector('#display')

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', handleButtonClock)     //Add event listeners to all buttons at once.
/*-------------------------------- Functions --------------------------------*/

/////////////////////////////////////////////////////////////////
function updateDisplay() {
    display.textContent = displayValue;
}

function handleButtonClock(event) {
    const {target} = event
}

/////////////////////////////////////////////////////////////////

if (target. classList.contains('number')) {
    if (displayValue === '0'|| secondOperand) {
        displayValue = target.innerText
        secondOperand = false
    } else {
        displayValue += target.innerText
    }
    updateDisplay()
}
/////////////////////////////////////////////////////////////////


if (target.classList.contains('opertor')){
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue)
    } else if (opertor) {
        const result = performCalculation[opertor](firstOperand, parseFloat(displayValue))
        displayValue = `${result}`
        firstOperand = result
    }
    opertor = target.innerText
secondOperand = true
updateDisplay()
}
//////////////////////////////////////////////////////////////////////


//i didnt know hhow to do the equals i am full of nothing to think













/////////////////////////////////////////////////////////////////////
//7.clear all operations and start from 0

if (target.classList.contains('clear')) {
    resetCalculator()
    updateDisplay()
}
//////////////////////////////////////////////////////////////////////

function resetCalculator () {
    displayValue = '0'
    firstOperand = null
    opertor = null
    secondOperand = false
}
//////////////////////////////////////////////////////////////////////

// at the end as usual
updateDisplay()