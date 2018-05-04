# <span style= "color: #00bfff;"> Ruby </span>

### <span style="color: red;">Overview</span>

*   Notes about <span style="color: #FA8072;">_Ruby_.</span>
*   Ruby is a powerful, flexible programming language you can use in web / internet development.
*   It can be used to create games, process text, and as part of the popular Ruby on Rails web framework.
*   <span style="color: #FA8072;">_High-Level_</span>: meaning reading and writting is really easy. Looks like             English.
*   <span style="color: #FA8072;">_Interpreted_</span>: meaning you don't need a compiler to write and run Ruby.
*   <span style="color: #FA8072;">_Object Oriented_</span>: meaning it allows users to manipulate data structures 
    called objects in order to build and execute programs.   

### <span style="color: red;">Introduction to Ruby</span>

## <span style="color: blue;">Data Types: Numbers, Strings, Booleans</span>

*   _Ruby is Case-Sensitive_
*   _Single-Line Comments_ are made with a simple # before the comment.
*   _Multi-Line Comments_ are made with <span style="color: #FA8072;">_=begin_</span> at the start and <span            style="color: #FA8072;">_=end_</span> after the comment. Make sure you press return after the =begin.  

*   Ruby's data types for numbers, strings and 
    booleans are the same as previously learned.
*   Numbers: are numbers.  5,6,8,10 etc...
*   Booleans: are true or false
*   Strings: are phrases between " ".

## <span style="color: blue;">Variables</span>

*   A _Variable_ is a word or name that grasps a single value.  It basically stores the value, under the name that       you give the variable to be used at another time.

*   To declare a variable, just write <span style="color: #FA8072;">__my_num = 25__</span>.  You use the = to assign     it the value.

## <span style="color: blue;">Math</span>

*   Ruby can do math by using arithmetic operators.
*   <span style="color: #FA8072;">__Addition__</span> (+)
*   <span style="color: #FA8072;">__Subtraction__</span> (-)
*   <span style="color: #FA8072;">__Multiplication__</span> (*)
*   <span style="color: #FA8072;">__Division__</span> (/)
*   <span style="color: #FA8072;">__Exponentiation__</span> (**)
*   <span style="color: #FA8072;">__Modulo__</span> (%) :   Is saying the remainder of division.  Exp: 25 % 7 is 4       since 7 goes into 25 a total of 3 times with 4 left over.
*   Using variables with math: see example below

            *   puts sum = 13 + 379
            # ==> 392

## <span style="color: blue;">'Puts' and 'Print'</span>

*   The __print command__ just takes whatever you give it and prints it to the screen. 
*   The __put command__ (for "put string") is slightly different: it adds a new blank line after the thing you want      it to print. 
*   _No parentheses or semicolons_ are needed!

        *   Example:  puts "What's up?"
                      print "Scott Young"   

## <span style="color: blue;">Everything is an Object, thus we can use "Methods"</span>

*   _Methods_: are certain built-in-abilities. We can think of them as skills. 
*   _Interpreter_: is the program that takes the code you write and runs it. 
*   _Editor_: You type code in the editor, the interpreter reads your code and then shows you the result of running      your code in the console. 

## <span style="color: blue;">Methods</span>

### "String Methods"
*   Methods are summoned using a (.). If you have a string for example, "I love ice cream", and take the .length of      it, Ruby will return the length of the string. (number of characters).

*   The _reverse method_ will spit out a string backwards, for example: "Scott" will be "ttocS"

*   The _upcase / downcase methods_ will convert a string to all UPPER CASE or all lower case. 

####  .length

            *   "I love ice cream".length
            # ==> 16

            *   puts "Scott Young".length
            # ==> 11

####  .reverse

            *   "Scott Young".reverse
            # ==> gnuoY ttocS

#### .upcase / .downcase

            *   "scott young".upcase
            # ==> SCOTT YOUNG

            *   "SCOTT YouNG".downcase
            # ==> scott young

## <span style="color: blue;">Naming Conventions</span>

*   There are different kinds of variables. These particular naming conventions deal with only __local variables__.
*   By convention, these variables should always start with a _lowercase letter_ and should be _separated_ by            underscores. Examples: counter or masterful_method
*   Ruby wont stop you from starting a variable with other symbols such as capital letters, $, or @ but those            symbols mean other things so it is best to avoid confusion. 

## <span style="color: blue;">Chaining Commands</span>

*   You can chain commands in two ways.  All in a line or in multiple lines.  Example below
                
                * Multiple Lines
                  puts name = "Scott Young.downcase
                  puts name.reverse
                  puts name.upcase

                  # ==> scott young
                  # ==> gnuoy ttocs
                  # ==> SCOTT YOUNG

                * All in Line
                  puts brother = "Craig Young".downcase.reverse.upcase
                  # ==> GNUOY GIARC





