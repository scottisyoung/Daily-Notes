# <span style="color: #00bfff;">JavaScript Notes</span>

## <span style="color: blue;">Overview</span>

*   JavaScript is a widely used web-based programming language that powers dynamic behavior on most websites.
*   JavaScript uses _Data Types_ and _Built-in-Methods_ that are essential for aspiring JS Developers.

## <span style="color: blue;">Basic Concepts</span>

*   <span style="color: #76D7C4;">_Console_</span>: Before you learn anything it is important to know how to           print values to the console.  In JS we use console.log() which is a command used to print, or log text to          the console.  console.log("pizza") will print pizza to the console.

### <span style="color: red;">Data Types</span>

*   Data Types are the building blocks of all languages and essential pieces of any program.
*   There are 7 different data types in JS.
*   _Primitive Data Types_: are as their name implies, they are the most simple built-in-forms of data.<p></p>  
    1. __String__:   a string is any grouping of keyboard characters surrounded by single or double quotes.                     "New York City". <p></p>
    2. __Numbers__: Any number, including numbers with decimals.  5, 1516, 23.42 <p></p>
    3. __Booleans__:  Either _true or false_ with no quotations. <p></p>
    4. __Null__: Can only be null.  It is represented by the absence of value / null. <p></p>
*   _Non-Primitive Data Types_: included below. <p></p>

    5. __Undefined__: Is a variable that has not been assigned a value.  Its value will be undefined.
                      Example: var testVar;  would be undefined because it was not assigned a value.<p></p> 
    6. __Symbol__: Symbols are new to JS in 2015.  A symbol is a unique and immutable primitive value and may be                  used as the key of an object property. Example: const mySymbol = symbol('mySymbol');<p></p> 
    7. __Object__: In computer science, an object is a value in memory which is possible referenced by an                       identifier.  Objects are NOT privitive data types.  _An object is a collection of properties that              are stored in key/value pairs and can reference any type of data._  Example: Below <p></p>
                        var obj = {
                            key1: 'value',
                            key2: 'value',
                            key3: true,
                            key4: 32,
                            key5: {}
                        } 

### <span style="color: red;">Math Operators</span>

*   Add: +
*   Subtract: -
*   Multiply:  *
*   Divide: /

*   _String Interpolation or String Concatination_:  String interpolation is inserting the data saved from a           variable into a string. String Concatination is the addition of multiple strings. This can be done with the        addition operator.   Example: <p></p>

            let favoriteAnimal = "Watson";

            console.log("My favorite animal is a " + favoriteAnimal + "!!!")

            The Result is:   My favorite animal is a Watson!!!

*   We can also insert varibles into strings by using other methods. Examples below: <p></p>
        1.  Instead of using quotes, you can use backticks  ``. `Watson` <p></p>
        2.  You can wrap your variable with ${myVariable}, followed by a sentence.  No + is necessary.

                Example:

                let myPet = 'watson';
                console.log(`I own a pet ${myPet}.`)    Output: I own a pet watson.

### <span style="color: red;">Properties</span>

*   When you introduce a new piece of data into a JS program, the browsers saves it as an instance of the data         type.
*   An _instance_ is an individual case (or object) of a data type.
*   "Hello" will be saved as a string instance in the computer's memory.  This will have additional information        attached to it. For example, this string will have a property on it called _length_ that stores the number of      characters in it. You can retrieve this information at anytime. console.log("hello".length);  which prints: 5

### <span style="color: red;">Built-in Methods</span>

*   While the length of a string is calculated, is when an instance is created.  A string instance also has            _methods_ that calculate new information as needed.  They create actions that generate an output.  
*   _Built-in Methods_ are called or used by appending an instance with a period, the name of the method, and          closing the parenthesis.  console.log("hello".toUpperCase());  Which will print: HELLO
*   You can find a list of built-in-string methods in JS documentation.  

### <span style="color: red;">Libraries</span>

*   What if you want to call a method without an instance?  That is where JS libraries come into play. 
*   _Libraries_ contain methods that you can call without an instance. 
*   One such collection contains mathematical methods aptly named the _Math Library_
*   console.log(Math.random());  This method returns a random nuber between 0 and 1.  To have it generate a number     between 0 and 50, we could multiply the result by 50...  console.log(Math.random() * 50);
*   If you wanted a whole number, you can use Math.floor() which takes a decimal and rounds it to the nearest          whole number.
*   console.log(Number.isInteger(2017));  will return true because 2017 is an integer. 

