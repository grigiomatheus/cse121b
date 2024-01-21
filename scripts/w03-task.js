/* LESSON 3 - Programming Tasks */


/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(x, y){
    return Number(x) + Number(y);
}

function addNumbers(){
    let addNumber1 = document.querySelector('#add1').value;
    let addNumber2 = document.querySelector('#add2').value;

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(x, y) {
    return Number(x) - Number(y);
}

const subtractNumbers = function(){
    let subtractNumber1 = document.querySelector('#subtract1').value;
    let subtractNumber2 = document.querySelector('#subtract2').value;

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (x, y) => {
    return Number(x) * Number(y);
}

const multiplyNumbers = () => {
    let factor1 = document.querySelector('#factor1').value;
    let factor2 = document.querySelector('#factor2').value;

    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(x, y){
    if(y != 0){
        return Number(x) / Number(y);
    }

    console.error("Cannot divide a number by 0. Please try again!");
}

const divideNumbers = () => {
    let dividend = document.querySelector('#dividend').value;
    let divisor = document.querySelector('#divisor').value;

    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener("click", divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener("click",  GetTotalDue);

function GetTotalDue(){
    let subTotal = Number(document.querySelector('#subtotal').value);
    let isMember = document.querySelector("#member").checked;

    if(subTotal == NaN)
        return console.log("Please, input a valid number.");

    if(isMember)
        subTotal *= 0.85;
    
    document.querySelector("#total").textContent = `$ ${subTotal.toFixed(2)}`;
}



/* ARRAY METHODS - Functional Programming */
let numbersArray = []

for (let i = 0; i < 16; i++) {
    numbersArray.push(i);
}

/* Output Source Array */
document.querySelector("#array").textContent = `[${numbersArray.join(', ')}]`;


/* Output Odds Only Array */
let odds = numbersArray.filter(x => x % 2 == 0);

document.querySelector("#odds").textContent = `[${odds.join(', ')}]`

/* Output Evens Only Array */
let even = numbersArray.filter(x => x % 2 == 1);

document.querySelector("#evens").textContent = `[${even.join(', ')}]`

/* Output Sum of Org. Array */
let sumOfNumbers = numbersArray.reduce((sum, number) => sum + number);

document.querySelector("#sumOfArray").textContent = sumOfNumbers;

/* Output Multiplied by 2 Array */
let doubledArray = numbersArray.map(x => x * 2);

document.querySelector("#multiplied").textContent = `[${doubledArray.join(', ')}]`;

/* Output Sum of Multiplied by 2 Array */
let sumOfDoubledArray = numbersArray.map(x => x * 2)
                            .reduce((sum, number) => sum + number);

// numbersArray.reduce((sum, number) => sum + (number * 2));
document.querySelector("#sumOfMultiplied").textContent = sumOfDoubledArray;