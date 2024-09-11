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

    let divided = array.reduce((accumulator, currentValue) => {
      return accumulator / currentValue}
    )
    return divided;
  };

const operate = function(int1, mathOp, int2){
  let arr = []
  switch(mathOp){
    case "÷": 
      console.log(int1, int2); // Check input values
      arr = [int1, int2]
      console.log(arr); // Check array before reduce
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
  display.textContent = operate(firstNum, mathOperator, secondNum);
  return operate(firstNum, mathOperator, secondNum);
}

const clear = function() {
  display.textContent = 0;
  firstNum = "";
  secondNum = "";
  capturingFirst = true;
}


// grab variables


let numButtons = document.querySelectorAll(".oneToNine, .zero");
let opButtons = document.querySelectorAll(".operator");
let buttons = document.querySelectorAll("button");
let display = document.querySelector(".display");

let firstNum = "";
let secondNum = "";
let mathOperator = "";
let capturingFirst = true;

numButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (capturingFirst) {
            firstNum += button.textContent;
        } else {
            secondNum += button.textContent;
        }
    });
});

opButtons.forEach(button => {
  button.addEventListener("click", function() {
    mathOperator = button.textContent;
    capturingFirst = false;
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

document.querySelector(".equals").addEventListener("click", equals);

document.querySelector("#clear").addEventListener("click", clear);

//test