### <span style="color: red;">Comments</span>

*   Just like in any program, it is important to be able to write comments.  There are two ways to write comments.     <p></p>

    1. _A Single Line Comment_:   // before a line. <p></p>
    2. _A Multiple-Line Comment_:  /* before and */ at the end. 

### <span style="color: red;">Variables</span>

*   Variables can be saved to Let, Const, and Var
*   __Const__ is short for constant.  It is a keyword that creates a variable with a value that _CANNOT_ change.
*   If you try to change the value on a constant variable, it will throw you an error message. 
*   __Let__ variables however can be reassigned with different values.  For example,  let changeMe = true; However     if I change the value... changeMe = false;  It will then be false.
*   Let: allows you to declare variables that are limited in scope to the block, statement, or expression which is     used.  
*   __Var__ is a variable keyword that defines a variable globally or to an entire function regardless of block        scope. 
*   In Computer Science, Data is _anything_ that is meaningful to the computer.  Since JS provides 7 different         data types we can use __Variables__ to store and manipulate that data in a dynamic fashion. 
*   They store data by using a "label" to point to the data rather than using the data itself.  
*   To declare a variable:   var ourName;  This creates a variable that is called ourName.  
*   We then want the variable to have a value stored to it with the _assignment operator aka "="_ ...  var             ourName = "scott".
*   _Initializing Variables_:  it is common to _initialize_ a variable to an initial value in the smae line as it      is declared. var myVar = 0;
*   _Uninitialized Variables_:  When variables are declared but not assigned their value is undefined.  Which          means if you do a mathimatical operation the result will be _NAN_ or "Not a Number".  If you _concatenate_ a       string with an undefined variable you will get a literal string of "undefined". 
*   In JS all variables and function names are CASE SENSITIVE.  It is important to use __camelCase__.  The first       word is lowercase and the first letter of each subsequent words is capitalized.


### <span style="color: red;">Incementing Numbers / Creating Decimals / Remainders</span>

*   You can easily increment or add one to a variable with the ++ operator. 
*   i++;  is the equivalent of i = i + 1;  
*   You can do this with other math operators as well. (--)  Example: var myNum = 87;  x = myNum++;  <p></p>
*   We can store decimal numbers in variables too.  Decimals are referred to as _floating point numbers_ or            _floats_. <p></p>
*   _Remainders_: are created by using the _remainder operator_ __%__.  
*   Examples: 5 % 2 = 1 
*   Explanation: 5 / 2 = 2.5....    So 2*2 = 4 and 5-4 = 1 which is the (remainder).
*   In math, a number can be checked even or odd by checking the remainder of the division by the number 2. 
*   17 % 2 = 1 (17 is odd)
*   48 / 2 = 0 (48 is even)
*   Sometimes the remainder operator is INCORRECTLY referred to as the "modulus operator".  It does not work           propertly with negative numbers. 
*   _Compound Assignments_: (+=, -=, *=, /=) operator works to add, subtract, multiply or divide compound              assignments to variables.  Example: myVar = myVar + 5;  OR myVar += 5; <p></p>
*   Convert Celsius to Fahrenheit Example Below: <p></p>

            function convertToF(celsius) {
                var fahrenheit;
                fahrenheit = (celsius * 9/5) + 32;
                return fahrenheit;
            }
             convertToF(30);

*   Test Scores Example Below: <p></p>

            function scoreTest(correct, questions) {
                var percent;
                percent = (correct / questions) * 100;
                return percent;
            }
            scoreTest(18,20);

*   Sales Tax Example Below: <p></p>

            function CalculateTaxes(price, quantity) {
                var salesTax = 0.10;
                var totalPrice;

                var beforeTax = (price * quantity);
                var taxAmount = (beforeTax * salesTax);
                totalPrice = beforeTax + taxAmount;

                return totalPrice;
            }
            calculateTaxes(1,10);

            OR

            function CalculateTaxes(price, quantity) {
                var salesTax = 0.10;
                var totalPrice;
            
            totalPrice = (price * quantity) * (1 + salesTax);

            return totalPrice;
            }
            calculateTaxes(1,10);

