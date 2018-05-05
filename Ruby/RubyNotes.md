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

### <span style="color: red;">Everything is an Object, thus we can use "Methods"</span>

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

####  .include
            *   user_input.include? "s"
            *   this will look for s in the user_input.  the ? at the end means true. 

####  .gsub
            *   user_input.gsub(/s/, "th")
            *   this will replace the s with a th

####  .split
            *   text.split(",")
            *   This will take in a string and return an array.  If we in a bit of text in parentheses, .split will      divide the string wherever it sees a bit of text, called a __delimiter__. Like above, the text will      be divided wherever it sees a ,

#### .upcase / .downcase / .capitalize 

            *   "scott young".upcase
            # ==> SCOTT YOUNG

            *   "SCOTT YouNG".downcase
            # ==> scott young

            *   "scott".capitalize
            # ==> Scott

#### using !
*   Using an Exclamation point will repeat the method on the variable that you set it equal to.  Example below:  Now     anytime that you use first_name variable, it will automatically capitalize the first letter.  You can use this       with other methods as well... upcase!, downcase! etc...

            * first_name = "Scott".capitalize!
            # ==> Scott
        

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

## <span style="color: blue;">Getting Input / Printing the Output</span>

*   _gets_ is the Ruby method that gets input from the user. When getting input, Ruby automatically adds a blank         line after each bit of input.
*   _chomp_ removes that extra line.  The program works fine without chomp but if not used will add the line. 
    EXAMPLE:  first_name = gets.chomp    (this variable first_name is set to use .chomp to remove the extra line)  At this time, the terminal will actually ask you to enter in a value for first_name. 
*   _String Interpolation_: Once a variable is defined for example: _monkey = "Curious George"_ then if you add a        string that says _"I took #{monkey} to the zoo"_, Ruby will do something called String interpolation and replace     #monkey with "Curious George"

## <span style="color: blue;">Control Flow</span>

*   <span style="color: #FA8072;">_Control Flow_</span> gives us the flexibility we're looking for. We can select        different outcomes depending on information that user types, the result of a computation, or the value returned      by another part of the program. 

*   <span style="color: #FA8072;">_If_</span> statements.  Take in an expression and relates it to whether the           statement is true or false.  If false, Ruby will not execute that block of code and will skip to the next thing.     If should be indented two spaces, then print should be indented. EXAMPLE: below

            * if 1 < 2 
                print "I'm getting printed because one is less than two!"
              end

*   <span style="color: #FA8072;">_elsif / else_</span> statements to provide other stipulations to the statement.       If the if statement is true run that, however if false run the else statement. elseif provides more than 2           statements.  See example below.

            *   print "What is the temperature?"
                temp = Integer(gets.chomp)

                if temp > 90 
                print "It is too hot and I will just stay inside."
                elsif temp > 70
                print "Perfect Weather"
                else temp < 70
                print "Too Cold"
                end

*   <span style="color: #FA8072;">_Unless_</span> Sometimes you want to use control flow to check if something is        false rather than if it is true.  You can reverse your if/else OR you can use unless.  Example below: 

            *   hungry = true 

                unless hungry
                puts "I'm writing Ruby programs!"
                else
                puts "Time to eat!"
                end  

                # ==> Time to eat!

## <span style="color: blue;">Control Flow and it's Operators</span>

*   <span style="color: #FA8072;">_Equal or Not_</span> We can use == to check to see if two things      are equal       (comparator or rational operator)
*   <span style="color: #FA8072;">Equal</span>: ==
*   <span style="color: #FA8072;">Not Equal</span>: !=

                *   is_true = 2 != 3 
                    is_false = 2 == 3

*   <span style="color: #FA8072;">_Less than or Greater than_</span> We can also check to see if values are less         than, greater than, equal to, less than and equal to, or great than and equal to. 
*   <span style="color: #FA8072;">Less than</span>: <
*   <span style="color: #FA8072;">Greater than</span>: >
*   <span style="color: #FA8072;">_Greater than or equal to</span>: >=
*   <span style="color: #FA8072;">Less than or equal to</span>: <=

