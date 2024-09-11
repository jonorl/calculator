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
    display.textContent = "LOL";
    return;
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

  if (result === undefined) {
    display.textContent = "LOL";
    return;
  }


  // Dynamically adjust length to have max 12 chars displayed

  result = result.toString();
  let [integerPart, decimalPart] = result.split(".");

  const removeTrailingZeros = (str) => str.replace(/\.?0+$/, '');
  if (!decimalPart) {
    display.textContent = integerPart.length > 12 ? integerPart.slice(0, 12) : integerPart;
  } 
  else {
    if (integerPart.length >= 12) {
        display.textContent = integerPart.slice(0, 12);
    } 
    else {
        let maxDecimals = 12 - integerPart.length;
        let formattedResult = parseFloat(result).toFixed(maxDecimals);
        formattedResult = removeTrailingZeros(formattedResult);
        display.textContent = formattedResult;
    }
  }
}

const clear = function() {
  display.textContent = 0;
  firstNum = "";
  secondNum = "";
  mathOperator = "";
  capturingFirst = true;
  operatorPressedAlready = false;
  dotPressedFirstNum = false;
  dotPressedSecondNum = false;
  minusSignOnFirstNum = false;
  minusSignOnSecondNum = false;
}

const dot = function() {

}

// grab DOM buttons

let numButtons = document.querySelectorAll(".oneToNine, .zero");
let opButtons = document.querySelectorAll(".operator");
let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");
let decimal = document.querySelector(".decimal")


// helper variables

let firstNum = "";
let secondNum = "";
let mathOperator = "";
let capturingFirst = true;
let operatorPressedAlready = false;
let dotPressedFirstNum = false;
let dotPressedSecondNum = false;
let minusSignOnFirstNum = false;
let minusSignOnSecondNum = false;


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
    });
});

document.querySelector(".decimal").addEventListener("click", function() {
  if (capturingFirst) {
    if (firstNum.length < 12) {
      if(dotPressedFirstNum == true){
        return;
      }
      else{
        dotPressedFirstNum = true;
        firstNum += ".";
        display.textContent = firstNum;
        }
      }
    } 
  else {
    if (secondNum.length < 12) {
      if(dotPressedSecondNum == true){
        return;
        }
      else{
        dotPressedSecondNum = true;
        secondNum += ".";
        display.textContent = secondNum;
        }
      }
    }
})

document.querySelector("#plusMinus").addEventListener("click", function() {
  if (capturingFirst) {
      if(minusSignOnFirstNum == false){
        minusSignOnFirstNum = true;
        firstNum = "-" + firstNum 
        display.textContent = firstNum;
        }
      else {
        minusSignOnFirstNum = true;
        firstNum = firstNum.substring(1);
        display.textContent = firstNum;
        }
  }
  else {
    if (minusSignOnSecondNum == false) {
        minusSignOnSecondNum = true;
        secondNum = "-" + secondNum
        display.textContent = secondNum;
        }
    else{
      minusSignOnSecondNum = true;
      secondNum = secondNum.substring(1);
      display.textContent = secondNum;
      }
  }
})

opButtons.forEach(button => {
  button.addEventListener("click", function() {
    capturingFirst = false;
    if(operatorPressedAlready === true){
      equals();
      mathOperator = button.textContent;
      firstNum = display.textContent;
      secondNum = "";
      dotPressedSecondNum = false;
    }
    else {
    mathOperator = button.textContent;
    operatorPressedAlready = true;
    }
  });
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
});

document.querySelector("#clear").addEventListener("click", clear);

// add plusMinus function
// add percentage function
// add keyboard support
// add backspace support
