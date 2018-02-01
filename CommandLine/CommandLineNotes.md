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

*    <span style="color: #FA8072;">less (file):</span> This will output the contents of the file using the less command which supports pagination etc...

*    <span style="color: #FA8072;">head (file):</span> This will output the first 10 lines of the specific file.

*    <span style="color: #FA8072;"><cmd'> (file): </span> This will append the output of cmd to specific file

*    <span style="color: #FA8072;"><cmd1'> | <cmd2'>:</span> Direct the output of cmd1 to cmd2

*    <span style="color: #FA8072;">clear:</span> Clears the command window

*    <span style="color: #FA8072;">rm -r (directory):</span> Deletes the whole directory

*    <span style="color: #FA8072;">rm -f (file):</span> Force deletes a file

*    <span style="color: #FA8072;">mv (file)(directory): </span> Moves file to directory (can possible overwrite an existing file)

*    <span style="color: #FA8072;">mv (file-old) (file-new):</span> Renames file from old to new

*    <span style="color: #FA8072;">cp (file) (directory):</span> Copy files to a directory (possible overwriting a file)

*    <span style="color: #FA8072;">cp -r (directory1) (directory2):</span> Copies directory 1 and its contents to directory 2 (possible overwriting files in existing directory)

*    <span style="color: #FA8072;">chmod 755 (file):</span> Change permissions of the file to 755

*    <span style="color: #FA8072;">chmod -r 600 (directory):</span> Change permissions of directory and its contents to 600

*    <span style="color: #FA8072;">chown (user):(group) (file):</span> Change ownership of file to user and group (add -R to include a director's contents)

*    <span style="color: #FA8072;">find (dir) -name (file):</span> FInds all files named (file) inside (dir) user wildcards * to search for parts of filenames, e.g. "file.*

*    <span style="color: #FA8072;">grep "text" (file):</span> Outputs all occurrences of "text" indside the file (add -i of case-insensitivity)

*    <span style="color: #FA8072;">grep -rl "text" (dir):</span> Search for all files containing "text" inside dir

*    <span style="color: #FA8072;">ping (host):</span> Ping host and display status

*    <span style="color: #FA8072;">whois (domain):</span> Output whois information for (domain)

*    <span style="color: #FA8072;">curl -0 (url/to/file):</span> Download (file) via HTTP[S] for FTP

*    <span style="color: #FA8072;">ssh (username)@(host):</span> Establish an SSH connection to (host) with the user (username)

*    <span style="color: #FA8072;">scp (file) (user)@(host):/remote/path:</span> Copy (file) to a remote host

*    <span style="color: #FA8072;">ps ax:</span> Outputs currently running processes

*    <span style="color: #FA8072;">top:</span> Displays live information about currently running processes

*    <span style="color: #FA8072;">kill (pid):</span> Quits process with ID (pid)

## <span style="color: red;">Tricks / Tips</span>

*    <span style="color: #FA8072;">man (command) or (command) --help</span> will give detailed documentation about the command in question

 *  <span style="color: #FA8072;">( ; ):</span> To cobine a command place a semi colon between commands

 *  <span style="color: #FA8072;">( && ):</span> This will execute a command only if its predecessor produces a result.  The command after the && will only run if previous command is successful.

 *   <span style="color: #FA8072;">( || ):</span> This will only run the second command if the first command fails.  example: cd ~/videos || mkdir ~/videos

*   <span style="color: #FA8072;">ctrl a:</span>This will move the caret to the beginning

*   <span style="color: #FA8072;">ctrl e:</span> will move the caret to the end

*   <span style="color: #FA8072;">ctrl k:</span> Deletes all characters

*   <span style="color: #FA8072;">ctrl u:</span> Deletes all the characters in front of the caret

*   <span style="color: #FA8072;">Ctrl l:</span> clears the screen

*   <span style="color: #FA8072;">ctrl c:</span> Cancels a command

*   <span style="color: #FA8072;">Arrow Up:</span> Steps throught the last commands

*   <span style="color: #FA8072;">Arrow Down:</span> Will move forward in the history towards the most recent call

*   <span style="color: #FA8072;">~:</span> Goes directly to the home folder. So ~/videos will take you to the home of the videos folder.

*   <span style="color: #FA8072;">whoami:</span> Reminds you of your username. 

*   <span style="color: #FA8072;"> less:</span> While in the Less screen
    
    *   <span style="color: #FA8072;">arrow keys</span> to scroll
    *   <span style="color: #FA8072;">q:</span> is quit
    *   <span style="color: #FA8072;">Space:</span> will scroll one page forward
    *   <span style="color: #FA8072;">b:</span>  will scroll one page backward

## <span style="color: red;">Cygwin or iTerm</span>

*   <span style="color: #FA8072;">iTerm</span> is another app that is very helpful for having a lot of options in       the terminal.  It is for mac users.

*   <span style="color: #FA8072;">Cygwin</span> is what windows users will use.  Listen to the tutorials on YouTube     on how to get Cygwin set up. Once downloaded you want to open the preferences and make changes that would most      suit you as a user. You can change the keys to make your own shortcuts etc...

*   <span style="color: #FA8072;">Cygwin / Linux </span> Another thing to note about cygwin is that it allows you       to use linux commands on Windows. Learning linux commands is very important and can be extremely helpful.

## <span style="color: red;">ZSH</span>

*   <span style="color: #FA8072;">ZSH</span> "Zed SH" is a shell that runs on your computer that is useful with the terminal.  Bash is one of the most popular shells.  ZSH said that they can improve bash and have tried to improve a few areas that bash lacks.  It is very popular with developers using git, gulp, grunt or a lot of terminal stuff.

*   <span style="color: #FA8072;">Oh my ZSH</span> is a framework built on top of ZSH.

## <span style="color: red;">Themes</span> 

*   There are 2 things can change if you want to start adding themes to your terminal.
        
    1.  Cumstomize Prompt 
    2.  Background, colors etc...

*   To change these themes in Cygwin, simply right click and you will have the ability to adjust accordingly. 








