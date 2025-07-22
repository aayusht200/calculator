const number = document.getElementsByClassName("number");
let textArea = document.getElementById("result");
const clearFunction = document.getElementsByClassName("calc");
const evalFunction = document.getElementsByClassName("function");

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
    }
  });
}

function calculator(eval, numberOne, numberTwo) {
  if (eval == "+") {
    return numberOne + numberTwo;
  } else if (eval == "-") {
    return numberOne - numberTwo;
  } else if (eval == "/") {
    if (numberTwo != 0) {
      return numberOne / numberTwo;
    } else {
      return "infinity";
    }
  } else if (eval == "%") {
    return numberOne % numberTwo;
  } else if (eval == "*") {
    return numberOne * numberTwo;
  }
}
