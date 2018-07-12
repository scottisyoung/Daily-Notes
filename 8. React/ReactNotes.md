# <span style= "color: #00bfff;"> ReactJS </span>

## <span style="color: red;">Overview</span>

*   Notes about <span style="color: #FA8072;">ReactJS.</span> ReactJS is a javascript library for building user         interfaces.  

*   It is __Declaritive__ which makes it painless to create interactive UI's.  You can design simple views of each      state in your application and React will efficiently update and render _just the right components when your         data changes_.  __Declaritive__ makes your code more predictable and easier to debug. 

*   It is __Component Based__.  This allows you to build encapsulated components that manage their own state, then      compose them to make complex UI's.  Since logic is in JS, you can pass data through the app and keep state out      of the DOM.

## <span style="color: red;">Javascript in ReactJS</span>

*   <span style="color: #FA8072;">Document.createElement()</span>: In an HTML document, the document.createElement()    method creates the HTML element specified by the tagName. var element = document.createElement(tagName[,            options]);  The tagName is a string that specifies the type of element that is to be created.  The nodeName of      the element is initialized with the value of tagName.

*   <span style="color: #FA8072;">_Document_</span>: is a constuctor and will create a new document object which is     a web page loaded in the browser and serving as an entry point into the page's content.

*   <span style="color: #FA8072;">_Element_</span>: is the most general base ccalss from which all objects in a         document inherit.

*   <span style="color: #FA8072;">_Node_</span>: is an interface from which a number of DOM API object types            inherit.  It allows these various types to be treated similarly.  Each node is an object representing part of       the document.

*   <span style="color: #FA8072;">_Node.appendChild()_</span>: is a method that adds a node to the end of the list      of children of a specified parent node.

*   <span style="color: #FA8072;">_DOM_</span>: The __Document Object Model__ is an API that represents and             interacts with any HTML or XML document.  The DOM  is a document model loaded in the browser and representing       the document as a node tree, where each node represents part of the document. (e.g. element, text string, or        comment).  The DOM is one of the _MOST_ userd API's on the Web because it allows code running in a browser to       access and interact with every node in the document.  Nodes can be created, moved and changed.  Event listeners     can be added to nodes and triggered on occurence of a given event.     

*   _Examples of the Above: HTML / JAVASCRIPT_

            //HTML
        
        <!DOCTYPE> html>
        <html>
        <head>
            <title> ||Working with Elements|| </title>
        </head>
        <body>
            <div id="div1"> The text above has been created dynamically.</div>
        </body>
        </html>

        //JAVASCRIPT

        document.body.onload = addElement;

        function addElement() {
            // create a new div element
        var newDiv = document.createElement("div")
        // givev it some content
        var newContent = document.creatTextNode("Hi there and greetings!");
        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM.

        var currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);
        }

*   The code above would create the following.  "Hi there and greetings!  The text above has been created               dynamically.

*   <span style="color: #FA8072;">_DOM Model_</span>:  Is like a tree:  The top being the _"Document"_ brances down     to the _"root element"_ (<html'>) which then splits into _"elements"_ of a (<head'>) and a (<body'>).  Those           elements then have other branches of _"elements"_ such as (<h1'>) a heading, or (<a'>) a link text. These             _"elements"_ can then have _"attributes"_ like (href) and finally they have (text) such as "link text". This is     __Important__ because when using JavaScript, as the web page is loaded the browser it creates a DOM of the          page.  This is an __OBJECT ORIENTED REPRESENTATION__ of an HTML document that acts as an interface between          JavaScript and the document itself.  __It makes the page dynamic.__   

*   Why is this all important?  Because you could essentially write your entire app using React.createElement but       it wouldnt be the smartest way to go about it. So with that being said, <span style="color: #FA8072;                ">__JSX__</span>: was created to make the UI look more familiar and easier to read. 

*   <span style="color: #FA8072;">__JSX__</span>:  Differences, such as "class" is now "className".  {} inside the      brackets exits JSX and makes JavaScript.

                const props = {
                    className: 'container'
                    children: 'Hello World'
                }
                
                const element = (
                    <div {...props} />
                )

*   {...props} or the <span style="color: #FA8072;">Spread Operator</span>:  Basically shown above we are spreading     these props "className and Children" across the div.

*   If you wanted to override the className of container from above, you could write it like below.  Below will         replace the class name of container with my-class but only if className comes after.  

                <div {...props} className="my-class">  

*   Creating Custom Components: Just like in Javascript we can reuse code and prioritize it with <span                  style="color: #FA8072;">Functions</span>.  Below we have an arrow function named message that takes in prop         called props.  Props is going to be an object that has a msg property on it.  Below we can use the function by      using an object that has an msg prop that says 'Hello World' and another with 'Goodbye World'.  However JSX         composes better so below this code is another code box with the JSX version. 

                const message = (props) => <div>{props.msg}</div>
                const element = (
                    <div className='container'>
                        {message({msg: "Hello World"})}
                        {message({msg: 'Goodby World'})}
                    </div>
                )

*   The JSX version of the same code.

                const Message = (props) => <div>{props.msg}</div>
                const element = (
                    <div className='container'>
                        <Message msg="Hello World" />
                        <Message, {msg="Goodby World"/>
                    </div>
                )       

*   If message is not capitalized in JSX it will reference  the string "message" or a variable but if capitalized       as Message it will reference the component or a raw DOM element. 

*   The nice thing is you can also reference a child component as below.

                const Message = (props) => <div>{props.children}</div>
                const element = (
                    <div className='container'>
                        <Message>"Hello World"<Message/>
                        <Message>"Goodby World"<Message/>
                    </div>
                ) 

     