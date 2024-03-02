var firstNumber = parseInt(prompt("enter first number:"))
var secondNumber = parseInt(prompt("enter second number:"))
var operator = prompt("enter operator")

if (operator == "+") {
    alert(firstNumber + secondNumber);
} else if(operator == "-") {
    alert(firstNumber - secondNumber);
} else if(operator == "*") {
    alert(firstNumber * secondNumber);
} else if(operator == "/") {
    alert(firstNumber / secondNumber);
} else {
    alert("sorry you enter string");
}