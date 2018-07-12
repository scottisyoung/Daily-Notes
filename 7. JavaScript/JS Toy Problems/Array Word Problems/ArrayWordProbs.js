// Make Sure to Run Quokka  (ctrl, shift, p   Then run Quokka on current file) //

/////////////////////// Array Word Problems  /////////////////////////

// For Loop Push Item into an Array //
// Takes the "item" in .push and pushes it into a new array (myArray) the ammount that is specified by the num.

var myArray = [];

function arrayFiller(num) {
  for(var i = 0; i < num; i++) {
	myArray.push("item");
  }
	return myArray;  
}
console.log(arrayFiller(2));

