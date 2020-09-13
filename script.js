// A ridiculuously large list of way too many global variables. Ouch.
let one = document.getElementById("1_Butt");
let two = document.getElementById("2_Butt");
let three = document.getElementById("3_Butt");
let four = document.getElementById("4_Butt");
let five = document.getElementById("5_Butt");
let six = document.getElementById("6_Butt");
let seven = document.getElementById("7_Butt");
let eight = document.getElementById("8_Butt");
let nine = document.getElementById("9_Butt");

let addOperand = document.getElementById("+_Butt");
let subtractOperand = document.getElementById("-_Butt");
let multiplyOperand = document.getElementById("*_Butt");
let divideOperand = document.getElementById("/_Butt");
let equalsOperand = document.getElementById("=_Butt");

let allClear = document.getElementById("ac_Butt");
let miniClear = document.getElementById("c_Butt");

let display = document.getElementById("display");
let miniDisplay = document.getElementById("miniDisplay");
let numberInputArray = [];
let realDisplay =[];
let inputNumericalValue=0;
let num1;
let num2;
let operandCounter = "pre";
let operand ="";
let operandVar;
let calcCounter = 0;
let calcRecordArray = [];



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

//function to operate on two numbers given an operator
function operate(operand, num1, num2) {
  let result = 0;
  if (operand === '+'){
     result = add(num1,num2);
  } else if (operand === '-') {
       result = subtract(num1,num2);
    } else if (operand === '*') {
         result = multiply(num1,num2);    
      } else if (operand === '/') {
           result = divide(num1,num2); 
        } 
  return result;
} // end operate function

// functions to get input from 1-9 number buttons
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

  // decide which number to assign the current input to - first or second number in the current calculation
  if (operandCounter === "pre") {
    num1 = inputNumericalValue;
   
  } else if(operandCounter === "post") {
    num2 = inputNumericalValue;
  }
  
  let calcResult = operate(operandVar,num1,num2);
  calcRecordArray.push(num2);
  calcCounter++;
  console.log("calcResult: "+ calcResult);
  equalsOperand.onclick = function(){
    
    console.log("calcRecordArray after prressing equals: "+  calcRecordArray);
    
    

  // calculate the number of digits in the number
  let numLength = String(calcResult).match(/\d/g).length;
  console.log("numLength: " +  numLength);

  // round the number to required decimal places
  if (numLength>3){
    calcResult = parseFloat(calcResult.toFixed(2));
    }

    // ensure that operations can be layered on top of the last calculation
    if ((operandCounter ==="post") && (calcCounter>0)){
      num1 = calcResult;
      console.log("calcRecordArray pre pop" + calcRecordArray)
      //calcRecordArray.pop();
     
    //  console.log("calcRecordArray post pop" + calcRecordArray)

    }
    miniDisplay.innerText = calcRecordArray;
    display.innerText = calcResult;
  }
}

// function to get the operator used in a calculation
function operandPush(e){
  operandVar = e.target.id.slice(0,1);

  calcRecordArray.push(realDisplay);
  console.log("calcRecordArray in operandPush funct: " +  calcRecordArray);

  calcRecordArray.push(operandVar);
  console.log("calcRecordArray in operandPush funct after operator tapped: " +  calcRecordArray);


  operandCounter = "post";
  numberInputArray=[];
  display.innerText = "";
}

// function to clear everything, ready for a new calculation
function clearAll(){
   numberInputArray = [];
   display.innerText = '';
   inputNumericalValue = 0;
   operandCounter = "pre";
   num1 = 0;
   num2 = 0;
   operandVar="";
   calcResult = 0;
   calcRecordArray =[];
   calcCounter = 0;

}

// adding onclick events to buttons in super inefficent and clumsy fashion. Urgh. 
one.onclick = inputPush;
two.onclick = inputPush;
three.onclick = inputPush;
four.onclick = inputPush;
five.onclick = inputPush;
six.onclick = inputPush;
seven.onclick = inputPush;
eight.onclick = inputPush;
nine.onclick = inputPush;
divideOperand.onclick = operandPush;
addOperand.onclick = operandPush;
subtractOperand.onclick = operandPush;
multiplyOperand.onclick = operandPush;

allClear.onclick = clearAll;
miniClear.onclick = clearAll;





  



 