//****Work in progress****

// Too many global variables
let zero = document.getElementById("0_Butt");
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
let posNegTogg = document.getElementById("+-ToggleButt");
let subtractOperand = document.getElementById("-_Butt");
let multiplyOperand = document.getElementById("*_Butt");
let divideOperand = document.getElementById("/_Butt");
let equalsOperand = document.getElementById("=_Butt");
let percentOperand = document.getElementById("%_Butt");
let allClear = document.getElementById("ac_Butt");
let miniClear = document.getElementById("c_Butt");
let decimal = document.getElementById("._Butt");
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
let noCommaCalcRecordArray=[];
let calcResult;
let deciHolder = '';
let negToggle = "off";

let banana=0;
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
if ((num1) && (num2 === 0) && (operand ==='/')) {
  result = "ERROR";
  display.innerText = result;
} else if (operand === '+'){
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
  soundPlay();
  let inputVar = e.target.id.slice(0,1);
  numberInputArray.push(inputVar);
  realDisplay = numberInputArray.join("");
  // convert display string to a number for subsequent operations
  inputNumericalValue = parseInt(realDisplay);
  calcRecordArray.push(inputNumericalValue);
  // display the current value on calculator screen
  display.innerText = inputNumericalValue;
  // decide which number to assign the current input to - first or second number in the current calculation
  if (operandCounter === "pre") {
    num1 = inputNumericalValue;
   // calcRecordArray.push(num1);
  } else if(operandCounter === "post") {
    num2 = inputNumericalValue;
  //  calcRecordArray.push(num2)
  }
  calcCounter++;
  equalsOperand.onclick = function(){
    soundPlay();
    //calcRecordArray.pop();
    calcRecordArray.push(inputNumericalValue);
    calcResult = operate(operandVar,num1,num2);  
    // calculate the number of digits in the number
    let numLength = String(calcResult).match(/\d/g).length;
    // round the number to required decimal places
    if (numLength>3){
      calcResult = parseFloat(calcResult.toFixed(2));
    }
    // ensure that operations can be layered on top of the last calculation
    if ((operandCounter ==="post") && (calcCounter>0)){
      num1 = calcResult;
    }
    miniDisplay.innerHTML =  noCommaCalcRecordArray;
    display.innerText = calcResult;
  }
}
// function to get the operator used in a calculation
function operandPush(e){
  soundPlay();
  operandVar = e.target.id.slice(0,1);
  //add the pre operand integer to the mini display when there is no calcuation result available
  let tempHolder = calcRecordArray[calcRecordArray.length-1];
  calcRecordArray = [];
  calcRecordArray.push(tempHolder);
  calcRecordArray.push(operandVar);
  noCommaCalcRecordArray = calcRecordArray.join('');
  operandCounter = "post";
  numberInputArray=[];
  display.innerText = operandVar;
  miniDisplay.innerHTML = noCommaCalcRecordArray;
//add result to minidisplay (if result available when operand pressed)
if (calcResult) {
    calcRecordArray = [];
    calcRecordArray.push(calcResult);
    noCommaCalcRecordArray = calcRecordArray.join('');
    miniDisplay.innerHTML = noCommaCalcRecordArray;
  }
}
// function to clear everything, ready for a new calculation
function clearAll(){
  soundPlay();
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
   calcRecordArray = [];
   miniDisplay.innerText = '';
   noCommaCalcRecordArray =[];
}
// function to delete the last digit from thecurrent integer being entered
function clearOne(){
  soundPlay();
  let popArray = Array.from(inputNumericalValue.toString());
  popArray.pop();
  popArrayAfterJoin = popArray.join('');
  popArrayAfterParseInt = parseInt(popArrayAfterJoin);
  display.innerText = '';
  inputNumericalValue = popArrayAfterParseInt;
  calcRecordArray = []
  calcRecordArray.push(inputNumericalValue);
  display.innerText = inputNumericalValue;
  if (display.innerHTML == NaN) {
    display.innerHTML = "ERROR";
  }
  if (operandCounter === "pre") {
     num1 = inputNumericalValue;
     } else if(operandCounter === "post") {
       num2 = inputNumericalValue;
       }   
}
//function to toggle postive negative numbers
function polarityToggle(){
  if (operandCounter === "pre") {
    num1 = -num1;
    inputNumericalValue = num1;
    calcRecordArray.push(inputNumericalValue);
    display.innerText = num1;
    
   } else if(operandCounter === "post") {
     num2 = -num2;
     inputNumercialValue = num2;
     calcRecordArray.push(inputNumericalValue);
     display.innerText = num2;
     }
  if (calcResult) {
    calcResult = -calcResult;
    display.innerText = calcResult;
  }
  if ((calcResult) && (num1)) {
  num1 = calcResult;
  }

  negToggle = "on";

  
  soundPlay();
}
function soundPlay(){
  clickySound = document.getElementById("clickySound");
  clickySound.currentTime = 0;
  clickySound.play();
  }

zero.onclick = inputPush;
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
miniClear.onclick = clearOne;
posNegTogg.onclick = polarityToggle;
decimal.onclick = toDecimal;




 