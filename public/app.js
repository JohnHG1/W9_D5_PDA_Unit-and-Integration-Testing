document.addEventListener('DOMContentLoaded', function(){

  const calculator = new Calculator();

  const updateView = function() {
    const runningTotal = document.querySelector('#running_total');
    runningTotal.value = calculator.runningTotal;
  };

  //bind number clicks to number buttons
  const numbers = document.querySelectorAll('.number');
  numbers.forEach(function(number) {
    number.onclick = function(evt) {
      calculator.numberClick(evt.target.innerText);
      updateView();
    };
  });

  // bind operator clicks to operator buttons
  const operators = document.querySelectorAll('.operator');
  operators.forEach(function(button) {
    button.onclick =  function(evt) {
      let operator = evt.target.innerText;
      calculator.operatorClick(operator);
      updateView();
    };
  });

  // handle clicking of the 'clear' button
  const clear = document.querySelector('#clear');
  clear.onclick = function() {
    calculator.clearClick();
    updateView();
  };

})
