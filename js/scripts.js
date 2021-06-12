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
  
//User Interface

$(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
  $("form#subtract").submit(function(event) {
    event.preventDefault();
  $("form#multiply").submit(function(event) {
      event.preventDefault();
  $("form#divide").submit(function(event) {
        event.preventDefault();
  const number1 = parseInt($("#add1").val());
  const number2 = parseInt($("#add2").val());
  const result= add(number1, number2);
  $("#output").text(result);
  });
});