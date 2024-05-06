function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

const num1 = document.getElementById("1");
const num2 = document.getElementById("2");
const num3 = document.getElementById("3");
const num4 = document.getElementById("4");
const num5 = document.getElementById("5");
const num6 = document.getElementById("6");
const num7 = document.getElementById("7");
const num8 = document.getElementById("8");
const num9 = document.getElementById("9");
const num0 = document.getElementById("0");

const operAdd = document.getElementById("add");
const operSubtract = document.getElementById("subtract");
const operMultiply = document.getElementById("multiply");
const operDivide = document.getElementById("divide");
const operEquals = document.getElementById("equals");

const inputTextBig = document.getElementById("inputTextBig");
const inputTextSmall = document.getElementById("inputTextSmall");

num1.addEventListener("click", inputNum);
num2.addEventListener("click", inputNum);
num3.addEventListener("click", inputNum);
num4.addEventListener("click", inputNum);
num5.addEventListener("click", inputNum);
num6.addEventListener("click", inputNum);
num7.addEventListener("click", inputNum);
num8.addEventListener("click", inputNum);
num9.addEventListener("click", inputNum);
num0.addEventListener("click", inputNum);

operAdd.addEventListener("click", inputOper);
operSubtract.addEventListener("click", inputOper);
operMultiply.addEventListener("click", inputOper);
operDivide.addEventListener("click", inputOper);
operEquals.addEventListener("click", getResult);

function inputNum(e) {
  console.log(e);
  inputTextBig.textContent += e.target.id;
}

function inputOper(e) {
  switch (e.target.id) {
    case "add":
      inputTextBig.textContent += "+";
      console.log(inputTextBig.textContent);
      break;
    case "subtract":
      inputTextBig.textContent += "-";
      console.log(inputTextBig.textContent);
      break;
    case "multiply":
      inputTextBig.textContent += "*";
      console.log(inputTextBig.textContent);
      break;
    case "divide":
      inputTextBig.textContent += "/";
      console.log(inputTextBig.textContent);
      break;
  }
}

function getResult() {
  console.log(typeof inputTextBig.textContent);
  
}
