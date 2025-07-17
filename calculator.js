const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("function");
const clearButtons = document.getElementsByClassName("calc");
const display = document.getElementById("result");

let numberOne = null;
let numberTwo = null;
let operator = "";
let waitingForSecondNumber = false;

function addition(a, b) {
  return a + b;
}
function subtraction(a, b) {
  return a - b;
}
function multiplication(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
function modulo(a, b) {
  return a % b;
}

function operate(op, a, b) {
  switch (op) {
    case "+":
      return addition(a, b);
    case "-":
      return subtraction(a, b);
    case "*":
      return multiplication(a, b);
    case "/":
      if (b === 0) return false;
      return division(a, b);
    case "%":
      return modulo(a, b);
    default:
      return false;
  }
}

function resetCalculator() {
  display.value = "";
  numberOne = null;
  numberTwo = null;
  operator = "";
  waitingForSecondNumber = false;
}

function appendNumber(num) {
  // Prevent multiple decimals
  if (num === "." && display.value.includes(".")) return;
  if (waitingForSecondNumber) {
    display.value = num === "." ? "0." : num;
    waitingForSecondNumber = false;
  } else {
    display.value += num;
  }
}

// Number buttons
for (let btn of numberButtons) {
  btn.addEventListener("click", function () {
    appendNumber(this.textContent);
  });
}

// Operator buttons
for (let btn of operatorButtons) {
  btn.addEventListener("click", function () {
    const op = this.textContent;

    if (op === "~") {
      // Toggle negation of current display value
      if (display.value) {
        display.value = String(-Number(display.value));
      }
      return;
    }

    if (op === "=") {
      if (operator && !waitingForSecondNumber) {
        numberTwo = Number(display.value);
        const result = operate(operator, numberOne, numberTwo);
        if (result === false) {
          display.value = "Error";
        } else {
          display.value = result;
          numberOne = result;
        }
        operator = "";
        waitingForSecondNumber = true;
      }
      return;
    }

    // For other operators (+, -, *, /, %)
    if (operator && !waitingForSecondNumber) {
      // Perform calculation first (chaining)
      numberTwo = Number(display.value);
      const result = operate(operator, numberOne, numberTwo);
      if (result === false) {
        display.value = "Error";
        resetCalculator();
        return;
      } else {
        display.value = result;
        numberOne = result;
      }
    } else {
      numberOne = Number(display.value);
    }
    operator = op;
    waitingForSecondNumber = true;
  });
}

// Clear and delete buttons
for (let btn of clearButtons) {
  btn.addEventListener("click", function () {
    if (this.textContent === "AC") {
      resetCalculator();
    } else if (this.textContent === "del") {
      if (!waitingForSecondNumber && display.value.length > 0) {
        display.value = display.value.slice(0, -1);
      }
    }
  });
}
