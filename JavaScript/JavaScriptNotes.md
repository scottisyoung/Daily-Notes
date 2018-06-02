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

*   We can also concatenate strings by using the += operator. 

                var myStr = "This is the first sentence. ";
                myStr += "This is the second sentence.";

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

### <span style="color: red;">Comments / Escaping Literal Quotes in Strings</span>

*   Just like in any program, it is important to be able to write comments.  There are two ways to write comments.     <p></p>

    1. _A Single Line Comment_:   // before a line. <p></p>
    2. _A Multiple-Line Comment_:  /* before and */ at the end. 

*   What happens in a string if you need to use quotes?  You can __Escape__ by using a _backslash_ ( \ ).

    1. var sampleStr = "Alan said, \"Peter is learning\"."; <p></p>

*   __Escaped Characters__

    1.  \ '  Single Quote  
    2.  \ "  Double Quote
    3.  \ \  Backslash
    4.  \ n  New Line
    5.  \ r  Carriage Return
    6.  \ t  Tab 
    7.  \ b  Backspace
    8.  \ f  Form Feed

*   If you want to have quotes inside quotes, you can escape or use opposite types.  Like single for outside and       double for the inside quotes. __'Scott is cool. "yep".';__

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
*   var myName = "your name";   This is called a __String Literal__.


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

## <span style="color: blue;">Control Flow</span>

*   Control Flow is all about learning the building blocks of JavaScript.  Writting programs that make decisions.
*   __Control Flow__ statements enable JS programs to execute code based on conditions.  If a given condition is       true, we execute a block of code. If false, we execute another.  

### <span style="color: red;">If / Else Statements</span>

*   The core task of programming is writing lists of instructions for computers, or translating our ideas from         human-speak into computer-speak. 
*   Lines of code between {} are called __CODE BLOCKS__.  If / else statments have two code blocks minimum.  
*   Basic if / else statement below:

                    let isSoccerFan = true;

                    if (isSoccerFan === true) {
                        console.log("Goal!!!");
                    }
                    else {
                        console.log("No Goal, Booo");
                    }

*   Even non-boolean data types (strings / numbers), can still be used like booleans to determine flow.  
*   Truthy or Falsy values means if a statement is true or false when used to control flow. 
*   All variables that have been declared and assigned are truthy unless they contain one of the following 6           values. <p></p>

        1.  False
        2.  0 and -0
        3.  "" and '' (empty strings)
        4.  null
        5.  undefined
        6.  NaN (Not a Number)

*   Examples Below:

          let variableOne = 'I Exist!';
                if (variableOne) {
                // This code will run because variableOne contains a truthy value.
                } else {
                // This code will not run because the first block ran.
                }     

            let numberOfApples = 0;
                if(numberOfApples){
                console.log('Let us eat!'); // This code will not run because 0 is a falsy value
                } else {
                console.log('No food left!'); // This code will run
                }

*   An exclamation point (!) can change a value from truthy to falsy.  Example: if(!numberOfApples)....

### <span style="color: red;">Comparison Operators & Logical Operators</span>

*   (Less than < ), (Greater than > ), (Less than or equal to <= ), (Greater than or equal to >= ).
*   === three signs in a row is equal
*   !== this is not equal
*   One equal sign is used to assign a variable, we use three to compare values. 
*   && means that both statements must be true.
*   || means either can be true (or).

### <span style="color: red;">Multiple Conditions / Switch Statements / Ternary Operator</span>

*   __Multiple Conditions__: We can add more conditions to statements with (else if).

             let moonPhase = 'solar eclipse';

                if (moonPhase === 'full') {
                console.log('Howl!');
                }
                else if(moonPhase === "mostly full") {
                console.log("Arms and legs are getting hairier.");
                } 
                else if(moonPhase === "mostly new") {
                console.log("Back on two feet.");
                }
                else {
                console.log('Invalid moon phase');
                }   

*   If we want to write a program with 25 different conditions, if/else statements can be ugly to read. <p></p> 

*   __SWITCH__ statements are used when we are writting many lines of code. 
*   To a computer if/else or switch statements are exactly the same. 

*   The switch keyword initiates the statement.  Case is like the else/if part of the statement.  Break is a           keyword that stops the program. At the end of each statemnent there is a default condition.  If none of the        cases are true, then the default will run. 

            let moonPhase = 'full';

                switch (moonPhase) {
                case "full":
                    console.log('Howl!');
                    break;  
                case "mostly full":
                    console.log('Arms and legs are getting hairier');
                    break;
                case "mostly new":
                    console.log('Back on two feet');
                    break;
                default:
                    console.log('Invalid moon phase');
                        break;
                }           

