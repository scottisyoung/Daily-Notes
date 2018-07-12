// Make Sure to Run Quokka  (ctrl, shift, p   Then run Quokka on current file) //

/////////////////////// Array Number Problems  /////////////////////////

// Finds the Average of an Array of Numbers 
// by taking the arr(array) of numbers and doing a forloop through
// them, incrementing number by number and finding the sum of all the numbers. After saving the array's sum to
// a variable named sum, then it returns sum divided by the array's length which is saved to the variable average.

function averageFinder(arr) {
    var average = 0;
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
      sum+= arr[i]
    } 
     average = (sum / arr.length);
     return average;                                       
  }
  
  console.log(averageFinder([1,2,3,4,5,6,7,8,9,10]));

// This problem does the same exact thing as the one above but uses Math.ceil to round up the number from a decimal. 

// Math.ceil  =  ROUND UP
// Math.floor =  ROUNDS DOWN
// parseInt =    ALSO ROUNDS DOWN

  function averageFinder2(arr) {
    var average = 0;
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
      sum+= arr[i]
    } 
    return Math.ceil(sum / arr.length);                                        
  }
  console.log(averageFinder2([1,2,3,4,5,6,7,8,9,11]));


// Adds a Value (10) to EACH number in an Array of Numbers
// This function takes an array of numbers as a parameter (arr), and uses a forloop to increment through the numbers.
// It then uses parseInt to change the string values into actual numbers.  It then uses a callback function to take
// the variable numbers and use the .forEach method to loop through the array.  .forEach takes in 3 parameters.
// Element Value, Element Index and the Array that it needs to go through. We then set the Array and the index equal
// to the value and add 10 to each value. We then return the array.  

// IF we didnt use parseInt then it would just add 10 to the strings like this... [15, "910", 26, 29, "2510", "3410", 58]

var numbers = [5, '9', 16, 19, '25', '34', 48];

function addTen(arr){
    
  for(var i = 0; i < arr.length; i++){
    arr[i] = parseInt(arr[i]);
  }
  numbers.forEach(function(val, i, arr){
    
    arr[i] = val + 10;
  
  });
  return arr;
}
console.log(addTen(numbers));


// REVERSED LOOPER PROBLEM//
// Take an array of numbers and loop through it BACKWARDS,  subtract 2 from the last number of the array, then subtract
// from the second to last number, then 0, then add 1, then add 2, then add 3 to the first number of the array.

// The function first takes in the array of numbers and puts them throught the forloop backwards (i--).  It then takes
// the variable count which is equal to 2.  Count then is iterating down from and minuses (2,1,0 -1,-2,-3), so 6-2, 5-1,
// 4-0, 3 --1, 2 --2, 1 --3 

// Additional Advice.   arr.length will give you the length of the array starting with the first number in the array.
// However arr.length -1 will give you the length but will start with the last number of the array. So in this case
// 6.  

var nums = [1,2,3,4,5,6]

function reversedLooper(arr){
  var count = 2
  for(var i = arr.length - 1; i >=0; i--){
    arr[i] -= count;
    count--;
  }
  return arr;
}
console.log(reversedLooper(nums));


// BASIC LOOPER PROBLEM //
// Take in a array and add 5 to each number in the array.  

// The function takes in an array of numbers and then takes that array and uses .map method which loops through
// the array and then uses a callback function with 3 parameters, Element Value, Element Index and the Array that it needs to go through. 
// .map then creates a newArray with the results equalling the array value + 5 to each number. 

function looper(arr){
  arr.map(function(val, i, arr){
    arr[i] = val + 5;
  })
  return arr;
}

console.log(looper([2,7]));


// PUSH NUMBER INTO ARRAY //
// Take an empty array and push numbers into it until you reach the number 25.

// The function takes an empty variable called newArr and sets it equal to an empty array.  It then uses a forloop
// set to stop at 25 iterations.  It then uses .push to insert each iteration number one by one into an array. 

function maker (){
  var newArr = [];
  for(var i = 1; i <=25; i++){
    newArr.push(i);
  }
  return newArr;
}
console.log(maker());


//EVEN FINDER //
// Take an array of numbers and remove all odd numbers so that the array is left with only even numbers.

// The function takes in the array of numbers as a parameter (myArr), then does a forloop through the array.  It 
// then uses an if statement with an arithemic operator % saying if divided by 2 and the remainder is 0 (even), 
// push it into the new empty array of evensOnly.   


var myArr = [1,2,3,4,5,6,7,8,9,10]

function evenFinder(arr){
  var evensOnly=[];
  for(var i = 0; i < arr.length; i++){
    
    if(arr[i] % 2 === 0){
      evensOnly.push(arr[i]);
    }
  }
    return evensOnly;  
}

console.log(evenFinder(myArr));


// ODDS AND EVENS //
// Write a function that takes in an array of numbers and then separates them into an evens array and an odds array.

// Much like the function in the previous problem.  The function takes in an array of numbers.  The array then goes
// through a forloop and uses an if / else statement to see if the remainer when divided by 2 is odd or even.  If
// even, it pushes the num into the empty evens array.  If not even, it pushes it into the empty odds array. 

function oddsAndEvens(nums){
  var odds = [];
  var evens = [];
  for(var i = 0; i < nums.length; i++){
    if(nums[i] % 2 === 0){
      evens.push(nums[i]);
    }
    else{
      odds.push(nums[i]);
    }
  }
  return odds;
}
console.log(oddsAndEvens([1,2,3,4,5,6,7,8]));


// FIND VALUE IN AN ARRAY //
// Write a function that takes in two parameters.  The first representing the array and the second the value that
// needs to be searched for.  If the value is in the array, then return true, if not return false.

// The function takes in an array and a value to be found.  It then sets a variable (foundIt) equal to val that is 
// found.  It uses the method .indexOf which loops throught the array and looks for the value.   It then uses an if
// statement stating that if the array[foundIt] is equal to the val return true. Else return
// false. 

function findInArray(arr, val){
  var foundIt = arr.indexOf(val);
  if(arr[foundIt] === val) {
    return true;
  }
  else return false;
}
console.log(findInArray([4,8,15,16,23,42],42));