*   <span style="color: #FA8072;">AND</span> You can use logical and boolean operators in Ruby as well.
*   <span style="color: #FA8072;">AND</span>: &&, which only results in true when __BOTH__ expression on either side     of && are true.  EXAMPLES:

                *   true && true # => True
                *   true && flase # => False
                *   false && true # => False
                *   false && false # => False

                *   1 < 2 && 2 < 3  # => True

*   <span style="color: #FA8072;">OR</span> which is called an __Inclusive Or__ because it evaluates to true when        one or the otehr or both expressions are true.
*   <span style="color: #FA8072;">OR</span>: ||

                *   true || true  # => True
                *   true || false # => True
                *   false || true # => True
                *   false || false # => False

*   <span style="color: #FA8072;">NOT</span> Which makes true values false and vice-versa
*   <span style="color: #FA8072;">NOT</span>: !

                *   !true # => False
                *   !false # => True

## <span style="color: blue;">Combining Boolean Operators</span>

*   You can combine operators in expressions like (x && (y || w)) && z.  This can be very useful in your programs.
*   Expressions in parenthesis are always evaluated first.

*   MORE EXAMPLES:

            *       print "How many wins do you have?"
                    number = Integer(gets.chomp)

                    if number >= 5
                    print "You are lucky"
                    elsif number < 5 || number > 2
                    print "You have done well"
                    else number < 2 && number > 0
                    print "better luck next time"
                    end

            *       a = 10
                    b = 11
                    if a < b
                    print "a is less than b!"
                    elsif b < a
                    print "b is less than a!"
                    else
                    print "b is equal to a!"
                    end
            
            *       problem = true

                        print "Good to go!" unless problem
                    if problem == true
                        print "better fix things first!"
                    end

                    # => better fix things first!

## <span style="color: blue;">Combining Everything for Fun</span>

*   Fun Examples

            *   print "What is your first name?"
                user_input = gets.chomp
                user_input.downcase!

                if user_input.include? "s"
                    user_input.gsub!(/s/, "th")
                else 
                print "Wait, there is no Sth in your name, you are sthoooo not fun! "
                end

                puts my_string = "Hi #{user_input}!!!"

### <span style="color: red;">Loops and Iterators</span>
## <span style="color: blue;">While Loops</span>

*   Sometimes you want to repeat an action __WHILE__ a condition is true, but you don't know how many times you will    have to repeat the action.  An example would be repeatidly prompting a user for an answer if they keep forgetting    to give you it.  The while loop checks for a condition and while it is the loop keeps running.  As soon as the       condition stops, the loop stops. 

            *   counter = 1
                while counter < 11
                puts counter
                counter = counter + 1
                end

            *   i = 0
                while i < 5
                puts i
                i = i + 1
                end

## <span style="color: blue;">Danger: Infinite Loops</span>

*   Make sure that you always give loops a condition to stop.  If not, it will keep checking for numbers and will        never end.  It will cause your program to crash.  Avoid them at all costs!

## <span style="color: blue;">Until Loops</span>

*   _The Until Loop_ is sort of like a backwards while loop.  

            *   i = 0
                until i == 6
                i = i + 1
                end
                puts i
            
            *   counter = 1
                until counter > 10
                puts counter
                counter = counter + 1
                end

## <span style="color: blue;">More Assignment Operators</span>

*   +=
*   -=
*   *=
*   /=

*   When you write counter += 1, you are telling Ruby to add 1 to countner, then assign that new value back to the       counter.
*   Ruby does not use ++ or --

            *   counter = 1
                while counter < 11
                puts counter
                counter += 1
                end

## <span style="color: blue;">For Loops</span>
*   Sometimes you do know how many times you will be looping and in that case, you will use a for loop. 

            *   for num in 1...10
                puts num
                end
            
            * prints numbers 1 -9

