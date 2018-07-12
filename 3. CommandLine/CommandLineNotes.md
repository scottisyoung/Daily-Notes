# <span style= "color: #00bfff;"> The Command Line </span>

## <span style="color: red;">Overview</span>

*   Notes about improving my abilities in the command line and related tools. <span style="color: #FA8072;">(ZSH, Z)    </span>

*   The command line is great for everyone, web developers, designers or even those that just want to be more           comfortable with the computer.

## <span style="color: red;">Terminal Basics</span>

*   <span style="color: #FA8072;">$</span> This is the first thing that you see it is called the prompt.

*   <span style="color: #FA8072;">(pwd)</span>   Present Working Directory will tell you what folder you are            currently in.

*   <span style="color: #FA8072;">(cd)</span> Change Directory will help you to move to the directory that you          want.  CD then the name of the directory.  It is case sensitive.

*   <span style="color: #FA8072;">(cd ..)</span> This will move you a directory up.

*   <span style="color: #FA8072;">(mkdir)</span> Make Directory will make a new directory in the folder that you        are currently in. mkdir followed by whatever you want to name the folder. 

*   <span style="color: #FA8072;">(Command k or Ctrl k)</span> This will clear the command screen if you want a         clean screen.

*   <span style="color: #FA8072;">(ls -a, -l, -t or just ls)</span> List the Directory.  This will list all of the files that are in the directory that you are currently using. ls -a lists all contents of a directory, including hidden files. ls -t orders files by times that they were last manipulated. ls-l means long and gives more information. LS just list the folders

*   <span style="color: #FA8072;">(ls -alt)</span> List all of the options together ls -a,-l,-t.

*   <span style="color: #FA8072;">(touch)</span>  Touch will create a file.  For example touch index.html will          create an index html file in the folder that you are currently in. 

*   <span style="color: #FA8072;">(rm)</span> RM means to Remove a file. If you accidentally rm with a * or rm with     a ~ you can remove your entire hard drive.  rm also is final so you cant get anything back. There is another        way to delete that puts the item into your trash instead of deleting it forever.

## <span style="color: red;">Other Terminal Commands</span>

*    <span style="color: #FA8072;">cat (file):</span> This will output the contents of specific file

*    <span style="color: #FA8072;">less (file):</span> This will output the contents of the file using the less          command which supports pagination etc...

*    <span style="color: #FA8072;">head (file):</span> This will output the first 10 lines of the specific file.

*    <span style="color: #FA8072;"><cmd'> (file): </span> This will append the output of cmd to specific file

*    <span style="color: #FA8072;"><cmd1'> | <cmd2'>:</span> Direct the output of cmd1 to cmd2

*    <span style="color: #FA8072;">clear:</span> Clears the command window

*    <span style="color: #FA8072;">rm -r (directory):</span> Deletes the whole directory

*    <span style="color: #FA8072;">rm -f (file):</span> Force deletes a file

*    <span style="color: #FA8072;">mv (file)(directory): </span> Moves file to directory (can possible overwrite an      existing file)

*    <span style="color: #FA8072;">mv (file-old) (file-new):</span> Renames file from old to new

*    <span style="color: #FA8072;">cp (file) (directory):</span> Copy files to a directory (possible overwriting a       file)

*    <span style="color: #FA8072;">cp -r (directory1) (directory2):</span> Copies directory 1 and its contents to        directory 2 (possible overwriting files in existing directory)

*    <span style="color: #FA8072;">chmod 755 (file):</span> Change permissions of the file to 755

*    <span style="color: #FA8072;">chmod -r 600 (directory):</span> Change permissions of directory and its              contents to 600

