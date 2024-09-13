// Calculator operations


const add = function(x, y) {
	return +x + +y;
};

const subtract = function(x, y) {
	return +x - +y;
};

const sum = function(array) {

  let summed = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue},0
  )
  return summed;
};

const multiply = function(array) {


  let multiplied = array.reduce((accumulator, currentValue) => {
    return accumulator * currentValue},1
  )
  return multiplied;
};

const divide = function(array) {
  if (array[1] == 0){
    return "LOL";
  }
  else {
  let divided = array.reduce((accumulator, currentValue) => {

    return accumulator / currentValue}
  )
  return divided;
  }
};

const operate = function(int1, mathOp, int2){
  let arr = []
  switch(mathOp){
    case "÷": 
      arr = [int1, int2]
      return divide(arr);
    case "x":
      arr = [int1, int2]
      return multiply(arr);
    case "−":
      return subtract(int1, int2);
    case "+":
      return add(int1, int2);
  }
}

const equals = function(){

  let result = operate(firstNum, mathOperator, secondNum);


  // Check if result is "LOL" or a non-numeric value

  if (result === "LOL") {
    display.textContent = "LOL";
    return;
  }

  // Dynamically adjust length to have max 12 chars displayed

  result = result.toString();
  let [integerPart, decimalPart] = result.split(".");


  const removeTrailingZeros = (str) => str.replace(/\.?0+$/, '');


  if (!decimalPart) {
    clear();
    firstNum = integerPart.length > 12 ? integerPart.slice(0, 12) : integerPart;
    display.textContent = firstNum;
  } 

  else {
    if (integerPart.length >= 12) {
        clear();
        firstNum = integerPart.slice(0, 12);
        // try 999,999.99 * 999,999.99 to test
        display.textContent = firstNum;
        }  
    else {
        let maxDecimals = 12 - integerPart.length;
        let formattedResult = parseFloat(result).toFixed(maxDecimals);
        formattedResult = removeTrailingZeros(formattedResult);
        clear();
        firstNum = formattedResult
        display.textContent = firstNum;
        }
  }
}

const clear = function() {
  display.textContent = "\u00A0";
  firstNum = "";
  secondNum = "";
  mathOperator = "";
  capturingFirst = true;
  operatorPressedAlready = false;
  document.querySelector("#clear").blur();
}

const dot = function() {

}

// keyMap for keyboard functions

const keyMap = {
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine",
  "0": "zero",
  ".": "decimal",
  "Enter": "equals",
  "+": "addition",
  "-": "subtraction",
  "/": "division",
  "*": "multiplication",
  "c": "clear"
};


// grab DOM buttons

let numButtons = document.querySelectorAll(".oneToNine, .zero");
let opButtons = document.querySelectorAll(".operator");
let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");
let decimal = document.querySelector(".decimal");
let body = document.querySelector("body");


// helper variables

let firstNum = "";
let secondNum = "";
let mathOperator = "";
let capturingFirst = true;
let operatorPressedAlready = false;


// Event Listeners

numButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (capturingFirst) {
          if (firstNum.length < 12) {
            firstNum += button.textContent;
            display.textContent = firstNum;
        }
        } else {
          if (secondNum.length < 12) {
            secondNum += button.textContent;
            display.textContent = secondNum;
        }
        }
    button.blur();
    });
});

document.querySelector(".decimal").addEventListener("click", function() {
  if (capturingFirst) {
    if (firstNum.length < 12) {
      if(firstNum.includes(".")){
        return;
      }
      else{
        firstNum += ".";
        display.textContent = firstNum;
        }
      }
    } 
  else {
    if (secondNum.length < 12) {
      if(secondNum.includes(".")){
        return;
        }
      else{
        secondNum += ".";
        display.textContent = secondNum;
        }
      }
    }
    document.querySelector(".decimal").blur();
})

document.querySelector("#plusMinus").addEventListener("click", function() {
  if (capturingFirst) {
      if(!firstNum.startsWith("-")){
        firstNum = "-" + firstNum 
        display.textContent = firstNum;
        }
      else{
        firstNum = firstNum.substring(1);
        display.textContent = firstNum;
        }
  }
  else {
    if (!secondNum.startsWith("-")) {
        secondNum = "-" + secondNum
        display.textContent = secondNum;
        }
    else{
      secondNum = secondNum.substring(1);
      display.textContent = secondNum;
      }
  }
  document.querySelector("#plusMinus").blur();
})

