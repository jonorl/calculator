// Calculator operations


const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
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

// grab variables


let numButtons = document.querySelectorAll(".oneToNine, .zero");
let firstNum = "";
let secondNum = "";
let capturingFirst = true;

numButtons.forEach(button => {
    button.addEventListener("click", function() {
        if (capturingFirst) {
            firstNum = button.textContent;
            capturingFirst = false; // Now capture the second number
        } else {
            secondNum = button.textContent;
        }
        console.log(firstNum);
        console.log(secondNum);
    });
});