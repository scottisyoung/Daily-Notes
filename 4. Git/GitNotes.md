# <span style= "color: #00bfff;"> GIT </span>

## <span style="color: red;">Overview</span>

*   Notes about improving my abilities with Git and related tools. <span style="color: #FA8072;">(GitHub)</span>

*   Git is a tool to save versions of your code. It is a __version control tool__ that developers use to save all      relavant versions of thier work and avoid losing all progress in their work. It also makes it easy for             developers to collaborate and share work with others. 

*   It works by reccording changes you make to a project, storing those hanges, then allowing you to referenccec       them as needed. 

* A Git repository is a virtual storage of your project. It allows you to save versions of your code, which you can access when needed.

* Read : _Git Simple Guide_
* http://rogerdudler.github.io/git-guide/ 
* https://www.atlassian.com/git/tutorials/setting-up-a-repository

* https://learngitbranching.js.org/

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

## <span style="color: red;">Git Fundamentals</span>

### <span style="color: gold;"> Create New Repository :</span>
* Create a new directory, open it and perform a :

    * <span style="color: salmon;">__git  init__</span> to create a new repository. </br>

### <span style="color: gold;"> Checkout a Repository  :</span>
* Create a working copy of a local repository by    
      running the command : </br>

    * <span style="color: salmon;"> __git clone /path/to/repository__ </span> </br>
* When using a remote server, your command will be </br>
    * <span style="color: salmon;"> __git clone username@host:/path/to/repository__ </span>

### <span style="color: gold;"> Workflow :</span>
* Local Repository : <span style="color: salmon">Consists of 3 "Trees"</span>
    1. Working Directory : <span style="color: turquoise">_Holds actual files_</span>
    2. Index : <span style="color: turquoise">_Staging Area_</span>
    3. Head : <span style="color: turquoise">_Points to last commit_</span>

### <span style="color: gold;"> Add & Commit  :</span>
* Propose Changes : <span style="color: turquoise">_Add   it to the Index_</span></br>
    * <span style="color: salmon;"> __git add  < filename > </br> git add *__ </span></br>

* To Commit Changes : <span style="color:    
      turquoise">_Commit file to the Head_</span></br>
    * <span style="color: salmon;"> __git commit -m "Commit Message"__</span><br/>
      Now the file is committed to the HEAD, but not in your remote repository yet.

### <span style="color: gold;"> Pushing Changes :</span>
* Send to Remote Repository : </br>
    * <span style="color: salmon;"> __git push origin master__</span><br/>
    Change master to whatever branch you want to push your changes to. <br/><br/>
* If you have not cloned an existing repository and want to connect your repository to a remote server, you need to add it with : </br>

    * <span style="color: salmon;"> __git remote add origin < server >__</span><br/>
      Now you are able to push your changes to the selected remote server

### <span style="color: gold;"> Branching :</span> 
* Develope features isolated from each other.
* The "Master" is the default.
* Use other branches for development and merge into   master. <br/></br>

    * Create Branch & switch to using it
        * <span style="color: salmon;"> __git checkout -b  nameOfBranch__</span>

    * Switch back to master
        * <span style="color: salmon;"> __git checkout master__</span>

    * Delete the Branch
        * <span style="color: salmon;"> __git branch -d nameOfBranch__</span> </br>

* A branch is not available to others unless you push   
      the branch to your remote repository

    * <span style="color: salmon;"> __git push origin < branch >__</span> 

### <span style="color: gold;"> Update & Merge :</span>

* To update your local repository to the newest commit, 
      execute <br/>

    * <span style="color: salmon;"> __git pull__</span></br>

* In your working directory to fetch and merge remote 
      changes. To merge another branch into your active branch.

    * <span style="color: salmon;"> __git merge < branch >__</span></br>
    
* In both cases git tries to auto-merge changes. 
      Unfortunately, this is not always possible and results in conflicts. You are responsible to merge those conflicts manually by editing the files shown by git. After changing, you need to mark them as merged with

    * <span style="color: salmon;"> __git add < filename >__</span></br>
    
* Before merging changes, you can also preview them by using

    * <span style="color: salmon;"> __git diff < source_branch > < target_branch >__</span></br>
    
### <span style="color: gold;"> Tagging :</span>

* It's recommended to create tags for software 
      releases. this is a known concept, which also exists in SVN. You can create a new tag named 1.0.0 by executing </br>

   * <span style="color: salmon;"> __git tag 1.0.0 1b2e1d63ff__</span></br>
    
* The 1b2e1d63ff stands for the first 10 characters 
      of the commit id you want to reference with your tag. You can get the commit id by looking at the... 

### <span style="color: gold;"> Log :</span>

* In its simplest form, you can study repository history using

    * <span style="color: salmon;"> __git log__</span></br>
    
* You can add a lot of parameters to make the log look like what you want. To see only the commits of a certain author:

    * <span style="color: salmon;"> __git log --author=bob__</span></br>

* To see a very compressed log where each commit is one line:

    * <span style="color: salmon;"> __git log --pretty=oneline__</span></br>

* Or maybe you want to see an ASCII art tree of all the branches, decorated with the names of tags and branches: 

    * <span style="color: salmon;"> __git log --graph --oneline --decorate --all__</span></br>

* See only which files have changed: 

    * <span style="color: salmon;"> __git log --name-status__</span></br>
    
* These are just a few of the possible parameters you can use. For more see, 

   * <span style="color: salmon;"> __git log --help__</span></br> 

### <span style="color: gold;"> Replace Local Changes :</span>

* In case you did something wrong, which for sure never happens ;), you can replace local changes using the command

    * <span style="color: salmon;"> __git checkout -- < filename >__</span></br> this replaces the changes in your working tree with the last content in HEAD. Changes already added to the index, as well as new files, will be kept.

* If you instead want to drop all your local changes and commits, fetch the latest history from the server and point your local master branch at it like this

    * <span style="color: salmon;"> __git fetch origin__</span></br>
    <span style="color: salmon;"> __git reset --hard origin/master__</span>

### <span style="color: gold;"> Useful Hints :</span>

* Built-in git GUI
    * <span style="color: salmon;"> __gitk__</span>

* Use colorful git output
    * <span style="color: salmon;"> __git config color.ui true__</span>

* Show log on just one line per commit
    * <span style="color: salmon;"> __git config format.pretty oneline__</span>

* Use interactive adding
    * <span style="color: salmon;"> __git add -i__</span>