document.querySelector("#percentage").addEventListener("click", function() {



  if (capturingFirst) {
    firstNum = firstNum * 0.01;
    firstNumVar = firstNum.toString();

    let [integerPart, decimalPart] = firstNumVar.split(".");

    const removeTrailingZeros = (str) => str.replace(/\.?0+$/, '');
    if (!decimalPart) {
      clear();
      firstNum = integerPart.length > 12 ? integerPart.slice(0, 12) : integerPart;
      display.textContent = firstNum;
    } 

    if (!decimalPart) {
      firstNum = integerPart.length > 12 ? integerPart.slice(0, 12) : integerPart;
      display.textContent = firstNum;
      } 
    else {
      if (integerPart.length >= 12) {
          display.textContent = firstNum;
          }  
      else {
          let maxDecimals = 12 - integerPart.length;
          let formattedResult = parseFloat(firstNumVar).toFixed(maxDecimals);
          formattedResult = removeTrailingZeros(formattedResult);
          firstNum = formattedResult
          display.textContent = firstNum;
          }
    }
  }

  else {
    secondNum = secondNum * 0.01;
    secondNumVar = secondNum.toString();

    let [integerPart, decimalPart] = secondNumVar.split(".");

    const removeTrailingZeros = (str) => str.replace(/\.?0+$/, '');
    if (!decimalPart) {
      clear();
      secondNum = integerPart.length > 12 ? integerPart.slice(0, 12) : integerPart;
      display.textContent = secondNum;
    }

    if (!decimalPart) {
      secondNum = integerPart.length > 12 ? integerPart.slice(0, 12) : integerPart;
      display.textContent = secondNum;
      } 
    else {
      if (integerPart.length >= 12) {
          display.textContent = secondNum;
          }  
      else {
          let maxDecimals = 12 - integerPart.length;
          let formattedResult = parseFloat(secondNumVar).toFixed(maxDecimals);
          formattedResult = removeTrailingZeros(formattedResult);
          secondNum = formattedResult
          display.textContent = secondNum;
          }
    }
  }
  document.querySelector("#percentage").blur();
});

opButtons.forEach(button => {
  button.addEventListener("click", function() {
    capturingFirst = false;
    if(operatorPressedAlready === true){
      equals();
      capturingFirst = false;
      operatorPressedAlready = true;
      mathOperator = button.textContent;
      firstNum = display.textContent;
      secondNum = "";
    }
    else {
    mathOperator = button.textContent;
    operatorPressedAlready = true;
    }
  });
  button.blur();
});

buttons.forEach(button => {
  button.addEventListener("mousedown", function() {
    button.style.backgroundColor = "#666";
  });

  button.addEventListener("mouseup", function() {
    button.style.backgroundColor = "#444";
  });
});

document.querySelector(".equals").addEventListener("click", function() {
  if (firstNum == "" || secondNum == "") {
    return;
    } 
  else {
    equals(); 
    }
  document.querySelector(".equals").blur();
});

document.querySelector("#clear").addEventListener("click", clear);

body.addEventListener("keydown", function(e){
  let allowedNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  let allowedOperators = ["+", "-", "/", "*", "Enter"]
  let allowedHelpers = [".", "%", "c"]

  if(e.code == "Backspace"){
    if (capturingFirst) {
      firstNum = firstNum.substring(0, firstNum.length - 1);
      display.textContent = display.textContent.substring(0, display.textContent.length - 1);
      }
    else{
      secondNum = secondNum.substring(0, secondNum.length - 1);
      display.textContent = display.textContent.substring(0, display.textContent.length - 1);
    }
  }

  if (allowedNums.includes(e.key)){
    if(capturingFirst){
      if (firstNum.length < 12) {
      firstNum += e.key;
      display.textContent = firstNum;
      }
      }
    else {
      if (secondNum.length < 12) {
    secondNum += e.key;
    display.textContent = secondNum;
      }
    }
  }

  else if(allowedOperators.includes(e.key)){
    switch (e.key){
    case "*": 
      document.querySelector("#multiplication").click();
      break;
    case "/": 
      document.querySelector("#division").click();
      break;
    case "-": 
      document.querySelector("#subtraction").click();
      break;
    case "+": 
      document.querySelector("#addition").click();
      break;
    case "Enter": 
      document.querySelector(".equals").click();
      break;
    }
  }

  else if(allowedHelpers.includes(e.key)){
    switch (e.key){
      case "%":
        document.querySelector("#percentage").click();
        break;
      case ".":
        document.querySelector("#decimal").click();
        break;
        case "c":
          document.querySelector("#clear").click();
          break;
    }
  }

  else {
    return;
  }
})

document.addEventListener("keydown", (e) => {
  const key = document.querySelector(`#${keyMap[e.key]}`);
  if (key) {
    key.style.backgroundColor = "#666";
  }
});

document.addEventListener("keyup", (e) => {
  const key = document.querySelector(`#${keyMap[e.key]}`);
  if (key) {
    key.style.backgroundColor = "#444";
  }
});