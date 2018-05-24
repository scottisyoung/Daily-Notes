// Make Sure to Run Quokka  (ctrl, shift, p   Then run Quokka on current file) //

///////////////////////  Basic Math Problems  /////////////////////////
// Addition, Subtraction, Multiplication and Division //

//  ADDITION OF NUMBERS FUNCTION  //
function sum(numOne, numTwo) {
    return numOne + numTwo;
}
console.log(sum(2,5));

// SUBTRACTION OF NUMBERS FUNCTION //
function difference(numOne, numTwo) {
    return numOne - numTwo;
}
console.log(difference(2,5));

// MULTIPLICATION OF NUMBERS FUNCTION //
function product(numOne, numTwo) {
    return numOne * numTwo;
}
console.log(product(5,5));

// QUOTIENT OF NUMBERS FUNCTION //
function quotient(numOne, numTwo) {
    return numOne / numTwo;
}
console.log(quotient(20,5));


// Exponents //
// Taking num to the power of numInc //

function exponent(num, numInc) {
    var newNum = Math.pow(num, numInc);
    return newNum;
  }
  console.log(exponent(2,3));

// Convert Celsius to Fahrenheit
// Changing temperature

function convertToF(celsius) {
    var fahrenheit;
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
 convertToF(30);

// Test Scores
//  Finding out the percentage on a test score

 function scoreTest(correct, questions) {
    var percent;
    percent = (correct / questions) * 100;
    return percent;
}
scoreTest(18,20);