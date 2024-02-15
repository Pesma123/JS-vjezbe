//Global variables
const initialValue = 0;
let currentResult = initialValue;
let logEntries = [];

//Button event listerers
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);

//Functions
function getUserInputValue() {
  return parseInt(userInput.value);
}

//This function edits the result div in the HTML
function createAndWriteOutput(
  resultBeforeCalculation,
  userInputValue,
  operator
) {
  const calculationDescription = `${resultBeforeCalculation} ${operator} ${userInputValue}`;
  outputResult(currentResult, calculationDescription); //Calls a function from vendor.js
}

function writeToLog(operationName, prevResult, userNumber, newResult) {
  let logEntry = {
    operation: operationName,
    previousResult: prevResult,
    number: userNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  // console.log(logEntry.number);
}

function calculateResult(operation) {
  //Provjera da li je tip operacije definisan
  if (
    operation != "ADD" &&
    operation != "SUBTRACT" &&
    operation != "MULTIPLY" &&
    operation != "DIVIDE"
  ) {
    console.log("Nepoznat parametar");
    return;
  }

 
  const userInputValue = getUserInputValue();
  
  const dijeljenjeNulom = userInputValue === 0 && operation === "DIVIDE";
  const unesenoNestoStoNijeNulaINevalidanUnos = userInputValue != 0 && !userInputValue;
  
  if (dijeljenjeNulom || unesenoNestoStoNijeNulaINevalidanUnos) {
    console.log("Korisnicki unos nije validan");
    return;
  }

  

  if(userInputValue===0 && operation === "DIVIDE" || !userInputValue && userInputValue!=0){
      console.log("Korisnicki unos nije validan");
      return;
    }

  const resultBeforeCalculation = currentResult;

  //Provjera tipa operacije
  if (operation == "ADD") {
    currentResult += userInputValue;
    createAndWriteOutput(resultBeforeCalculation, userInputValue, "+");
  } else if (operation == "SUBTRACT") {
    currentResult -= userInputValue;
    createAndWriteOutput(resultBeforeCalculation, userInputValue, "-");
  } else if (operation == "MULTIPLY") {
    currentResult *= userInputValue;
    createAndWriteOutput(resultBeforeCalculation, userInputValue, "*");
  } else if (operation == "DIVIDE") {
    currentResult /= userInputValue;
    createAndWriteOutput(resultBeforeCalculation, userInputValue, "/");
  }

  writeToLog(operation, resultBeforeCalculation, userInputValue, currentResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function divide() {
  calculateResult("DIVIDE");
}
