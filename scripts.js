function add(a, b) {
  result = a + b;
}

function subtract(a, b) {
  result = a - b;
}

function multiply(a, b) {
  result = a * b;
}

function divide(a, b) {
  result = a / b;
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

const inputText = document.getElementById("inputText");
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

let firstNum = 1;
let secondNum = 1;
let result = 1;
let calSymbol = "";

function inputNum(e) {
  console.log(e);
  inputText.textContent += e.target.id;
}

function saveFirstNum() {
  firstNum = parseInt(inputText.textContent);
  console.log(`firstNum: ${firstNum}`);
}

function saveSecondNum() {
  secondNum = parseInt(inputText.textContent);
  console.log(`secondNum: ${secondNum}`);
}

function saveCalSymbol() {
  calSymbol = inputText.textContent;
  console.log(calSymbol);
}

function calulate() {
  return firstNum - secondNum;
}

function inputOper(e) {
  switch (e.target.id) {
    case "add":
      saveFirstNum();
      console.log(inputText.textContent);
      inputText.textContent = "+";
      saveCalSymbol();

      break;
    case "subtract":
      saveFirstNum();
      console.log(inputText.textContent);
      inputText.textContent = "-";
      saveCalSymbol();

      break;
    case "multiply":
      saveFirstNum();
      console.log(inputText.textContent);
      inputText.textContent = "*";
      saveCalSymbol();

      break;
    case "divide":
      saveFirstNum();
      console.log(inputText.textContent);
      inputText.textContent = "/";
      saveCalSymbol();

      break;
  }
}

function getResult() {
  saveSecondNum();
  console.log(`${firstNum} ${calSymbol} ${secondNum}`);
  console.log(typeof firstNum);

  switch (calSymbol) {
    case "+":
      add(firstNum, secondNum);
      break;
    case "-":
      subtract(firstNum, secondNum);
      break;
    case "*":
      multiply(firstNum, secondNum);
      break;
    case "/":
      divide(firstNum, secondNum);
      break;
  }

  console.log(result);
  inputText.textContent = result;
}
