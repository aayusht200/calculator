const content = document.getElementById("content");
function addition(numberOne, numberTwo) {
  return numberOne + numberTwo;
}
function subtraction(numberOne, numberTwo) {
  return numberOne - numberTwo;
}

function multiplication(numberOne, numberTwo) {
  return numberOne * numberTwo;
}

function division(numberOne, numberTwo) {
  return numberOne / numberTwo;
}
function modulo(numberOne, numberTwo) {
  return numberOne % numberTwo;
}

let numberOne = null;
let numberTwo = null;
let operator = "";
let solution = 0;
function operate(operator, numberOne, numberTwo) {
  if (operator == "+") {
    solution = addition(numberOne, numberTwo);
  } else if (operator == "-") {
    solution = subtraction(numberOne, numberTwo);
  } else if (operator == "/") {
    solution = division(numberOne, numberTwo);
  } else if (operator == "*") {
    solution = multiplication(numberOne, numberTwo);
  } else if (operator == "%") {
    solution = modulo(numberOne, numberTwo);
  } else {
    return false;
  }
  return solution;
}

const number = document.getElementsByClassName("number");
const display = document.getElementById("result");
const operatorFunction = document.getElementsByClassName("function");
const clearFunction = document.getElementsByClassName("clac");
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function (e) {
    display.value += this.textContent;
  });
}
for (let i = 0; i < operatorFunction.length; i++) {
  operatorFunction[i].addEventListener("click", function (e) {
    if (numberOne == null) {
      numberOne = Number(display.value);
      operator = this.textContent;
      display.value = "";
    }
    console.log(numberOne + " " + operator + " " + numberTwo);
  });
}