*   __Ternary Operator__: is shorthand and makes things even easier to read.  
*   They are shorthand for if/else statements. 

                isNightTime ? console.log('Turn on the lights!) :
                console.log('Turn off the lights!);

*   __isNightTime ?__  is the conditional statement to check to see if it is truthy.
*   __:__ a colon separates the two different blocks of code that are executed.  (kind of works as the else part)

                favoritePhrase === 'Love That!' ? console.log('I love that!')
                : console.log("I don't love that!");

## <span style="color: blue;">Functions</span>

*   A function is a block of code that is designed to do a task
*   Functions are like recipes, they accept data, perform actions on that data and return a result.
*   The beauty of a function is that they are reusable.

### <span style="color: red;">Parts of a Function</span>

*   _Name_:  Usually a function is given a name that it can later be called by and is always writen in camelCase. 
*   _Parameters_: (), Are made so that the function can accept data.  Parameters are variables in a function            definition that __REPRESENT__ data we can input into the function.  We can set one or multiple parameters.  
*   _Block_: The block is the part of the function inside the {} curly braces.  It is the function body, or the JS      statements that define the function and is followed by a semi-colon. 
*   _Return_: we can use the return keyword inside of the block of the function to return the result of the             function. We usually set it to a value of a variable. 
*   _Executing or Calling the Function_:  This is done after the block and is done by writing the name of the           function with (); afterwards. 
*   _Argument_:  The argument is what will be put inside the () when a function is called.  The parameters recieve      the argument and then pass it through the function body. If there is multiple parameters, there must be            multiple arguments. 

### <span style="color: red;">Function Declarations or Expressions</span>

*   A _Function Declaration_ is a function that is bound to an _identifier_ or _name_.
*   Example:

            function square(number) {
                return number * number;
            }
            console.log(square(5));

*   Function declarations require the keyword function, a name, and a function body.  
*   Another Example:

            function isGreaterThan(numberOne, numberTwo) {
                if (numberOne > numberTwo) {
                    return true;
                } else {
                    return false;
                }
                }

                console.log(isGreaterThan(5,2));

*   A _Function Expression_ is similar to a function declaration, with the exception that the identifier can be         omitted.
*   This creates what is called an __Anonymous Function__.  
*   Function expressions are often stored in _variables_.  You can identify them because they do not have a name        immediately trailing the function keyword.  
*   Example:

        const square = function (number) {
            return number * number;
        };

        console.log(square(5));
*   Arrow Functions are known for being the shorter syntax for function expressions. 


### <span style="color: red;">Arrow Functions</span>
 
*   An _Arrow Function_ is a syntax or way of writting functions that is considered the new shorthand way of           writting a function. 
*   const name () => {}  is the syntax.
*   Example:

                const takeOrder =(topping, crustType) => {
                    console.log('Order: ' + crustType + ' pizza topped with ' + topping);
                };

                takeOrder('mushrooms, pepperoni', 'thin crust');

*   Further Example:

                let orderCount = 0;

                const takeOrder = (topping, crustType) => {
                orderCount++;
                console.log('Order: ' + crustType + ' pizza topped with ' + topping);
                };

                const getSubTotal = (itemCount) => {
                    return itemCount * 7.5;
                }

                const getTax = (itemCount) => {
                    return getSubTotal(itemCount) * 0.06;
                }

                    const getTotal = (itemCount) => {
                    return getTax(itemCount) + getSubTotal(itemCount);
                }

                takeOrder('mushroom', 'thin crust');
                takeOrder('spinach', 'whole wheat');
                takeOrder('pepperoni', 'brooklyn style');

                console.log(getSubTotal(orderCount));
                console.log("Total price with tax: " + getTotal(orderCount));

*   In JS there are several ways to refactor arrow function syntax.
*   We can refactor in 3 ways.<p></p>
        1.  Functions that take a single parameter should not use parenthesis. The code will still work but it is      better practice to omit the parenthese around single parameters.  If a function takes in zero or           multiple parameters, Parenthesis are required. <p></p>
        2.  A function composed of a sole single-line block is automatically returned.  The keyword return can be      removed.  This is referred to as __implicit return__. <p></p>
        3.  A function composed of a sole single-line block does not need brackets. <p></p>

*   Examples:

            Original Expression 

                    const multiplyByNineFifths = (celsius) => {
                        return celsius * (9/5);
                    }

            1.  The parenthesis around celsius have been removed, since its a single parameter. 

                const multiplyByNineFifths = celsius => { 
                    return celsius * (9/5);
                }

            2.  The return keyword has been removed since the function consists of a single-line block.

                const multiplyByNineFifths = celsius => { 
                    celsius * (9/5);
                }

            3.  The {} curly braces have been removed since the function consists of single-line block. 

                const multiplyByNineFifths = celsius => celsius * (9/5);
