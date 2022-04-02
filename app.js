const inputEl = document.querySelector(".input-val");
const celsiusBtn = document.querySelector(".btn-celsius");
const fahrenheitBtn = document.querySelector(".btn-fahrenheit");
const convertedTemp = document.querySelector(".convertedTemp");

celsiusBtn.addEventListener("click", function () {
  const inputValue = inputEl.valueAsNumber;

  if (!inputValue) {
    return alert("Enter a number value");
  }

  const result = convertFromFahrenheitToCelsius(inputValue);

  convertedTemp.innerHTML = `<h1>${result} C</h1>`;
});

fahrenheitBtn.addEventListener("click", function () {
  const inputValue = inputEl.valueAsNumber;

  if (!inputValue) {
    return alert("Enter a number value");
  }

  const result = convertFromCelsiusToFahrenheit(inputValue);

  convertedTemp.innerHTML = `<h1>${result} C</h1>`;
});

/*
- convert from celsius to fahrenheit:- (C * 1.8) + 32
- converting from fahrenheit to celsius:- (F - 32) / 1.8
*/

function convertFromFahrenheitToCelsius(value) {
  return (value - 32) / 1.8;
}

function convertFromCelsiusToFahrenheit(value) {
  return value * 1.8 + 32;
}
