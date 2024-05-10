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

const nums = document.querySelectorAll(".num");

nums.forEach((num) => {
  num.addEventListener("click", inputNum);
});

const opers = document.querySelectorAll(".operator");

opers.forEach((oper) => {
  oper.addEventListener("click", inputOper);
});

const inputText = document.getElementById("inputText");

const operEquals = document.getElementById("equals");
const operClear = document.getElementById("clear");
const operNegation = document.getElementById("negation");

operClear.addEventListener("click", allClear);
operNegation.addEventListener("click", negate);

function allClear() {
  inputText.textContent = "";
  firstNum = "";
  secondNum = "";
  calSymbol = "";
}

function negate() {
  inputText.textContent *= -1;
}

// main content

let firstNum = undefined;
let secondNum = undefined;
let result;
let calSymbol = "";

function inputNum(e) {
  if (e.target.textContent === "." && inputText.textContent.includes(".")) {
    return;
  }
  inputText.textContent += e.target.textContent;
}

function saveFirstNum() {
  firstNum = parseFloat(inputText.textContent);
  console.log(`firstNum: ${firstNum}`);
}

function saveSecondNum() {
  secondNum = parseFloat(inputText.textContent);
  console.log(`secondNum: ${secondNum}`);
}

function inputOper(e) {
  switch (e.target.id) {
    case "add":
      saveFirstNum();
      calSymbol = "+";
      inputText.textContent = "";
      console.log(
        `first: ${firstNum}, sec: ${secondNum}, sybl: ${calSymbol} rel: ${result}`
      );
      break;
    case "subtract":
      saveFirstNum();
      calSymbol = "-";
      inputText.textContent = "";
      console.log(
        `first: ${firstNum}, sec: ${secondNum}, sybl: ${calSymbol} rel: ${result}`
      );
      break;
    case "multiply":
      saveFirstNum();
      calSymbol = "x";
      inputText.textContent = "";
      console.log(
        `first: ${firstNum}, sec: ${secondNum}, sybl: ${calSymbol} rel: ${result}`
      );
      break;
    case "divide":
      saveFirstNum();
      calSymbol = "%";
      inputText.textContent = "";
      console.log(
        `first: ${firstNum}, sec: ${secondNum}, sybl: ${calSymbol} rel: ${result}`
      );
      break;
    case "equals":
      saveSecondNum();
      compute();
      calSymbol = "";
      console.log(
        `first: ${firstNum}, sec: ${secondNum}, sybl: ${calSymbol} rel: ${result}`
      );
      break;
  }
}

function compute() {
  if (firstNum === "" && secondNum === "") return;
  switch (calSymbol) {
    case "+":
      add(firstNum, secondNum);
      break;
    case "-":
      subtract(firstNum, secondNum);
      break;
    case "x":
      multiply(firstNum, secondNum);
      break;
    case "%":
      divide(firstNum, secondNum);
      break;
  }
  inputText.textContent = result;
  firstNum = result;
  secondNum = "";
  calSymbol = "";
}