*   _Inclusive and Exclusive Ranges_ 
*   Using ... three dots makes the 10 not inclusive.
*   Using .. 2 dots makes the 10 inclusive.

            *   for num in 1..15
                puts num
                end

            * prints numbers 1-15   Includes the 15

## <span style="color: blue;">Loop Method</span>
*   An iterator is just a Ruby Method that repeatedly invokes a block of code.  
*   In Ruby, curly braces are generally interchangeable with the keywords "do" (to open the block) and "end" (to         close it).  

            *   i = 0
                loop do
                i += 1
                print "#{i}"
                break if i > 5
                end

*   BREAK is a great keyword to make sure to end the loop as soon as a condition is met. 

            *   i = 20
                loop do
                i -= 1
                print "#{i}"
                break if i <= 0
                end

*   NEXT:  The next keywork can be used to skip over certain steps in the loop.  Such as not printing out the even       numbers in a sequence. 

            *   for i in 1..5
                next if i % 2 == 0
                print i
                end

            *   i = 20
                loop do
                i -= 1
                next if i % 2 != 0
                print "#{i}"
                break if i <= 0
                end

## <span style="color: blue;">Saving Multiple Values</span>
*   In ruby we can pack multiple values into a single variable using an array.
*   An Array is just a list of items between square brackets.  [1,2,3,4]

            *   my_array = [1,2,3,4,5]

## <span style="color: blue;">The .each iterator</span>
*   The .each method is more powerful than the loop operator.  

            *   object.each { |item|
                # Do something
            }

            OR

            *   object.each do |item|
                # Do something
            end

            * EXAMPLES
            *   array = [1,2,3,4,5]

                array.each do |x|
                x += 10
                print "#{x}"
                end

            *   odds = [1,3,5,7,9]

                odds.each do |x|
                x *= 2
                print "#{x}"
                end

## <span style="color: blue;">The .times iterator</span>
*   _The Times Method_ is like a super compace for loop: it can perform a task on each item in an object a specified     number of times. 

            *   5.times { print "Scott Rules, Watson Drools! "}

            *   it will print out that string 5 times

## <span style="color: blue;">Recap of Loops</span>
            
            *   While Loops
            *   i = 1
                while i <= 50
                print i
                i += 1
                end

            *   Until Loops
            *   j = 1
                until j <= 50 do
                print j
                j += 1
                end
            
            *   For Loops
            *   for i in 1..50
                print i
                end

            *   Loop Method
            *   i = 0
                loop do
                print "Ruby!"
                i += 1
                break if i == 30
                end
            
            *   .times Method
            *   30.times { print "Ruby!"}

### <span style="color: red;">REDACTED!</span>
## <span style="color: blue;">Hiding Information</span>

*   Hiding information is a large part of programming.  Protecting important information through passwords,              establishing secure connections, and securing programs all rely on controlling access to that information.

*   Later we will get more into it but right now we can use arrays and iterators to hide some info.

            *   puts "Enter some text: "
                text = gets.chomp

                puts "Enter words to redact: "
                redact = gets.chomp

                words = text.split(" ")
                words.each { |word| 
                if word == redact
                    print "REDACTED "
                else
                        print word + " "
                end }

### <span style="color: red;">Data Structures</span>
## <span style="color: blue;">Creating Arrays</span>

*   Stores a list of values in a single variable.
*   You can make an array from almost anything.  Stings, numbers, booleans, etc... 
*   You can make an array of arrays as well 

*   _Access by Index_:  Each element in an array has an index.  First is 0, next is 1, etc ...  We can access            elements of the array directly through number brackets. 

            *   array = [5,7,9,2,0]
                array[2]

                # returns "9"

## <span style="color: blue;">Hashes</span>
*   Arrays are indexed with numbers but what if we dont want to use numbers or have things go in order?  We then         will use something called a hash.

*   Hashes are similar to JavaScript Objects or Python Dictionaries.  A hash is a collection of key-value pairs.  

            *   hash = {
                key1 => value1,
                key2 => value2,
                key3 => value3
            }
