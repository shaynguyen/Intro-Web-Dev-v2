let bufferStr = "0"
let runningTotal = 0;
let operator;
let calculatorScreen = document.querySelector(".calculator-screen");

document
  .querySelector(".calculator-buttons")
  .addEventListener("click", function (event) {
    onButtonClick(event);
  })

function onButtonClick(event) {
  const buttonValue = event.target.innerText;

  if (isNaN(parseInt(buttonValue))) {
    handleSymbol(buttonValue)
  } else {
    handleNumber(buttonValue)
  }

  renderScreen();
}

function handleSymbol(operationStr) {
  switch (operationStr) {
    case "C": {
      handleClear();
      break;
    }
    case "<": {
      handleBackspace();
      break;
    }
    case "=": {
      handleMath();
      break;
    }
    default: {
      handleOperator(operationStr);
      break;
    }
  }
}

function handleClear() {
  bufferStr = "0";
  runningTotal = 0;
  operator = null;
}

function handleBackspace() {
  if (bufferStr.length === 1) {
    bufferStr = "0";
    runningTotal = 0;
  } else {
    bufferStr = bufferStr.substring(0, bufferStr.length - 1)
    runningTotal = parseInt(bufferStr)
  }
}

function handleMath() {
  flushOperation()
  bufferStr = "" + runningTotal
}

function flushOperation() {
  if (operator === "+") {
    runningTotal += parseInt(bufferStr)
  } else if (operator === "-") {
    runningTotal -= parseInt(bufferStr)
  } else if (operator === "x") {
    runningTotal *= parseInt(bufferStr)
  } else {
    runningTotal /= parseInt(bufferStr)
  }
}

function handleOperator(value) {
  runningTotal = parseInt(bufferStr)
  operator = value;
  bufferStr = "0";
}

function handleNumber(numberStr) {
  if (bufferStr === "0") {
    bufferStr = numberStr;
  } else {
    bufferStr += numberStr;
  }
}

function renderScreen() {
  calculatorScreen.innerText = bufferStr;
}