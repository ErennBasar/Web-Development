const calculator_display = document.querySelector(".display");
const calculator_buttons = document.querySelector(".buttons");

let displayValue = "1";

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
    console.log("islem button clicked:", element.textContent);
  } else if (element.classList.contains("mod")) {
    console.log("mod button clicked:", element.textContent);
  } else if (element.classList.contains("clear")) {
    console.log("clear button clicked:", element.textContent);
  } else if (element.classList.contains("mod")) {
    console.log("mod button clicked:", element.textContent);
  } else if (element.classList.contains("decimal")) {
    console.log("decimal button clicked:", element.textContent);
  }
});
