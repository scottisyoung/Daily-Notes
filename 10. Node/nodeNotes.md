# <span style= "color: #00bfff;"> Node </span>

## <span style="color: red;">Overview</span>

*   <span style="color: #FA8072;">Node.js</span>: is a JavaScript runtime built on Chromes V8 JS engine.  V8 is         extremely powerful and written in C++ and it is what is used in google chrome.

*   JavaScript running on the server, for years JS was client side only, but now it is both.  We can build very         powerful, fast, and scalable web applications on the server. 

*   It uses an Event-Driven, Non-Blocking I/O model. 

## <span style="color: blue;">Non-Blocking I/O</span>

*   This is one of the biggest advantages for node.  It also is very confusing.   Usually in a server side              languange such as PHP, everytime that you run a connection or request takes up system memory and then maxes         out.  This means that things run one by one or it is syncronous.  

*   Node runs on a single thread using non-blocking which means it is __Asynchronous__ so it can support tens of        thousands of connections in an event loop. Makes node very very fast and efficient. 

*   Node waits for events and uses an _EventEmitters Class:_ to bind events to listeners.  It then triggers a           callback when an event is detected which all happens asynchronously and is non-blocking.  

## <span style="color: blue;">What can we Build with Node?</span>

*   Rest API's & Backend Applications.  (post, put, update, delete)
*   Real-Time Services (Chat, Games, Etc)  works well with Socket.io
*   Blogs, Content Managment Systems (CMS), Social Applications
*   Utilities and Tools
*   Anything that is not CPU-intensive

## <span style="color: blue;">NPM</span>

*   NPM is a tool that allows us to grab code from other developers.
*   Node.js Package Manager
*   NPM is a repository of JavaScript files and JS libraries.
*   Is extremely important and a huge part of Node.
*   Used to install  node programs / modules
*   Easy to specify and link dependencies
*   Modules get installed into the node_modules folder. 
*   You can install in the node_modules folder or Globally
*   Inside our own code we use a require() keyword that asks to use other code. This keyword looks through our computer finds the code we are looking for and brings it in. From NPM we bring code into our computer and then use the require keyword to bring it into our own code to be used. It is brought in from the Node Modules Folder. 
* For example if we install "express" in our project we require it to be used like the following...
    *   const express = require('express');
* We do not use "./express" but only "express".
    * FRONT END : Uses Import Keyword,  
        * Import React from "react";
    * BACK END : Uses Require Keyword,
        * var react = require("react");
        * Node.js does not support the "Import" construct. 
    

## <span style="color: blue;"> NPM Install</span>

*   npm install (name of what we want to install)
*   This can install all sorts of programs.
*   It is very common to see the error, e access permission denied. Please try running this command again as root/administrator. We can run this command by using __SUDO__ in front. "Super User/Administrator"
*   You can install multiple things at one time as long as they are separated by a space...
    *   npm install express body-parser
*   We DO NOT want to commit our node modules to github so we create a file called .gitignore. 
* Inside of .gitignore list out the programs we want git to ignore such as node_modules.
*   If you forget and accidentally add node modules to git, google how to delete it from github, there are a few extra steps. 
* Using __--save__ makes sure that the dependency you are installing is always available and it is automatically added to your package.json dependencies.
* __-g__ puts the file in a global location.



### <span style="color: red;">Popular Modules</span>

*   Express:    Web development Framework for createing applications
*   Connect:    Extensible HTTP server framework,  Basline for express
*   Socket.io:  Server side component for websockets
*   Pug / Jade: Template engine inspired by HAML, default template engine for express.
*   Mongo / Mongoose:   Wrappers to interact with MongoDB
*   Coffee-Script:  CoffeeScript Compiler,  Coffescript is a Superset of JavaScript
*   Redis:  Redis Client Library.  nodeSQL database / Caching system

## <span style="color: blue;">Package.json File</span>

*   Important file that Goes in the root of you package/application

*   Tells NPM how your package is structured and what to do to install it.

*   npm init : Creates and Sets up a package.json for you by asking questions or create it manually.

*   What is in the parenthesis in the set up of npm init are default values, if you like them you can just hit enter. Or you can retype things to give them basic staring values.

* Why do we have a package.json file?
    * It helps us to remember the files/dependencies that are used within our code. Since we don't push up all of the node_modules, it helps us to only remember what is necessary. 


## <span style="color: blue;">Yarn</span>

