/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/
let firstNumber = '';
let secondNumber = '';
let operator = null;
let result = 0;
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button')
const displayEl = document.querySelector('.display')
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // if it is a number
        if(event.target.classList.contains("number")) {
            if(operator === null) {
                firstNumber += event.target.innerText
                displayEl.innerText = firstNumber
            } else {
                secondNumber += event.target.innerText
                displayEl.innerText = firstNumber + operator + secondNumber 
            }
        }
        // if it is an operator
        else if (event.target.classList.contains("operator")){
            let selectedOperator = event.target.innerText
            if (selectedOperator === 'C') {
              // CLEAR DISPLAY
              displayEl.innerText = ''
              firstNumber = ''
              secondNumber = ''
              operator = null
              result = 0
            } else {
                if (firstNumber !== '') {
                    operator = event.target.innerText   
                    displayEl.innerText = firstNumber + operator
                }
            }
            
        } 
        // if it's equals
        
        else if (event.target.classList.contains("equals")) {
            calculate()
        }
    })
})
/*-------------------------------- Functions --------------------------------*/
function calculate() {
    if(firstNumber !== '' && secondNumber !== '' && operator !== null) {
        let num1 = parseFloat(firstNumber)
        let num2 = parseFloat(secondNumber)
        // do the calculation
        if (operator === '+') {
            result = num1 + num2
        } else if(operator === '-') {
            result = num1 - num2
        } else if(operator === '*') {
            result = num1 * num2
        } else if(operator === '/') {
            result = num1 / num2
        }
        displayEl.innerText = result
    }
}