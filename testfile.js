// Caroline Berish
// CIS 371-01
// Basic Calculator

//Welcome message
console.log("Welcome to Running-Calc.js");

//Placeholder value to keep track of amount
var placeholder = 0;

// Log initial total
console.log("Current total:", placeholder);

// Readline
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout  
})

// Function to get the operation from user input and pass to value
function getOperator(){
    readline.question("Enter operation (+-*/, q to quit):", inputOp => {
        getValue(inputOp);
} );
}

// Function to get the value from user input and operator and pass to calculation
function getValue(inputOp){
    readline.question("Enter value:", inputVal => {
        calculation(placeholder, inputVal, inputOp);
} );
}

// Function to calculate and quit
function calculation(ph, inputVal, inputOp){
    ph = Number(ph);
    inputVal = Number(inputVal);
    
    if (inputOp == "+"){
        placeholder = ph + inputVal;
        console.log("Current total: ", placeholder);
        getOperator();
    }
    else if(inputOp == "-"){
        placeholder = ph - inputVal;
        console.log("Current total: ", placeholder);
        getOperator();
    }
    else if(inputOp == "*"){
        placeholder = ph * inputVal;
        console.log("Current total: ", placeholder);
        getOperator();
    }
    else if(inputOp == "/"){
        if (inputVal == 0){
            console.log("Not valid: division by zero not allowed");
            getOperator();
        }
        else {
            placeholder = ph / inputVal;
            console.log("Current total: ", placeholder);
            getOperator();
        }
    }
    else if(inputOp == "q") {
        console.log("Final total: ", placeholder);
        process.exit(0); 
    }
    else {
        console.log("Not a valid operation");
        getOperator();
    }
}

//Call operator to start 
getOperator();