*   Yarn is an alternative tool to NPM
*   NPM is made by the people who maintain node and yarn is made by Facebook.
*   The difference is that yarn is shorter better syntax in general and a lot quicker to install than npm. 
*   NPM is pushing new versions that should make it as quick as yarn, however yarn has been around for a lot longer than npm. 
*   Many developers use both for variable reasons.
*   Another benefit to yarn is that it includes NPM & Bower which both have a variety of libraries. 
*   To get yarn we do __sudo npm install -g yarn__
*   We then type yarn install (equivalent to npm install)
*   To get new packages in yarn we do __yarn add (name of file)__.  This is the same as npm install --save.  With yarn, there is no need to use --save.


## <span style="color: blue;">Installing Node</span>

*   Node.js.org   Get latest Recommended Version
*   Open and click run
*   Install and next 

*   Thats it!!!
*   If you look in the file folder, you will see node.exe,   This is essentially a __Repl  (read, eval, print, loop)__  which is a command line that you can run javascript inside of. 

*   The things we cant do is use the Document Object because we dont have the DOCUMENT.  (document.getElementById)      it will have no idea what we are talking about.  It is javascript without the browser.

## <span style="color: blue;">Basic Node</span>

*   Node is more than a server side language.  It can be used on the front and backend.
*   Node is a javascript language that can be run outside of the browser.  Chrome used the V8 engine to run javascript.  They took that same engine and made it available outside the browser and in the terminal.  That is what node is. 
*   Once node is installed you can instantly access it from the command line. 
*   During devMountain, node was primarily used to..
    *   Make our own web servers.
    *   Development tools on the computer
*   There are many many other situations that we can use node.  Like the following...
    *   Home Automation (Tessel.io)
    *   File editing and manipulation
    *   Background Processes (Listeners, reoccuring tasks)
    *   and MORE

## <span style="color: blue;"> Nodemon </span>

*   Everytime you run a script file in node, node script.js, you have to run node script.js in the terminal to update the changes.

*   Nodemon is a unique tool that eliminates that process and updates for you when changes are made.  Everytime you save your file, nodemon will re-run and update your file. 

*   To get Nodemon you do npm install -g nodemon

*   To run nodemon we simply type __nodemon (name of js file we want to run)__

*   To get out of nodemon, run ctrl + c.  This will get you out of any processes while in node such as nodemon, liveserver, babel, watchman, webpack and more. 

## <span style="color: blue;"> Modules and Node </span>

*   Modern code applications get very large, how do we split code across multiple files.

*   This is done through a pattern called __Modules__.

*   The syntax looks like this... 
    *   In script.js file
        * var calc = require("./calc");
        * Once we require the file from the correct path, we can then use it.
        * var three = calc.add(1,2);
        * In this case we have an object with an invoked function add which will give a value.  In order to make this work we have to have a few things in the calc.js file first.

    *   In calc.js file 
        *   var calc = { </br>
            &emsp; add: function (num1, num2) { <br/>
            &emsp; return num1 + num2;
        </br> &nbsp; } </br>
        }; </br>
        module.exports = calc;

        *   In the calc.js file we use an object with a function inside.

        *   The _MOST_ important line is the module.exports.  We are telling node that if anyone requires this file, we will be giving them the value of calc, and calc is an object with the function add.  

        *   Whatever value we want we can export.  Strings, Arrays, Functions.  Most commonly we export objects. On the objects we can add multiple properties.  A value with 4 or 5 different functions.  It is a bundled up set of functionality or a __MODULE__.

        *   Module:  Set of bundled functionality on an object that is exported. 

        *   An example of exporting a module is building properties on the export object.

             *  In "greetings.js"
                *   module.exports.basic = "Hello, There!';
                *   module.exports.custom = function(name) { 
                    return "Well, hi " + name + '!'; </br>
                }
            *   In "script.js"
                *   var greetings = require('./greetings');

                * greetings.custom("Scott"); 
                * greetings.basic

