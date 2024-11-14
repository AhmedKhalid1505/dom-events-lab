/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/
let fN = '';
let sN = '';
let operator = null;
let result = 0;

/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelector('.button')
const displayEl = document.querySelector('.display')
/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach(buttons ) => {
    buttons.addEventListener('click', (event)  => {
        //if it is a number
        if(event.target.classList.contains('number')) {
            if(operator === null) {
                fN += event.tartget.innerText
                displayEl.innerText = fN
            } else {
                sN += event.targt.innerText
                displayEl.innerText = fN + operator + sN
                
            }
        }
        // if it is an operator    
    else if (event.targt.classList.contains('operator')){
        let selectedOperator = event.target.innerText

        // CLEAR DISPLAY
        if (selectedOperator === 'C') {
            displayEl.innerText = ''
            fN = ''
            sN = ''
            operator = null
            result = 0
        } else {
            if (fN !== '') {
                operator = event.target.innerText 
                displayEl.innerText = fN + operator
            }
        }
    }
    // if its equals
    else if (event.targt.classList.contains('equals')){
        calculate()
    }
    })
}
/*-------------------------------- Functions --------------------------------*/
function calculate() {
    if(fN !== '' && sN !== '' && operator !== null ) {
        let num1 = parseFloat(fN)
        let num2 = parseFloat(sN)
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
    } 
}  displayEl.innerText = result
       
