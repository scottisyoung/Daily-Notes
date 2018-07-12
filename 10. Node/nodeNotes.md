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

*   npm init: Creates and Sets it up for you by asking questions or create it manually.

## <span style="color: blue;">Installing Node</span>

*   Node.js.org   Get latest Recommended Version
*   Open and click run
*   Install and next 

*   Thats it!!!
*   If you look in the file folder, you will see node.exe,   This is essentially a __Repl  (read, eval, print, loop)__  which is a command line that you can run javascript inside of. 

*   The things we cant do is use the Document Object because we dont have the DOCUMENT.  (document.getElementById)      it will have no idea what we are talking about.  It is javascript without the browser.

## <span style="color: blue;"> Windows Command Line</span>

*   We can get into that same node.exe enviornment from the command line by simply typing in the command line _node_
*   use ctrl c 2 times to exit that environment.

*   If you have a file that is a file with the js extension such as app.js,  you can cd into that folder and then       type. node app.js.  From there you can run node in the command line, in that file. So if you type anything into     the app.js file and go to your command line and type (node app), you will see whatever you typed in that app.js     file. 