*   It is also common to export a function
    *   An example of exporting a function is the constructor function below:

        *   In the file "makeUser.js"
            *   var User = function(name, age) { </br>
                this.name = name; </br>
                this.age = age; </br>
            } </br>

            module.exports = User;

        *   In the file "script.js"
            *   var Userr = require('./makeUser');
            *   var sheila = new User('Sheila', 26);

        *   So in this case Sheila will be created which is an object like below:
            *   { </br>
            name: "Sheila", </br>
            age: 26 </br>
            }
        
    *   Here is another example but in this example the function will return an object.

        *   In the file "makeList.js"
            *   var makeList = function() { </br>
                var list = [ ];

                return { </br>
                    addItem: function( item ) { </br>
                        list.push(item); </br>
                    &emsp;} </br>
                &nbsp;&nbsp;} </br>
                }
        *   In the file "script.js"
            *   var makeList = require('./makeList.js);
            *   var todoList = makeList();
            *   todoList
        *   So in this case todoList is an object like below:
            * { </br>
            addItem: [fuction] </br>
            }

*   Important to note,  Import / export syntax does not work in Node!!!

## <span style="color: blue;"> Static Files </span>

*   Express can be used as a webserver with endpoints to send information and data back and forth but it can also be used to send html and pictures files. 

*   This is what we refer to as static files

* Here is an example and it comes baked into express.

    *   var app = express();
    *   __app.use( express.static( ));__  Which is Top Level Middleware
    *   This is telling our express server that we are going to have static files that we want people to ask for.
    *   Then we give it a folder path that we want to serve up.
    *   app.use(express.static('public'));
    *   IMPORTANT:   Dont not serve up your entire project folder.  You dont want end users seeing your server code. That is a HUGE security mistake.
    *   We make the public folder with HTML files, CSS, Pictures and things we want the users to get.
    *   To clean the code up from above,
        *   var path = require('path');
        *   var app = express();
        *   app.use( express.static( </br>
            path.join(__dirname, 'public') </br>
            ));
    *   Now when a client comes and asks for website.com, it will serve up the default file which is index.html and as long as that file lives in the public folder, it will give it back to the client.

        * app.use(express.static('public'));
        * app.get('/about', function(req, res, next) { </br>
            res.send(info); </br>
        })
        *  when the client asks for the about section, it will look for the about folder and serve it up. 
        *   It is also going to res.send(info) and overwrite whatever was on that about.html page. 
        *  So it is really important that if you want to do an endpoint, sending information, you separate with a /api/.  
            *   app.get('/api/about', function(req,res,next) { </br>
              res.send(info); </br>
              })
        *   That way you can serve up the about folder with its index page and they can go to /api/about to get information.

## <span style="color: blue;"> Endpoints </span>

*   Endpoints are points in our code that we have definded to listen for user requests.

*   If a lot of computers were just allowed to mess with our server it would create a huge mess.  So we create a layer, which is often called the __api__ part of our server. 

*   The api's job is to receive the requests, put them in a little box and then send them back out as a response.

*   Bad Requests of the api and they dont get into our code and nothing happens

*   If we were to have a server at soda.org

*   __GET:__  is a request to receive data at brands || http://soda.org/api/brands
*   __POST:__  We can add data at brands || http://soda.org/api/brands
*   __PUT:__  Is a request to change data or replace data. || http://soda.org/api/brands/<span style = "color: gray;">brand</span> 
    * We would edit the data at the brand section with like changing coke to pepsi or something. 
*   __DELETE:__ We can also delete parts || http://soda.org/api/brands/<span style = "color: gray;">brand</span>
    *   In the brand area we could delete coke entirely. 

*   The rest verb is met with an express method
    * .get(), .post(), .put(), .delete()

    * http://baseball.net
    * app.get('/api/players')
        * The user will have to type http://baseball.net/api/players to get to thi endpoint.
    *   Since we don't know when a user will go to this endpoint we use a callback function. Inside we use the function to get the code and send it back to the user. 

        * app.get('/api/players', function(req, res, next){ </br>
        ** code to send back all players** </br>
        })
        *   The callback function takes in some parameters. 
            * Req : Represents request information that user sent us when they started the request.
            * Res : Short for response.  Represents information that we want to send back to the user.
            * Next : Goes to the next function in the chain, has to do with middleware. 
        
        *  app.post is the same format as app.get the only difference is that  **code will b to add a player **

## <span style="color: blue;"> Smple Server </span>




## <span style="color: blue;"> Windows Command Line</span>

*   We can get into that same node.exe enviornment from the command line by simply typing in the command line _node_
*   use ctrl c 2 times to exit that environment.

*   If you have a file that is a file with the js extension such as app.js,  you can cd into that folder and then       type. node app.js.  From there you can run node in the command line, in that file. So if you type anything into     the app.js file and go to your command line and type (node app), you will see whatever you typed in that app.js     file. 

