const number = document.getElementsByClassName("number");
let textArea = document.getElementById("result");
const clearFunction = document.getElementsByClassName("calc");
const operatorFunction = document.getElementsByClassName("function");
let numberOne = null;
let numberTwo = null;
let operator = "";
let result = null;
textArea.value = null;
for (let i = 0; i < number.length; i++) {
  number[i].addEventListener("click", (e) => {
    textArea.value = textArea.value + number[i].textContent;
  });
}

for (let i = 0; i < clearFunction.length; i++) {
  clearFunction[i].addEventListener("click", (e) => {
    if (clearFunction[i].textContent == "del") {
      textArea.value = textArea.value.slice(0, -1);
    } else if (clearFunction[i].textContent == "~") {
      const value = textArea.value.trim();
      if (value && !isNaN(textArea.value))
        textArea.value = String(Number(textArea.value) * -1);
    } else {
      textArea.value = null;
      numberOne = null;
      numberTwo = null;
    }
  });
}

function calculator(operator, numberOne, numberTwo) {
  if (operator == "+") {
    return numberOne + numberTwo;
  } else if (operator == "-") {
    return numberOne - numberTwo;
  } else if (operator == "/") {
    if (numberTwo != 0) {
      return numberOne / numberTwo;
    } else {
      return "infinity";
    }
  } else if (operator == "%") {
    return numberOne % numberTwo;
  } else if (operator == "*") {
    return numberOne * numberTwo;
  } else {
    return false;
  }
}

for (let i = 0; i < operatorFunction.length; i++) {
  operatorFunction[i].addEventListener("click", (e) => {
    if (numberOne == null) {
      numberOne = Number(textArea.value);
      textArea.value = null;
      if (operatorFunction[i].textContent != "=")
        operator = operatorFunction[i].textContent;
      else {
        textArea.value = numberOne;
        numberOne = null;
      }
    } else {
      numberTwo = Number(textArea.value);
      if (operatorFunction[i].textContent == "=" && numberTwo != null) {
        result = calculator(operator, numberOne, numberTwo);
        textArea.value = result;
        numberOne = result;
        numberTwo = null;
        result = null;
      } else {
        result = calculator(operator, numberOne, numberTwo);
        textArea.value = result;
        numberOne = result;
        numberTwo = null;
        result = null;
        operator = operatorFunction[i].textContent;
      }
    }
    console.log(numberOne);
    console.log(numberTwo);
    console.log(operator);
  });
}
