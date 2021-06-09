function convert(number1) {
  return (number1 * 1.8) + 32
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
  
  const number1 = parseInt(prompt("Enter a degree in celsius"));
  //const number2 = parseInt(prompt("Enter another number:"));
  const result= convert(number1);
  alert(result + " degrees fahrenheit");