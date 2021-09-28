//Welcome message
console.log("Welcome to Running-Calc.js");

//Declare variables to be pulled from readline
var placeholder = 0;

// Log initial total
console.log("Current total:", placeholder);

//Readline
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout  
})

// It is skipping over user input and saying not a valid operation - then gets stuck 
function getOperator(){
    readline.question("Enter operation (+-*/, q to quit):", inputOp => {
        getValue(inputOp);
} );
}

function getValue(inputOp){
    readline.question("Enter value:", inputVal => {
        calculation(placeholder, inputVal, inputOp);
} );
}

// Function to calculate 
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

//Call it
getOperator();