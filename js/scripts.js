function convertToFahrenheit(number1) {
  return (number1 * 1.8) + 32;
}
function subtract(number1,number2) {
  return number1 - number2;
}
function multiply(number1,number2) {
  return number1 * number2;
}
function divide(number1,number2) {
  return number1 / number2;
}
function add(number1, number2) {
  return number1 + number2;
  }
  
  const number1 = parseInt(prompt("Enter a number"));
  const number2 = parseInt(prompt("Enter another number:"));
  const result= add(number1, number2);
  alert(result);

  //User Interface

  $(document).ready(function() {
    const number1 = parseInt(prompt("Enter a number"));
  const number2 = parseInt(prompt("Enter another number:"));
  const result= add(number1, number2);
  alert(result);
  })