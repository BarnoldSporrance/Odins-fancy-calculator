let one = document.getElementById("1_Butt");
let two = document.getElementById("2_Butt");
let three = document.getElementById("3_Butt");
let four = document.getElementById("4_Butt");
let five = document.getElementById("5_Butt");
let six = document.getElementById("6_Butt");
let seven = document.getElementById("7_Butt");
let eight = document.getElementById("8_Butt");
let nine = document.getElementById("9_Butt");

let display = document.getElementById("display");
let numberInputArray = [];
let realDisplay ="";
let inputNumericalValue=0;

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


// functions to get input from buttons
function inputPush(e){
  // get string values for each number pressed
  let inputVar = e.target.id.slice(0,1);
  // push these 1-9 string values into a string array
  numberInputArray.push(inputVar);
  //remove the commas to create a string representing the display value
  realDisplay = numberInputArray.join("");
  // convert display string to a number for subsequent operations
  inputNumericalValue = parseInt(realDisplay);
  // display the current value on calculator screen
  display.innerText = realDisplay;

  return inputNumericalValue;
}


// event listeners for the number buttons
one.onclick = inputPush;
two.onclick = inputPush;
three.onclick = inputPush;
four.onclick = inputPush;
five.onclick = inputPush;
six.onclick = inputPush;
seven.onclick = inputPush;
eight.onclick = inputPush;
nine.onclick = inputPush;

//console.log("inputNumericalValue after function:" + inputNumericalValue);


operate('add',inputNumericalValue, 2);




  



 