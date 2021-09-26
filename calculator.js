var readlineSync = require('readline-sync');

var firstNum = readlineSync.questionInt("Please Enter Your First Number");
var secondNum = readlineSync.questionInt("Please Enter Your Second Number");

var userOperation = readlineSync.question("Please enter the operation to perform (add, sub, mul, div");

function addition(number1, number2){
    return (number1 + number2);
}
function subtraction(number1, number2){
    return (number1 - number2);
}
function muliplication(number1, number2){
    return (number1 * number2);
}
function division(number1, number2){
    return (number1 / number2);
}
function customCalculator(number1, number2, eneteredOperation){
    if(eneteredOperation == "add"){
        console.log("Addition of two Numbers: " + addition(number1, number2));
    }
    else if(eneteredOperation == "sub"){
        console.log("Subtraction of two Numbers: " + subtraction(number1, number2));
    }
    else if(eneteredOperation == "mul"){
        console.log("Multiplication of two Numbers: " + muliplication(number1, number2));
    }
    else if(eneteredOperation == "div"){
        console.log("Division of two Numbers: " + division(number1, number2));
    }
    else{
        console.log("Invalid Entry")
    }
}

customCalculator(firstNum, secondNum, userOperation)
