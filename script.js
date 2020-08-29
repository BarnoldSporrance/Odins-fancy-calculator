

// Basic operator functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

//function to choose operate on two numbers
function operate(operand, num1, num2) {
  let result = 0;
  if (operand === 'add'){
     result = add(num1,num2);
  } else if (operand === 'subtract') {
       result = subtract(num1,num2);
    } else if (operand === 'multiply') {
         result = multiply(num1,num2);    
    } else if (operand === 'divide') {
           result = divide(num1,num2); 
    }
  return result;
} // end operate function

console.log(operate('divide',4,5));

  
 