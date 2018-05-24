# <span style= "color: #00bfff;"> GIT </span>

## <span style="color: red;">Overview</span>

*   Notes about improving my abilities with Git and related tools. <span style="color: #FA8072;">(GitHub)</span>

*   Git is a tool to save versions of your code. It is a __version control tool__ that developers use to save all      relavant versions of thier work and avoid losing all progress in their work. It also makes it easy for             developers to collaborate and share work with others. 

*   It works by reccording changes you make to a project, storing those hanges, then allowing you to referenccec       them as needed. 

## <span style="color: red;">Git Essentials</span>

*  <span style="color: #FA8072;">(Git Init)</span> The word Init means Initialize.  The command sets up all the         tools that Git needs to begin tracking changes that are made to a project.  When you type the command __git         init__ you will see that it will initialize an empty repository for you. 

*   <span style="color: #FA8072;">(Git Workflow)</span> A normal project will consist usually of having 3 parts.       After editing files in the working directory, they will be added to a staging area, then they will saved to a      Git repository.

    1.  <span style="color: #FA8072;">__A Working Directory__</span> This is where you will be doing all the work: 
         __creating, editing, deleting, and organizing files__.
    2.  <span style="color: #FA8072;">__A Staging Area__</span> This is where you will list all of the changes you      make in the working directory.
    3.  <span style="color: #FA8072;">__A Repository__</span> This is where Git permanently stores all the changes      as different __versions__ of the project.

*   <span style="color: #FA8072;">(Git Status)</span> This is a way that we can see the changes made to the            working directory. _Untracked Files_ are those that Git sees but has not started tracking changes yet. These       files will be in <span style="color: red;">__RED__</span>.

*   <span style="color: #FA8072;">(Git Add)</span> You can use git add when you have files in the working              directory that need to be added to the staging area. You can add all with (git add .) or by filename.  (git        add "filename").  After the file has been added to the staging area it will turn <span style="color: green;        ">__green__</span> if you check its status.

*   <span style="color: #FA8072;">(git diff)</span> This command tracks the differences between the working            directory and the staging area. (Git diff filename).  Changes made are marked with a + sign and are indicated      in <span style="color: green;">green</span>. Press __q__ to exit diff mode.

*   <span style="color: #FA8072;">(git commit)</span> This command is the last step in the git workflow.  A commit     permanently stores changes from the staging area inside the repository. __-m__ is needed followed by a message     for every commit that is made. It must be in _quotation marks, written in present tense, and brief (less than      50 characters)_. 

*   <span style="color: #FA8072;">(git log)</span> Git log is a good way to refer back to an earlier version of a       project. Commits are stored chronologically in the repository and can be viewed later if needed. In the            Output Notice 
    *   A 40 character code called __SHA__, is presented first.  It uniquely identifies the commit and appears in       <span style="color:orange;">__Orange__</span>.
    *   The Commit Author (you!) is next
    *   The Date and Time of the Commit
    *   The Commit Message

## <span style="color: red;">Git Backtracking Intro</span>

*   