*    <span style="color: #FA8072;">chown (user):(group) (file):</span> Change ownership of file to user and group        (add -R to include a director's contents)

*    <span style="color: #FA8072;">find (dir) -name (file):</span> FInds all files named (file) inside (dir) user        wildcards * to search for parts of filenames, e.g. "file.*

*    <span style="color: #FA8072;">grep "text" (file):</span> Outputs all occurrences of "text" indside the file         (add -i of case-insensitivity)

*    <span style="color: #FA8072;">grep -rl "text" (dir):</span> Search for all files containing "text" inside dir

*    <span style="color: #FA8072;">ping (host):</span> Ping host and display status

*    <span style="color: #FA8072;">whois (domain):</span> Output whois information for (domain)

*    <span style="color: #FA8072;">curl -0 (url/to/file):</span> Download (file) via HTTP[S] for FTP

*    <span style="color: #FA8072;">ssh (username)@(host):</span> Establish an SSH connection to (host) with the          user (username)

*    <span style="color: #FA8072;">scp (file) (user)@(host):/remote/path:</span> Copy (file) to a remote host

*    <span style="color: #FA8072;">ps ax:</span> Outputs currently running processes

*    <span style="color: #FA8072;">top:</span> Displays live information about currently running processes

*    <span style="color: #FA8072;">kill (pid):</span> Quits process with ID (pid)

*    <span style="color: #FA8072;">apropos:</span> find what manual page is appropriate for your request

*    <span style="color: #FA8072;">cat:</span> print the whole file

*    <span style="color: #FA8072;">echo:</span> print some arguments

*    <span style="color: #FA8072;">env:</span> take a look at your environment

*    <span style="color: #FA8072;">exit:</span> will exit the shell

*    <span style="color: #FA8072;">export:</span> set a new enviornment variable

*    <span style="color: #FA8072;">man:</span> read a manual page

*    <span style="color: #FA8072;">popd:</span> Pop directory

*    <span style="color: #FA8072;">pushd</span> Push Directory

*    <span style="color: #FA8072;">xargs:</span> execute arguments

## <span style="color: red;">Tricks / Tips</span>

*    <span style="color: #FA8072;">man (command) or (command) --help</span> will give detailed documentation about       the command in question

 *  <span style="color: #FA8072;">( ; ):</span> To cobine a command place a semi colon between commands

 *  <span style="color: #FA8072;">( && ):</span> This will execute a command only if its predecessor produces a        result.  The command after the && will only run if previous command is successful.

 *   <span style="color: #FA8072;">( || ):</span> This will only run the second command if the first command fails.     example: cd ~/videos || mkdir ~/videos

*   <span style="color: #FA8072;">ctrl a:</span>This will move the caret to the beginning

*   <span style="color: #FA8072;">ctrl e:</span> will move the caret to the end

*   <span style="color: #FA8072;">ctrl k:</span> Deletes all characters

*   <span style="color: #FA8072;">ctrl u:</span> Deletes all the characters in front of the caret

*   <span style="color: #FA8072;">Ctrl l:</span> clears the screen

*   <span style="color: #FA8072;">ctrl c:</span> Cancels a command

*   <span style="color: #FA8072;">Arrow Up:</span> Steps throught the last commands

*   <span style="color: #FA8072;">Arrow Down:</span> Will move forward in the history towards the most recent call

*   <span style="color: #FA8072;">~:</span> Goes directly to the home folder. So ~/videos will take you to the home     of the videos folder.

*   <span style="color: #FA8072;">whoami:</span> Reminds you of your username. 

*   <span style="color: #FA8072;"> less:</span> While in the Less screen
    
    *   <span style="color: #FA8072;">arrow keys</span> to scroll
    *   <span style="color: #FA8072;">q:</span> is quit
    *   <span style="color: #FA8072;">Space:</span> will scroll one page forward
    *   <span style="color: #FA8072;">b:</span>  will scroll one page backward

## <span style="color: red;">Redirection</span>

*    <span style="color: #FA8072;">Redirection</span> can direct the input and output of a command to and from           other files and programs, and chain commands together in a pipeline.

*   <span style="color: #FA8072;">echo:</span> The echo command accepts something as a standard input and echoes        the information back to the terminal as standard output.

*   <span style="color: #FA8072;">stdin, stdout, stderr</span> _Standard Input_ (stdin) is information inputted         into the terminal through the keyboard or input device. _Standard Output_ (stdout) is the information outputted     after a process is run.  _Standard error_ (stderr) is an error message outputted by a failed process. 
 
*   <span style="color: #FA8072;">cat</span> The cat command outputs the contents of a file to the terminal.            Example.  echo "Hello" > hello.txt  (Here the > command redirects the standard output to a file. "Hello" is         entered as the standard input.  The Standard Output "Hello" is redirected by > to the file hello.txt) In the        command line type cat hello.txt (Now the contents of hello.txt are displayed as Hello)

*   <span style="color: #FA8072;">( > )</span>  Be careful because > will overwrite all original content in a file.     However if you use <span style="color: #FA8072;">( >> )</span> it will take the original contents and add them      to the content of the other file.  Since it is appended to it, it will not overwrite it. 

*   <span style="color: #FA8072;">( < )</span> Pay attention to the direction of the angle bracket.  This will take     the standard input from the file on the right and input it into the program on the left.  Example: cat <            lakes.txt will take the input from the file lakes and the output will appear in the terminal. 

*   <span style="color: #FA8072;">( | )</span> The pipe takes the output of the command and pipes it as input to        the other command.  Think of this as Command to Command redirection.  Multiple pipes can be chained together as     well.  Example ( cat volcanoes.txt | wc | cat > islands.txt )  Here output of volcanoes is piped to wc command.     wc is then piped to cat.  Finally, output of cat is redirected to islands

*   <span style="color: #FA8072;">wc:</span> This command outputs the number of lines, words, and characters in a       file. 

*   <span style="color: #FA8072;">sort:</span> Sort takes the input and orders it alphabetically for the output.        Example: ( cat lakes.txt | sort > sorted-lakes.txt )  Here the command takes output of lakes and pipes it to        sort.  Then the output of sort is redirected to sorted-lakes.txt.  cat sorted-lakes.txt will have display all       the files as they have all been sorted.

*   <span style="color: #FA8072;">uniq:</span> Uniq stands for unique and filters out _adjacent_, duplicate lines       in a file. A more effective way to call uniq is to call sort first and alphabetize a file, then pipe the output     to uniq.  That way you will remove all the duplicates completely as duplicates will all be _adjacent_. Example:     ( sort deserts.txt | uniq > uniq-deserts.txt ) This will take the deserts file and sort first, pipe to uniq and     remove duplicates then take the contents and send to uniq-deserts file.  You can then use the cat file to see       the contents.

*   <span style="color: #FA8072;">grep:</span> _"Global Regular Expression Print"_ will search files for lines that     match a pattern and return the results.  It is also case sensitive.

*   <span style="color: #FA8072;">grep -i:</span> This command enables the command to be case insensitive.  It will     look for the word (mount) regardless of case in the file.   

*   <span style="color: #FA8072;">grep -R:</span> Searches all files in a directory and outputs the filenames and       lines containing matched results.  -R stands for "recursive" Example: (grep -R Arctic                               /home/ccuser/workspace/geography ) will search that specific directory for the string "Arctic" and output the       filenames and line that are matched. 

*   <span style="color: #FA8072;">grep -Rl:</span> will search all the files in a directory and output only             filenames with matched results. The "l" stands for "files with matches"

*   <span style="color: #FA8072;">sed:</span> sed stands for "Strem Editor"  It accepts the input and modifies it       based on an expression before displaying it as output data.  Similar to "Find and Replace".  Example: (sed          's/snow/rain/' forests.txt)  The s stands for "substitution".  It is _Always_ used when using sed for               substitution. Snow is the text to find.  Rain replaces the text and adds it in place.  __Important__ to note        that the command will only replace the __first__ instance of "snow" on a line. _However_ if you use "g" meaning     global it will look through the file and replace all instances of snow with rain.  Example: ( sed                   's/snow/rain/g' forests.txt )

## <span style="color: red;">Enviornment</span>

*   <span style="color: #FA8072;">Environment</span> Each time a new terminal is launched, it creates a new             session.  This session immediately loads settings and preferences that make up the command line environment.

*   <span style="color: #FA8072;">Customizing</span> We can customize and configure the enviornment to support the      commands and programs we create.  This enables custom greetings and command aliases, also allows us to create       variables that we can share across commands and programs.

## <span style="color: red;">Nano</span>

*   <span style="color: #FA8072;">Nano</span> Is a command line text editor. You can use the menu at the bottom for     reference.  The ^ means ctrl.  It works much like a desktop text editor, except that it is accessible from the      command line and only accepts keyboard input. Example:  (nano hello.txt) will open the file in the editor.  

*   <span style="color: #FA8072;">ctrl x:</span>This will exit nano.  

*   <span style="color: #FA8072;">ctrl o:</span> If you write something at the top then hit control and "o" (the         letter) it will __write out__ the information or another way to say save the file.

*   <span style="color: #FA8072;">ctrl g:</span> Opens a help menu

*   <span style="color: #FA8072;">clear:</span> Clears the terminal window, moving the command prompt to the top of      the screen. 

*   <span style="color: #FA8072;">ctrl x:</span>This will exit nano.

*   <span style="color: #FA8072;">~/.bash_profile:</span> This is the name of file used to store enviornment             settings.  It is commonly called "bash profile".  When a session starts, it will load the contents of the bash      profile before executing commands. ( ~ ) means home directory. ( . ) indicates a hidden file. Example: (nano        ~/.bash _profile echo Welcome, Scott Young ) Ctrl o and enter will save.  If you then type source ~/.bash           _profile it should say "Welcome, Scott Young

*   <span style="color: #FA8072;">source:</span> If in bash the source makes the changes available right away in        the session that we are in.  Example: source ~/.bash _profile activates the changes in the profile for the          current session.

*   <span style="color: #FA8072;">Aliases:</span> While in the bash profile you can use the command <span                style="color: #FA8072;">__alias__</span> which can be used to create keyboard shortcuts, or aliases for             commonly used commands. Example: (alias pd=pwd) Now anytime you need to print the working directory instead of      typing pwd you would type pd.

## <span style="color: red;">Enviornment Variables</span>

*   <span style="color: #FA8072;">Enviornment Variables:</span> are variables that can be used across commands and       programs adn hold information about the enviornment. EXAMPLE: export __VARIABLE__=__"Value"__

*   <span style="color: #FA8072;">USER="Scott Young":</span> This will set the enviornment variale USER to a name        "Scott Young". Usually the USER variable is set tot the name of the computers owner. 

*   <span style="color: #FA8072;">Export:</span> Makes a variable available to all child sessions initiated from        the session that you are in.  This is a way to make the variable persist across programs. Example: _export               USER="Scott Young"_

*   <span style="color: #FA8072;">echo $USER:</span> this command returns the value of the variable.  Note that _$_      is always used when returning a __variables value.__

*   <span style="color: #FA8072;">PS1:</span> is a variable that defines the makeup and style of the command            prompt. Example: _Export PS1=">>"_ will set the command prompt variable and export the variable.  It will           change the $ to >>.  After using source, the new prompt will be displayed. 

*   <span style="color: #FA8072;">echo $HOME:</span> This will return the value of the HOME variable in the command      line. This variable is an enviornment variable that displays the path of the home directory. You can customize      the HOME variable if needed, but in most cases this is not necessary. 

*   <span style="color: #FA8072;">echo $PATH:</span> This is also an enviornment variable.  It sotres a list of         directories separated by a colon. Each directory contains scripts for the command line to execute.  The PATH        variable simply lists which directories contain scripts. For example, many commands we have learned are scripts     stored in the bin/directory (/bin/pwd) which is executed with the pwd command or (bin/ls) which is stored in        the ls command.      

*   <span style="color: #FA8072;">env:</span> This command stands for "Environment", and returns a list of the          environment variables for the current user.  This would return a number of variables including, PATH, PWD, PS1,     and HOME.  

*   <span style="color: #FA8072;">env | grep PATH:</span> is a command that displays the value of a single              enviornment variable.  Here the standard output of env is "piped" to the grep command. Grep then searhes for        the values of the variable PATH and outputs it to the terminal.  

## <span style="color: red;">Cygwin or iTerm</span>

*   <span style="color: #FA8072;">iTerm</span> is another app that is very helpful for having a lot of options in       the terminal.  It is for mac users.

*   <span style="color: #FA8072;">Cygwin</span> is what windows users will use.  Listen to the tutorials on YouTube     on how to get Cygwin set up. Once downloaded you want to open the preferences and make changes that would most      suit you as a user. You can change the keys to make your own shortcuts etc...

*   <span style="color: #FA8072;">Cygwin / Linux </span> Another thing to note about cygwin is that it allows you       to use linux commands on Windows. Learning linux commands is very important and can be extremely helpful.

## <span style="color: red;">ZSH</span>

*   <span style="color: #FA8072;">ZSH</span> "Zed SH" is a shell that runs on your computer that is useful with the     terminal.  Bash is one of the most popular shells.  ZSH said that they can improve bash and have tried to           improve a few areas that bash lacks.  It is very popular with developers using git, gulp, grunt or a lot of         terminal stuff.

*   <span style="color: #FA8072;">Oh my ZSH</span> is a framework built on top of ZSH.

## <span style="color: red;">Themes</span> 

*   There are 2 things can change if you want to start adding themes to your terminal.
        
    1.  Cumstomize Prompt 
    2.  Background, colors etc...

*   To change these themes in Cygwin, simply right click and you will have the ability to adjust accordingly. 

### <h2 style="color: red;">Command Line Essentials</h2>

* https://learnpythonthehardway.org/book/appendixa.html
* Salmon Colored: is the same for windows, mac and linux
* Turquoise Colored: are different

### <span style="color: gold;"> Windows Commands :</span>

* pwd : <span style="color: salmon"> _print working directory_</span>
* hostname : <span style="color: salmon">_my computer's network name_</span>
* mkdir : <span style="color: salmon">_make directory_</span>
* cd : <span style="color: salmon">_change directory_</span>
* ls : <span style="color: salmon">_list directory_</span>
* rmdir : <span style="color: salmon">_remove directory_</span>
* pushd : <span style="color: salmon"> _push directory_</span>
* popd : <span style="color: salmon"> _pop directory_</span>
* cp : <span style="color: salmon">_copy a file or directory_</span>
* robocopy : <span style="color: turquoise">_robust copy_</span>
* mv : <span style="color: salmon">_move a file or directory_</span>
* more : <span style="color: turquoise">_page through a file_</span>
* type : <span style="color: turquoise">_print the whole file_</span>
* forfiles : <span style="color: turquoise">_run a command on lots of files_</span>
* dir -r : <span style="color: turquoise">_find files_</span>
* select-string : <span style="color: turquoise">_find things inside files_</span>
* help : <span style="color: turquoise">_read a manual page_</span>
* helpctr : <span style="color: turquoise">_find what man page is appropriate_</span>
* echo : <span style="color: salmon">_print some arguments_</span>
* set : <span style="color: turquoise">_export/set a new environment variable_</span>
* exit : <span style="color: salmon">_exit the shell_</span>
* runas : <span style="color: turquoise">_DANGER! become super user root DANGER!_</span>
* new-item : <span style="color: turquoise">_creates a new file_</span>

### <span style="color: gold;"> Liinux | MacOSX Commands :</span>

* pwd : <span style="color: salmon"> _print working directory_</span>
* hostname : <span style="color: salmon">_my computer's network name_</span>
* mkdir : <span style="color: salmon">_make directory_</span>
* cd : <span style="color: salmon">_change directory_</span>
* ls : <span style="color: salmon">_list directory_</span>
* rmdir : <span style="color: salmon">_remove directory_</span>
* pushd : <span style="color: salmon"> _push directory_</span>
* popd : <span style="color: salmon"> _pop directory_</span>
* cp : <span style="color: salmon">_copy a file or directory_</span>
* mv :  <span style="color: salmon">_move a file or directory_</span> 
* less : <span style="color: turquoise">_page through a file_</span>
* cat : <span style="color: turquoise">_print the whole file_</span>
* xargs : <span style="color: turquoise">_execute arguments_</span>
* find : <span style="color: turquoise">_find files_</span>
* grep : <span style="color: turquoise">_find things inside files_</span>
* man : <span style="color: turquoise">_read a manual page_</span>
* apropos : <span style="color: turquoise">_find what man page is appropriate_</span>
* env : <span style="color: turquoise">_look at your environment_</span>
* echo : <span style="color: salmon">_print some arguments_</span>
* export : <span style="color: turquoise">_export/set a new environment variable_</span>
* exit : <span style="color: salmon">_exit the shell_</span>
* sudo : <span style="color: turquoise">_DANGER! become super user root DANGER!_</span>
* touch : <span style="color: turquoise">_creates a new file_</span>









