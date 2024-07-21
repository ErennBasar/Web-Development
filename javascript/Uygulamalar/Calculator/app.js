const calculator_display = document.querySelector(".display");
const calculator_buttons = document.querySelector(".buttons");

let displayValue = "0";
let firstValue = null;
let operator = null;
let waitingForSecondValue = false;

/*updateDisplay();*/

function updateDisplay() {
  calculator_display.value = displayValue;
}

calculator_buttons.addEventListener("click", function (e) {
  const element = e.target;

  if (!element.matches("button")) return;

  if (element.classList.contains("numbers")) {
    console.log("Number button clicked:", element.textContent);
  } else if (element.classList.contains("islem")) {
    // console.log("islem button clicked:", element.textContent);

    handleOperator(element.value);
    return;
  } else if (element.classList.contains("mod")) {
    console.log("mod button clicked:", element.textContent);
  } else if (element.classList.contains("clear")) {
    // console.log("clear button clicked:", element.textContent);

    clear();
    updateDisplay();

    return;
  } else if (element.classList.contains("mod")) {
    console.log("mod button clicked:", element.textContent);
  } else if (element.classList.contains("decimal")) {
    // console.log("decimal button clicked:", element.textContent);

    inputDecimal();
    updateDisplay();
    return;
  }
  inputNumber(element.value);
  updateDisplay();
});
function handleOperator(nextOperator) {
  const value = parseFloat(displayValue);

  if (firstValue === null) {
    firstValue = value;
  }

  waitingForSecondValue = true;
  operator = nextOperator;

  console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function inputNumber(num) {
  if (waitingForSecondValue) {
    displayValue = num;
    waitingForSecondValue = false;
  } else {
    displayValue = displayValue === "0" ? num : displayValue + num;
  }

  console.log(displayValue, firstValue, operator, waitingForSecondValue);
}

function inputDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
}

function clear() {
  displayValue = "0";
}
