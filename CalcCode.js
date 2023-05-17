class Calculator {
    constructor(lastTextElement, currentTextElement){
        this.lastTextElement = lastTextElement
        this.currentTextElement = currentTextElement
        this.clear()
    }
    clear(){
        this.current = ''
        this.last = ''
        this.operation = undefined
    }
    delete(){
        this.current = this.current.toString().slice(0,-1)
    }
    appendNumber(number){
        if (number === '.' && this.current.includes('.'))return
        this.current = this.current.toString() + number.toString()
    }
    chooseOperation(operation){
        if (this.current ==='') return
        if(this.last !==''){
            this.compute()
        }
        this.operation = operation
        this.last = this.current
        this.current = ''
    }
    compute() {
        let computation
        const prev = parseFloat(this.last)
        const currents = parseFloat(this.current)
        if(isNaN(prev) || isNaN(currents)) return
        switch (this.operation){
                case '+':
                    computation = prev + currents
                    break
                case '-':
                    computation = prev - currents
                 break
                case '*':
                    computation = prev * currents
                    break
                case '÷':
                    computation = prev / currents
                    break
                case '^':
                    computation = prev ** currents
                    break
                case 'BMI':
                    computation = prev / currents**2
                    break
                 case 'Int':
                    computation = prev  * 0.0023 * currents
                    break
                
                    default:
                    return
                    
        }
        this.current = computation
        this.operation = undefined
        this.last = ''
    }
    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0})
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
    } else {
        return integerDisplay
    }
    }
    updateDisplay(){
        this.currentTextElement.innerText =  this.getDisplayNumber(this.current)
        if(this.operation !== null){
        this.lastTextElement.innerText = 
        `${this.getDisplayNumber(this.last)} ${this.operation}`
        } else {
            this.last.innerText = ''
        }
    }
    }
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const lastTextElement = document.querySelector('[data-last]')
const currentTextElement = document.querySelector('[data-current]')
const calculator = new Calculator(lastTextElement,currentTextElement)
numberButtons.forEach(button => {
    button.addEventListener ('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})
operationButtons.forEach(button => {
    button.addEventListener ('click', () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
equalsButton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
})
allClearButton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}